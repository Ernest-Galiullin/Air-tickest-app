import {useContext, useEffect} from 'react'
import {useActor} from '@xstate/react'
import axios from 'axios'
import {GlobalStateContext} from 'StateContext'
import {useQuery} from 'react-query'
import Radio from '../../atoms/Radio'
import './style.scss'

const url = 'https://api.npoint.io/a1b1c28b32d9785bb26c'

const fetchTickets = () => axios.get(url).then(response => response.data)

export default function Companies() {
  const {status, isLoading, error, data} = useQuery('companies', fetchTickets)
  const {stateService} = useContext(GlobalStateContext)
  const [state] = useActor(stateService)

  useEffect(() => {
    if (status === 'success') {
      stateService.send('UPDATE_COMPANIES', {data})
    } else if (status === 'error') {
      stateService.send('DATA_LOAD_ERROR')
    }
  }, [data, status])

  if (isLoading) return <span>Loading...</span>
  if (error) return <span>Error</span>

  const companiesList = state.context.companies.map(company => (
    <Radio children={company.name} key={company.id} />
  ))
  return (
    <div className="u-full-width companies">
      <div className="companies__title">Компания</div>
      <div className="companies__list">
        <Radio children={'Все'} />
        {companiesList}
      </div>
    </div>
  )
}
