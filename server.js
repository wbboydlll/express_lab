const express = 
require('express');

const userRouter = r
require('./route/users');

const app = express(); 
app.set('view engine', 'ejs');
app.use('/user', userRouter);
app.use(`/posts`, postRouter);
app.get('/', (req, res)=>{
    console.log('Here');
    res.render("index", {user:"William!"});
});

app.get('/user', (req, res)=> {
    res.send('User List');
});
app.get('/users/new', (req, res)=> {
    res.send('New User Form');
});
app.get('/post', (req, res)=> {
    res.send('Post List');
});
app.get('/posts/new', (req, res)=> {
    res.send('Create New Post');
});


app.listen(3030);
