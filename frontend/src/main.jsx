import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'

import Home from './pages/Home/home.jsx'
import Menu from './pages/Cardapios/cardapio.jsx'
import Contact from './pages/Contato/contato.jsx'
import Promotion from './pages/Promocoes/promocoes.jsx'
import Carrinho from './pages/Carrinho/carrinho.jsx'
import Checkout from './pages/Checkout/checkout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> {/* Renderiza a página Home */}
      <Route path='/menu' element={<Menu />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/promocoes' element={<Promotion />}/>
      <Route path='/carrinho' element={<Carrinho />}/>
      <Route path='/checkout' element={<Checkout />}/>
    </Routes>
  </BrowserRouter>
)
