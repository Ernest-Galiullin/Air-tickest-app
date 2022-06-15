import SwapIcon from 'components/atoms/SwapIcon'
import Select from 'components/atoms/Select'
import DataInput from 'components/molecules/InputDate'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import {
  swapInputValue,
  updateDestination,
  updateOrigin
} from 'store/filterSlice'
import { ISelectOptions } from 'interfaces'
import './style.scss'

export default function SearchForm() {
  const { selectedOriginCity, selectedDestinationCity } = useAppSelector(
    state => state.filter
  )
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
    dispatch(swapInputValue({ selectedOriginCity, selectedDestinationCity }))
  }

  return (
    <form className="search-form">
      <div className="search-form__column">
        <Select
          selectedOptions={selectedOriginCity}
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
          selectedOptions={selectedDestinationCity}
          name="destination"
          handleChange={handleChangeInput}
          placeholder="Куда"
        />
      </div>
      <div className="search-form__column search-form__column--date">
        <DataInput id="destination" placeholder="Когда" />
      </div>
      <div className="search-form__column search-form__column--date">
        <DataInput id="return" placeholder="Обратно" />
      </div>
    </form>
  )
}
