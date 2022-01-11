import * as S from './styles'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useEffect, useState } from 'react'
import Button from '../commons/Button'

interface ICard {
  source?: string
}

export default function Card ({ source }: ICard) {
  const [sourceImage, setSourceImage] = useState(
    'http://placehold.jp/200x200.png'
  )
  const [favorite, setFavofite] = useState(
    <FavoriteBorderIcon fontSize='large'/>
  )
  const [like, setLike] = useState(false)

  useEffect(() => {
    setFavofite(like
      ? <FavoriteIcon fontSize='large' />
      : <FavoriteBorderIcon fontSize='large' />
    )
  }, [like])

  useEffect(() => {
    if (source) {
      setSourceImage(source)
    }
  }, [source])

  return (
    <S.CardStyle>
      <div className="movie-image">
        <img
          src={sourceImage}
          alt='product image'
        />
      </div>

      <S.LikeStyle>
        <Button
          onClick={
            () => setLike(!like)
          }
        >
          {favorite}
        </Button>
      </S.LikeStyle>

      <S.ContentStyle >
        <span>
          <b>
            Nome do Filme
          </b>
        </span>

        <div className="infos">
          <img
            src='/estrela.png'
            alt='star'
          />
          <span>7</span>
          <span>Genero</span>
        </div>

        <span className="price">
          R$ 79,99
        </span>

        <Button
          backgroundColor='#6558F5'
        >
          Adicionar
        </Button>
      </S.ContentStyle>
    </S.CardStyle>
  )
}
