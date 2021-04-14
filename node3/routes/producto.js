//rutas para producto
const express = require('express'),
router = express.Router(),
productoController = require ('../controller/producto.controller');

//api/productos
router.post('/crearProducto',productoController.crearProducto);
router.get('/leerProducto',productoController.leerProducto);
router.put('/updateProducto/:id',productoController.updateProducto);
router.get('/leerUnProducto/:id',productoController.leerUnProducto);
router.delete('/eliminarProducto/:id',productoController.eliminarProducto);


module.exports= router;