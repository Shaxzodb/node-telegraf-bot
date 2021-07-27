
const TOKEN='1630829893:AAGql7ucOG7BnPQJKVDohVkiuGOlVjcPcF8'

const  Telegraf = require('telegraf')

const bot = new Telegraf(TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))

bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('salom',(msg)=>msg.reply("SALOM"))

bot.on('text',(ctx) => ctx.replyWithHTML('<b>Send me a sticker</b>'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
