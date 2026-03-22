import api from './api';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: API_URL
});

export const pedidoService = {
    // Listar todos os produtos para o cardápio
    getTodos: async () => {
        const response = await api.get('/produtos');
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