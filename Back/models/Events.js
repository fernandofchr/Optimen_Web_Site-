//Esquema de base de datos para Eventos
//Yesenia martinez e Itzel Alexandra

import { Schema, model } from "mongoose";

const  eventsSchema = new Schema({
    idEvento:{
        type:Number,
        require:true,
        unique: true
    },
    evento:{
        type: String,
        require:true
    },
    descripcion:{
        type: String,
        require:true
    },
    ubicacion: {
        type: String,
        require:true
    },
    fechaEvento:{
        type: String,
        require:true
    },
    horaEvento:{
        type: String,
        require: true

    },
    imagen:{
        type: String,
        require:true
    }

},{
    timestamps: true,
    versionKey: false
})

export default model('Events', eventsSchema)