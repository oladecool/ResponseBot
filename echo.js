const  Telegraf  = require('telegraf')

const  bot = new Telegraf('1202957971:AAFfmjHWzxG-JpfeBNWzI1NZuKWP8nykdfA');

const helpMessage = `
  Say something to me
  /start - start the bot
  /help -  command reference
`

bot.use((ctx, next) => {
  console.log(ctx.chat);
 
  if(ctx.updateSubTypes[0] == "text"){
    bot.telegram.sendMessage(-432778245, ctx.from.first_name + " said: " +  ctx.message.text)
  } else {
    bot.telegram.sendMessage(-432778245, ctx.from.first_name + " sent a: " +  ctx.updateSubTypes[0] );
  }
  next();
})

bot.start((ctx) => {
    ctx.reply("Hi i am Mike Bot");
    ctx.reply(helpMessage);
})

bot.help((ctx) =>{
  ctx.reply(helpMessage)
})

bot.command("echo", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" ");
  console.log(inputArray);

  let message = "";

  if(inputArray.length == 1) {
    message = "You said echo";
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
  }

  ctx.reply(message);

})



bot.launch();