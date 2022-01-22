import { Route, Routes } from 'react-router-dom'
import HomePage from './screens/HomePage'
import CheckoutPage from './screens/CheckoutPage'

export default function App () {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/checkout' element={<CheckoutPage />}/>
    </Routes>
  )
}
