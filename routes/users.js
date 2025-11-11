const express =
require('express');

const router =
express.Router();

router.get('/user', (req, res)=> {
    res.send('User List');
});

router.get('/users/new', (req, res)=> {
    res.send('New User Form');
});

module.exports = router

