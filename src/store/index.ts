import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './ticketsSlice'
import tabsReducer from './tabsSlice'
import filterReducer from './filterSlice'
import transparentsReducer from './transparentsSlice'

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    tabs: tabsReducer,
    filter: filterReducer,
    transparents: transparentsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
