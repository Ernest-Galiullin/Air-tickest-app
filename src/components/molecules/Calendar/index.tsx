import { useState } from 'react'
import ReactCalendar from 'react-calendar'
import './style.scss'

interface ICalendarProps {
  onClick: (date: Date) => void
}

export default function Calendar(props: ICalendarProps) {
  const [value, onChange] = useState(new Date())

  return (
    <div className="calendar">
      <ReactCalendar
        onChange={onChange}
        value={value}
        locale={'ru-RU'}
        prev2Label={null}
        next2Label={null}
        minDate={new Date()}
        onClickDay={props.onClick}
      />
    </div>
  )
}
