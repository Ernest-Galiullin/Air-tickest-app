import { TCityCodes } from 'interfaces'
import s7 from 'assets/companies/S7 Logo.png'
import xiamenAir from 'assets/companies/XiamenAir Logo.png'
import './style.scss'
import { convertMsToHM, getTime, isTransplants } from './functions'

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

function Img(props: { id: string }) {
  if (props.id === '7dc12d0b-ce42-48a0-8673-0dad4d698764') {
    return <img src={xiamenAir} alt={props.id} />
  }
  if (props.id === 'cddfa038-823b-43b1-b18d-395731881077') {
    return <img src={s7} alt={props.id} />
  }
  return null
}

export default function Ticket(props: TicketProps) {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">{props.price} Р</div>
        <Img id={props.companyId} />
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
              : `${props.info.stops.length} ${
                  props.info.stops.length === 1 ? 'пересадка' : 'пересадки'
                }`}
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
