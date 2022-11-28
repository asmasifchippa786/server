import express from 'express';
const app = express()
const port = process.env.PORT  || 3000

app.get('/', (req, res) => {
    console.log("requet ip: " , req.ip);
    res.send('Hello there! I am Here , My Name is M.Anas Asif ' + new Date().toString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})