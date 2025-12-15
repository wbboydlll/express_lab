const express =
require('express');

const router =
express.Router();
router.get('/new', (req, res)=>{
    res.render('users/new', {firstName: "Please enter your name"});
});
router.get('/', (req, res)=> {
    res.send(`user/list`, {user:users});
});

router.post('/', (req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.agw;
    const gender = req.body.gender;
    
    
    const isValid = firstName !=="";
    if(isValid)    
    {
        console.log(`Adding User: ${firstName}`);
        users.push({
            firstName:firstName,
            lastName:lastName,
            gender:gender,
            age:age, //trailing comma
        });
        console.log(`New Set of Users: ${users}`);
        res.send("User Created!")
    }
    else{
        console.log("Error adding user!");
        res.send("user/new", {firstName:firstName});
    }
});

module.exports = router

