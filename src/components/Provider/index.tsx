import { useReducer, createContext, ReactNode } from 'react'
import { reducerMovie, ActionMovie, IMovie } from './ShoppingCartContext'
import { reduceWish, ActionWish } from './WishCartContext'

const INITIAL_STATE_MOVIE: IMovie[] = []
const INITIAL_STATE_WISH: IMovie[] = []

export const Context = createContext({
  movie: INITIAL_STATE_MOVIE,
  wish: INITIAL_STATE_WISH,
  dispatchMovie: (action: ActionMovie) => {},
  dispatchWish: (action: ActionWish) => {}
})

interface IContext {
  children: ReactNode
}

export default function ContextProvider ({ children }: IContext) {
  const [movie, dispatchMovie] = useReducer(reducerMovie, [])
  const [wish, dispatchWish] = useReducer(reduceWish, [])

  return <Context.Provider value={{
    movie,
    wish,
    dispatchMovie,
    dispatchWish
  }}>
    {children}
  </Context.Provider>
}
