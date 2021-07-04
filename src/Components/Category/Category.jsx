import React from 'react'
import s from './Category.module.css'
import { Element } from './Element'

export const Category = ({ item, products }) => {

    return (
        <div className={s.backgroung} id={item.name}>
            <div className={s.wrapper}>
                <h1>{item.name}</h1>
                <div className={s.elements}>
                    {products.map(el => <Element item={el} />)}
                </div>
            </div>
        </div>
    )
}