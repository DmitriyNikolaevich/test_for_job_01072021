import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDeliveryAC } from '../../store/mainPageReducer'
import { getDeliverySelector } from '../../store/mainPageReducerSelectors'
import s from './Delivery.module.css'
import { DeliveryForm } from './DeliveryForm'

export const Delivery = () => {

    const dispatch = useDispatch()

    const delivery = useSelector(getDeliverySelector)

    const [deliveryStyle, setDeliveryStyle] = useState(s.selectedButton)
    const [takeawayStyle, setTakeawayStyle] = useState(s.unselectedButton)

    const deliveryButtonClick = () => {
        dispatch(setDeliveryAC(true))
        setDeliveryStyle(s.selectedButton)
        setTakeawayStyle(s.unselectedButton)
    }

    const takeawayButtonClick = () => {
        dispatch(setDeliveryAC(false))
        setDeliveryStyle(s.unselectedButton)
        setTakeawayStyle(s.selectedButton)
    }

    return (
        <div className={s.wrapper}>
            <div>
                {delivery && <DeliveryForm />}
            </div>
            <div className={s.buttons}>
                <button className={deliveryStyle} onClick={deliveryButtonClick}>Доставка</button>
                <button className={takeawayStyle} onClick={takeawayButtonClick}>Самовывоз</button>
            </div>
        </div>
    )
}