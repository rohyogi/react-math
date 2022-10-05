import { configureStore } from '@reduxjs/toolkit'
import rowSlice from './reducers/rowSlice'

export const store = configureStore({
  reducer: {
    row: rowSlice
  },
})