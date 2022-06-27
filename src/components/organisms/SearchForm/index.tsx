import SwapIcon from 'components/atoms/SwapIcon'
import Select from 'components/atoms/Select'
import DataInput from 'components/molecules/DatePicker'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import {
  selectDepartureDay,
  selectDestinationCity,
  selectOriginCity,
  swapInputValue,
  updateDepartureDay,
  updateDestination,
  updateOrigin,
  updateReturnDay
} from 'store/filterSlice'
import { ISelectOptions } from 'interfaces'
import { selectFilteredOptions } from 'store/citiOptionsSlice'
import './style.scss'

export default function SearchForm() {
  const originCity = useAppSelector(selectOriginCity)
  const destinationCity = useAppSelector(selectDestinationCity)
  const optionsCiteCodes = useAppSelector(selectFilteredOptions)
  const departureDay = useAppSelector(selectDepartureDay)
  const dispatch = useAppDispatch()

  const handleChangeInput = (
    selectedOption: ISelectOptions,
    selectName: string
  ) => {
    if (selectName === 'origin') {
      dispatch(updateOrigin(selectedOption))
    } else {
      dispatch(updateDestination(selectedOption))
    }
  }
  const handleClickSwap = () => {
    if (originCity && destinationCity) {
      dispatch(swapInputValue({ originCity, destinationCity }))
    }
  }
  const handleClickDestination = (date: Date) => {
    dispatch(updateDepartureDay(date.valueOf()))
  }
  const handleClickReturn = (date: Date) => {
    dispatch(updateReturnDay(date.valueOf()))
  }
  return (
    <form className="search-form">
      <div className="search-form__column">
        <Select
          value={originCity}
          options={optionsCiteCodes}
          name="origin"
          handleChange={handleChangeInput}
          borderTopLeftRadius="5px"
          borderBottomLeftRadius="5px"
          placeholder="Откуда"
        />
        <div className="search-form__swap-place">
          <SwapIcon handleClick={handleClickSwap} />
        </div>
      </div>
      <div className="search-form__column">
        <Select
          value={destinationCity}
          options={optionsCiteCodes}
          name="destination"
          handleChange={handleChangeInput}
          placeholder="Куда"
        />
      </div>
      <div className="search-form__column search-form__column--date">
        <DataInput
          name="destination"
          placeholder="Когда"
          handleChange={handleClickDestination}
        />
        <span className="date"></span>
      </div>
      <div className="search-form__column search-form__column--date">
        <DataInput
          name="return"
          placeholder="Обратно"
          handleChange={handleClickReturn}
          minDate={departureDay}
        />
        <span className="date"></span>
      </div>
    </form>
  )
}
