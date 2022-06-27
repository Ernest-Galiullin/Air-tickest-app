import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { ITicket } from 'interfaces'
import Ticket from 'components/molecules/Ticket'
import Button from 'components/atoms/Button'
import { updateTickets, updateFiltredTickets } from 'store/ticketsSlice'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import * as functions from './functions'
import { fetchTickets } from 'api/apiTickets'
import './style.scss'
import {
  selectCompanyID,
  selectDepartureDay,
  selectDestinationCity,
  selectOriginCity,
  selectReturnDay
} from 'store/filterSlice'

export default function Tickets() {
  const { status, isLoading, error, data } = useQuery('tickets', fetchTickets)

  const { filtredTickets, tickets } = useAppSelector(state => state.tickets)
  const transparentsState = useAppSelector(state => state.transparents)
  const originCity = useAppSelector(selectOriginCity)
  const destinationCity = useAppSelector(selectDestinationCity)
  const departureDay = useAppSelector(selectDepartureDay)
  const returnDay = useAppSelector(selectReturnDay)
  const companyID = useAppSelector(selectCompanyID)

  const dispatch = useAppDispatch()
  const [pagination, setPagination] = useState(5)

  const handlePagination = () => {
    setPagination(prev => prev + 5)
  }

  useEffect(() => {
    if (status === 'success') {
      dispatch(updateTickets(data))
      dispatch(updateFiltredTickets(data))
    }
  }, [data, status])

  useEffect(() => {
    let filtredData = tickets
    if (originCity && destinationCity) {
      filtredData = functions.filterByOriginCity(filtredData, originCity.value)
      filtredData = functions.filterByDestinationCity(
        filtredData,
        destinationCity.value
      )

      if (departureDay && returnDay) {
        filtredData = functions.filterByDepartureDay(filtredData, departureDay)
        filtredData = functions.filterByReturnDay(filtredData, returnDay)
      }
    }
    filtredData = functions.filterByCompanyId(filtredData, companyID)
    filtredData = functions.filterByTransparents(
      filtredData,
      transparentsState.value
    )

    dispatch(updateFiltredTickets(filtredData))
  }, [
    originCity,
    destinationCity,
    departureDay,
    returnDay,
    companyID,
    transparentsState.value
  ])

  if (isLoading) return <span>Loading...</span>
  if (error) return <span>Error</span>
  if (filtredTickets.length === 0) return <span>Билетов нет</span>

  const ticketList = filtredTickets
    .slice(0, pagination)
    .map((item: ITicket) => <Ticket key={item.id} {...item} />)

  return (
    <>
      <div className="tickets__list">{ticketList}</div>
      {filtredTickets.length > 5 && (
        <Button onClick={handlePagination}>Показать еще 5 билетов</Button>
      )}
    </>
  )
}
