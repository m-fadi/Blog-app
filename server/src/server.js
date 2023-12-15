import express from 'express'
const app=express()
app.use(express.json())

app.get('/input', (req, res) => {
    res.send('what r u doing')


})
app.post('/input/:name', (req, res) => {
    const {name}=req.params
    console.log(name)
    res.send('wtf')


})
app.listen(8000,()=>console.log("listening on port 8000"))