//Esquema de base de datos para Usuarios
//Fernando Arvizu Sotelo
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    idUser: {
      type: String,
      require: true
    
    },
    username: {
      type: String,
      unique: false,
      require: true
    },
    email: {
      type: String,
      unique: true,
      require: true
    },
    password: { 
      type: String,
      unique: false,
      require: true

    },
    role: 
    { 
      type: String,
      enum: ['admin', 'creator'],
      require: true
    },
  },{
    timestamps: true,
    versionKey: false
  }
);

export default model('User', userSchema);