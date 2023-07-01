// core modules of node js

const path = require('path');

/*------------------------------------*/

const rootDir = require('../utils/path');
const singUpController = require('../controller/signUpController');
const signInController = require('../controller/signInController')

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
           
           
     })

     router.post('/signIn',(request,response)=>{
          if(signInController.Login(request,response)){
            response.redirect('/logis/users/demand');
          };
     })


     router.get('/pageToDashboard',(request,response)=>{
          response.redirect('logis/user/commande')
     })

exports.requestHandler = router;