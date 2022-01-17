import { Button } from '@material-ui/core'
import { Delete } from '@mui/icons-material'
import { Box } from '../../layout/Box'

export default function ShoppingCard () {
  return (
    <aside
      style={{
        position: 'absolute',
        zIndex: 1,
        right: 0
      }}
    >
        <Box
          className="shopping-car"
          width='350px'
          height='150vh'
          display='flex'
          flexDirection='column'
          border='1px solid gray'
          backgroundColor='#FFFFFF'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            margin='5px'
          >
            <h4>Meu Carrinho</h4>

            <Button
              variant='outlined'
              endIcon={<Delete />}
              size='small'
            >
              Esvaziar
            </Button>
          </Box>

          <Box
            className="product"
            width='100%'
            padding='5px'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            <Box
              width='64px'
              height='64px'
              className="icone-of-movie"
            >
              <img src="./icone-loading.png" alt="" />
            </Box>

            <div className="name-of-product">
              Nome do Filme
            </div>

            1 R$ 9,99

            <Button
              variant='outlined'
              endIcon={<Delete />}
              size='small'
            />
          </Box>
        </Box>
      </aside>
  )
}
