import axios from 'axios'; // Importe o axios aqui

// Busca a URL do .env (Render) ou usa o localhost se estiver vazio
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Criamos a instância da API
const api = axios.create({
    baseURL: API_URL
});

export const pedidoService = {
    // Listar todos os produtos para o cardápio
    getTodos: async () => {
        try {
            const response = await api.get('/produtos');
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            throw error;
        }
    },

    // Enviar o carrinho e o cupom para criar o pedido
    criarPedido: async (dados) => {
        try {
            const response = await api.post('/pedidos', dados);
            return response.data;
        } catch (error) {
            // Capturamos o erro do backend. 
            // Dica: Verifique se no seu controller está 'mensagem' ou 'messagem'
            throw error.response?.data?.mensagem || error.response?.data?.messagem || "Erro ao processar pedido";
        }
    }
};