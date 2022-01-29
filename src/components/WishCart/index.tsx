import { Button } from '@material-ui/core'
import { Delete } from '@mui/icons-material'
import { useContext } from 'react'
import { Box } from '../../layout/Box'
import { Context } from '../Provider'
import WishCard from '../Cards/WishCard'

interface IWishCart {
  onCheckout: () => void
}

export default function WishCart ({ onCheckout }: IWishCart) {
  const {
    wish,
    dispatchMovie,
    dispatchWish
  } = useContext(Context)

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
              onClick={() => dispatchWish({ type: 'cleanWishs' })}
            >
              Esvaziar
            </Button>
          </Box>

            {wish.length >= 0 && wish.map((wish) => (
              <WishCard
                onAdd={() => dispatchMovie({ type: 'addMovie', payload: wish })}
                onRemove={() => dispatchWish({
                  type: 'removeWish',
                  imdb: wish.imdbId
                })}
                price={wish.price}
                title={wish.title}
                key={wish.imdbId}
              />
            ))}

        </Box>

      </aside>
  )
}
