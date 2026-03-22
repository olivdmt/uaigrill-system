import api from './api';

export const pedidoService = {
    // Listar todos os produtos para o cardápio
    getProdutos: async () => {
        const reponse = await api.get('/produtos');
        return response.data;
    },

    // Enviar o carrinho e o cupom para criar o pedido
    criarPedido: async(dados) => {
        try {
            const response = await api.post('/pedidos', dados);
            return response.data;
        } catch (error) {
            // Capturamos aquele erro do backend
            throw error.response?.data?.messagem || "Error processing order";
        }
    }
};