import { createSlice } from '@reduxjs/toolkit'

const defaultValue = {
  ids: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: defaultValue,
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id)
    },
    removeFavorite: (state, action) => {
      //   state.ids = state.ids.filter((id) => id !== action.payload.id)
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    },
  },
})

// Actions creators are generated for each case reducer function

export const { addFavorite, removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
