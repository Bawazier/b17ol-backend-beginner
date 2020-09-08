const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send('Welcome to my first backend!');
});
  
app.listen(8080, () =>{
    console.log("Server run in port http://localhost:8080/home");
});