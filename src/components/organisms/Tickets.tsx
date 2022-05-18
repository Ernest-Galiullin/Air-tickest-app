import {useState} from 'react'
import Ticket from '../molecules/Ticket'
import img from '../../assets/companies/s7.png'

type ITicket = {
  price: string
  route: string
  routeTime: string
  lenghtTime: string
  transfer: string
  transferAirport?: string
}

export default function Tickets() {
  const [tickests] = useState<ITicket[]>([
    {
      price: '13 400',
      route: 'MOW – HKT',
      routeTime: '10:45 – 08:00',
      lenghtTime: '21ч 15м',
      transfer: 'HKG, JNB'
    },
    {
      price: '13 400',
      route: 'MOW – HKT',
      routeTime: '10:45 – 08:00',
      lenghtTime: '21ч 15м',
      transfer: 'HKG, JNB'
    },
    {
      price: '13 400',
      route: 'MOW – HKT',
      routeTime: '10:45 – 08:00',
      lenghtTime: '21ч 15м',
      transfer: 'HKG, JNB'
    },
    {
      price: '13 400',
      route: 'MOW – HKT',
      routeTime: '10:45 – 08:00',
      lenghtTime: '21ч 15м',
      transfer: 'HKG, JNB'
    },
    {
      price: '13 400',
      route: 'MOW – HKT',
      routeTime: '10:45 – 08:00',
      lenghtTime: '21ч 15м',
      transfer: 'HKG, JNB'
    },
    {
      price: '13 400',
      route: 'MOW – HKT',
      routeTime: '10:45 – 08:00',
      lenghtTime: '21ч 15м',
      transfer: 'HKG, JNB'
    }
  ])

  return (
    <div className="tickets__list">
      {tickests.map((t, idx) => {
        return (
          <Ticket
            key={idx + t.lenghtTime}
            price={t.price}
            routeTime={t.routeTime}
            route={t.route}
            lenghtTime={t.lenghtTime}
            transfer={t.transfer}
            img={img}
          />
        )
      })}
    </div>
  )
}
