import React from 'react';
import style from '../styles/cell.module.css'
import {cell} from "../../redux/gameSlice";

const Cell: React.FC<cell> = ({position, status}) => {
    const cellColor = () => {
        if (status === 'empty'){
            return {background: 'white'}
        } else if (status === 'block'){
            return {background: 'black'}
        } else if (status === 'character'){
            return {background: 'red'}
        } else if (status === 'loot'){
            return {background: 'gold'}
        }
    }
    return (
        <div className={style.wrapper} style={cellColor()}>
            
        </div>
    );
};

export default Cell;