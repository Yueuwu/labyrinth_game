import React, {useState} from 'react';
import {useAppDispatch} from "./redux/store";
import {increase, setCount} from './redux/testSlice'
import {useSelector} from "react-redux";
import {testSelector} from "./redux/testSlice";
import {item} from "./redux/testSlice";

const App: React.FC = () => {
    const dispatch = useAppDispatch()

    const [item, setA] = useState<item>({num: 0})
    const set = (e: string) => {
        setA({num: parseInt(e)})
    }

    const inc = () => {
        dispatch(increase())
    }
    const {count} = useSelector(testSelector)
    return (
        <div>
            <div>{count}</div>
            <button onClick={inc}>Increase</button>
            <input placeholder='Set number' onChange={e => set(e.target.value)}/>
            <button onClick={()=>dispatch(setCount(item))}>Set</button>
        </div>
    );
}

export default App;
