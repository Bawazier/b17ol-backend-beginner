const express = require('express');
const fetch = require('node-fetch');
const { response } = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

let data = {
    id: 1,
    name: 'saiful',
    single: true 
}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}

fetch('http://localhost:8080/data', options)

app.get('/home', (req, res) => {
    res.send('Welcome to my first backend!');
});

app.post('/data', (req, res) => {
    console.log(req.body);
});
  
app.listen(8080, () =>{
    console.log("Server run in port http://localhost:8080/home");
});