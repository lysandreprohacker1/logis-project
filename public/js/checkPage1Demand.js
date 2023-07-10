
const form = document.querySelector('#formAccountSettings');

const checkData =()=>{
    let prenom = document.querySelector('#firstName');
    let nom = document.querySelector('#lastName');
    let email = document.querySelector('#email');
    let pays = document.querySelector('#timeZones');
    let indicePays = document.querySelector('#ville');
    let phoneNumber=document.querySelector('#phoneNumber')
    console.log(prenom,nom,email,pays,indicePays,phoneNumber)

}

let send = document.querySelector('#send')

send.addEventListener('click',()=>{
    console.log('ok')
})


