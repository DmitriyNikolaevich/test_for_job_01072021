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
                    <div className={s.socLogo}><a href="vk.com" ><img alt='vk' src={vk} /></a></div>
                    <div className={s.socLogo}><a href="facebook.com" ><img alt='facebook' src={facebook} /></a></div>
                    <div className={s.socLogo}><a href="twitter.com" ><img alt='twitter' src={twitter} /></a></div>
                    <div className={s.socLogo}><a href="ok.com" ><img alt='ok' src={ok} /></a></div>
                </div>
                <div className={s.sideBlock}>
                    <div className={s.storesLogo}><a href="play.google.com" ><img alt='google play' src={googlePlay} /></a></div>
                    <div className={s.storesLogo}><a href="https://www.apple.com/ru/app-store/" ><img alt='app store' src={appStore} /></a></div>
                </div>
            </div>
        </div>
    )
}