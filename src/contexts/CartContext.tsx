import { ReactNode, createContext, useState } from "react";

export interface Cart {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContext {
  cart: Cart[]
  onSetProductInCart: (data: Cart) => void
  onRemoveProductInCart: (id: string) => void
}

export const CartContext = createContext({} as CartContext)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([])

  function onSetProductInCart(data: Cart) {
    const existingProduct = cart.find(item => item.id === data.id)

    if (existingProduct) {
      return
    }

    setCart(prev => [...prev, data])
  }

  function onRemoveProductInCart(id: string){
    const removingItem = cart.filter(item => item.id !== id)

    setCart(removingItem)
  }

  return (
    <CartContext.Provider value={{
      cart,
      onSetProductInCart,
      onRemoveProductInCart
    }}>
      {children}
    </CartContext.Provider>
  )
}