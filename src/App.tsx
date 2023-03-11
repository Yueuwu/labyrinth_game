import React, {useState} from 'react';
import {useAppDispatch} from "./redux/store";
import {useSelector} from "react-redux";
import {gameSelector, stepUp} from "./redux/gameSlice";
import FieldWrapper from "./components/gameField/fieldWrapper";
import './App.css'

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const up = () => {
        dispatch(stepUp())
    }
    const {field} = useSelector(gameSelector)
    return (
        <div>
            <FieldWrapper/>
            <button style={{fontSize: 40, color: 'black'}} onClick={up}>Up</button>
        </div>
    );
}

export default App;
