import React from 'react'
import s from './Delivery.module.css'
import fillRequest from '../../images/fillRequest.svg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDeliveryFormData } from '../../store/mainPageReducerSelectors'
import { setDeliveryFormNumberAC, setDeliveryFormStreetAC } from '../../store/mainPageReducer'

export const DeliveryForm = () => {

    const dispatch = useDispatch()

    const deliveryFormData = useSelector(getDeliveryFormData)

    const onStreetChange = (e) => {
        dispatch(setDeliveryFormStreetAC(e.target.value))
    }

    const onNumberChange = (e) => {
        dispatch(setDeliveryFormNumberAC(e.target.value))
    }

    return (
        <div>
            <div className={s.name}><span>Доставка г.Москва</span></div>
                <div className={s.deliveryAddress}>
                    <div>
                        <span>Улица</span>
                        <input placeholder='Введите улицу...' value={deliveryFormData.street} onChange={onStreetChange}></input>
                    </div>
                    <div>
                        <span>Дом</span>
                        <input placeholder='Введите дом...' value={deliveryFormData.number} onChange={onNumberChange}></input>
                    </div>
                </div>
                <div className={deliveryFormData.street === '' 
                                    ? s.fillRequestStreet : deliveryFormData.number === '' 
                                    ? s.fillRequestHouseNumber : s.fillRequesHide}>
                    <img src={fillRequest} />
                </div>
        </div>
    )
}