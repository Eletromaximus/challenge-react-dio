import { Button } from '@material-ui/core'
import { Delete } from '@mui/icons-material'
import { useContext } from 'react'
import { Box } from '../../layout/Box'
import { WishCartContext } from '../Provider/WishCartContext'

export default function WishCart () {
  const {
    wishs,
    removeWishsCart,
    cleanWishCart
  } = useContext(WishCartContext)

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
              onClick={() => cleanWishCart()}
            >
              Esvaziar
            </Button>
          </Box>

            {wishs.length >= 0 && wishs.map((wish) => (
              <Box
                key={wish.title}
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
                  {wish.title.substring(0, 20)}
                </Box>

                <Box
                  justifyContent='space-between'
                  display='flex'
                  width='90px'
                >
                  <p>R$ {wish.price}</p>
                </Box>

                <Button
                  variant='outlined'
                  endIcon={<Delete />}
                  size='small'
                  onClick={() => removeWishsCart(wish.imdbId)}
                />
              </Box>
            ))}

        </Box>

      </aside>
  )
}
