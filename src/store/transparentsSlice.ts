import { createSlice } from '@reduxjs/toolkit'

interface ITransparent {
  id: number
  title: string
  isChecked: boolean
  value: number
}

interface IStateTransparents {
  transparents: ITransparent[]
  value: number[]
}

const initialState: IStateTransparents = {
  transparents: [
    { id: 1, title: 'Без пересадок', isChecked: false, value: 0 },
    { id: 2, title: '1 пересадка', isChecked: false, value: 1 },
    { id: 3, title: '2 пересадки', isChecked: false, value: 2 },
    { id: 4, title: '3 пересадки', isChecked: false, value: 3 }
  ],
  value: []
}

export const transparentsSlice = createSlice({
  name: 'transparent',
  initialState,
  reducers: {
    updateTransparents(state, action) {
      const id = action.payload
      state.transparents = state.transparents.map(item => {
        if (item.id === Number(id)) {
          item.isChecked = !item.isChecked
          if (item.isChecked) {
            state.value.push(item.value)
          } else {
            state.value = state.value.filter(int => int !== item.value)
          }
        }
        return item
      })
    }
  }
})

export const { updateTransparents } = transparentsSlice.actions

export default transparentsSlice.reducer
