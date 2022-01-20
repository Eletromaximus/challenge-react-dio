import * as S from './styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Button from '../commons/Button'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Provider/ShoppingCartContext'
import { WishCartContext } from '../Provider/WishCartContext'
import { Box } from '../../layout/Box'

interface IHeader {
  onItemClick: () => void,
  onWishClick: () => void,
}

export default function Header ({
  onItemClick,
  onWishClick
}: IHeader) {
  const { items } = useContext(ShoppingCartContext)
  const { wishs } = useContext(WishCartContext)

  return (
    <S.HeaderStyle>
      <S.LeftSide>
        Logo
      </S.LeftSide>

      <S.MiddleSide>
        <div id="search">
          <input type="text" placeholder='  Pesquisa' />
          <SearchIcon fontSize='large' />
        </div>
      </S.MiddleSide>

      <S.RightSide>
        <Box
          className="number-of-wishs"
          display={wishs.length === 0 ? 'none' : 'block'}
        >
          {wishs.length}
        </Box>

        <Box
          className="number-of-items"
          display={items.length === 0 ? 'none' : 'block'}
        >
          {items.length}
        </Box>

        <Button
          onClick={() => onWishClick()}
        >
          <FavoriteIcon fontSize='large' />
        </Button>

        <Button
          onClick={() => onItemClick()}
        >
          <ShoppingCartIcon fontSize='large'/>
        </Button>

      </S.RightSide>
    </S.HeaderStyle>
  )
}
