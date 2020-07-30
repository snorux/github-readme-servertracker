const express = require('express');
const query = require('../query/');
const app = express();
const morgan = require('morgan');

app.set('view engine', 'pug');
app.use(morgan('dev'));


app.get('/tracker/:game/:ip/:port', async (req, res, next) => {
    const { game, ip , port } = req.params;
    console.log({game, ip, port});

    try {
        let results = await query.search(game, ip, port);
        res.setHeader('Content-Type', 'image/svg+xml');
        res.setHeader("Cache-Control", 'public, s-maxage=20');
        res.render('index', {ServerName: results.name.slice(0,40), 
            MapName: results.map, 
            CurrentPlayers: results.players.length, 
            MaxPlayers: results.maxplayers, 
            IP: results.connect});
    } catch(e) {
        console.log(e);
        res.sendStatus(204);
    }
})

module.exports = app;