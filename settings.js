import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = ["526242262017"]

global.botname = '🌸 Asuna yuuki'
global.namebot = '☁️ Yuuki Bot'
global.bot = 'Asunayuukibot'
global.packname = '⛄ Asuna Yuukibot-MD'
global.wm = '🌿 Yuuki𝘽𝙤𝙩-𝙈𝘿'
global.author = '👾 Danielrxz'
global.dev = '© Pᴏᴡᴇʀᴇᴅ Bʏ Danielrxz.'

global.banner = 'https://stellarwa.xyz/files/1757377941018.jpeg'
global.icon = 'https://stellarwa.xyz/files/1757378468505.jpeg'
global.currency = 'Yuuki-coins'
global.sessions = 'sessions/session-bot'
global.jadi = 'sessions/session-sub'

global.api = { 
url: 'https://api.stellarwa.xyz',
key: 'Diamond'
}

global.my = {
  ch: '0029VbBWlS73mFY7ovlF2a24@newsletter',
  name: '✦ Asuna Yuuki & 𝐆𝐚𝐭𝐨𝐋𝐚𝐧𝐝 ✦ Bot  👾',

  ch2: '0029VbBWlS73mFY7ovlF2a24@newsletter', 
  name2: '✦ Asuna Yuuki & 𝐆𝐚𝐭𝐨𝐋𝐚𝐧𝐝 ✦ Bot  👾',

  ch3: '0029VbBWlS73mFY7ovlF2a24@newsletter', 
  name3: '✦ Asuna Yuuki & 𝐆𝐚𝐭𝐨𝐋𝐚𝐧𝐝 ✦ Bot  👾',

  ch4: '0029VbBWlS73mFY7ovlF2a24@newsletter',
  name4: '✦ Asuna Yuuki & 𝐆𝐚𝐭𝐨𝐋𝐚𝐧𝐝 ✦ Bot  👾',

  ch5: '0029VbBWlS73mFY7ovlF2a24@newsletter',
  name5: '✦ Asuna Yuuki & 𝐆𝐚𝐭𝐨𝐋𝐚𝐧𝐝 ✦ Bot  👾',

  ch6: '0029VbBWlS73mFY7ovlF2a24@newsletter',
  name6: '✦ Asuna Yuuki & 𝐆𝐚𝐭𝐨𝐋𝐚𝐧𝐝 ✦ Bot  👾'
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
