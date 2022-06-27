import { useState } from 'react'
import DatePicker, { CalendarContainer, registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import { DatePickerInput } from './DatePickerInput'
import './style.scss'

interface IDateInputProps {
  name: string
  placeholder: string
  handleChange: (date: Date) => void
  minDate?: number | null
}

export default function DateInput(props: IDateInputProps) {
  const { name, placeholder, handleChange, minDate } = props
  const [startDate, setStartDate] = useState<Date | null>(null)
  registerLocale('ru', ru)

  const Container = ({ className, children }: any) => (
    <div
      style={{
        width: '320px',
        height: '226px'
      }}
    >
      <CalendarContainer className={className}>{children}</CalendarContainer>
    </div>
  )

  const handleChangeDate = (date: typeof startDate) => {
    setStartDate(date)
    handleChange(date!)
  }
  return (
    <DatePicker
      selected={startDate}
      onChange={handleChangeDate}
      customInput={<DatePickerInput />}
      minDate={minDate ? new Date(minDate) : new Date()}
      locale={ru}
      calendarContainer={Container}
      placeholderText={placeholder}
      name={name}
      dateFormat={'d MMMM, EEEEEE'}
    />
  )
}
