import { createContext, ReactNode, useState } from 'react'

interface IProduct {
  title: string,
  imdbId: string,
  price: number,
  nProduct: number
}

interface IWishProv {
  children: ReactNode
}

export const WishCartContext = createContext({
  wishs: [{ title: '', imdbId: '', price: 0, nProduct: 1 }],
  addWishsCart: (item: IProduct) => {},
  removeWishsCart: (imdb: string) => {},
  cleanWishCart: () => {}
})

export function WishCartProv ({ children }: IWishProv) {
  const [cartWish, setCartWish] = useState<IProduct[]>([])

  const addWishItem = (movie: IProduct) => {
    const isProduct = cartWish.find(item => item.imdbId === movie.imdbId)

    if (isProduct) {
      const index = cartWish.indexOf(isProduct)
      const newCart = [...cartWish]
      newCart[index].nProduct += 1
      return setCartWish(newCart)
    }

    const itemObject = movie
    setCartWish([...cartWish, itemObject])
  }

  const removeWishItem = (imdb: string) => {
    const filteredCart = cartWish.filter(
      (cartItem) => cartItem.imdbId !== imdb
    )

    setCartWish(filteredCart)
  }

  function clearCartWish () {
    setCartWish([])
  }

  return <WishCartContext.Provider
    value={{
      wishs: cartWish,
      addWishsCart: (item: IProduct) => addWishItem(item),
      removeWishsCart: (imdb: string) => removeWishItem(imdb),
      cleanWishCart: () => clearCartWish()
    }}
    >
      {children}
    </WishCartContext.Provider>
}
