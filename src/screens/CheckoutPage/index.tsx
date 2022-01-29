import { useContext, useEffect, useState } from 'react'
import MovieCard from '../../components/Cards/MovieCard'
import { Context } from '../../components/Provider'
import { Box } from '../../layout/Box'
import { Grid } from '../../layout/Grid'
import Form from '../../components/Form'

export default function Checkout () {
  const {
    movie,
    dispatchMovie
  } = useContext(Context)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (movie) {
      const soma: number = movie.reduce((accumulator, actual, index) => {
        const add = index > 0
          ? accumulator + actual.price * actual.nProduct
          : accumulator = actual.price * actual.nProduct

        return add
      }, 0)

      setTotal(soma)
    }
  })

  return (
    <Box
      id='buy-form'
      display='flex'
      justifyContent={{
        md: 'space-around',
        sm: 'center'
      }}
      width='100%'
      flexWrap='wrap'
    >
      <Grid
        value={4}
        minWidth={{
          sm: '450px',
          xs: '320px'
        }}
      >
        <h1 id='title-form'>Finalizar Compra</h1>

        <Form />
      </Grid>

      <Grid
        id='buy-cart'
        value={4}
        minWidth={{
          sm: '450px',
          xs: '320px'
        }}
        margin='80px 0 0 0'
      >
        {movie.length > 0 && movie.map(item => {
          return <MovieCard
            nProduct={item.nProduct}
            price={item.price}
            removeMovie={() => dispatchMovie({
              type: 'removeMovie',
              imdb: item.imdbId
            })}
            title={item.title}
            key={item.imdbId}
          />
        })}
        {movie.length > 0 && <Box
          display='flex'
          justifyContent='space-between'
          width='100%'
          alignItems='center'
          style={{
            borderTop: '5px solid gray'
          }}
        >
          Total: <h3>{total.toFixed(2)}</h3>
        </Box>}
      </Grid>
    </Box>
  )
}
