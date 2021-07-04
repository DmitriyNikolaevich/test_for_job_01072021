import React from 'react'
import s from './Element.module.css'
import FirstAddIcon from '../../images/FirstAddIcon.svg'
import { useDispatch } from 'react-redux'
import { addQuantityToBasketItem, deleteBasketItem, removeQuantityFromBasketItem, setNewBasketItem } from '../../store/mainPageReducer'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const Element = ({ item, basketStatus, background }) => {

    const dispatch = useDispatch()

    const onFirstAddButtonClick = () => {
        dispatch(setNewBasketItem({id: item.id, quantity: 1, price: item.price}))
    }

    const removeQuantity = () => {
        if(basketStatus[0].quantity === 1) {
            dispatch(deleteBasketItem(item.id))
        } else {
            dispatch(removeQuantityFromBasketItem({id: item.id, quantity: --basketStatus[0].quantity, price: item.price}))
        }
    }

    const addQuantity = () => {
        dispatch(addQuantityToBasketItem({id: item.id, quantity: ++basketStatus[0].quantity, price: item.price}))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.bodydiv} id={background ? s.white : s.gray}>
                <div>
                    <LazyLoadImage alt={item.name} src={item.img} />
                </div>
                <div>
                    <span>{item.name}</span>
                </div>
                <div>
                    <span>{item.price} &#8381;</span>
                </div>
                <div hidden={basketStatus.length !== 0}>
                    <button onClick={onFirstAddButtonClick}>
                        <img src={FirstAddIcon} />
                    </button>
                </div>
                <div className={`${s.orderControll} ${basketStatus.length === 0 && s.hideOrderControllButtons}`}>
                    <div>
                        <button onClick={removeQuantity}>-</button>
                    </div>
                    <div>
                        <span>{basketStatus.length !== 0 ? basketStatus[0].quantity : 0}</span>
                    </div>
                    <div>
                        <button onClick={addQuantity}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}