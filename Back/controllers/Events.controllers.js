//Codigo echo por fernando

import Tasks from '../models/News'; // Importa el modelo de tareas desde el archivo "../models/News".

// Esta función se utiliza para buscar todas las tareas en la base de datos.
export const findAllTasks= async(req,res)=>{
     try {
        const tasks = await Tasks.find() // Utiliza el método "find" del modelo de tareas para buscar todas las tareas.
        res.json(tasks); // Devuelve un objeto JSON que contiene todas las tareas.
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al deovolver los tareas'}) // Devuelve un error 500 si se produce un error al buscar las tareas.
     }
}

// Esta función se utiliza para crear una nueva tarea en la base de datos.
export const  createTask= async(req,res)=>{
    if(!req.body.nombreTarea){   
        return res.status(400).json({message: 'Nombre de la tarea es requerido'}) // Devuelve un error 400 si no se proporciona el nombre de la tarea en la solicitud HTTP.
     }
    try {
        const newTask= new Tasks({ // Crea un nuevo objeto de tarea utilizando los datos proporcionados en la solicitud HTTP.
            nombreProyecto:req.body.nombreProyecto,
            nombreTarea:req.body.nombreTarea,
            descripcion:req.body.descripcion,
            fechaEntrega:req.body.fechaEntrega,
            estado:req.body.estado,
            responsable:req.body.responsable,
        });
        const  taskSaved = await newTask.save(); // Guarda la nueva tarea en la base de datos.
        res.json(taskSaved); // Devuelve un objeto JSON que contiene los datos de la tarea creada.
    } catch (error) {
        console.log(req.body);
        res.status(500).json({message: error.message||'ocurrio un error al crear la tarea'}) // Devuelve un error 500 si se produce un error al crear la tarea.
    }
}

// Esta función se utiliza para buscar una tarea por su ID en la base de datos.
export const findOneTask= async(req ,res)=>{
    const {id}= req.params; // Obtiene el ID de la tarea de la solicitud HTTP.
    try {
        const task = await Tasks.findById(id); // Utiliza el método "findById" del modelo de tareas para buscar una tarea por su ID.
        if(!task)
            return res.status(404).json({message:'la tarea con ese id no existe'}); // Devuelve un error 404 si no se encuentra la tarea.
        res.json(task); // Devuelve un objeto JSON que contiene los datos de la tarea encontrada.
    } catch (error) {
        res.status(500).json({message: error.message||'Eror con ese id'}) // Devuelve un error 500 si se produce un error al buscar la tarea.
    }
}

// Esta función se utiliza para eliminar una tarea por su ID de la base de datos.
export const deleteTask= async(req,res)=>{
    const {id}= req.params; // Obtiene el ID de la tarea de la solicitud HTTP.
   try {
        const data= await Tasks.findByIdAndDelete(id); // Utiliza el método "findByIdAndDelete" del modelo de tareas para buscar y eliminar una tarea por su ID.
        res.json({message: 'la tarea ha sido eliminada'}); // Devuelve un mensaje de éxito en un objeto JSON si se elimina la tarea correctamente.
   } catch (error) {
    res.status(500).json({message:'Error, la tarea no fue eliminada'});
   }

}

export const updateTask= async(req,res)=>{

   try {
    await Tasks.findByIdAndUpdate(req.params.id,req.body,{
        useFindAndModify:false
       });
    
       res.json({message: "tarea actualizada"});
    
   } catch (error) {
    res.status(500).json({message:'No se puedo actualizar'});
   }
}