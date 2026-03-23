import { Router } from 'express';
import { getPromotion, createPromotion } from '../controllers/promocaoController.js';

// Instância o router
const router = Router();

router.get('/', getPromotion);
router.post('/', createPromotion);