const cors = require('cors');
const express = require('express')
const app = express()
const CLIENT_URL = 'http://127.0.0.1:5500' // test

app.use(cors({
    origin: CLIENT_URL,
}));
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)