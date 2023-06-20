import { useContext, useState } from 'react'

import Image from 'next/image'

import { CartContext } from '@/contexts/CartContext'

import axios from 'axios'
import * as Dialog from '@radix-ui/react-dialog'

import { X, Handbag } from '@phosphor-icons/react'

import * as C from './styles'

export function Cart() {
  const [isLoading, setIsLoading] = useState(false)
  const { cart, onRemoveProductInCart } = useContext(CartContext)

  const totalValue = cart.reduce((acc, cur) => ((acc + cur.numberPrice)), 0)
  const priceToBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(totalValue)
  const cartLenght = cart.length
  
  async function handleBuyProduct() {
    try {
      setIsLoading(true)
      const response = await axios.post("/api/checkout", {
        products: cart,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      alert('Falha no redirect')
    }
  }

  return (
    <Dialog.Root>
      <C.DialogTrigger>
        {cartLenght > 0 && <span>{cartLenght}</span>}
        <Handbag size={24} weight="bold" />
      </C.DialogTrigger>
      <Dialog.Portal>
        {/* <C.DialogOverlay /> */}
        <C.DialogContent>

          <C.DialogClose>
            <X size={24} weight="bold" />
          </C.DialogClose>

          <C.Products>
            <Dialog.Title>Sacola de Compras</Dialog.Title>
            <C.ImagesContainer>
              {cart.map(product => (
                <C.Image key={product.id}>
                  <C.BackgroundImage>
                    <Image
                      src={product.imageUrl}
                      alt=""
                      width={80}
                      height={60}
                    />
                  </C.BackgroundImage>
                  <C.Details>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                    <button
                      onClick={() => onRemoveProductInCart(product.id)}
                    >
                      Remover
                    </button>
                  </C.Details>
                </C.Image>
              ))}
            </C.ImagesContainer>
          </C.Products>

          <C.Order>
            <C.Quantity>
              <span>Quantidade</span>
              <span>
                {cartLenght} 
                {cartLenght === 1 ? " item" : " itens"}
              </span>
            </C.Quantity>
            <C.Quantity>
              <C.Value>Valor</C.Value>
              <C.Value>{priceToBRL}</C.Value>
            </C.Quantity>

            <button
              onClick={handleBuyProduct}
              disabled={isLoading || cartLenght <= 0}
            >
              Finalizar Compra
            </button>
          </C.Order>

        </C.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}