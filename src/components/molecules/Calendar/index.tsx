import {useState} from 'react'
import ReactCalendar from 'react-calendar'
import './style.scss'

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
]
const weeks = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

export default function Calendar(props: any) {
  const [value, setData] = useState(new Date())

  const handleChange = (data: typeof value) => {
    const day = data.getDate()
    const month = months[data.getMonth()].toLowerCase()
    const week = weeks[data.getUTCDay()]
    const ruFormatDate = `${day} ${month}, ${week}`

    props.onChange(ruFormatDate)
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
