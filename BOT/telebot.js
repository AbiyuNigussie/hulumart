require('dotenv/config')
const {Telegraf} = require('telegraf');
// const { callback } = require('telegraf/typings/button');
const bot = new Telegraf(process.env.API_TOKEN);
// const {Machineries_list_keyboard} = require('./data_proccessor');
const data = require('./data_processor');
bot.command('start', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, "Hello, Welcome to Hulu Market telegram bot. please use /buy to buy our merchandise", {})
})

bot.command('/buy', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, " Machineries:", {
    reply_markup: {
      inline_keyboard: data.Machineries_list_keyboard(),
    }
  });
  
  bot.action(data.Machineries_list_callbacks(),ctx => {
    var machine_index = data.Machineries_list_callbacks().indexOf(ctx.match[0]);
    ctx.answerCbQuery();
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, "Models:", {
      reply_markup: {
        inline_keyboard: data.Models_list_keyboard(machine_index),
      }
    });

  bot.action(data.Models_list_callback(machine_index), ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, "info:",{
      reply_markup: {
        keyboard: [
          [{"text":"Buy", "callback_data":"Buy"}, {"text":"cancel", "callback_data": "cancel"}],
        ],
        resize_keyboard: true,
        one_time_keyboard:true

      }
    });

  });

  bot.action('cancel', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, "Order Canceled!");
  });

  });

  
});





bot.launch()

// console.log(Machineries_list())
