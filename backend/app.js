import express from 'express';
import usuariosRoutes from './routes/usuariosRoutes.js'
import produtosRoutes from './routes/produtosRoutes.js'

// Instância o express
const app = express();

// Agora o express pode ler JSON
app.use(express.json())
// Usa o rota de usuarios

// Toda requisição que começar com "/usuarios", manda para o arquivo de rotas de produtos 
app.use('/usuarios', usuariosRoutes);

// Toda requisição que começar com "/produtos", manda para o arquivo de rotas de produtos 
// Rotas para PRODUTOS
app.use('/produtos', produtosRoutes);

export default app;