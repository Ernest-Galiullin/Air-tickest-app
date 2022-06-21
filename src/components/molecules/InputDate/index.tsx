import { useState } from 'react'
import { updateDepartureDay, updateReturnDay } from 'store/filterSlice'
import { useAppDispatch } from 'store/hooks'
import Calendar from '../Calendar'
import { getPrettyDate } from './functions'

interface IDateInputProps {
  id: string
  placeholder?: string
  date?: number | null
}

export default function DataInput(props: IDateInputProps) {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')
  const [closeCalendar, setCloseCalendar] = useState(false)

  const handleClickInput = () => {
    setCloseCalendar(prev => !prev)
  }

  const handleClickCalendar = (date: Date) => {
    if (props.id === 'destination') {
      dispatch(updateDepartureDay(date.valueOf()))
    } else {
      dispatch(updateReturnDay(date.valueOf()))
    }
    setInputValue(getPrettyDate(date))
  }

  return (
    <>
      <input
        onClick={handleClickInput}
        className="search-form__input"
        value={inputValue}
        type="text"
        placeholder={props.placeholder}
        readOnly
      />
      {closeCalendar && <Calendar onClick={handleClickCalendar} />}
      <span className="date"></span>
    </>
  )
}
