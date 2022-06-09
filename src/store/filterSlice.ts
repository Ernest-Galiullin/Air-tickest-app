import { createSlice } from '@reduxjs/toolkit'
import { ICompany } from 'interfaces'
import { RootState } from 'store'

interface IFilterState {
  companies: ICompany[]
  selectedOriginCity: string
  selectedDestinationCity: string
  selectedCompany: string
  selectedDepartureDay: number | null
  selectedReturnDay: number | null
}

const initialState: IFilterState = {
  companies: [],
  selectedOriginCity: '',
  selectedDestinationCity: '',
  selectedDepartureDay: null,
  selectedReturnDay: null,
  selectedCompany: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateCompanies(state, action) {
      state.companies = action.payload
    },
    updateOrigin(state, action) {
      state.selectedOriginCity = action.payload
    },
    updateDestination(state, action) {
      state.selectedDestinationCity = action.payload
    },
    updateDepartureDay(state, action) {
      state.selectedDepartureDay = action.payload
    },
    updateReturnDay(state, action) {
      state.selectedReturnDay = action.payload
    },
    updateSelectCompany(state, action) {
      state.selectedCompany = action.payload
    },
    swapInputValue(state, action) {
      state.selectedOriginCity = action.payload.selectedDestinationCity
      state.selectedDestinationCity = action.payload.selectedOriginCity
    }
  }
})

export const selectFilter = (state: RootState) => state.filter

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
