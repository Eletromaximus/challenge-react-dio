import { useState } from 'react'
import ContextProvider from './components/Provider'
import Header from './components/Header'
import WishCart from './components/WishCart'
import ShoppingCart from './components/ShoppingCart'
import { Box } from './layout/Box'
import HomePage from './screens/HomePage'
import CheckoutPage from './screens/CheckoutPage'

export default function WebSitePages () {
  const [shoppingCar, setShoppingCar] = useState(false)
  const [wishCar, setWishCar] = useState(false)
  const [content, setContent] = useState(<HomePage />)

  return (
    <ContextProvider>
        <Header
          onWishClick={
            () => {
              setWishCar(!wishCar)
              setShoppingCar(false)
            }
          }

          onItemClick={
            () => {
              setShoppingCar(!shoppingCar)
              setWishCar(false)
            }
          }

          onContent={() => {
            setContent(<HomePage />)
            setWishCar(false)
            setShoppingCar(false)
          }}
        />
          <Box
            display='flex'
            justifyContent='space-between'
            width='100%'
          >
            {content}
            {shoppingCar && <ShoppingCart
              onCheckout={() => {
                setContent(<CheckoutPage />)
                setShoppingCar(false)
              }
            }
            />}
            {wishCar && <WishCart
              onCheckout={() => {
                setContent(<CheckoutPage />)
                setWishCar(false)
              }}
            />}
          </Box>
    </ContextProvider>
  )
}
