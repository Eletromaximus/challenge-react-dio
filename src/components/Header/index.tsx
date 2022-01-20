import * as S from './styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Button from '../commons/Button'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Provider'
import { Box } from '../../layout/Box'

interface IHeader {
  onClick: () => void
}

export default function Header ({ onClick }: IHeader) {
  const { items } = useContext(ShoppingCartContext)

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
        className="number-of-items"
        display={items.length === 0 ? 'none' : 'block'}
      >
        {items.length}
      </Box>

        <Button>
          <FavoriteIcon fontSize='large' />
        </Button>

        <Button
          onClick={() => onClick()}
        >
          <ShoppingCartIcon fontSize='large'/>
        </Button>

      </S.RightSide>
    </S.HeaderStyle>
  )
}
