import React from 'react';
import style from '../styles/fieldWrapper.module.css'
import {useSelector} from "react-redux";
import {gameSelector} from "../../redux/gameSlice";
import Cell from "./Cell";

const FieldWrapper = () => {
    const {field} = useSelector(gameSelector)

    return (
        <div className={style.wrapper}>
            <div className={style.wrap}>
                {field.map(cell => <Cell key={cell.position} position={cell.position} status={cell.status}/>)}
            </div>
        </div>
    );
};

export default FieldWrapper;