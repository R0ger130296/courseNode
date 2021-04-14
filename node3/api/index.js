const express = require('express');
const conectarDB = require('../config/db')
//creamos el servidor
const app = express();
const routes = require('../routes/producto')

//conectamos a la base de datos
conectarDB();
//para q se pueda enviar json a nuestra aplicacion
app.use(express.json());
//Ruta provicional
// app.get('/',(req,res)=>{
//    return res.send("Ruta de prueva"); 
// });
//se cambia las rutas por esta
app.use('/server', routes)
app.listen(3000,()=>{
    console.log("servidor en linea")
})