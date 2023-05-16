const express = require('express')
const cors = require('cors')

const data = require('./data')

const app = express()
const port = 3001

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.status(200).json(data)
})

app.post('/api/user/login', (req, res)=>{
    console.log(req.body)
    const {username, password} = req.body
    if(username==='selahjemal@gmail.com' && password==='Pa$$w0rd'){
        res.status(200).json({username, token:'123abc'})
        return
    }
    //401 unauthorized
    res.status(401).json({msg: 'Incorrect username or Password'})
})
app.listen(port, ()=>{
    console.log(`listning on port ${port}`)
})