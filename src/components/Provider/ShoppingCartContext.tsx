import { useReducer, createContext, ReactNode } from 'react'

interface Item {
  title: string,
  imdbId: string,
  price: number,
  nProduct: number
}

type Action = {
  type: 'addMovie',
  payload: Item
} | {type: 'removeMovie', imdb: string }
  | {type: 'cleanCart' }

interface IShoppingCart {
  children: ReactNode
}

const INITIAL_STATE: Item[] = []

export const CartContext = createContext({
  status: INITIAL_STATE,
  dispatch: (action: Action) => {}
})

function reducer (state: Item[], action: Action) {
  switch (action.type) {
    case 'addMovie':
      if (state.length === 0) {
        state = [action.payload]
        return state
      } else {
        console.log(action.payload.imdbId)
        const isProduct = state.find(movie => movie.imdbId === action.payload.imdbId)

        if (isProduct) {
          const index = state.indexOf(isProduct)
          const newCart = [...state]
          newCart[index].nProduct += 1
          state = newCart
          return state
        }

        state = [...state, action.payload]
        return state
      }

    case 'removeMovie':
      if (state.length > 0) {
        const isProduct = state.find(movie => movie.imdbId === action.imdb)

        if (isProduct && isProduct.nProduct > 1) {
          const index = state.indexOf(isProduct)
          const newCart = [...state]
          newCart[index].nProduct -= 1
          state = [...newCart]
          return state
        }

        const filteredCart = state.filter(
          (item) => item.imdbId !== action.imdb
        )

        state = [...filteredCart]
        return state
      }
      return state

    case 'cleanCart':
      state = []
      return state

    default:
      return state
  }
}

export default function X ({ children }: IShoppingCart) {
  const [status, dispatch] = useReducer(reducer, [])

  return <CartContext.Provider value={{ status, dispatch }}>
    {children}
  </CartContext.Provider>
}
