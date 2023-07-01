const bcrypt =require('bcrypt');

const Email_Regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const password_Regex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;

const models= require('../models');



const signUp = (request,response)=>{
     let  name = request.body.nom;
     let firstName = request.body.prenom;
     let email = request.body.email;
     let password = request.body.text;

     console.log(email=='')
     console.log(password ==null)
     console.log(password)

     let obPourEmail=false;
     let obPourPassword=false;

     let testEmail = true;
     let testPassword =true;
    if(email ==''){

        obPourEmail ={
            value :'veuillez saisir un email',
            indice :'email'
        }

        if(password==null){
           obPourPassword ={
            value :'veuillez saisir un password',
            indice:'password'
           }
        }

        response.render('signUp',{
            obPourEmail :obPourEmail
            ,obPourPassword :obPourPassword
        })

        return {value:false}
    }else if(password==null){
         obPourPassword ={
         value :'veuillez saisir un password',
         indice:'password',
         inputPassword:password
        }
        console.log('test');
        response.render('signUp',{
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
        testPassword=false;
    }else{
        obPourEmail ={
            value :null,
            indice :'email',
            inputEmail:email
        }

        console.log('true pour email');

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
            value :null,
            indice:'password',
            inputPassword:password
           }

           
           
           console.log(password_Regex.test(password)+'pour password');
    }

    if(!testEmail || !testPassword){
        response.render('signUp',{
            obPourEmail,obPourPassword
        })

        return false
    }


    


   

    models.Client.findOne({
        attributes:['email'],
        where:{
            email:email
        }
    })
    .then((userData)=>{

            if(!userData){

                bcrypt.hash(password,10,(err,encryptedPassword)=>{
                    let newClient = models.Client.create({
                        nom:name,
                        prenom:firstName,
                        email:email,
                        password:encryptedPassword
                    })
                    .then((newClient)=>{
                            console.log('success id : '+newClient.id);

                        
                            response.render('signIn' ,{
                                obPourEmail : {
                                    value :false,
                                    indice :'email',
                                    inputEmail :email,
                                    error:false
                                },
                                obPourPassword :{
                                    value :false,
                                    indice:'password',
                                    inputPassword:password,
                                    error:false
                                   }
                            })
                            return false
                    })
                    .catch(()=>{
                        response.status(500).render('signUp',{
                            obPourPassword :{
                                value :'password valide',
                                indice:'password',
                                inputPassword:password,
                                error:'Echec d\'inscription'
                               },
                            obPourEmail: {
                                value :'email valide',
                                indice :'email',
                                inputEmail:email,
                                
                            } 
                        })

                        return false;
                    })
                })
                
            }else{
                response.status(409).render('signUp',{
                    obPourPassword :{
                        value :'password valide',
                        indice:'password',
                        inputPassword:password,
                        error:'attention :) cet utilisateur est deja inscrit'
                       },
                    obPourEmail: {
                        value :'email valide',
                        indice :'email',
                        inputEmail:email,
                        
                    } 
                })
            }

    })
    .catch(()=>{
        console.log('impossi')
        return response.status(500).render('signUp',{
            obPourPassword :{
                value :'password valide',
                indice:'password',
                inputPassword:password,
                error:'connexion a la base de données impossible'
               },
            obPourEmail: {
                value :'email valide',
                indice :'email',
                inputEmail:email,
                
            } 
        })
    })    

}


exports.signUp=signUp

