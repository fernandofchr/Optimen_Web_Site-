//Esquema de base de datos para Contact-Us
//Fernando Arvizu Sotelo

import { Schema, model } from "mongoose";

const  contactSchema = new Schema({
    name:{
        type:Number,
        require:true,
        unique: true
    },
    email:{
        type: String,
        require:true
    },
    phone:{
        type: String,
        require:true
    },
    subject: {
        type: String,
        require:true
    },
    message:{
        type: String,
        require:true
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('Contact', contactSchema)