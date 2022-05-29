import SwapIcon from 'components/atoms/SwapIcon'
import Calendar from 'components/molecules/Calendar'
import {useInputCalendar} from './hooks'
import './style.scss'

export default function SearchForm() {
  const inputOrigin = useInputCalendar('')
  const inputReturn = useInputCalendar('')

  return (
    <form className="search-form">
      <div className="search-form__column">
        <input
          className="search-form__input"
          type="text"
          placeholder="Откуда"
        />
        <div className="search-form__swap-place">
          <SwapIcon />
        </div>
      </div>
      <div className="search-form__column">
        <input className="search-form__input" type="text" placeholder="Куда" />
      </div>
      <div className="search-form__column --date">
        <input
          className="search-form__input"
          value={inputOrigin.inputValue}
          onClick={inputOrigin.onClick}
          type="text"
          placeholder="Когда"
          readOnly
        />
        {inputOrigin.inputCalendarValue && (
          <Calendar onChange={inputOrigin.onChange} />
        )}
        <span className="date"></span>
      </div>
      <div className="search-form__column --date">
        <input
          className="search-form__input"
          value={inputReturn.inputValue}
          onClick={inputReturn.onClick}
          type="text"
          placeholder="Обратно"
          readOnly
        />
        {inputReturn.inputCalendarValue && (
          <Calendar onChange={inputReturn.onChange} />
        )}
        <span className="date"></span>
      </div>
    </form>
  )
}
