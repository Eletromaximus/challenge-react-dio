import { createContext, ReactNode, useState } from 'react'

interface IShoppingCarProv {
  children: ReactNode
}

interface IProduct {
  title: string,
  imdbId: string,
  price: number,
  nProduct: number
}

export const ShoppingCartContext = createContext({
  items: [{ title: '', imdbId: '', price: 0, nProduct: 0 }],
  addItemsCart: (item: IProduct) => {},
  removeItemsCart: (item: IProduct) => {},
  cleanCart: () => {}
})

export const ShoppingCarProv = ({ children }: IShoppingCarProv) => {
  const [cart, setCart] = useState<IProduct[]>([])

  const handleAddItemCart = (movie: IProduct) => {
    const isProduct = cart.find(item => item.imdbId === movie.imdbId)

    if (isProduct) {
      const index = cart.indexOf(isProduct)
      const newCart = [...cart]
      newCart[index].nProduct += 1
      return setCart(newCart)
    }

    const itemObject = movie
    setCart([...cart, itemObject])
  }

  const handleRemoveItemCart = (movie: IProduct) => {
    const isProduct = cart.find(item => item.imdbId === movie.imdbId)

    if (movie.nProduct > 1 && isProduct) {
      const index = cart.indexOf(isProduct)
      const newCart = [...cart]
      newCart[index].nProduct -= 1
      return setCart(newCart)
    }

    const filteredCart = cart.filter(
      (cartItem) => cartItem.title !== movie.title
    )

    setCart(filteredCart)
  }

  function clearCart () {
    setCart([])
  }

  return <ShoppingCartContext.Provider
    value={{
      items: cart,
      addItemsCart: (item: IProduct) => handleAddItemCart(item),
      removeItemsCart: (item: IProduct) => handleRemoveItemCart(item),
      cleanCart: () => clearCart()
    }}
  >
    {children}
  </ShoppingCartContext.Provider>
}
