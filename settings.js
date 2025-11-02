import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = ["526242129105"];
global.collaborators = ["526442036556"];
global.Administrators = ["5959821399"];

global.botname = '🌸 Yuukibot-MD'
global.namebot = '☀️ Yuuki Bot'
global.bot = 'AsunaYuukibot'
global.packname = '🌱 Yuuki𝗕𝗼𝘁-𝗠𝗗'
global.wm = '🌱 AsunaYuukibot-𝙈𝘿'
global.author = '© P𝕠𝕨𝕖𝕣𝕖d B𝕪 𝕯𝖆𝖓𝖎𝖊𝖑𝕣𝕩𝕫 🥷🏼'
global.dev = '© P𝕠𝕨𝕖𝕣𝕖d B𝕪 𝕯𝖆𝖓𝖎𝖊𝖑𝕣𝕩𝕫.'

global.banner = 'https://files.catbox.moe/vmyuv5.jpg'
global.icon = 'https://files.catbox.moe/vmyuv5.jpg'
global.currency = 'Coins'
global.sessions = 'sessions'
global.jadi = 'jadi-sub'
global.namedb = 'datos.json'

global.api = { 
url: 'https://api.stellarwa.xyz',
key: 'stellar-z3PbsWnQ'
}

global.my = {
  ch: '120363420575743790@newsletter',
  name: '🌸 ᴀꜱᴜɴᴀ✦ʏᴜᴜᴋɪ ☀️',

  ch2: '120363420575743790@newsletter', 
  name2: '🌸 ᴀꜱᴜɴᴀ✦ʏᴜᴜᴋɪ ☀️',

  ch3: '120363420575743790@newsletter',
  name3:'🌸 ᴀꜱᴜɴᴀ✦ʏᴜᴜᴋɪ ☀️'
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
