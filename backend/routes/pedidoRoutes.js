import { Router } from 'express';
import {create, getOrder} from '../controllers/pedidoController.js';

// Instância do router
const router = Router();

router.post('/', create);
router.get('/:id', getOrder);

export default router;