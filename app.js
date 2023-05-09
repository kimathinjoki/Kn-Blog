const express = require('express')


//  express app

const app = express()

//  listen for requests
app.listen(3001);

app.get('/', (req,res)=>{
    // res.send('<p>Home page</p>')
    res.sendFile('./views/index.html',{root: __dirname})

})

app.get('/about', (req,res)=>{
    // res.send('')
    res.sendFile('./views/about.html',{root: __dirname})
})

// app.get('/', (req,res)=>{
//     res.send('<p>Home page</p>')
// })



// redirects

app.get('/about-us', (req, res)=>{
    res.redirect('/about')
})


//  404 page the position of this matters, it has to be at the bottom as it goes through every single request then executes
// if it doesnt find the url match


app.use((req,res)=>{
    res.status(404).res.sendFile('./views/404.html',{root: __dirname})

})