// core modules of node js

const path = require('path');

/*------------------------------------*/

const rootDir = require('../utils/path');
const singUpController = require('../controller/signUpController');

const express = require('express');


const router =express.Router();


     console.log('clint');
 
     router.get('/signUp',(request , response)=>{
        
        console.log('clint');
           response.render('signUp',{
            obPourEmail:null,
            obPourPassword:null
           })
     })

     router.post('/signUp',(request,response)=>{
         console.log(request.body);
        
         if(singUpController.signUp(request,response)){
            response.redirect('/logis/users/signIn');
         }

         
     })
     router.get('/signIn',(request,response)=>{
           
           response.render('accueil');
     })

exports.requestHandler = router;