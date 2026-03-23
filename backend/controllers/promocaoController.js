import Promotion from '../models/promocao.js';

// Rota GET: Para buscar promoções
export const getPromotion = async(req, res) => {
    try {
        const promotions = await Promotion.findAll({
            where: {  disponiblidade: true }
        });
        res.status(200).json(promotions);
    } catch (error) {
        res.status(500).json(`Error searching promotions: ${error.message}`);
    }
};

 // Rota POST: Para postar promoções
export const createPromotion = async(req, res) => {
    try {
        // Armaazena os valores que vem do body
        const { nome, descricao, categoria, preco, imagem, disponiblidade} = req.body;
        // Salvamos os dados no banco
        const newPromotion = await Promotion.create({ nome, descricao, categoria, preco, imagem, disponiblidade});
        // Retornamos de volta ao cliente
        res.status(201).json(newPromotion);
    } catch (error) {
        res.status(404).json(`Error creating promotion: ${error.message}`);
    }
}