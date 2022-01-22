import * as S from './styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Button from '../commons/Button'
import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../Provider/ShoppingCartContext'
import { WishCartContext } from '../Provider/WishCartContext'
import { Box } from '../../layout/Box'

interface IHeader {
  onItemClick: () => void,
  onWishClick: () => void,
  onContent: () => void,
}

export default function Header ({
  onItemClick,
  onWishClick,
  onContent
}: IHeader) {
  const { items } = useContext(ShoppingCartContext)
  const { wishs } = useContext(WishCartContext)
  const [heart, setHeart] = useState(false)
  const [cart, setCart] = useState(false)

  useEffect(() => {
    if (items.length > 0) {
      setCart(true)
    } else {
      setCart(false)
    }
  }, [items])

  useEffect(() => {
    if (wishs.length > 0) {
      setHeart(true)
    } else {
      setHeart(false)
    }
  }, [wishs])

  return (
    <S.HeaderStyle>
      <S.LeftSide>
        <Button
          onClick={() => onContent()}
        >
          <Box
            display='flex'
            alignItems='center'
            className='logo-header'
            color='black'
          >
            <img src='movie-1.svg' alt='logo' />
            Movie Store
          </Box>
        </Button>
      </S.LeftSide>

      <S.MiddleSide>
        <div id='search'>
          <input type='text' placeholder='  Pesquisa' />
          <SearchIcon fontSize='large' />
        </div>
      </S.MiddleSide>

      <S.RightSide>
        <Box
          className='number-of-wishs'
          display={wishs.length === 0 ? 'none' : 'block'}
        >
          {wishs.length}
        </Box>

        <Box
          className='number-of-items'
          display={items.length === 0 ? 'none' : 'block'}
        >
          {items.length}
        </Box>

        <Button
          onClick={() => onWishClick()}
          color={heart ? 'red' : 'white'}
        >
          <FavoriteIcon fontSize='large' />
        </Button>

        <Button
          onClick={() => onItemClick()}
          color={cart ? 'blue' : 'white'}
        >
          <ShoppingCartIcon fontSize='large'/>
        </Button>

      </S.RightSide>
    </S.HeaderStyle>
  )
}
