import React from 'react'
import Styles from './About.module.css'
import {FilePdfOutlined, AuditOutlined} from '@ant-design/icons'

function About() {
  return (
    <div className={Styles.about}>
        <div className={Styles.about_container}>
            <div className={Styles.about_content}>
                <div className={Styles.about_topic}>
                    <h1>About Me</h1>
                    <p>My introduntion</p>
                </div>
                <div className={Styles.about_grid}>
                    <div className={Styles.about_image_profile}>
                        <img src="https://cdn.discordapp.com/attachments/1069343811819556917/1069343912428326982/132A5714-v.jpg" />
                    </div>
                    <div className={Styles.about_grid_data}>
                        <div className={Styles.about_box}>
                            <div className={Styles.about_education}>
                                <AuditOutlined className={Styles.about_icon_education}/>
                                <p>huachiew chalermprakiet university</p>
                            </div>
                        </div>
                        <div className={Styles.about_description}>
                            <p>Excepteur qui reprehenderit ullamco in officia labore ea incididunt deserunt nisi aliqua labore occaecat voluptate. Do eiusmod mollit eiusmod proident aliquip ipsum cillum aliquip. Mollit reprehenderit do ea do.</p>
                        </div>
                        <div className={Styles.about_download}>
                            <a href="#" download='' className={Styles.about_btn_download}>
                                Download
                                <FilePdfOutlined />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About