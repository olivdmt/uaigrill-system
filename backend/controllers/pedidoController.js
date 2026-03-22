import createOrder from '../services/pedidoService.js';
import Pedido from '../models/pedido.js';

// Rota para criar um novo pedido
const create = (async(req,res) => {
    // Se tudo der certo criamos o pedido
    try {
        const pedido = await createOrder(req.body);
        res.status(201).json(pedido);
    } catch (error) {
        // Se der erro retornamos o status e mostramos o log
        return res.status(400).json({ messagem: error.message})
    }
});

// Rota para obter um novo pedido
const getOrder = (async(req, res) => {
    try {
        const pedido = await Pedido.findAll();
        res.status(200).json(pedido);
    } catch (error) {
        res.status(404).json(`Error query order: ${error.message}`);
    }
});

export { create, getOrder };