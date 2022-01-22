/* eslint-disable camelcase */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import Card, { Genres } from '../components/Movies'
import WebSitePages from '../components/WebSitePage'
import { Box } from '../layout/Box'

interface IMovie {
  original_title: string,
  poster_path?: string,
  id: number,
  vote_average: number,
  genre_ids: number[]
}

export default function HomePage () {
  const [tmdb, setTmdb] = useState<IMovie[]>()

  const listMovies = async () => {
    const list = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY_THEMOVIEDB}&language=pt-BR&page=1`
    )
      .then((response) => {
        setTmdb(response.data.results)
        return response.data.results
      })
      .catch((err) => {
        console.log(err)
        return err
      })

    return list
  }

  useEffect(() => {
    listMovies()
  }, [])

  return (
    <WebSitePages>
      <Box
        display='flex'
        flexDirection='row'
        justifyContent={{
          md: 'space-between',
          xs: 'center'
        }}
        flex={1}
        maxWidth={{
          sm: '83%',
          xs: 'auto'
        }}
        margin='50px auto'
        flexWrap='wrap'
      >
        {tmdb && tmdb.map((movie: IMovie) => {
          return <Card
            key={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
            voteAverage={movie.vote_average}
            imdbId={v4()}
            price={79.99}
            genre={movie.genre_ids.reduce((prev, actual, index) => {
              const search = Genres.find(genre => genre.id === actual)?.name

              if (search) {
                return index === 0 ? search : prev + ', ' + search
              }

              return 'Gênero'
            }, '')}
          />
        })}
      </Box>

    </WebSitePages>
  )
}
