import * as S from './styles'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useEffect, useState } from 'react'
import Button from '../commons/Button'
export { Genres } from './Genres'
interface ICard {
  title: string,
  poster?: string | null,
  voteAverage?: number,
  genre?: string
}

export default function Card (data: ICard) {
  const [card, setCard] = useState<ICard>({
    poster: 'http://placehold.jp/200x200.png',
    title: 'Título',
    voteAverage: 0
  })

  const [favorite, setFavofite] = useState(
    <FavoriteBorderIcon fontSize='large'/>
  )
  const [like, setLike] = useState(false)

  useEffect(() => {
    setFavofite(like
      ? <FavoriteIcon fontSize='large' color='secondary' />
      : <FavoriteBorderIcon fontSize='large' />
    )
  }, [like])

  useEffect(() => {
    if (data) {
      setCard({
        poster: data.poster || 'http://placehold.jp/200x200.png',
        title: data.title,
        voteAverage: data.voteAverage || 0,
        genre: data.genre === 'undefined'
          ? 'Gênero'
          : data.genre
      })
    }
  }, [data])

  return (
    <S.CardStyle>
      <div className="movie-image">
        <img
          src={`https://image.tmdb.org/t/p/w300${data.poster}`}
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
            {card.title}
          </b>
        </span>

        <div className="infos">
          <img
            src='/estrela.png'
            alt='star'
          />
          <span>{card.voteAverage}</span>
          <p>{card.genre}</p>
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
