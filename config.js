const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "sGsnFTKJ#qHfNesDS150sUZW1ETR-k0Py4BHBbophqYi08iBcpzc",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi GHOST-MD Is Online Now 💻\n*💻 Owner* - izoo-izoo\n\n*💻 Owner Number* -254740774944",
SUDO_NB: process.env.SUDO_NB || "254740774944",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || 'true',
antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com'    
antilinkaction: process.env.ANTILINK_ACTION || 'remove',
    
