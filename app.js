var restify = require('restify');
var builder = require('botbuilder');
////https://docs.google.com/document/d/1Z0cfWqwqJXSL7_dTdPIVpturQLjz22DOLlWdtcPKxIs/edit?usp=sharing
//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3000, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
appId: '261376bc-f2da-4ddf-9968-b7f18d949a18',
appPassword: 'HKCfk2NVZ1yOAsreFNUnSyY'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
    session.send("Hello World");
});
