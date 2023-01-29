import React from 'react'
import Styles from './Footer.module.css'
import {FacebookOutlined, InstagramOutlined, GithubOutlined} from '@ant-design/icons'

function Footer() {
  return (
    <div className={Styles.footer}>
        <div className={Styles.footer_container}>
            <div className={Styles.footer_content}>
                <div className={Styles.footer_topic}>
                    <h1>APSTX</h1>
                </div>
                <div className={Styles.footer_icon}>
                    <a href='https://www.facebook.com/aof.thewin' target='_blank'>
                        <FacebookOutlined />
                    </a>
                    <a href='https://www.instagram.com/apstx/' target='_blank'>
                        <InstagramOutlined />
                    </a>
                    <a href='https://github.com/apstx' target='_blank'>
                        <GithubOutlined />
                    </a>
                </div>
                <div className={Styles.footer_copyright}>
                    <p>&copy; Copyright 2023</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer