import React from 'react';
import style from "../styles/buttonsgroup.module.css";

type props = {
    up: ()=> void
    down: ()=>void
    left: ()=>void
    right: ()=>void
}
const ButtonsGroup: React.FC<props> = ({up, down, left, right}) => {
    return (
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
    );
};

export default ButtonsGroup;