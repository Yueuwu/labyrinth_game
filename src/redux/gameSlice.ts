import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

type cell = {
    position: number
    status: 'empty' | 'block' | 'character' | 'loot'
}
interface gameState {
    field: cell[]
}
// Вынести в отдельную функцию, переименовать
const createField = (a: number): cell[] => {
    let o: cell[] = []
    let isCharacter = false
    let isLoot = false
    for (let i = 0; i < a; i++){
        let random = Math.floor(Math.random() * 4)
        let status: cell["status"] = 'empty'
        if (!random){
            status = 'block'
        } else if (random > 2 && !isCharacter){
            isCharacter = true
            status = 'character'
        } else if (random <= 2 && !isLoot){
            isLoot = true
            status = 'loot'
        }
        o.push({position: i,status: status})
    }
    return o
}

const initialState: gameState = {
    field: createField(16)
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