import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "./redux/store";
import {useSelector} from "react-redux";
import {gameSelector, stepDown, stepLeft, stepRight, stepUp} from "./redux/gameSlice";
import FieldWrapper from "./components/gameField/fieldWrapper";
import './App.css'

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const up = () => {
        dispatch(stepUp())
    }
    const down = () => {
        dispatch(stepDown())
    }
    const right = () => {
        dispatch(stepRight())
    }
    const left = () => {
        dispatch(stepLeft())
    }
    useEffect(() => {
        document.addEventListener('keydown', buttonClickHandler)
    })
    const buttonClickHandler = (e: any) => {
        console.log('Click: ', e.key)
        switch (e.key){
            case 'ArrowUp': up(); document.removeEventListener('keydown', buttonClickHandler); break
            case 'ArrowDown': down(); document.removeEventListener('keydown', buttonClickHandler); break
            case 'ArrowRight': right(); document.removeEventListener('keydown', buttonClickHandler); break
            case 'ArrowLeft': left(); document.removeEventListener('keydown', buttonClickHandler); break
        }
    }
    const {field} = useSelector(gameSelector)
    return (
        <div >
            <FieldWrapper/>
            <button style={{fontSize: 40, color: 'black'}} onClick={up}>Up</button>
            <button style={{fontSize: 40, color: 'black'}} onClick={down}>Down</button>
            <button style={{fontSize: 40, color: 'black'}} onClick={right}>Right</button>
            <button style={{fontSize: 40, color: 'black'}} onClick={left}>Left</button>
        </div>
    );
}

export default App;
