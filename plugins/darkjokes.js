let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  await m.reply('Fitur nonaktif!')
/*  await m.reply(global.wait)
  let url = await fetch('https://api.zeks.xyz/api/darkjokes?apikey=apivinz')
  let darkjokes = await url.json()

  conn.sendFile(m.chat, darkjokes.result, 'filename', '_*Gelap euy:v*_')*/
}
handler.help = ['darkjokes']
handler.tags = ['fun']
handler.command = /^darkjokes$/i
handler.group = false
handler.register = true
handler.limit = false
module.exports = handler
