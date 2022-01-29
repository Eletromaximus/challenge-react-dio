export interface IMovie {
  title: string,
  imdbId: string,
  price: number,
  nProduct: number
}

export type ActionMovie = {
  type: 'addMovie',
  payload: IMovie
} | {type: 'removeMovie', imdb: string }
  | {type: 'cleanCart' }

export function reducerMovie (state: IMovie[], action: ActionMovie) {
  switch (action.type) {
    case 'addMovie':
      if (state.length === 0) {
        state = [action.payload]
        return state
      } else {
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
