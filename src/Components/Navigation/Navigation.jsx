import React from 'react'
import s from './Navigation.module.css'
import { useSelector } from 'react-redux'
import { getCategoriesSelector } from '../../store/mainPageReducerSelectors'

export const Navigation = () => {

    const categories = useSelector(getCategoriesSelector)

    return (
        <div className={s.position}>
        <div className={s.wrapper}>
            {categories.map(item => <div className={s.buttons}><button onClick={() => window.location = `#${item.name}`}>{item.name}</button></div>)}
        </div>
        </div>
    )
}