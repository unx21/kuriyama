let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/konnichiwa.opus'
conn.sendFile(m.chat, vn, 'konnichiwa.opus', null, m, {
  type: 'audioMessage',
  ptt: true
})
}
handler.customPrefix = /kon?nichiwa/i
handler.command = new RegExp
module.exports = handler