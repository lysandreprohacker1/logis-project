const path = require('path');


const rootDir=require('../utils/api.villes');
const { response } = require('express');

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

let  infoFromPage1;


        

const Page2Demand=(request,response)=>{
   console.log(request.body);
   let description = request.body.description.trim();
   let poids = request.body.poids;
   let hauteur =request.body.hauteur;
   let longueur = request.body.longueur;
   let quantite =request.body.quantite;
   let largeur =request.body.largeur;

   let  infoRecupererDeLaPage1 ={
       nom:request.body.lastName,
       prenom:request.body.firstName,
       email:request.body.email,
       pays:request.body.pays,
       indice:request.body.indicePays,
       phoneNumber:request.body.phoneNumber,
       ville:request.body.ville
   }

   const Information={
    description:description,
    poids:poids,
    hauteur:hauteur,
    largeur:largeur,
    longueur:longueur,
    quantite:quantite
   }

   let  infoFromPage2={
      currentPageInformation:Information,
      infoRecupererDeLaPage1:infoRecupererDeLaPage1
   }


  

   if(description.trim().toLowerCase()=='veuillez décrire votre colis avec au maximum 50 mots'.toLocaleLowerCase() 
      || description.trim().toLocaleLowerCase()=='' )
   {

         return response.render('html/infos-colis-expedition',{
             information:Information,
             behind:{
                description:'invalid',
                poids:null,
                hauteur:null,
                largeur:null,
                longueur:null,
                quantite:null
             },
             infoRecupererDeLaPage1:infoRecupererDeLaPage1



         })
         

   }


   if(largeur.trim().toLowerCase()==''
      || largeur.trim().toLocaleLowerCase()<=0 )
   {

         return response.render('html/infos-colis-expedition',{
             information:Information,
             behind:{
                description:'valid',
                poids:null,
                hauteur:null,
                largeur:'invalid',
                longueur:null,
                quantite:null
             },
             infoRecupererDeLaPage1:infoRecupererDeLaPage1


         })
         

   }

   if(quantite.trim().toLowerCase()==''
   || quantite.trim().toLocaleLowerCase()<=0 )
{

      return response.render('html/infos-colis-expedition',{
          information:Information,
          behind:{
             description:'valid',
             poids:null,
             hauteur:null,
             largeur:'valid',
             longueur:null,
             quantite:'invalid'
          },
          infoRecupererDeLaPage1:infoRecupererDeLaPage1


      })
      

}

console.log(longueur.trim().toLowerCase()==''
, longueur.trim().toLocaleLowerCase()<=0 )

if(longueur.trim().toLowerCase()==''
|| longueur.trim().toLocaleLowerCase()<=0 )
{

   return response.render('html/infos-colis-expedition',{
       information:Information,
       behind:{
          description:'valid',
          poids:null,
          hauteur:null,
          largeur:'valid',
          longueur:'invalid',
          quantite:'valid'
       },
       infoRecupererDeLaPage1:infoRecupererDeLaPage1


   })




}

console.log(poids.trim().toLowerCase()==''
, poids.trim().toLocaleLowerCase()<=0 )

if(poids.trim().toLowerCase()==''
|| poids.trim().toLocaleLowerCase()<=0 )
{

   return response.render('html/infos-colis-expedition',{
       information:Information,
       behind:{
          description:'valid',
          poids:'invalid',
          hauteur:null,
          largeur:'valid',
          longueur:'valid',
          quantite:'valid'
       },
       infoRecupererDeLaPage1:infoRecupererDeLaPage1


   })



   

}


if(hauteur.trim().toLowerCase()==''
|| hauteur.trim().toLocaleLowerCase()<=0 )
{

   return response.render('html/infos-colis-expedition',{
       information:Information,
       behind:{
          description:'valid',
          poids:'valid',
          hauteur:'invalid',
          largeur:'valid',
          longueur:'valid',
          quantite:'valid'
       },
       infoRecupererDeLaPage1:infoRecupererDeLaPage1


   })



   

}

   

}

exports.Page2Demand=Page2Demand;