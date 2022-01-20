import * as S from './styles'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useContext, useEffect, useState } from 'react'
import Button from '../commons/Button'
import { ShoppingCartContext } from '../Provider/ShoppingCartContext'
import { WishCartContext } from '../Provider/WishCartContext'

export { Genres } from './Genres'

interface ICard {
  title: string,
  poster?: string | null,
  voteAverage?: number,
  genre?: string,
  imdbId: string,
  price: number
}

export default function Card (data: ICard) {
  const { addItemsCart } = useContext(ShoppingCartContext)
  const { wishs, addWishsCart, removeWishsCart } = useContext(WishCartContext)
  const [card, setCard] = useState<ICard>({
    poster: 'http://placehold.jp/200x200.png',
    title: 'Título',
    voteAverage: 0,
    price: 79.99,
    imdbId: 'xxxxxxxxxxxxxxx'
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
    like
      ? addWishsCart({
        title: card.title,
        imdbId: card.imdbId,
        price: card.price,
        nProduct: 1
      })
      : removeWishsCart(card.imdbId)
  }, [like])

  useEffect(() => {
    const detectWish = wishs.find((wish) => wish.imdbId === card.imdbId)

    if (!detectWish) {
      setLike(false)
    }
  }, [wishs])

  useEffect(() => {
    if (data) {
      setCard({
        poster: data.poster || 'http://placehold.jp/200x200.png',
        title: data.title,
        voteAverage: data.voteAverage || 0,
        genre: data.genre === 'undefined'
          ? 'Gênero'
          : data.genre,
        imdbId: data?.imdbId,
        price: data.price
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
          onClick={() => {
            setLike(!like)
          }}
        >
          {favorite}
        </Button>
      </S.LikeStyle>

      <S.ContentStyle >
        <span className='title-of-movie'>
          <b>
            {card.title}
          </b>
        </span>

        <div className='infos-of-movie'>
          <img
            src='/estrela.png'
            alt='star'
          />

          <span className='vote-average'>
            <b>
              {card.voteAverage}
            </b>
          </span>

          <span className='genres-of-movie'>
            {card.genre?.substring(0, 20) + '...'}
            <span className='genres-of-movie'>
              {card.genre}
            </span>
          </span>
        </div >

        <span className="price">
          R$ {card.price}
        </span>

        <Button
          backgroundColor='#6558F5'
          onClick={() => addItemsCart({
            imdbId: card.imdbId,
            price: card.price,
            title: card.title,
            nProduct: 1
          })}
        >
          Adicionar
        </Button>
      </S.ContentStyle>
    </S.CardStyle>
  )
}
