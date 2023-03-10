import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {fillField} from "../utils/fillField";

export type cell = {
    position: number
    status: 'empty' | 'block' | 'character' | 'loot'
}
interface gameState {
    field: cell[]
}

const initialState: gameState = {
    field: fillField(16)
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {

    }
})

export const gameSelector = (state: RootState) => state.game
export const {} = gameSlice.actions
export default gameSlice.reducer