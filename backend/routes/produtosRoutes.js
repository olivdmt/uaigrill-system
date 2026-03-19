import {getAllProducts, createProducts} from "../controllers/produtoController.js";
import { Router } from "express";

// Instância o Router
const router = Router();

// Rota GET: define a rota e chama a função getAllProdcuts()
router.get('/', getAllProducts);
// Rota GET: define a rota e chama a função createProducts()
router.post('/', createProducts);

export default router;