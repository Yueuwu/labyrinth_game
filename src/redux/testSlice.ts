import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

export type item = {
    num: number
}
interface T {
    count: number
}
const initialState: T = {
    count: 1
}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        increase: state => {
            state.count += 1
        },
        setCount: (state, action: PayloadAction<item>) => {
            state.count = action.payload.num
        }
    }
})

export const testSelector = (state: RootState) => state.test
export const {increase, setCount} = testSlice.actions
export default testSlice.reducer