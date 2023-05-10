const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')

//  express app

const app = express()

// connection to mongo db

const dbURI = "mongodb+srv://dfkimathinjoki:1234@cluster0.bnqyrmj.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbURI)

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

//  register view engine

app.set('view engine', 'ejs');
// app.set('views', 'myviews')

//  listen for requests
// app.listen(3001);



//  middleware & static files

// app.use((req,res, next)=>{
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next()
// })


// app.use((req,res, next)=>{
//     console.log("on to the next one")
//     next()
// })

app.use(express.static('public'))


app.use(morgan('dev'))

app.get('/', (req,res)=>{
    // res.send('<p>Home page</p>')
    
    // res.sendFile('./views/index.html',{root: __dirname})

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];

    res.render('index',{ title: 'Home', blogs})

})

app.get('/about', (req,res)=>{
    // res.send('')
    // res.sendFile('./views/about.html',{root: __dirname})
    res.render('about', {title: 'About'})
})




app.get('/blogs/create', (req,res)=>{
    res.render('create', {title: 'Create a New Blog'})
})



// redirects

// app.get('/about-us', (req, res)=>{
//     res.redirect('/about')
// })


//  404 page the position of this matters, it has to be at the bottom as it goes through every single request then executes
// if it doesnt find the url match


app.use((req,res)=>{
    res.status(404).res.render('404', {title: '404'})

})