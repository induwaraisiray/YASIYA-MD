const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~8BIA3IRQ#C_5vsiLlb6Z_TYCHzILLISrxsNMHBxirAFaErPTXN7U'
};
