import Logo from 'components/atoms/Logo'
import Tabs from 'components/organisms/Tabs'
import Transparents from 'components/organisms/Transparents'
import Companies from 'components/organisms/Companies'
import Tickets from 'components/organisms/Tickets'
import SearchForm from 'components/organisms/SearchForm'
import './App.scss'

function App() {
  return (
    <div className="container">
      <div className="logo">
        <Logo />
      </div>
      <div className="row">
        <SearchForm />
        <hr />
      </div>
      <div className="row">
        <div className="one-third column">
          <Transparents />
          <Companies />
        </div>
        <div className="two-thirds column">
          <Tabs />
          <Tickets />
        </div>
      </div>
    </div>
  )
}
export default App
