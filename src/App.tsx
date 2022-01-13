/* eslint-disable camelcase */
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card, { Genres } from './components/Card'
import WebSitePages from './components/WebSitePage'
import { Grid } from './layout/Grid'

interface IMovie {
  original_title: string,
  poster_path?: string,
  id: number,
  vote_average: number,
  genre_ids: number[]
}

export default function App () {
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
      <Grid
        display='flex'
        flexDirection='row'
        value={10}
        margin='50px auto'
        flexWrap='wrap'
      >
        {tmdb && tmdb.map((movie: IMovie) => {
          return <Card
            key={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
            voteAverage={movie.vote_average}
            genre={movie.genre_ids.reduce((prev, actual, index) => {
              const search = Genres.find(genre => genre.id === actual)?.name
              if (search) {
                return index === 0 ? search : prev + ', ' + search
              }
              return 'Gênero'
            }, '')}
          />
        })}
      </Grid>
    </WebSitePages>
  )
}
