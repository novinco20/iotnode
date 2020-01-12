const axios = require('axios');
//var database = require('./database');
const mongodb=require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var Telegrambot = require('node-telegram-bot-api');
const Net = require('net');
const port = 2320;
const server = new Net.Server();
var flag;
var Token='1041277379:AAHOV6Ho0hp0YAzhkNx6YGa5G1MoEXjQ3mc';
var bot=new Telegrambot(Token,{polling:true});

function meysam (){
    mongodb.connect('mongodb://localhost:27017/TodoApp', (err, Client) => {

        if (err) {
            console.log("DB Not Connect");
        }
        console.log("DB  Connect");
        client = 1;
        const db1 = Client.db('TodoApp');
        //___update___//

        db1.collection('Todos').findOneAndUpdate({
            _id: new ObjectId("5e1349bb89b3f5108c4bd7d2")

        }, {
            $set: {
                complete: flag
            }
        }, {
            returnOriginal: false

        })


    })

}



server.listen(port, function() {
    console.log("Server listening for connection requests on socket localhost:"+port);
});

server.on('connection', function(socket) {
    console.log('A new connection has been established.');



    let on = socket.on('data', function(chunk) {
        console.log("Data received from client:"+chunk.toString());

        socket.write('$,0,0,1,1,1,0,2');
        socket.write('\r\n');
        axios.post("https://api.telegram.org/bot1041277379:AAHOV6Ho0hp0YAzhkNx6YGa5G1MoEXjQ3mc/sendMessage?chat_id=421343719&text="+chunk.toString());
        axios.post("https://api.telegram.org/bot1041277379:AAHOV6Ho0hp0YAzhkNx6YGa5G1MoEXjQ3mc/sendMessage?chat_id=99804353&text="+chunk.toString());

    });

});


bot.getMe().then(function (me) {
  console.log("Bot is conected .  User iS %s",me.username);
});

bot.onText(/\/start/,function (msg,match) {
   // console.log(msg.chat.id);
    flag=false;
    meysam();
    bot.sendMessage(msg.chat.id,"💢ربات رهیاب خودرو گروه فنی مهندسی رهام صنعت 💢\n" +
        " \n" +
        "🔆 جهت ورود به تنظیمات رهیاب خود \n" +
        "!menu\n" +
        "را ارسال نمایید \n" +
        "\n" +
        "\n" +
        "✅از اینکه مارا انتخاب کردید متشکریم",{
        "reply_markup":{
            "keyboard":[['!menu','!close'],['!about']]
        }
    });
});

bot.onText(/\!menu/,function (msg,match) {
    bot.sendMessage(msg.chat.id,"جهت تنظیمات رهیاب خود پارامترهای زیر را به ربات ارسال نمایید \n" +
        "\n" +
        "🔆 !sos     ➡️ ارتباط با پشتیبانی\n" +
        "🔆 !point  ➡️  دریافت مختصات فعلی\n" +
        "🔆 !tok      ➡️   دریافت سریال رهیاب\n" +
        "🔆 !web    ➡️  دریافت لینک پنل\n" +
        "🔆 !num   ➡️ ذخیره شماره همراه\n" +
        "🔆 !pk       ➡️ذخیره پلاک خودرو\n" +
        "🔆 !moto  ➡️ذخیره شماره موتور\n" +
        "🔆 !shasi  ➡️ذخیره شماره شاسی\n" +
        "🔆 !info     ➡️نمایش مشخصات ثبتی\n" +
        "🔆 !del      ➡️پاک کردن مشخصات\n" +
        "🔆 !edit     ➡️ ویرایش مشخصات\n" +
        "\n" +
        "\n" +
        "🟡🟢🔵🟣رهام صنعت⚫️🟤🔴🟠");
});

bot.onText(/\!about/,function (msg,match) {
    bot.sendMessage(msg.chat.id,"Eng Meysam Mazdarani:"+"\r\n"+"+989025515726"+"\r\n"+"Eng Arman Ilmak: "+"\r\n"+"+98 919 920 5839");
    flag=true;
    meysam();
});