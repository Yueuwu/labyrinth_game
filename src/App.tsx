import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "./redux/store";
import {useSelector} from "react-redux";
import {chooseLevel, gameSelector, stepDown, stepLeft, stepRight, stepUp, chooseLevelType, refillField} from "./redux/gameSlice";
import FieldWrapper from "./components/gameField/fieldWrapper";
import './App.css'
import SideBar from "./components/UI/SideBar";
import ButtonsGroup from "./components/UI/ButtonsGroup";
import Refill from "./components/UI/Refill";



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
    const levelSelector = (chosen: chooseLevelType) => {
        dispatch(chooseLevel(chosen))
    }
    const refill = () => {
        dispatch(refillField())
    }
    useEffect(() => {
        document.addEventListener('keydown', buttonClickHandler)
    })
    const buttonClickHandler = (e: any) => {
        switch (e.key){
            case 'ArrowUp':  up(); document.removeEventListener('keydown', buttonClickHandler); break
            case 'ArrowDown': down(); document.removeEventListener('keydown', buttonClickHandler); break
            case 'ArrowRight': right(); document.removeEventListener('keydown', buttonClickHandler); break
            case 'ArrowLeft': left(); document.removeEventListener('keydown', buttonClickHandler); break
        }
    }
    const {field} = useSelector(gameSelector)

    return (
        <div className='App'>
            <SideBar levelSelector={levelSelector}/>
            <FieldWrapper/>
            <ButtonsGroup up={up} down={down} right={right} left={left}/>
            <Refill refill={refill}/>
        </div>
    );
}

export default App;
