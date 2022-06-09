import { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import Radio from 'components/atoms/Radio'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { updateCompanies, updateSelectCompany } from 'store/filterSlice'
import './style.scss'

const url = 'https://api.npoint.io/a1b1c28b32d9785bb26c'

const fetchTickets = () => axios.get(url).then(response => response.data)

export default function Companies() {
  const { status, isLoading, error, data } = useQuery('companies', fetchTickets)
  const companies = useAppSelector(state => state.filter.companies)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === 'success') {
      dispatch(updateCompanies(data))
    }
  }, [data, status])

  const handleClickCompany = (event: any) => {
    dispatch(updateSelectCompany(event.target.id))
  }

  const companiesList = companies.map(company => (
    <Radio
      children={company.name}
      key={company.id}
      id={company.id}
      onClick={handleClickCompany}
    />
  ))

  if (isLoading) return <span>Loading...</span>
  if (error) return <span>Error</span>

  return (
    <div className="u-full-width companies">
      <div className="companies__title">Компания</div>
      <div className="companies__list">
        <Radio children={'Все'} id="" onClick={handleClickCompany} />
        {companiesList}
      </div>
    </div>
  )
}
