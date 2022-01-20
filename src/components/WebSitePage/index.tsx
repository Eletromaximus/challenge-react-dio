import { ReactNode, useState } from 'react'
import { Box } from '../../layout/Box'
import Header from '../Header'
import ShoppingCart from '../ShoppingCart'
import WishCart from '../WishCart'
import { ShoppingCarProv } from '../Provider/ShoppingCartContext'
import { WishCartProv } from '../Provider/WishCartContext'

interface IWebSitePages {
  children: ReactNode | any
}
export default function WebSitePages ({
  children
}: IWebSitePages) {
  const [shoppingCar, setShoppingCar] = useState(false)
  const [wishCar, setWishCar] = useState(false)

  return (
    <ShoppingCarProv>
      <WishCartProv>
        <Header
          onWishClick={
            () => setWishCar(!wishCar)
          }
          onItemClick={
            () => setShoppingCar(!shoppingCar)
          }
        />
          <Box
            display='flex'
            justifyContent='space-between'
            width='100%'
          >
            {children}
            {shoppingCar && <ShoppingCart />}
            {wishCar && <WishCart />}
          </Box>
      </WishCartProv>
    </ShoppingCarProv>
  )
}
