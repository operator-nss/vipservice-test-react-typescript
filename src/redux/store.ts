import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import aviaInfo from './slices/aviaInfoSlice'

export const store: any = configureStore({
    reducer: {
        aviaInfo
    },
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();