import { ReactNode, useState } from 'react'
import { Box } from '../../layout/Box'
import Header from '../Header'
import ShoppingCard from '../ShoppingCard'
import { ShoppingCarProv } from '../Provider'

interface IWebSitePages {
  children: ReactNode | any
}
export default function WebSitePages ({
  children
}: IWebSitePages) {
  const [shoppingCar, setShoppingCar] = useState(false)

  return (
    <ShoppingCarProv>
      <Header onClick={
        () => setShoppingCar(!shoppingCar)}
      />
        <Box
          display='flex'
          justifyContent='space-between'
          width='100%'
        >
          {children}
          {shoppingCar && <ShoppingCard />}
        </Box>
    </ShoppingCarProv>
  )
}
