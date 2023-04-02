const http = require('http');
const express = require('express')


const hostname = '127.0.0.1';
const users = ['A'];
const port = 3000;

const server = express()

server.get('/login', (req, res) => {
    let username = req.query.username || '';
    const password = req.query.password || '';
  
    username = username.replace(/[!@#$%^&*]/g, '');
    console.log(req)
    if (users.findIndex(item => item === username) < 0
    ) {
        return res.send({ message: 'Login failed' })
    } else {
        return  res.send({ message: 'Login success' })
    }
  });
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
