import { getAllUser, createUser } from '../controllers/usuariosController.js';
import { Router } from 'express';

// Instância o router
const router = Router();

// Rota GET: destinada a busca de usuarios chamando a função getAllUser
router.get('/', getAllUser);
// Rota POST: Destinada a criação de um novo usuário
router.post('/', createUser)

// Exporta as rotas para que o app.js consiga vizualizar
export default router;