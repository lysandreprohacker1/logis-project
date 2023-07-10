const path = require('path');

const rootDir=require('../utils/api.villes');

const listePays = rootDir.tableauIndice;

const Email_Regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const tableauIndice =[
    {indice:'+267',
    pays:'Botswana',
     villes:['Bobonong','Letlhakane','Tonota','Jwaneng','Tutume','Gabane','Mmadinare','Ghanzi','Kasane',
              'Orapa','Tsabong','Shoshong','Gumare','Kopong','Letlhakeng','Lerala','Molapowabojang',
               'Otse','Shakawe','Metsimotlhaba' ]
    
    },
    {indice:'+213',
    pays:'Algerie',
     villes:['Oran','Constantine','Annaba','Blida','Batna','Djelfa','Sétif','Sidi bel Abbès','Biskra',
             'Tébessa','El Oued','Skikda','Tiaret','Béjaïa','Tlemcen','Ouargla','Béchar',
             'Mostaganem','Bordj Bou Arreridj','Chlef','Souk Ahras','Médéa','El Eulma','Touggourt',
             'Ghardaïa','Saïda','Laghouat','MSila','Jijel','Relizane','Guelma','Aïn Beïda','Khenchela',
             'Bousaada','Mascara','Tizi Ouzou']
    },
    {indice:'+244',
    pays:'Angola',
      villes:['Luanda','Huambo','Lobito','Benguela','Lucapa','Kuito','Lubango','Malanje',
              'Namibe','Soyo','Cabinda','Uíge','Tomboa','Saurimo','Sumbe','Caluquembe',
               'Gabela','Caxito','Longonjo','Mbanza-Kongo','N\'Dalantando','Caála','Luena',
               'Camacupa','Menongue','Catabola','Luau','N\'zeto','Catumbela','Camabatela','Waku-Kungo',
               'Caconda','Ondjiva','Cangamba']
    },
    {indice:'+257',
    pays:'Burundi',
     villes:[
        'Bujumbura','Gitega','Ngozi','Rumonge','Kayanza','Muyinga','Makamba','Cibitoke',
        'Rutana','Ruyigi','Bururi','Bubanza','Karuzi','Cankuzo','Kirundo','Muramvya',
        'Mwaro','Nyanza Lac','Gihofi','Gatumba']
    },
    {indice:'+237',
    pays:'Cameroun',
    regex:'/(\+237|237)\s(6|2)(2|3|[5-9])[0-9]{7}/',
     villes:['Yaoundé', 'Garoua','Bamenda','Maroua','Bafoussam','Ngaoundéré','Bertoua','Edéa','Nkongsamba','Loum','Kumba', 'Kumbo','Foumban','Mbouda'
             ,'Dschang','Limbé','Ebolowa','Kousséri','Guider','Meiganga','Yagoua','Mbalmayo','Bafang','Tiko'
             ,'Bafia','Wum','Kribi', 'Buea','Sangmélima','Foumbot','Bangangté','Batouri','Banyo','Nkambé','Bali','Mbanga','Mokolo'
             ,'Melong','Manjo','Garoua-Boulaï','Mora','Kaélé','Tibati','Ndop','Akonolinga','Eséka','Mamfé', 'Obala','Muyuka','Nanga-Eboko', 'Abong-Mbang','Fundong'
             ,'Nkoteng','Fontem','Mbandjock','Touboro','Ngaoundal','Yokadouma','Pitoa,Tombel','Kékem','Magba','Bélabo','Tonga','Maga'
             ,'Koutaba','Blangoua','Guidiguis','Bogo','Batibo','Yabassi','Figuil','Makénéné','Gazawa','Tcholliré'
        ]
},
    {indice:'+27',
    pays:'Afrique Du Sud',
     villes:[
        'Le Cap','Durban','Johannesburg','Soweto','Pretoria','Port Elizabeth','Pietermaritzburg',
	     'Benoni','Tembisa','Vereeniging','Bloemfontein','Boksburg','Welkom','Newcastle','East London',
	     'Krugersdorp','Brakpan','Botshabelo','Richards Bay','Witbank','Centurion','Vanderbijlpark',
	     'Uitenhage','Alberton','Somerset West','Paarl','George','Klerksdorp','Carletonville','Springs',
	     'Midrand','Vryheid','Embalenhle','Middelburg','Orkney','Westonaria','Epumalanga','Nigel',
	     'Randfontein','Brits','Virginia','Worcester','Bisho','Kimberley','Polokwane','Potchefstroom',	
	     'Emnambithi','Rustenburg','Bethal','Queenstown','Nelspruit','Phalaborwa','Delmas','Kroonstad',
	     'Kutlwanong','Stilfontein','Warmbath','Potgietersrus','Piet Retief','Stellenbosch',
	     'Dundee','Mabopane']
    },
    {indice:'+238',
    pays:'Cap-Vert',
     villes:[
'Praia','Mindelo','Santa Maria','Assomada','Porto Novo','Pedra Badejo','São Filipe','Tarrafal',
'Espargos','Calheta de São Miguel','Vila do Maio','Ribeira Brava','Picos' ]
    },
    {indice:'+269',
    pays:'Comores',
     villes:['Moroni','Mutsamudu','Domoni','Fomboni','Tsembéhou','Mvouni/Mavingouni/Mkazi',
             'Sima','Ouani','Mirontsi','Adda Daouéni','Bazmini','Koni Djodjo','Moya','Iconi',
             'Ounkazi','Dindri','gandzalé','Mbéni','Batsa','Barakani','Mbambao Mtsanga','Chandra',
             'Ouellah Hamahamet','Mramani','Mrémani','Koki','Jimlimi','Mitsamiouli','Itsandzeni/Gnadomboeni',
             'Foumbouni','Nkourani Sima','Magnassini','Mitsoudjé-Troumbeni','Singani']
   },
    {indice:'+225',
    pays:'Cote d\'Ivoire',
     villes:['Abidjan','Bouaké','Korhogo','Daloa','San-Pédro','Anyama','Yamoussoukro',
             'Divo','Gagnoa','Soubré','Man','Duékoué',	'Bingerville','Guiglo','Lakota','Abengourou',
             'Ferké','Adzopé','Méagui','Bondoukou','Dabou','Sinfra','Agboville','Vavoua','Danané','Grand-Béreby','Oumé',
             'Issia','Grand-Bassam','Bloléquin','Okrouyo','Bonoua',	'Bonon','Gabiadji','Grand-Zattry','Zouan-Hounien',
             'Seitifla','Dania','Séguéla',	'Daoukro','Aboisso','Buyo','Saïoua']
    },
    {indice:'+20',
    pays:'Egypte',
    villes:['Le Caire',	'Alexandrie','Gizeh','Shubra El-Kheima','Port-Saïd','Suez','Louxor',
            'Mansourah', 'El-Mahalla el-Koubra','Tanta','Assiout','Ismaïlia','Médinet el-Fayoum','Zagazig',	
            'Assouan','Damiette','Damanhur','Al-Minya','Beni Suef','Qena','Sohag','Hurghada','Madinat Sitta Uktubar',
            'Schibin al-Kawm','Benha','Kafr el-Cheik','El-Arich','Mallawi','Al-Aschir min Ramadan','Bilbéis','Mersa Matrouh',
            'Edfou','Mit Ghamr','Al-Hawamidiyya','Dessouk','Kalyoub','Abu Kabir',
            'Kafr ad-Dawwar','Dschirdscha','Akhmîm','Matarée']
   },
    {indice:'+241',
    pays:'Gabon',
     villes:[
        'Libreville','Port-Gentil','Franceville','Oyem','Moanda','Mouila','Lambaréné','Tchibanga','Koulamoutou',
         'Makokou','Bitam','Tsogni','Gamba','Mounana','Ntoum','Nkan','Lastourville','Okondja','Ndendé',	
         'Booué','Fougamou','Ndjolé','Mbigou','Mayumba','Mitzic','Mékambo','Lékoni','Mimongo','Minvoul',
        'Medouneu','Omboué','Cocobeach','Kango']
   },
    {indice:'+291',
    pays:'Erythrée',
    villes:[
        'Asmara','Assab','Keren','Massaoua','Édd','Mendefera','Barentu','Adi Keyh','Ghinda',
        'Mersa Fatma','Beylul','Dek\'emhare','Nakfa','Agordat','Himbirti','Nefasit','Adi Quala',
        'Senafe','Segeneiti','Teseney'
    ]
    },
    {indice:'+233',
    pays:'Ghana',
     villes:[
        'Accra','Kumasi','Tamale','Sekondi-Takoradi','Ashaiman','Sunyani','Cape Coast','Obuasi',
        'Teshie','Tema','Madina','Koforidua','Wa','Techiman','Ho','Nungua',	'Lashibi',	'Dome',	'Tema New Town',
         'Gbawe','Oduponkpehe',	'Ejura','Taifa','Bawku','Aflao','Agona Swedru','Bolgatanga',
        'Tafo','Berekum','Nkawkaw','Akim Oda','Winneba','Hohoe','Yendi','Suhum','Kintampo','Adenta East','Nsawam','Mampong','Konongo',	
        'Asamankese','Wenchi','Savelugu','Agogo','Anloga','Prestea','Effiakuma','Tarkwa','Elmina','Dunkwa-on-Offin',
        'Begoro','Kpandu','Kintampo','Navrongo','Axim','Apam','Salaga','Saltpond','Akwatia',
        'Shama','Keta','Nyakrom','Bibiani','Somanya','Foso','Aburi','Mumford','Bechem','Duayaw Nkwanta','Kade','Anomabu','Akropong',
        'Kete-Krachi','Kibi','Kpandae','Mpraeso','Akim Swedru','Aboso','Bekwai',	
        'Japekrom','Banda Ahenkro'
     ]
   },
    {indice:'+224',
    pays:'Guinée',
      villes:[
        'Beyla','Boffa','Boké','Conakry','Coyah','Dabola','Dalaba','Dinguiraye','Dubreka','Faranah','Forecariah',
        'Fria','Gaoual','Gueckedou','Kamsar','Kankan','Kérouane','Kindia','Kissidougou',
        'Koubia','Koundara','Kouroussa','Labé','Lélouma','Lola','Macenta','Mali','Mamou','Mandiana',
         'N\'Zérékoré','Ourouss','Siguiri','Télimélé','Tougué','Yomou','Youkounkoun' ]
     }

]
                      



const Page1Demand= (request,response)=>{

    let prenom = request.body.firstName;
    let nom = request.body.lastName;
    let email = request.body.email;
    let pays = request.body.Pays;
    let phoneNumber = request.body.phoneNumber;
    let indicePays = request.body.indicePays;
    let ville =request.body.ville;
    let info ={
        prenom:prenom,
        nom:nom,
        email:email,
        pays:pays,
        phoneNumber:phoneNumber,
        ville:ville,
        indice:request.body.indicePays,
        tousLesPays:tableauIndice
    };

    console.log(ville)
    let behindPrenom ='veuillez entrez un prenom';
    let behindNom = 'veuillez entrez un nom';
    let behindEmail = 'veuillez entrez un email';
    let behindPays = 'veuillez choisir un pays';

    let behindPhoneNumber ='veuillez entrer un numero de telephone';

    let behindIndice = 'veuillez choisir un indice du numero du pays';
    let behindville = 'veuillez choisir une ville';

    console.log(prenom=='',' : prenom');
    console.log(nom.trim()=='',' : nom')

    console.log(request.body)

    if(prenom.trim() ==''){
        
        return response.render('html/layouts-without-menu',{
            prenomInfo :{
                behindPrenom :behindPrenom,
                behindNom:null,
                behindEmail:null,
                behindPays:null,
                behindPhoneNumber:null,
                behindIndice:null,
                info:info,
                
            },
            infoPays:listePays,
           
            

        });
    
    }


    if(nom.trim()==''){
        return response.render('html/layouts-without-menu',{
            prenomInfo :{
                behindPrenom :'valide',
                behindNom:behindNom,
                behindEmail:null,
                behindPays:null,
                behindPhoneNumber:null,
                behindIndice:null,
                info:info
    
            },
            infoPays:listePays,
            
 })
    
    } 

    if(email.trim()==''){
        return response.render('html/layouts-without-menu',{
            prenomInfo :{
                behindPrenom :'valide',
                behindNom:'valide',
                behindEmail:behindEmail,
                behindPays:null,
                behindPhoneNumber:null,
                behindIndice:null,
                info:info,

    
            },
            infoPays:listePays,
            
 })
    
    }

    if(pays.trim()==''){
        return response.render('html/layouts-without-menu',{
            prenomInfo :{
                behindPrenom :'valide',
                behindNom:'valide',
                behindEmail:'rempli',
                behindPays:behindPays,
                behindPhoneNumber:null,
                behindIndice:null,
                info:info,
    
            },
            infoPays:listePays,
            
 })
    
    }

    console.log(phoneNumber.trim()=='')

    if(phoneNumber.trim()==''){
        return response.render('html/layouts-without-menu',{
            prenomInfo :{
                behindPrenom :'valide',
                behindNom:'valide',
                behindEmail:'rempli',
                behindPays:'valide',
                behindPhoneNumber:behindPhoneNumber,
                behindIndice:null,
                info:info,

    
            },
            infoPays:listePays,
           

 })
    
    }

    if(ville.trim()==''){
        return response.render('html/layouts-without-menu',{
            prenomInfo :{
                behindPrenom :'correct',
                behindNom:'correct',
                behindEmail:'rempli',
                behindPays:'correct',
                behindPhoneNumber:'rempli',
                behindIndice:null,
                behindVille:behindville,
                info:info,

    
            },
            infoPays:listePays,
           
            
            

 })
    
    }

    if(Email_Regex.test(email.trim())==false){
        return response.render('html/layouts-without-menu',{
            prenomInfo :{
                behindPrenom :'valide',
                behindNom:'valide',
                behindEmail:'invalide',
                behindPays:'valide',
                behindPhoneNumber:'rempli',
                behindIndice:null,
                behindVille:'valide',
                info:info,

    
            },
            infoPays:listePays,
            
 })
    
    }


       response.status(200).render('html/infos-colis-expedition',{
         infoRecupererDeLaPage1 :info
       });

}
  
    


exports.Page1Demand =Page1Demand