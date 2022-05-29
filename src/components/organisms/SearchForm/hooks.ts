import {useState} from 'react'
export const useInputCalendar = (
  initialInputValue: string,
  initialCalendarValue: boolean = false
) => {
  const [inputValue, setInputValue] = useState(initialInputValue)
  const [inputCalendarValue, setCalendarValue] = useState(initialCalendarValue)

  const handleChange = (data: string) => {
    setInputValue(data)
  }
  const handleClick = () => {
    setCalendarValue(prev => !prev)
  }
  return {
    inputValue,
    inputCalendarValue,
    onChange: handleChange,
    onClick: handleClick
  }
}
