const bcrypt=require('bcrypt');

const jwt =require('../jwt/jwt.utils');

const models = require('../models');

const Email_Regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const password_Regex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;




const Login =(request,response)=>{
    console.log('test login')

    let email = request.body.email;
    let password = request.body.password;

    let obPourEmail=false;
    let obPourPassword=false;

    let testEmail = true;
    let testPassword =true;
   if(email ==''){

       obPourEmail ={
           value :'veuillez saisir un email',
           indice :'email',
           inputEmail :email,
           error:false
       }

       if(password==null){
          obPourPassword ={
           value :'veuillez saisir un password',
           indice:'password',
           
           inputPassword :password,
           error:false
          }
       }

       response.render('signIn',{
           obPourEmail :obPourEmail
           ,obPourPassword :obPourPassword
       })

       return {value:false}
   }else if(password==null){
        obPourPassword ={
        value :'veuillez saisir un password',
        indice:'password'
       }
       console.log('test');
       response.render('signIn',{
           obPourPassword :obPourPassword,
           obPourEmail:{
               value :'veuillez saisir un email',
               indice:'email',
               inputEmail:email
              }
       })
       return {value : false}
    }


         //verification de la validité des informations

         if(!Email_Regex.test(email)){
        
            obPourEmail ={
                value :'veuillez entrer une email valide',
                indice :'email',
                inputEmail:email
            }
            console.log(!Email_Regex.test(email)+'pour email')
            testEmail=false
        }else{
            obPourEmail ={
                value :'valide',
                indice :'email',
                inputEmail:email
            }
    
        }
    
        if(!password_Regex.test(password)){
            obPourPassword ={
                value :'le password contient 8-15 charactères,au moins une lettre minuscule\n,au moins une lettre majuscule,et au moins un des caractere $ @ % * + - _ !',
                indice:'password',
                inputPassword:password
               }
    
               testPassword = false;
               
               console.log(password_Regex.test(password)+'pour password');
        }else{
            obPourPassword ={
                value :'valide',
                indice:'password',
                inputPassword:password
               }
    
               
               
               console.log(password_Regex.test(password)+'pour password');
        }
    
        if(!testEmail || !testPassword){
            response.render('signIn',{
                obPourEmail,obPourPassword
            })
            return false;
        }



        models.Client.findOne({
            where :{email:email}
        })
        .then((userData)=>{
            if(userData){
                    bcrypt.compare(password,userData.password,(err,ok)=>{
                         if(ok){
                              console.log('succes')
                               response.redirect('logis/users/dashboard')
                         }else{
                            return response.render('signIn',{
                                obPourPassword :{
                                    value :'valide',
                                    indice:'password',
                                    inputPassword:password,
                                    error:'password saisi invalide'
                                   },
                                obPourEmail: {
                                    value :'invalide',
                                    indice :'email',
                                    inputEmail:email,
                                    
                                }
                            })
                         }
                    })
            }else{
                response.status(404).render('signIn',{
                    obPourPassword :{
                        value :null,
                        indice:'password',
                        inputPassword:password,
                        error:'cet utilisateur n\'existe pas'
                       },
                    obPourEmail: {
                        value :null,
                        indice :'email',
                        inputEmail:email,
                        
                    }
                })
            }
        })

        .catch(()=>{
            response.render('signIn',{
                obPourPassword :{
                    value :'password valide',
                    indice:'password',
                    inputPassword:password,
                    error:'connexion a la base de données des utilisateurs impossible'
                   },
                obPourEmail: {
                    value :'email valide',
                    indice :'email',
                    inputEmail:email,
                    
                } 
        })
        })
}

exports.Login=Login;