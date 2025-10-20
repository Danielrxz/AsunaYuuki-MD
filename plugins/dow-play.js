import yts from 'yt-search'
import fetch from 'node-fetch'
import { api } from '../settings.js' // 👈 asegúrate que este export exista
const limit = 100

const isYTUrl = (url) => /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/i.test(url)

const handler = async (m, { conn, text, command }) => {
  try {
    if (!text?.trim()) {
      return conn.reply(m.chat, `☁️ Porfavor, ingresa el nombre de la música o una URL de YouTube.`, m)
    }

    const esURL = isYTUrl(text)
    let url, title

    if (!esURL) {
      const search = await yts(text)
      if (!search.all.length) return m.reply('🍁 No se encontraron resultados.')

      const videoInfo = search.all[0]
      ;({ title, url } = videoInfo)

      const vistas = (videoInfo.views || 0).toLocaleString()
      const canal = videoInfo.author?.name || 'Desconocido'
      const infoMessage = `
🎶 *Descargando:* ${title}

👤 Canal: ${canal}
🕒 Duración: ${videoInfo.timestamp}
👁️ Vistas: ${vistas}
📅 Publicado: ${videoInfo.ago}
🔗 Enlace: ${url}`

      const thumb = (await conn.getFile(videoInfo.thumbnail))?.data
      await conn.sendMessage(m.chat, { image: thumb, caption: infoMessage }, { quoted: m })
    } else {
      url = text
    }

    // 🔊 DESCARGA DE AUDIO
    if (['play', 'mp3', 'playaudio', 'ytmp3'].includes(command)) {
      const response = await fetch(`${api.url}/dow/ytmp3?url=${encodeURIComponent(url)}&apikey=${api.key}`)
      const result = await response.json()

      console.log('📡 Respuesta API:', result)

      const dl = result?.data?.dl || result?.result?.url
      const title = result?.data?.title || result?.result?.title || 'audio'

      if (!dl) return m.reply('✖️ Error: no se obtuvo el enlace del audio.')

      await conn.sendMessage(
        m.chat,
        {
          audio: { url: dl },
          fileName: `${title}.mp3`,
          mimetype: 'audio/mpeg',
          ptt: true
        },
        { quoted: m }
      )
    }

    // 🎥 DESCARGA DE VIDEO
    else if (['play2', 'mp4', 'playvideo', 'ytmp4'].includes(command)) {
      const response = await fetch(`${api.url}/dow/ytmp4?url=${encodeURIComponent(url)}&apikey=${api.key}`)
      const result = await response.json()

      if (!result.status || !result.data?.downloadsVideo?.length) {
        return m.reply('🚩 Error al *descargar* el video.')
      }

      const selected =
        result.data.downloadsVideo.find(v => parseFloat(v.size.replace(' MB', '')) <= limit) ||
        result.data.downloadsVideo[0]

      const { url: dl, quality, resolution, size } = selected
      const title = result.data.title

      await conn.sendMessage(
        m.chat,
        {
          video: { url: dl },
          fileName: `${title}.mp4`,
          mimetype: 'video/mp4'
        },
        { quoted: m }
      )
    }
  } catch (e) {
    console.error(e)
    await m.reply('🕸 Error interno al procesar tu solicitud.')
  }
}

handler.command = handler.help = ['play', 'mp3', 'playaudio', 'ytmp3', 'play2', 'mp4', 'playvideo', 'ytmp4']
handler.tags = ['downloader']

export default handler