import Logo from './components/atoms/Logo'
import Tabs from './components/organisms/Tabs'
import Transparents from './components/organisms/Transparents'
import Companies from './components/organisms/Companies'
import Tickets from './components/organisms/Tickets'
import Button from './components/atoms/Button'
import 'bootstrap-4-grid'

function App() {
  return (
    <div className="container">
      <div className="logo">
        <Logo />
      </div>
      <div className="row">
        <div className="col-4">
          <Transparents />
          <Companies />
        </div>
        <div className="col-8">
          <Tabs />
          <Tickets />
          <Button text={'Показать еще 5 билетов'} />
        </div>
      </div>
    </div>
  )
}
export default App
