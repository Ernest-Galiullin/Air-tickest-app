import { ITicket } from 'interfaces'

export const filterByOriginCity = (
  filtredData: ITicket[],
  originCity: string
) => {
  return filtredData.filter(({ info }) => info.origin === originCity)
}

export const filterByDestinationCity = (
  filtredData: ITicket[],
  destinationCity: string
) => {
  return filtredData.filter(({ info }) => info.destination === destinationCity)
}

export const filterByCompanyId = (
  filtredData: ITicket[],
  companyId: string
) => {
  if (!companyId) {
    return filtredData
  }

  return filtredData.filter(item => item.companyId === companyId)
}

export const filterByTransparents = (
  filtredData: ITicket[],
  selectTransperents: number[]
) => {
  if (selectTransperents.length === 0) {
    return filtredData
  }

  return filtredData.filter(item => {
    if (
      item.info.stops.length === selectTransperents[0] ||
      item.info.stops.length === selectTransperents[1] ||
      item.info.stops.length === selectTransperents[2] ||
      item.info.stops.length === selectTransperents[3]
    ) {
      return item
    }
  })
}

const getUTCDate = (value: number | string) => new Date(value).getUTCDate()

export const filterByDepartureDay = (
  filtredData: ITicket[],
  departureDay: number | null
) => {
  return filtredData.filter(item => {
    if (getUTCDate(item.info.dateStart) === getUTCDate(departureDay!))
      return item
  })
}

export const filterByReturnDay = (
  filtredData: ITicket[],
  returnDay: number | null
) => {
  return filtredData.filter(
    item => getUTCDate(item.info.dateEnd) === getUTCDate(returnDay!)
  )
}
