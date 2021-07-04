import React from 'react'
import s from './Footer.module.css'
import vk from '../../images/vkLogo.svg'
import ok from '../../images/odnoklassnikiLogo.svg'
import twitter from '../../images/twitterLogo.svg'
import facebook from '../../images/facebookLogo.svg'
import appStore from '../../images/appStoreLogo.svg'
import googlePlay from '../../images/googlePlayLogo.svg'

export const Footer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <div className={s.red}></div>
                <div className={s.red}></div>
                <div className={s.red}></div>
            </div>
            <div className={s.middle}>
                <div>
                    <h2>Раздел 1</h2>
                    <ul>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                    </ul>
                </div>
                <div>
                    <h2>Раздел 1</h2>
                    <ul>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                    </ul>
                </div>
                <div className={s.gray}>
                    
                </div>
                <div>
                    <h2>Раздел 1</h2>
                    <ul>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                    </ul>
                </div>
                <div>
                    <h2>Раздел 1</h2>
                    <ul>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                        <li>Подраздел</li>
                    </ul>
                </div>
            </div>
            <div className={s.bottom}>
                <div className={s.sideBlock}></div>
                <div className={s.middleBlock}>
                    <div className={s.socLogo}><a href="" ><img src={vk} /></a></div>
                    <div className={s.socLogo}><a href="" ><img src={facebook} /></a></div>
                    <div className={s.socLogo}><a href="" ><img src={twitter} /></a></div>
                    <div className={s.socLogo}><a href="" ><img src={ok} /></a></div>
                </div>
                <div className={s.sideBlock}>
                    <div className={s.storesLogo}><a href="" ><img src={googlePlay} /></a></div>
                    <div className={s.storesLogo}><a href="" ><img src={appStore} /></a></div>
                </div>
            </div>
        </div>
    )
}