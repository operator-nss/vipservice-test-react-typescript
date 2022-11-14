import {configureStore} from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import avia from './slices/aviaInfoSlice'

export const store = configureStore({
  reducer: {
    avia
  },
})

export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;