import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "./redux/store";
import {useSelector} from "react-redux";
import {gameSelector, stepDown, stepLeft, stepRight, stepUp} from "./redux/gameSlice";
import FieldWrapper from "./components/gameField/fieldWrapper";
import './App.css'
import style from './App.module.css'

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
        switch (e.key){
            case 'ArrowUp':  up(); document.removeEventListener('keydown', buttonClickHandler); break
            case 'ArrowDown': down(); document.removeEventListener('keydown', buttonClickHandler); break
            case 'ArrowRight': right(); document.removeEventListener('keydown', buttonClickHandler); break
            case 'ArrowLeft': left(); document.removeEventListener('keydown', buttonClickHandler); break
        }
    }
    const {isPassed, field} = useSelector(gameSelector)
    console.log(field)
    isPassed && window.location.reload()
    return (
        <div>
            <FieldWrapper/>
            <div className={style.wrapper}>
                <div className={style.wrap}>
                    <div className={style.btnBlock}>
                        <button className={style.btn} onClick={up}>Up</button>
                    </div>
                    <div className={style.middleBtnBlock}>
                        <button className={style.btn} onClick={left}>Left</button>
                        <button className={style.btn} onClick={right}>Right</button>
                    </div>
                    <div className={style.btnBlock}>
                        <button className={style.btn} onClick={down}>Down</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
