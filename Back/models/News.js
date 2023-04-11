//Esquema de base de datos para Noticias
//Fernando Arvizu Sotelo
import { Schema, model } from "mongoose";

const  newsSchema = new Schema({
    idNotice:{
        type:Number,
        require:true,
        unique: true
    },
    titulo: {
        type: String,
        require:true
    },
    descripcion: {
        type: String,
        require:true
    },
    ubicacion: {
        type: String,
        require:true
    },
    autor:{
        type: String,
        require:true
    },
    imagen:{
        type: String,
        require:true
    }

},{
    timestamps: true,
    versionKey: false
})

export default model('News', newsSchema)