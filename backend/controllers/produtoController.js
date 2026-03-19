import Product from '../models/produtos.js';

// ROTA GET: Para listar todos os produtos
export const getAllProducts = async(req,res) => {
    try {
        // Busca por todos os produtos no Banco
        const products = await Product.findAll();
        // Retorna a resposta pro cliente
        res.status(200).json(products);
    } catch (error) {
        // Status 500 para mostrar que não foi possível requisição no banco
        res.status(500).json(`Error searching products: ${error.message}`);
    }
}

// ROTA POST: Função assincrona para criar um novo produto
export const createProducts = async(req, res) => {
    try {
        // Salva a requisição do body no postgres
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        // Se houver erro, ele exibi o log de erros
        res.status(404).json(`Erro creating product: ${error.message}`);
    }
}