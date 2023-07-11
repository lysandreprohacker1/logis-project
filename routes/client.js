// core modules of node js

const path = require('path');

let infoFromPage1;

/*------------------------------------*/

const rootDir = require('../utils/path');
const listePays = require('../utils/api.villes');
const singUpController = require('../controller/signUpController');
const signInController = require('../controller/signInController')

const Page1Demand = require('../controller/Page1Demand')
const Page2Demand = require('../controller/page2Demand')

const express = require('express');
const { render } = require('ejs');
const { request } = require('http');


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
           
           response.render('signIn',{
               obPourEmail:null,
               obPourPassword:null
           })
     })

     router.post('/signIn',(request,response)=>{
          if(signInController.Login(request,response)){
            response.redirect('/logis/users/demand');
          };
     })


     router.post('/dashboard',(request,response)=>{
          console.log(request.body)
          response.render('html/index')

     })


     router.get('/dashboard/demande-expedition',(request,response)=>{
         
          response.render('html/layouts-without-menu',{
               prenomInfo:null,
               infoPays:listePays.tableauIndice
          })
     })

     router.post('/dashboard/demande-expedition',(request,response)=>{
         

          infoFromPage1= Page1Demand.Page1Demand(request,response);
           

     })

     router.get('/dashborad/dashboard/demande-expedition',(request,response)=>{
          response.redirect('/logis/users/dasboard/demande-expedition')
     })
     router.get('/dashboard/dashboard/demande-expedition',(request,response)=>{
          response.redirect('/logis/users/dasboard/demande-expedition')
     })
     router.get('/dashborad/demande-expedition-suivant/dashboard/demande-expedition',(request,response)=>{
          response.redirect('/logis/users/dasboard/demande-expedition')
     })
     router.get('/dashboard-menulink',(request,response)=>{
          response.render('html/index')
     })
     

     router.get('/dashborad/demande-expedition-suivant/dasboard/demande-expedition',(request,response)=>{
               response.redirect('/logis/users/dasboard/demande-expedition')
     })

     router.get('/dasboard/demande-expedition',(request,response)=>{
          response.redirect('/logis/users/dashboard/demande-expedition')
     })

     router.post('/dashborad/demande-expedition-suivant/suivant',(request,response)=>{
          response.render('html/valiter-commande')
     })

 
   
     router.post('/dashboard/demande-expedition/suivant',(request,response)=>{

          
          Page2Demand.Page2Demand(request,response)

          //response.render('html/infos-colis-expedition');

     })

exports.requestHandler = router;
