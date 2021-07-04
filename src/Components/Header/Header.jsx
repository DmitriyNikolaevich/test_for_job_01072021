import React from 'react'
import s from './Header.module.css'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import { Delivery } from '../Delivery/Delivery'

export const Header = () => {
    return (
        <div className={s.wrapper}>    
            <HeaderMenu />
            <Delivery />
        </div>
    )
}