import express from 'express';
import usuariosRoutes from './routes/usuariosRoutes.js';
import produtosRoutes from './routes/produtosRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import cors from 'cors';

// Instância o express
const app = express();
app.use(cors());

// Agora o express pode ler JSON
app.use(express.json())
// Usa o rota de usuarios

// Toda requisição que começar com "/usuarios", manda para o arquivo de rotas de produtos 
app.use('/usuarios', usuariosRoutes);

// Toda requisição que começar com "/produtos", manda para o arquivo de rotas de produtos 
// Rotas para PRODUTOS
app.use('/produtos', produtosRoutes);

// Rotas para PEDIDOS
app.use('/pedidos', pedidoRoutes);

export default app;