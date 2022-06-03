import {useContext, useEffect} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
import {useActor} from '@xstate/react'
import {ITicket} from 'interfaces'
import Ticket from '../../molecules/Ticket'
import {GlobalStateContext} from 'StateContext'
import Button from 'components/atoms/Button'
import './style.scss'

const url = 'https://api.npoint.io/163b5e66df9f2741243e'

const fetchTickets = () => axios.get(url).then(res => res.data)

export default function Tickets() {
  const {status, isLoading, error, data} = useQuery('tickets', fetchTickets)
  const {stateService} = useContext(GlobalStateContext)
  const [state] = useActor(stateService)

  useEffect(() => {
    if (status === 'success') {
      stateService.send('UPDATE_TICKETS', {data})
    } else if (status === 'error') {
      stateService.send('DATA_LOAD_ERROR')
    }
  }, [data, status])

  if (isLoading) return <span>Loading...</span>
  if (error) return <span>Error</span>

  const ticketList = state.context.tickets.map((t: ITicket) => {
    return <Ticket key={t.id} {...t} />
  })
  return (
    <>
      <div className="tickets__list">{ticketList}</div>
      <Button>Показать еще 5 билетов</Button>
    </>
  )
}
