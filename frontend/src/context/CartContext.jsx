import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Função para adicionar ao carrinho
  const addToCart = (produto) => {
    setCart((prevCart) => {
      // Verifica se o item já está no carrinho
      const itemExistente = prevCart.find((item) => item.id === produto.id);

      if (itemExistente) {
        // Se já existe, aumenta a quantidade
        return prevCart.map((item) =>
          item.id === produto.id 
            ? { ...item, quantidade: item.quantidade + 1 } 
            : item
        );
      }
      // Se não existe, adiciona com quantidade 1
      return [...prevCart, { ...produto, quantidade: 1 }];
    });
  };

  const decreaseQuantity = (id) => {
  setCart((prevCart) => {
    const itemExistente = prevCart.find((item) => item.id === id);

    // Se a quantidade for 1, o próximo passo é remover do array
    if (itemExistente && itemExistente.quantidade === 1) {
      return prevCart.filter((item) => item.id !== id);
    }

    // Se for maior que 1, apenas subtrai
    return prevCart.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
    );
  });
};

  // Função para remover ou diminuir quantidade
  const removeFromCart = (id) => {
    setCart((prevCart) => 
      prevCart.filter((item) => item.id !== id)
    );
  };

  const limparCarrinho = () => setCart([]);

  // Cálculo do subtotal (apenas dos itens, sem cupom ainda)
  const subtotal = cart.reduce((acc, item) => acc + (Number(item.preco) * item.quantidade), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, limparCarrinho, decreaseQuantity,subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para facilitar o uso nos componentes
export const useCart = () => useContext(CartContext);