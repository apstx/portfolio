import {React, useEffect, useState} from 'react'
import Styles from './Home.module.css'
import 'boxicons'
import ReactTypingEffect from 'react-typing-effect';
import { DownCircleOutlined } from '@ant-design/icons';
import {Skeleton} from 'antd'

function Home() {
    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    },[])

    return (
        <div className={Styles.home}>
            <div className={Styles.container}>
            { isloading ? (
                <div>
                    <div className={Styles.grid_content}>
                        <div className={Styles.social}>
                            <div className={Styles.social_icon}>
                                <a href='https://www.instagram.com/apstx/' target='_blank'>
                                    <box-icon name='instagram' type='logo' size='md' ></box-icon>
                                </a>
                            </div>
                            <div className={Styles.social_icon}>
                                <a href='#' target='_blank'>
                                    <box-icon name='github' type='logo' size='md'></box-icon>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.image_profile}></div>
                            <div className={Styles.explain}>
                            <div className={Styles.name}>
                                <h1>APISIT THAISOMBOON
                                    <box-icon name='wink-tongue' type='solid' color='#ffed43' size='md' ></box-icon>
                                </h1>
                                <ReactTypingEffect
                                    text={["Frontend Developer"]}
                                    speed={100}
                                    eraseSpeed={100}
                                    cursorRenderer={cursor => <h1>{cursor}</h1>}
                                    displayTextRenderer={(text) => <p className={Styles.typing}>{text}</p>}
                                />
                                </div>
                                <div className={Styles.description}>
                                    <p>สวัสดีผมสนใจหางานเกี่ยวกับด้าน Frontend Developer</p>
                                </div>
                                <div className={Styles.btn}>
                                    <a href='' className={Styles.btn_hello}>
                                        Hello
                                        <box-icon name='send' type='solid' color="#ffffff"></box-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.scrolldown}>
                            <DownCircleOutlined className={Styles.icon_scrolldown}/>
                            <span className={Styles.text_scrolldown}>Scroll Down</span>
                        </div>
                    </div>
                ):(
                    <div>
                        <Skeleton active />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home