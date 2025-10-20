import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = ["526242129105"];
global.collaborators = ["526442036556"];
global.authorizedNumbers = [...global.owner, ...global.collaborators];

global.botname = '🌸 Yuukibot-MD'
global.namebot = '☀️ Yuuki Bot'
global.bot = 'AsunaYuukibot'
global.packname = '🌱 Yuuki𝗕𝗼𝘁-𝗠𝗗'
global.wm = '🦎 AsunaYuukibot-𝙈𝘿'
global.author = '🥗 Danirxz'
global.dev = '© Pᴏᴡᴇʀᴇᴅ Bʏ Danielrxz.'

global.banner = 'https://files.catbox.moe/vmyuv5.jpg'
global.icon = 'https://files.catbox.moe/vmyuv5.jpg'
global.currency = 'Coins'
global.sessions = 'sessions'
global.jadi = 'jadi-sub'
global.namedb = 'datos.json'

global.api = { 
url: 'https://api.stellarwa.xyz',
key: 'stellar-1QNsk'
}

global.my = {
  ch: '120363420575743790@newsletter',
  name: '⚡AsunaYuuki & ✦ 𝐆𝐚𝐭𝐨𝐋𝐚𝐧𝐝 ✦ |𝗠ᴆ⚡',

  ch2: '120363420575743790@newsletter', 
  name2: 'Asunayuuki',

  ch3: '120363420575743790@newsletter',
  name3:'AsunaYuuki Made Danielrxz'
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
