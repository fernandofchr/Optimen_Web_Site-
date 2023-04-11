//Codigo echo por fernando

import Proyectos from '../models/Events';

// Encontrar todos los proyectos
export const findAllProyectos= async(req,res)=>{
     try {
        const proyectos = await Proyectos.find()
        res.json(proyectos);
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al deovolver los proyectos'})
     }
}

// Crear un nuevo proyecto
export const  createProyecto= async(req,res)=>{
    if(!req.body.proyectName){   
        return res.status(400).json({message: 'Nombre del proyecto es requerido'})
     }
    try {
        const newProyecto= new Proyectos({
            idEvento:req.body.idEvento,
            evento:req.body.evento,
            ubicacion:req.body.ubicacion,
            fechaEvento:req.body.fechaEvento,
            horaEvento:req.body.horaEvento,
            imagen:req.body.imagen,
        });
        const  proyectoSaved = await newProyecto.save();
        res.json(proyectoSaved); 
    } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al crear el proyecto'})
    }
}

// Encontrar un proyecto por ID
export const findOneProyecto= async(req ,res)=>{
    const {id}= req.params;
    try {   
        const proyecto = await Proyectos.findById(id);
        if(!proyecto)
            return res.status(404).json({message:'el proyecto con es id no existe'});
        res.json(proyecto);
    } catch (error) {
        res.status(500).json({message: error.message||'Eror con ese id'})
    }
}

// Eliminar un proyecto por ID
export const deleteProyecto= async(req,res)=>{
    const {id}= req.params;
   try {
    const data= await Proyectos.findByIdAndDelete(id);
    res.json({
        message: 'el proyecto ha sido eliminado'
    });
   } catch (error) {
    res.status(500).json({message:'Error, el proyecto no fue liminado'});
   }
}

// Actualizar un proyecto por ID
export const updateProyecto= async(req,res)=>{
   try {
    await Proyectos.findByIdAndUpdate(req.params.id,req.body,{
        useFindAndModify:false
       });
    res.json({message: "proyecto actualizado"});
   } catch (error) {
    res.status(500).json({message:'No se puedo actualizar'});
   }
}
