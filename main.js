import {  Telegraf, Markup } from "telegraf"
import { message } from 'telegraf/filters'

const token = '7062955189:AAEMhn0nBitLIDH1PgpzfwS0ZW9t_g-Y0Qo'
const webAppUrl = 'https://tg-football-quiz-app.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить сообщение',
                `${webAppUrl}/feedback!`
            )
        ])
    )
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()