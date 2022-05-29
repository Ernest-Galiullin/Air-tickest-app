import {useState} from 'react'
import ReactCalendar from 'react-calendar'
import './style.scss'

function orderWeek(date: string) {
  const week = date.slice(0, 4).slice(0, 2)
  return `${date.slice(4, 10)}, ${week}`
}

export default function Calendar(props: any) {
  const [value, setData] = useState(new Date())

  const handleChange = (data: typeof value) => {
    const options: any = {
      day: 'numeric',
      month: 'long',
      weekday: 'short'
    }
    const selectDate = orderWeek(data.toLocaleDateString('ru-RU', options))
    props.onChange(selectDate)
    setData(data)
  }

  return (
    <div className="calendar">
      <ReactCalendar
        onChange={handleChange}
        value={value}
        locale={'ru-RU'}
        prev2Label={null}
        next2Label={null}
      />
    </div>
  )
}
