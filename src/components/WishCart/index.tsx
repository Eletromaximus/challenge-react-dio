import { Button } from '@material-ui/core'
import { Delete } from '@mui/icons-material'
import { useContext } from 'react'
import { Box } from '../../layout/Box'
import { ShoppingCartContext } from '../Provider/ShoppingCartContext'
import { WishCartContext } from '../Provider/WishCartContext'
import WishCard from '../Cards/WishCard'

export default function WishCart () {
  const {
    wishs,
    removeWishsCart,
    cleanWishCart
  } = useContext(WishCartContext)
  const { addItemsCart } = useContext(ShoppingCartContext)

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
              <WishCard
                onAdd={() => addItemsCart(wish)}
                onRemove={() => removeWishsCart(wish.imdbId)}
                price={wish.price}
                title={wish.title}
                key={wish.imdbId}
              />
            ))}

        </Box>

      </aside>
  )
}
