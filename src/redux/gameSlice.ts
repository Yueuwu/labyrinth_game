import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {fillField} from "../utils/fillField";


export type cell = {
    position: number
    status: 'empty' | 'block' | 'character' | 'loot'
}
interface gameState {
    field: cell[],
    isPassed: boolean

}


const initialState: gameState = {
    field: fillField(16),
    isPassed: false
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        stepUp: state => {
            const find = state.field.find(e => e.status === 'character')
            if (find){
                let index: number = state.field.indexOf(find)
                if (find['position'] > 3 && (state.field[index-4]['status'] === 'empty' || state.field[index-4]['status'] === 'loot')){
                    if (state.field[index-4]['status'] === 'loot'){
                        state.field[index-4]['status'] = 'empty'
                        state.isPassed = true
                        state.field[index - 4]['position'] += 4
                        state.field[index]['position'] -= 4
                    }else {
                        state.field[index - 4]['position'] += 4
                        state.field[index]['position'] -= 4
                    }
                    state.field = state.field.sort((function(a, b) {
                        return a.position - b.position;
                    }))
                }
            }
        },
        stepDown: state => {
            const find = state.field.find(e => e.status === 'character')
            if (find){
                let index: number = state.field.indexOf(find)
                if (find['position'] < 14 && (state.field[index+4]['status'] === 'empty' || state.field[index+4]['status'] === 'loot')){
                    if (state.field[index+4]['status'] === 'loot'){
                        state.field[index+4]['status'] = 'empty'
                        state.isPassed = true
                        state.field[index + 4]['position'] -= 4
                        state.field[index]['position'] += 4
                    }else {
                        state.field[index + 4]['position'] -= 4
                        state.field[index]['position'] += 4
                    }
                    state.field = state.field.sort((function(a, b) {
                        return a.position - b.position;
                    }))
                }
            }
        },
        stepRight: state => {
            const find = state.field.find(e => e.status === 'character')
            if (find){
                let index: number = state.field.indexOf(find)
                if (find['position'] !== 15 && (state.field[index+1]['status'] === 'empty' || state.field[index+1]['status'] === 'loot')){
                    if (state.field[index+1]['status'] === 'loot'){
                        state.field[index+1]['status'] = 'empty'
                        state.isPassed = true
                        state.field[index+1]['position'] -= 1
                        state.field[index]['position'] += 1
                    }else{
                    state.field[index+1]['position'] -= 1
                    state.field[index]['position'] += 1
                    }
                    state.field = state.field.sort((function(a, b) {
                        return a.position - b.position;
                    }))
                }
            }
        },
        stepLeft: state => {
            const find = state.field.find(e => e.status === 'character')
            if (find){
                let index: number = state.field.indexOf(find)
                if (find['position'] !== 0 && (state.field[index-1]['status'] === 'empty' || state.field[index-1]['status'] === 'loot')){
                    if (state.field[index-1]['status'] === 'loot'){
                        state.field[index-1]['status'] = 'empty'
                        state.isPassed = true
                        state.field[index-1]['position'] += 1
                        state.field[index]['position'] -= 1
                    }else{
                    state.field[index-1]['position'] += 1
                    state.field[index]['position'] -= 1
                    }
                    state.field = state.field.sort((function(a, b) {
                        return a.position - b.position;
                    }))
                }
            }
        },
    }
})

export const gameSelector = (state: RootState) => state.game
export const {stepUp, stepDown, stepRight, stepLeft} = gameSlice.actions
export default gameSlice.reducer