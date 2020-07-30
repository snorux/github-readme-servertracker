require('dotenv').config();
const http = require('http');
const app = require('./routes/app');
const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => console.log(`Server started on port: ${port}`));