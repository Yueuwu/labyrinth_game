import React from 'react';
import style from '../styles/refill.module.css'
import img from '../../assets/reset.png'

type props = {
    refill: ()=>void
}
const Refill: React.FC<props> = ({refill}) => {
    return (
        <div className={style.wrapper} onClick={refill}>
            <img className={style.img} src={img} />
        </div>
    );
};

export default Refill;