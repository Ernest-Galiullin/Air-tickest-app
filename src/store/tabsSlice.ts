import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store'

export interface ITab {
  id: number
  title: string
  isActive: boolean
  sortType?: string
  sortDuration?: string
}

interface IStateTabs {
  tabs: ITab[]
  sortType: string | undefined
  sortDuration: string | undefined
}

const initialState: IStateTabs = {
  tabs: [
    {
      id: 1,
      title: 'Самый быстрый',
      isActive: true,
      sortType: 'info.duration'
    },
    {
      id: 2,
      title: 'Самый дешевый',
      isActive: false,
      sortType: 'price'
    },
    {
      id: 3,
      title: 'Оптимальный',
      isActive: false,
      sortType: 'price'
    }
  ],
  sortType: '',
  sortDuration: ''
}

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    updateTabs(state, action) {
      const id = action.payload
      const idx = state.tabs.findIndex(t => t.id === id)

      const tab = state.tabs[idx]

      state.sortType = tab.sortType
      state.sortDuration = tab.sortDuration

      state.tabs.map(item => {
        item.id === id ? (item.isActive = true) : (item.isActive = false)
        return item
      })
    }
  }
})

export const selectTabs = (state: RootState) => state.tabs.tabs
export const selectSortType = (state: RootState) => state.tabs.sortType

export const { updateTabs } = tabsSlice.actions

export default tabsSlice.reducer
