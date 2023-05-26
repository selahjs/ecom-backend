const login = (req,res) =>{
    const {username, password} = req.body
    if(username==='selahjemal@gmail.com' && password==='Pa$$w0rd'){
        res.status(200).json({username, token:'123abc'})
        return
    }
    //401 unauthorized
    res.status(401).json({error: 'Incorrect username or Password'})
}

const signup = (req,res)=>{
    console.log(req.body)
    const {username, password, repeatePassword} = req.body
    if(password === repeatePassword){
        res.status(201).json({username, token:'123abc'})
        return
    }
    //401 unauthorized
    res.status(401).json({error: 'Password must match!'})
}

module.exports = {login, signup}