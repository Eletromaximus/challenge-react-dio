import { Button } from '@material-ui/core'
import { Delete } from '@mui/icons-material'
import { useContext } from 'react'
import { Box } from '../../layout/Box'
import MovieCard from '../Cards/MovieCard'
import { CartContext } from '../Provider/ShoppingCartContext'

interface IShoppingCart {
  onCheckout: () => void
}

export default function ShoppingCart ({ onCheckout }: IShoppingCart) {
  const { status, dispatch } = useContext(CartContext)

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
          width={{
            sm: '400px',
            xs: '320px'
          }}
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
            <Button
              onClick={() => onCheckout()}
            >
              <h4>Meu Carrinho</h4>
            </Button>

            <Button
              variant='outlined'
              endIcon={<Delete />}
              size='small'
              onClick={() => dispatch({ type: 'cleanCart' })}
            >
              Esvaziar
            </Button>
          </Box>

            {status.length > 0 && status.map((item) => (
              <MovieCard
                nProduct={item.nProduct}
                price={item.price}
                removeMovie={() => dispatch({
                  type: 'removeMovie',
                  imdb: item.imdbId
                })}
                title={item.title}
                key={item.imdbId}
              />
            ))}

        </Box>

      </aside>
  )
}
