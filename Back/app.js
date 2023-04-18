//Fernando Arvizu Sotelo
//Archivo principal de servidor
//Dependencias

import express, { request } from "express";
import "./db.js"; //Conexion a base de datos
import AdminJS from "adminjs"; //Uso de AdminJS
import AdminJSExpress from "@adminjs/express"; //uso de express para adminJS
import mongooseAdminJs from "@adminjs/mongoose"; //Uso de mongoose para Adsminjs
import bodyParser from "body-parser";
//Modelos
import User from "./models/Users.js";
import New from "./models/News.js";
import Event from "./models/Events.js";
import Contac from "./models/Contac.js";
//Se crea ek nuevo adaptador para que la dependencia registre los modelos
AdminJS.registerAdapter(mongooseAdminJs);
//Se inicia express
const app = express();
//Le damos los headers para la validacion de solicitudes desde el front
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/news", async (req, res) => {
  try {
    const news = await New.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener noticias" });
  }
});
app.get("/events", async (req, res) => {
  try {
    const evetns = await Event.find();
    res.status(200).json(evetns);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener noticias" });
  }
});
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener noticias" });
  }
});


app.post("/message", async (req, res) => {
  try {
    // Crea una nueva instancia del modelo Event con los datos de la solicitud
    const mesage = new Contac(req.body);

    // Guarda el evento en la base de datos
    await mesage.save();

    // Si se guarda correctamente, devuelve un estado HTTP 201 (Creado) junto con el evento creado en formato JSON
    res.status(201).json(mesage);
  } catch (error) {
    // Si ocurre un error, devuelve un estado HTTP 500 (Error interno del servidor) y un mensaje de error en formato JSON
    res.status(500).json({ message: "Error al crear el evento" });
  }
});

// handle authentication
const authenticate = async (email, password) => {
  const user = await User.findOne({ email });
  if (user) {
    const matched = password == user.password;
    if (matched) {
      return user;
    }
  }
  return false;
};

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
            type: "password",
            isVisible: {
              show: false,
              edit: true,
            },
          },
          createdAt:{
            isVisible:{
              filter: false,
              edit: true,
              show : true,
              list: true,
            }
          },
          updatedAt:{
            isVisible:{
              filter: false,
              edit: true,
              show : true,
              list: true,
            }
          },
        },
        actions: {
          new: {
            isAccessible: ({ currentAdmin }) =>
              (currentAdmin && currentAdmin.role === "root") ||
              currentAdmin.role === "admin",
              isVisible: ({ currentAdmin }) =>
              (currentAdmin && currentAdmin.role === "root") ||
              currentAdmin.role === "admin",
          },
          edit: {
            isAccessible: ({ currentAdmin }) =>
              (currentAdmin && currentAdmin.role === "root") ||
              currentAdmin.role === "admin",
            isVisible: ({ currentAdmin }) =>
              (currentAdmin && currentAdmin.role === "root") ||
              currentAdmin.role === "admin",
          },
          delete: {
            isAccessible: ({ currentAdmin }) =>
              (currentAdmin && currentAdmin.role === "root") ||
              currentAdmin.role === "admin",
            isVisible: ({ currentAdmin }) =>
              (currentAdmin && currentAdmin.role === "root") ||
              currentAdmin.role === "admin",
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
          createdAt:{
            isVisible:{
              filter: false,
              edit: true,
              show : true,
              list: true,
            }
          },
          updatedAt:{
            isVisible:{
              filter: false,
              edit: true,
              show : true,
              list: true,
            }
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
            isVisible: false
          },
          createdAt:{
            isVisible:{
              filter: false,
              edit: true,
              show : true,
              list: true,
            }
          },
          updatedAt:{
            isVisible:{
              filter: false,
              edit: true,
              show : true,
              list: true,
            }
          },
        },
        navigation: {
          icon: "Purchase",
          name: "Events",
        },
      },
    },
    {
      resource: Contac,
      options: {
        properties: {
          _id: {
            isVisible: false
          },
          createdAt:{
            isVisible:{
              filter: false,
              edit: true,
              show : true,
              list: true,
            }
          },
          updatedAt:{
            isVisible:{
              filter: false,
              edit: true,
              show : true,
              list: true,
            }
          },
        },
        navigation: {
          icon: "Industry",
          name: "Contact",
        },
      },
    },
  ],

  rootPath: "/admin",
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
const router = AdminJSExpress.buildAuthenticatedRouter(
  adminjs,
  {
    authenticate,
    cookieName: "AdminJS",
    cookiePassword: "Secret",
  },
  null,
  {
    resave: true,
    saveUninitialized: true,
    secret: "Secret",
    name: "adminjs",
  }
);

//Usamos el front generado por AdminJS
app.use(adminjs.options.rootPath, router);

app.use(bodyParser.json());  

//Se conecta a la base de datos
app.listen(4000);
console.log("server listen on port", 4000);
