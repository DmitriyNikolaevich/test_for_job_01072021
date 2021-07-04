import React, { useState } from 'react'
import s from './HeaderMenu.module.css'
import BurgerMenu from '../../images/BurgerMenu.svg'
import basketIcon from '../../images/basketIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { postOrderSagasAC, setDeliveryAC, setHideFillRequesAC } from '../../store/mainPageReducer'
import { getBasketStatusSelector, getDeliveryFormData, getDeliverySelector, getOrderSummSelector } from '../../store/mainPageReducerSelectors'

export const HeaderMenu = () => {

    const dispatch = useDispatch()

    const [hideMenu, setHideMenu] = useState(true)

    const basket = useSelector(getOrderSummSelector)
    const basketOrder = useSelector(getBasketStatusSelector)
    const delivery = useSelector(getDeliverySelector)
    const deliveryAddress = useSelector(getDeliveryFormData)

    const onMenuClick = () => {
        setHideMenu(value => !value)
    }

    const deliveryButtonClick = () => {
        dispatch(setDeliveryAC(true))
        setHideMenu(true)
    }

    const takeawayButtonClick = () => {
        dispatch(setDeliveryAC(false))
        setHideMenu(true)
    }

    const onBasketClick = () => {
        if(basketOrder.length === 0) {
        } else if((delivery && (!!deliveryAddress.street && !!deliveryAddress.number)) || !delivery) {
            dispatch(postOrderSagasAC({order: basketOrder, delivery: delivery, deliveryAddress: deliveryAddress}))
        } else {
            dispatch(setHideFillRequesAC(false))
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.menu}>
                <button onClick={onMenuClick}><img src={BurgerMenu} /></button>
                <div className={s.submenu} hidden={hideMenu}><button onClick={deliveryButtonClick}>Доставка</button></div>
                <div className={s.submenu} hidden={hideMenu}><button onClick={takeawayButtonClick}>Самовывоз</button></div>
            </div>
            <div className={s.redDots}>
                <div className={s.redDot}></div>
                <div className={s.redDot}></div>
                <div className={s.redDot}></div>
            </div>
            <div className={s.basket}><button onClick={onBasketClick}>{basket} &#8381; <img src={basketIcon}/></button></div>
        </div>
    )
}