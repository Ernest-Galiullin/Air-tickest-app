import { createSlice } from '@reduxjs/toolkit'
import { ICompany, ISelectOptions } from 'interfaces'
import { RootState } from 'store'

interface IFilterState {
  companies: ICompany[]
  cityOrigin: ISelectOptions
  cityDestination: ISelectOptions
  company: string
  dayDeparture: number | null
  dayReturn: number | null
}

const initialState: IFilterState = {
  companies: [],
  cityOrigin: { value: '', label: '' },
  cityDestination: { value: '', label: '' },
  dayDeparture: null,
  dayReturn: null,
  company: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateCompanies(state, action) {
      state.companies = action.payload
    },
    updateOrigin(state, action) {
      state.cityOrigin = action.payload
    },
    updateDestination(state, action) {
      state.cityDestination = action.payload
    },
    updateDepartureDay(state, action) {
      state.dayDeparture = action.payload
    },
    updateReturnDay(state, action) {
      state.dayReturn = action.payload
    },
    updateSelectCompany(state, action) {
      state.company = action.payload
    },
    swapInputValue(state, action) {
      state.cityOrigin = action.payload.destinationCity
      state.cityDestination = action.payload.originCity
    }
  }
})

export const selectFilter = (state: RootState) => state.filter
export const selectOriginCity = (state: RootState) => state.filter.cityOrigin
export const selectDestinationCity = (state: RootState) =>
  state.filter.cityDestination
export const selectDepartureDay = (state: RootState) =>
  state.filter.dayDeparture
export const selectReturnDay = (state: RootState) => state.filter.dayReturn
export const selectCompanyID = (state: RootState) => state.filter.company

export const {
  updateCompanies,
  updateOrigin,
  updateDestination,
  updateDepartureDay,
  updateReturnDay,
  updateSelectCompany,
  swapInputValue
} = filterSlice.actions

export default filterSlice.reducer
