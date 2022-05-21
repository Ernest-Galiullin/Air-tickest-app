import './style.scss'
type TicketProps = {
  price: string
  route: string
  routeTime: string
  lenghtTime: string
  transfer: string
  transferAirport?: string
  img: string
}

export default function Ticket({
  price,
  route,
  routeTime,
  transfer,
  transferAirport,
  lenghtTime,
  img
}: TicketProps) {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">{price}Р</div>
        <img src={img} alt="" />
      </div>
      <div className="ticket__body">
        <div className="ticket__route">
          <div className="route__title">{route}</div>
          <div className="route__time">{routeTime}</div>
        </div>
        <div className="ticket__lenght">
          <div className="lenght__title">В пути</div>
          <div className="lenght__time">{lenghtTime}</div>
        </div>
        <div className="ticket__transfer">
          <div className="transfer__title">{'Пересадок нет'}</div>
          <div className="transfer__body">{transferAirport}</div>
        </div>
      </div>
    </div>
  )
}
