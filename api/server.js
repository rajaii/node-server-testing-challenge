const express = require('express');
const server = express();

const hackerRouter = require('../hackers/hackerRouter.js');

server.use(express.json());
server.use('/api/hackers', hackerRouter);


server.get('/', (req, res) => {
    res.status(200).json({hackers: 'definitely from LAMBDA LOL'})
})

module.exports = server;