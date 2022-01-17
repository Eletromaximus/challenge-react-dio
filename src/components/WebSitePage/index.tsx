import { useState } from 'react'
import { Box } from '../../layout/Box'
import Header from '../Header'
import ShoppingCard from '../ShoppingCard'

interface IWebSitePages {
  // eslint-disable-next-line no-undef
  children: React.ReactNode | any
}
export default function WebSitePages ({
  children
}: IWebSitePages) {
  const [shoppingCar, setShoppingCar] = useState(false)

  return (
    <>
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
    </>
  )
}
