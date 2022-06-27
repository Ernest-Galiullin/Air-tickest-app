import { RootState } from './index'
import { TCityCodes } from './../interfaces'
import { createSlice } from '@reduxjs/toolkit'

export interface ICityCode {
  value: TCityCodes
  label: TCityCodes
}

interface IStateCitiOptions {
  options: ICityCode[]
}

const initialState: IStateCitiOptions = {
  options: [
    { value: 'MOW', label: 'MOW' },
    { value: 'HKT', label: 'HKT' },
    { value: 'HKG', label: 'HKG' },
    { value: 'JNB', label: 'JNB' },
    { value: 'PTB', label: 'PTB' },
    { value: 'ARH', label: 'ARH' },
    { value: 'TRN', label: 'TRN' },
    { value: 'KRS', label: 'KRS' },
    { value: 'SRT', label: 'SRT' },
    { value: 'LOS', label: 'LOS' },
    { value: 'EKV', label: 'EKV' },
    { value: 'EKT', label: 'EKT' }
  ]
}

const citiOptionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {}
})

export const selectAllCities = (state: RootState) => state.citiOptions.options
export const selectFilteredOptions = (state: RootState) =>
  state.citiOptions.options.filter(
    ({ value }) =>
      value !== state.filter.cityOrigin?.value &&
      value !== state.filter.cityDestination?.value
  )

export default citiOptionsSlice.reducer
