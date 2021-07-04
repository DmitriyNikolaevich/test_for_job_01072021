import React from 'react'
import s from './Element.module.css'

export const Element = ({ item }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.bodydiv}>
                <div>
                    <img src={item.img} />
                </div>
                <div>
                    <span>{item.name}</span>
                </div>
                <div>
                    <span>{item.price} &#8381;</span>
                </div>
            </div>
            <div></div>
        </div>
    )
}