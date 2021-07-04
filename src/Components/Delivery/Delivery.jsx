import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDeliveryAC } from '../../store/mainPageReducer'
import { getDeliverySelector } from '../../store/mainPageReducerSelectors'
import s from './Delivery.module.css'
import { DeliveryForm } from './DeliveryForm'

export const Delivery = () => {

    const dispatch = useDispatch()

    const delivery = useSelector(getDeliverySelector)

    const deliveryButtonClick = () => {
        dispatch(setDeliveryAC(true))
    }

    const takeawayButtonClick = () => {
        dispatch(setDeliveryAC(false))
    }

    return (
        <div className={s.wrapper}>
            <div>
                {delivery && <DeliveryForm />}
            </div>
            <div className={s.buttons}>
                <button className={delivery ? s.selectedButton : s.unselectedButton} onClick={deliveryButtonClick}>Доставка</button>
                <button className={delivery ? s.unselectedButton : s.selectedButton} onClick={takeawayButtonClick}>Самовывоз</button>
            </div>
        </div>
    )
}