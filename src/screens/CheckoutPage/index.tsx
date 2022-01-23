import { useContext, useEffect, useState } from 'react'
import MovieCard from '../../components/Cards/MovieCard'
import { ShoppingCartContext } from '../../components/Provider/ShoppingCartContext'
import { Box } from '../../layout/Box'
import { Grid } from '../../layout/Grid'
import { StyleForm } from './styles'

export default function Checkout () {
  const {
    items,
    removeItemsCart
  } = useContext(ShoppingCartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (items) {
      const soma: number = items.reduce((accumulator, actual, index) => {
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

        <StyleForm action=''>
          <input
            type='text'
            className='name'
            placeholder='Nome Completo'
          />

          <Box
            display={{
              sm: 'flex',
              xs: 'block'
            }}
            margin='20px 0'
            width='100%'
            justifyContent='space-between'
          >
            <input
              type='text'
              className='cpf'
              placeholder='CPF'
            />

            <input
              type='text'
              className='cel'
              placeholder='Celular'
            />
          </Box>

          <input
            type='text'
            className='email'
            placeholder='E-mail'
          />

          <Box
            display={{
              sm: 'flex',
              xs: 'block'
            }}
            margin={{
              sm: '20px 0',
              xs: 0
            }}
            width='100%'
            justifyContent='space-between'
          >
            <input
              type='text'
              className='cep'
              placeholder='CEP'
            />

            <input
              type='text'
              className='address'
              placeholder='Endereço'
            />
          </Box>

          <Box
            display={{
              sm: 'flex',
              xs: 0
            }}
            margin={{
              sm: '20px 0',
              xs: 0
            }}
            width='100%'
            justifyContent='space-between'
          >
            <input
              type='text'
              className='city'
              placeholder='Cidade'
            />

            <input
              type='text'
              className='state'
              placeholder='Estado'
            />
          </Box>

        </StyleForm>
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
        {items.length > 0 && items.map(item => {
          return <MovieCard
            nProduct={item.nProduct}
            price={item.price}
            removeMovie={() => removeItemsCart(item)}
            title={item.title}
            key={item.imdbId}
          />
        })}
        {items.length > 0 && <Box
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
