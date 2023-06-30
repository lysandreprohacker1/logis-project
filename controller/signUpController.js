const bcrypt =require('bcrypt');

const Email_Regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const password_Regex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;




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
         indice:'password'
        }
        console.log('test');
        response.render('signUp',{
            obPourPassword :obPourPassword,
            obPourEmail:{
                value :'veuillez saisir un email',
                indice:'email'
               }
        })
        return {value : false}
     }

     //verification de la validité des informations

    if(!Email_Regex.test(email)){
        
        obPourEmail ={
            value :'veuillez entrer une email valide',
            indice :'email'
        }
        console.log(!Email_Regex.test(email)+'pour email')
    }

    if(!password_Regex.test(password)){
        obPourPassword ={
            value :'le password contient 8-15 charactères,au moins une lettre minuscule\n,au moins une lettre majuscule,et au moins un des caractere $ @ % * + - _ !',
            indice:'password'
           }

           testPassword = false;
           
           console.log(password_Regex.test(password)+'pour password');
    }


    
    
   
    

}

const signIn =()=>{

}

exports.signUp=signUp