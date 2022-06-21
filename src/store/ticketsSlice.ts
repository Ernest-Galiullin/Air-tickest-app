import { createSlice } from '@reduxjs/toolkit'
import { ICompany, ITicket } from 'interfaces'
import { RootState } from 'store'

interface IStateTickets {
  tickets: ITicket[]
  filtredTickets: ITicket[]
}

const initialState: IStateTickets = {
  tickets: [],
  filtredTickets: []
}

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    updateTickets(state, action) {
      state.tickets = action.payload
    },
    updateFiltredTickets(state, action) {
      state.filtredTickets = action.payload
    }
  }
})

export const selectFiltredTickets = (state: RootState) =>
  state.tickets.filtredTickets
export const selectTickets = (state: RootState) => state.tickets.filtredTickets

export const { updateTickets, updateFiltredTickets } = ticketsSlice.actions

export default ticketsSlice.reducer
