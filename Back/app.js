//Fernando Arvizu Sotelo
//Archivo principal de servidor
//Dependencias
import express from "express";
import "./db.js"; //Conexion a base de datos
import AdminJS from "adminjs"; //Uso de AdminJS
import AdminJSExpress from "@adminjs/express";//uso de express para adminJS
import mongooseAdminJs from "@adminjs/mongoose";//Uso de mongoose para Adsminjs
//Modelos
import User from './models/Users.js'
import New from "./models/News.js";
import Event from "./models/Events.js";
//Se crea ek nuevo adaptador para que la dependencia registre los modelos 
AdminJS.registerAdapter(mongooseAdminJs);
//Se inicia express
const app = express();
//Le damos los headers para la validacion de solicitudes desde el front
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
//Se crean las configuraciones de AdminJs para su uso 
const adminOptions = {
  resources: [
    {
      resource: User,
      options: {
        properties: {
          _id: {
            isVisible: false,
          },
          password: {
            isVisible: {
              show: false,
              edit: true,
              filter: false
            },
          },
        },
        
       

        navigation: {
          icon: "User",
          name: "Users",
        },

      },
    },
    {
      resource: New,
      options: {
        properties: {
          _id: {
            isVisible: false,
          },
        },
        navigation: {
          icon: "Tree",
          name: "News",
        },

      },
    },
    {
      resource: Event,
      options: {
        properties: {
          _id: {
            isVisible: false,
          },
        },
        navigation: {
          icon: "Purchase",
          name: "Events",
        },
      },
    },
  ],

  rootPath:'/admin',
  branding: {
    companyName: "Optimen | Admin",
    withMadeWithLove: false,
    logo: "https://optimen.com.mx/media/external/logo_optimen.ico",
    favicon: "https://optimen.com.mx/media/external/logo_no_name.png",
  },
};
 //Se le pasan las connfiguraciones a la dependencia
const adminjs = new AdminJS(adminOptions);
//Entonces la dependencia manda las confifuraciones al ruteador y crea todo el front
const router = AdminJSExpress.buildRouter(adminjs)
  
//Usamos el front generado por AdminJS
app.use(adminjs.options.rootPath, router);
//Se conecta a la base de datos
app.listen(4000);
console.log("server listen on port", 4000);
