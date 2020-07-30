const Gamedig = require('gamedig');

let querygame = {};

querygame.search = (game, ip, port) => {
    return new Promise((resolve, reject) => {
        Gamedig.query({
            type: game,
            host: ip,
            port: port
        }).then((state) => {
            console.log(state);
            return resolve(state);
        }).catch((error) => {
            return reject("Server is offline");
        })
    })
}

module.exports = querygame;