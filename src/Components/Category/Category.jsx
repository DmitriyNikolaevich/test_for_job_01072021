import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCategoryAC } from '../../store/mainPageReducer'
import { getBasketStatusSelector } from '../../store/mainPageReducerSelectors'
import s from './Category.module.css'
import { Element } from './Element'

export const Category = ({ item, products }) => {

    const dispatch = useDispatch()

    const basketStatus = useSelector(getBasketStatusSelector)
    
    const ref = useRef()

    const scrolling = () => {
        if((ref.current.getBoundingClientRect().top < 100 && ref.current.getBoundingClientRect().top > 50) || (ref.current.getBoundingClientRect().bottom < 150 && ref.current.getBoundingClientRect().bottom > 110)) {
            dispatch(setActiveCategoryAC(item.id))
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrolling)
        return window.addEventListener('scroll', scrolling)
    }, [])

    return (
        <div className={item.id % 2 === 1 ? s.gray : s.white} id={item.name} ref={ref}>
            <div className={s.wrapper}>
                <h1>{item.name}</h1>
                <div className={s.elements}>
                    {products.map(el => <Element key={el.id.toString()} item={el} basketStatus={basketStatus.filter(elem => elem.id === el.id)} background={item.id % 2 === 1} />)}
                </div>
            </div>
        </div>
    )
}