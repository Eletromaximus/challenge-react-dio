import { Button } from '@material-ui/core'
import { Delete, ShoppingCart } from '@mui/icons-material'
import { Box } from '../../../layout/Box'

interface IWishCard {
  title: string,
  price: number,
  onRemove: () => void,
  onAdd: () => void
}
export default function WishCard ({
  title,
  price,
  onRemove,
  onAdd
}: IWishCard) {
  return (
    <Box
      key={title}
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

      <Box className="name-of-product">
        {title.substring(0, 20)}
      </Box>

      <Box
        justifyContent='space-between'
        display='flex'
        width='90px'
      >
        <p>R$ {price}</p>
      </Box>

      <Button
        startIcon={<ShoppingCart />}
        onClick={() => onAdd()}
      />

      <Button
        variant='outlined'
        endIcon={<Delete />}
        size='small'
        onClick={() => onRemove()}
      />
    </Box>
  )
}
