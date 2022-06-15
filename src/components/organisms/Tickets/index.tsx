import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { ITicket } from 'interfaces'
import Ticket from 'components/molecules/Ticket'
import Button from 'components/atoms/Button'
import { updateTickets, updateFiltredTickets } from 'store/ticketsSlice'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import * as functions from './functions'
import { fetchTickets } from 'api/apiTickets'
import './style.scss'

export default function Tickets() {
  const { status, isLoading, error, data } = useQuery('tickets', fetchTickets)
  const { filtredTickets, tickets } = useAppSelector(state => state.tickets)
  const transparentsState = useAppSelector(state => state.transparents)
  const {
    selectedOriginCity,
    selectedDestinationCity,
    selectedDepartureDay,
    selectedReturnDay,
    selectedCompany
  } = useAppSelector(state => state.filter)
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
    // Complete Worked
    if (selectedOriginCity.value && selectedDestinationCity.value) {
      filtredData = functions.filterByOriginCity(
        filtredData,
        selectedOriginCity.value
      )
      filtredData = functions.filterByDestinationCity(
        filtredData,
        selectedOriginCity.value
      )
      // if (selectedDepartureDay && selectedReturnDay) {
      //   filtredData = functions.filterByDepartureDay(
      //     filtredData,
      //     selectedDepartureDay
      //   )
      //   filtredData = functions.filterByReturnDay(
      //     filtredData,
      //     selectedReturnDay
      //   )
      // }
    }
    // filtredData = functions.filterByCompanyId(filtredData, selectedCompany)
    // In progress
    // filtredData = functions.filterByTransparents(
    //   filtredData,
    //   transparentsState.value
    // )

    dispatch(updateFiltredTickets(filtredData))
  }, [
    selectedOriginCity,
    selectedDestinationCity,
    selectedDepartureDay,
    selectedReturnDay,
    selectedCompany,
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
