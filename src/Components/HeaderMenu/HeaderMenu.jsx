import React from 'react'
import s from './HeaderMenu.module.css'
import BurgerMenu from '../../images/BurgerMenu.svg'
import basketIcon from '../../images/basketIcon.svg'

export const HeaderMenu = () => {

    const basket = 327

    return (
        <div className={s.wrapper}>
            <div className={s.menu}><img src={BurgerMenu} /></div>
            <div className={s.redDots}>
                <div className={s.redDot}></div>
                <div className={s.redDot}></div>
                <div className={s.redDot}></div>
            </div>
            <div className={s.basket}><button>{basket} &#8381; <img src={basketIcon}/></button></div>
        </div>
    )
}