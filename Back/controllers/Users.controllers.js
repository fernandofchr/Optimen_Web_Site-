// codigo echo por fernando

import Users from '../models/Users'

// Encuentra todos los usuarios
export const findAllUsers= async(req,res)=>{
     try {
        const users = await Users.find()
        res.json(users);
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al deovlver los usuarios'})
     }
}

// Crea un usuario nuevo
export const createUser= async(req,res)=>{
    // Si el nombre del usuario no se proporciona, se envía un error de respuesta
    if(!req.body.nombreUsuario){   
        return res.status(400).json({message: 'Nombre usuario es requerido'})
     }
    try {
        // Crea un nuevo objeto de usuario con la información proporcionada en la solicitud
        const newUser= new Users({
            idUser:req.body.nombreUsuario,
            username:req.body.apellidosUsuario,
            email:req.body.rol,
            password:req.body.correo,
            role:req.body.estado,
        });
        // Guarda el usuario nuevo en la base de datos y envía el usuario guardado como respuesta
        const  userSaved = await newUser.save();
        res.json(userSaved); 
    } catch (error) {
        console.log(req.body);
        // Si ocurre un error durante la creación del usuario, se envía un error de respuesta
        res.status(500).json({message: error.message||'ocurrio un error al crear al usuario'})
    }
}

// Encuentra un usuario por su ID
export const findOneUser= async(req ,res)=>{
    const {id}= req.params;
    try {
        // Busca un usuario por su ID en la base de datos
        const user = await Users.findById(id);
        // Si el usuario no se encuentra, se envía un error de respuesta
        if(!user)
            return res.status(404).json({message:'el usuario con es id no existe'});
        // Envía el usuario encontrado como respuesta
        res.json(user);
    } catch (error) {
        // Si ocurre un error durante la búsqueda del usuario, se envía un error de respuesta
        res.status(500).json({message: error.message||'Eror con ese id'})
    }
}

// Elimina un usuario por su ID
export const deleteUser= async(req,res)=>{
    const {id}= req.params;
   try {
        // Busca un usuario por su ID en la base de datos y lo elimina
        const data= await Users.findByIdAndDelete(id);
        // Envía un mensaje de confirmación como respuesta
        res.json({
            message: 'el usuario a sido eliminado'
        });
   } catch (error) {
        // Si ocurre un error durante la eliminación del usuario, se envía un error de respuesta
        res.status(500).json({message:'Error, el usuario no fue liminado'});
   }
}

// Actualiza un usuario por su ID
export const updateUser= async(req,res)=>{
   try {
        // Busca un usuario por su ID en la base de datos y actualiza la información con la proporcionada en la solicitud
        await Users.findByIdAndUpdate(req.params.id,req.body,{
            useFindAndModify:false
        });
        // Envía un mensaje de confirmación como respuesta
        res.json({message: "usuario actualizado"});
   } catch (error) {
        // Si ocurre un error durante la actualización del usuario, se envía un error de respuesta
        res.status(500).json({message:'No se puedo actualizar'});
   }
}
