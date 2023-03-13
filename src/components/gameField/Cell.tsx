import React, {useMemo} from 'react';
import style from '../styles/cell.module.css'
import {cell} from "../../redux/gameSlice";
import loot from '../../assets/loot.png'
import character from '../../assets/swordsman.png'
import wall from '../../assets/wall.png'

const Cell: React.FC<cell> = ({position, status}) => {

    const setBG = () => {
        switch (status){
            case 'loot': return loot
            case 'character': return character
            case "block": return wall
        }
    }

    return (
        <div className={style.wrapper}>
            {status !== 'empty' && <img className={style.img} alt='Loot' src={setBG()}/>}
        </div>
    );
};



export default Cell;