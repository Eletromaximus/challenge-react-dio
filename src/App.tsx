import Card from './components/Card'
import Header from './components/Header'
import { Container } from './styles'

export default function App () {
  return (
    <div className="App">
      <Header />

      <Container value={8} >
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </div>
  )
}
