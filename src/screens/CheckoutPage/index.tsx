import { useContext } from 'react'
import MovieCard from '../../components/Cards/MovieCard'
import { ShoppingCartContext } from '../../components/Provider/ShoppingCartContext'
import WebSitePages from '../../components/WebSitePage'
import { Box } from '../../layout/Box'
import { Grid } from '../../layout/Grid'
import { StyleForm } from './styles'

export default function Checkout () {
  const {
    items,
    removeItemsCart
  } = useContext(ShoppingCartContext)

  return (
    <WebSitePages>
      <Box
        id='buy-form'
        display='flex'
        justifyContent='space-between'
        width='100%'
        flexWrap='wrap'
        margin={{
          lg: '20px 100px',
          md: '20px auto'
        }}
      >
        <Grid
          value={4}
          minWidth='450px'
        >
          <h1 id='title-form'>Finalizar Compra</h1>

          <StyleForm action=''>
            <input
              type='text'
              className='name'
              placeholder='Nome Completo'
            />

            <Box
              display='flex'
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
              display='flex'
              margin='20px 0'
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
              display='flex'
              margin='20px 0'
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
          minWidth='450px'
        >
          {items && items.map(item => {
            return <MovieCard
              nProduct={item.nProduct}
              price={item.price}
              removeMovie={() => removeItemsCart(item)}
              title={item.title}
              key={item.imdbId}
            />
          })}

        </Grid>
      </Box>
    </WebSitePages>
  )
}
