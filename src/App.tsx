import React, {useState} from 'react';
import {useAppDispatch} from "./redux/store";
import {useSelector} from "react-redux";
import {gameSelector} from "./redux/gameSlice";
import FieldWrapper from "./components/gameField/fieldWrapper";
import './App.css'

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const {field} = useSelector(gameSelector)
    console.log(field)
    return (
        <div>
            <FieldWrapper/>
        </div>
    );
}

export default App;
