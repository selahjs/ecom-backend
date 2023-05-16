const express = require('express')
const cors = require('cors')

const data = require('./data')

const app = express()
const port = 3001

app.use(cors());
//we must use to parse our reqest body to json or req.body will be undefined
app.use(express.json());

app.get('/', (req, res)=>{
    res.status(200).json(data)
})

app.post('/api/user/login', (req, res)=>{
    const {username, password} = req.body
    if(username==='selahjemal@gmail.com' && password==='Pa$$w0rd'){
        res.status(200).json({username, token:'123abc'})
        return
    }
    //401 unauthorized
    res.status(401).json({error: 'Incorrect username or Password'})
})
app.listen(port, ()=>{
    console.log(`listning on port ${port}`)
})