import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import test from './testSlice'
import game from './gameSlice'

export const store = configureStore({
    reducer: {
        test,
        game
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch