import { Button } from '@material-ui/core'
import { Delete } from '@mui/icons-material'
import { useContext } from 'react'
import { Box } from '../../layout/Box'
import { ShoppingCartContext } from '../Provider/ShoppingCartContext'

export default function ShoppingCart () {
  const {
    items,
    cleanCart,
    removeItemsCart
  } = useContext(ShoppingCartContext)

  return (
    <aside
      style={{
        position: 'absolute',
        zIndex: 1,
        right: 0
      }}
    >
        <Box
          className="shopping-car"
          width='400px'
          height='150vh'
          display='flex'
          flexDirection='column'
          border='1px solid gray'
          backgroundColor='#FFFFFF'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            margin='5px'
          >
            <h4>Meu Carrinho</h4>

            <Button
              variant='outlined'
              endIcon={<Delete />}
              size='small'
              onClick={() => cleanCart()}
            >
              Esvaziar
            </Button>
          </Box>

            {items.length >= 0 && items.map((item) => (
              <Box
                key={item.title}
                className="product"
                width='100%'
                padding='5px'
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <Box
                  width='64px'
                  height='64px'
                  className="icone-of-movie"
                >
                  <img src="./icone-loading.png" alt="" />
                </Box>

                <Box className="name-of-product">
                  {item.title.substring(0, 20)}
                </Box>

                <Box
                  justifyContent='space-between'
                  display='flex'
                  width='90px'
                >
                  <p>{item.nProduct}</p>
                  <p>R$ {item.price}</p>
                </Box>

                <Button
                  variant='outlined'
                  endIcon={<Delete />}
                  size='small'
                  onClick={() => removeItemsCart(item)}
                />
              </Box>
            ))}

        </Box>

      </aside>
  )
}
