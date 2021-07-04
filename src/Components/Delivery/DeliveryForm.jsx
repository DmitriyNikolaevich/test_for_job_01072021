import React from 'react'
import s from './Delivery.module.css'
import fillRequest from '../../images/fillRequest.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getDeliveryFormData, getIsHideFillRequesSelector } from '../../store/mainPageReducerSelectors'
import { setDeliveryFormNumberAC, setDeliveryFormStreetAC } from '../../store/mainPageReducer'

export const DeliveryForm = () => {

    const dispatch = useDispatch()

    const deliveryFormData = useSelector(getDeliveryFormData)
    const hideFillRequest = useSelector(getIsHideFillRequesSelector)

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
                    <div className={s.hideContainer} hidden={deliveryFormData.street || hideFillRequest}>
                        <div className={!deliveryFormData.street ? s.fillRequestStreet : s.fillRequesHide}>
                            <img alt='необходимо заполнить поле' src={fillRequest} />
                        </div>
                    </div>
                </div>
                <div>
                    <span>Дом</span>
                    <input placeholder='Введите дом...' value={deliveryFormData.number} onChange={onNumberChange}></input>
                    <div className={s.hideContainer} hidden={deliveryFormData.number || hideFillRequest}>
                        <div className={!deliveryFormData.number && deliveryFormData.street ? s.fillRequestHouseNumber : s.fillRequesHide}>
                            <img alt='необходимо заполнить поле' src={fillRequest} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}