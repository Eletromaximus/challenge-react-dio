import * as S from './styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Button from '../commons/Button'

export default function Header () {
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

      <div
        className="number-of-items"
      >
          1
        </div>

        <Button>
          <FavoriteIcon fontSize='large' />
        </Button>

        <Button>
          <ShoppingCartIcon fontSize='large'/>
        </Button>

      </S.RightSide>
    </S.HeaderStyle>
  )
}
