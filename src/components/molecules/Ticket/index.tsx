import {TCityCodes} from 'interfaces'
import img from 'assets/companies/s7.png'
import './style.scss'

type TicketProps = {
  id: string
  price: number
  companyId: string
  info: {
    origin: TCityCodes
    destination: TCityCodes
    dateStart: string
    dateEnd: string
    stops: TCityCodes[]
    duration: number
  }
}

const getTime = (date: any) => new Date(date).toLocaleTimeString().slice(0, 5)

function convertMsToHM(milliseconds: number) {
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  seconds = seconds % 60

  minutes = seconds >= 30 ? minutes + 1 : minutes

  minutes = minutes % 60

  hours = hours % 24

  if (hours) {
    return `${hours}ч ${minutes}м`
  } else {
    return ` ${minutes}м`
  }
}

const isTransplants = (transplants: number): boolean => transplants === 0

export default function Ticket(props: TicketProps) {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">{props.price} Р</div>
        <img src={img} alt={props.companyId} />
      </div>
      <div className="ticket__body">
        <div className="ticket__route">
          <div className="route__title">
            {props.info.origin} - {props.info.destination}
          </div>
          <div className="route__time">
            {getTime(props.info.dateStart)} - {getTime(props.info.dateEnd)}
          </div>
        </div>
        <div className="ticket__lenght">
          <div className="lenght__title">В пути</div>
          <div className="lenght__time">
            <b> {convertMsToHM(props.info.duration)}</b>
          </div>
        </div>
        <div className="ticket__transfer">
          <div className="transfer__title">
            {isTransplants(props.info.stops.length)
              ? 'Без пересадок'
              : `${props.info.stops.length} пересадки`}
          </div>
          <div className="transfer__body">
            <b>
              {' '}
              {isTransplants(props.info.stops.length)}
              {props.info.stops.toString()}
            </b>
          </div>
        </div>
      </div>
    </div>
  )
}
