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
        stepUp: state => {
            const s = state.field
            const find = s.find(e => e.status === 'character')
            if (find){
                let index: number = s.indexOf(find)
                state.field[index]['position'] -= 4
            }
        }
    }
})

export const gameSelector = (state: RootState) => state.game
export const {stepUp} = gameSlice.actions
export default gameSlice.reducer