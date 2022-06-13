import SwapIcon from 'components/atoms/SwapIcon'
import Select from 'components/atoms/Select'
import InputDate from 'components/molecules/InputDate'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import {
  swapInputValue,
  updateDestination,
  updateOrigin
} from 'store/filterSlice'
import './style.scss'

export default function SearchForm() {
  const { selectedOriginCity, selectedDestinationCity } = useAppSelector(
    state => state.filter
  )
  const dispatch = useAppDispatch()

  const handleChangeInput = (
    selectedOption: {
      label: string
      value: string
    },
    selectName: string
  ) => {
    if (selectName === 'origin') {
      dispatch(updateOrigin(selectedOption.value))
    } else {
      dispatch(updateDestination(selectedOption.value))
    }
  }

  const handleClickSwap = () => {
    dispatch(swapInputValue({ selectedOriginCity, selectedDestinationCity }))
  }

  return (
    <form className="search-form">
      <div className="search-form__column">
        <Select
          value={selectedOriginCity}
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
          value={selectedDestinationCity}
          name="destination"
          handleChange={handleChangeInput}
          placeholder="Куда"
        />
      </div>
      <div className="search-form__column --date">
        <InputDate id="destination" key={'destination'} placeholder="Когда" />
      </div>
      <div className="search-form__column --date">
        <InputDate key={'return'} id="return" placeholder="Обратно" />
      </div>
    </form>
  )
}
