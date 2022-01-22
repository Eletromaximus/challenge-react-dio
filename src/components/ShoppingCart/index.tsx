import { Button } from '@material-ui/core'
import { Delete } from '@mui/icons-material'
import { useContext } from 'react'
import { Box } from '../../layout/Box'
import MovieCard from '../Cards/MovieCard'
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
              <MovieCard
                nProduct={item.nProduct}
                price={item.price}
                removeMovie={() => removeItemsCart(item)}
                title={item.title}
                key={item.imdbId}
              />
            ))}

        </Box>

      </aside>
  )
}
