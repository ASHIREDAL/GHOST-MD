const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XDpkHIzL#OShCCBSA#le6rpKZ7S6lBhJ3OE4kBemaBy3bzLrbQ5f_b8pi2THE",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi GHOST-MD Is Online Now 💻\n*💻 Owner* - izoo-izoo\n\n*💻 Owner Number* -254740774944",
SUDO_NB: process.env.SUDO_NB || "254740774944",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
