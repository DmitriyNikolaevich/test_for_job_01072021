import React from 'react'
import s from './Navigation.module.css'
import { useSelector } from 'react-redux'
import { getCategoriesSelector } from '../../store/mainPageReducerSelectors'
import { NavigationButton } from './NavigationButton'

export const Navigation = () => {

    const categories = useSelector(getCategoriesSelector)

    return (
        <div className={s.position}>
            <div className={s.wrapper}>
                {categories.map(item => <NavigationButton key={item.id.toString()} item={item} />)}
            </div>
        </div>
    )
}