import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = ["526242129105"]

global.botname = '🌸 Yuukibot-MD'
global.namebot = '☀️ Yuuki Bot'
global.bot = 'AsunaYuukibot'
global.packname = '🌱 Yuuki𝗕𝗼𝘁-𝗠𝗗'
global.wm = '🦎 AsunaYuukibot-𝙈𝘿'
global.author = '🥗 Danirxz'
global.dev = '© Pᴏᴡᴇʀᴇᴅ Bʏ Danirlrxz.'

global.banner = 'https://cdn.stellarwa.xyz/files/1758842352363.jpeg'
global.icon = 'https://cdn.stellarwa.xyz/files/1758842359325.jpeg'
global.currency = 'Coins'
global.sessions = 'auth'
global.jadi = 'auth-sub'
global.namedb = 'datos.json'

global.api = { 
url: 'https://api.stellarwa.xyz',
key: 'Angelithixyz'
}

global.my = {
  ch: '120363420575743790@newsletter',
  name: '⚡AsunaYuuki & ✦ 𝐆𝐚𝐭𝐨𝐋𝐚𝐧𝐝 ✦ |𝗠ᴆ⚡',

  ch2: '120363420575743790@newsletter', 
  name2: '120363420575743790',

  ch3: '120363420575743790@newsletter',
  name3:'⚡AsunaYuuki & ✦ 𝐆𝐚𝐭𝐨𝐋𝐚𝐧𝐝 ✦ |𝗠ᴆ⚡'
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
