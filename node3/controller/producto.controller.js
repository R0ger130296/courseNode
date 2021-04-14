const { json } = require("express");
const Producto = require("../models/Producto.models");

exports.crearProducto = async (req, res) => {
    try {
        //creamos el producto
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error del servidor")
    }
};

exports.leerProducto = async (req, res) => {
    try {
        const producto = await Producto.find();
        res.json({
            resultado: producto,
            mensaje: "Exito"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("Error del servidor")
    }
}

exports.updateProducto = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(400).json({
                mensaje: "No se encontro el producto"
            })
        }
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findByIdAndUpdate(
            { _id: req.params.id },
            producto,
            { new: true }
        )
        res.json({
            resultado: producto,
            mensaje: "Actualizado Ok"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("Error del servidor")
    }
}

exports.leerUnProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(400).json({
                mensaje: "No se encontro el producto"
            })
        }
        res.json({
            resultado: producto,
            mensaje: "Obtenido Ok"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("Error del servidor")
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(400).json({
                mensaje: "No se encontro el producto"
            })
        }
        await producto.delete({_id: req.params.id});
        res.json({
            mensaje: "Eliminado Ok"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("Error del servidor")
    }
}