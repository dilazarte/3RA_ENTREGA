const express = require('express')
const passport = require('passport');
const { upload } = require('../middlewares/fileUpload');
const {Router} = express

const registerRouter = Router()


registerRouter.get('/', (req, res)=>{
    res.render('register')
})

registerRouter.post('/', upload, passport.authenticate('signup', { failureRedirect: '/signupError' }), (req, res)=>{
    if (req.isAuthenticated()) {
        res.redirect('/admin')
    } else {
        res.redirect('/login')
    }
})

module.exports= registerRouter