import React from 'react'
import s from './Navigation.module.css'

export const NavigationButton = ({ item }) => {
    return (
        <div className={item.current ? s.activeButton : s.buttons}>
            <button onClick={() => window.location = `#${item.name}`}>
                {item.name}
            </button>
        </div>
    )
}