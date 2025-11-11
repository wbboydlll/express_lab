const express = 
require('express');

const userRouter = r
require('./route/users');

const app = express(); 
app.set('view engine', 'ejs');
app.use('/user', userRouter);


app.get('/', (req, res)=>{
    console.log('Here');
    res.render("index", {user:"George!"});
});

app.get('/user', (req, res)=> {
    res.send('User List');
});

app.get('/users/new', (req, res)=> {
    res.send('New User Form');
});



app.listen(3030);

