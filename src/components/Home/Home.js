import React from 'react'
import Styles from './Home.module.css'
import 'boxicons'
import ReactTypingEffect from 'react-typing-effect';

function Home() {
    return (
        <div className={Styles.home}>
            <div className={Styles.container}>
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
                            <p>Consequat mollit irure occaecat eiusmod id reprehenderit pariatur dolore in aute id. Enim irure proident voluptate ut Lorem sit in laboris anim. Sint elit irure sit commodo id et quis sunt in incididunt enim aute.</p>
                        </div>
                        <div className={Styles.btn}>
                            <a href='' className={Styles.btn_hello}>
                                Hello
                                <box-icon name='send' type='solid' color="#ffffff"></box-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home