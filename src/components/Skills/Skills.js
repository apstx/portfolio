import {React, useEffect, useState} from 'react'
import Styles from './Skills.module.css'
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled'
import {Skeleton} from 'antd'

function Skills() {
    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    },[])

  return (
    <div className={Styles.skills}>
        <div className={Styles.skills_container}>
            <div className={Styles.skills_content}>
                <div className={Styles.skills_topic}>
                    <h1>Skills</h1>
                    <p>My technical level</p>
                </div>
                { isloading ? (
                    <div className={Styles.skills_grid}>
                        <div className={Styles.skills_grid_front}>
                            <h2>Frontend</h2>
                            <div className={Styles.skills_grid_frontend}>
                                <div className={Styles.skills_grid_frontend_box1}>
                                    <div className={Styles.skills_data}>
                                        <h4><CheckCircleFilled /> HTML</h4>
                                        <p>Advanced</p>
                                    </div>
                                    <div className={Styles.skills_data}>
                                        <h4><CheckCircleFilled /> CSS</h4>
                                        <p>Advanced</p>
                                    </div>
                                    <div className={Styles.skills_data}>
                                        <h4><CheckCircleFilled /> JavaScript</h4>
                                        <p>Basic</p>
                                    </div>
                                </div>
                                <div className={Styles.skills_grid_frontend_box2}>
                                    <div className={Styles.skills_data}>
                                        <h4><CheckCircleFilled /> Bootstrap</h4>
                                        <p>Basic</p>
                                    </div>
                                    <div className={Styles.skills_data}>
                                        <h4><CheckCircleFilled /> Git</h4>
                                        <p>Basic</p>
                                    </div>
                                    <div className={Styles.skills_data}>
                                        <h4><CheckCircleFilled /> React</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.skills_grid_back}>
                            <h2>Backend</h2>
                            <div className={Styles.skills_grid_backend}>
                                <div className={Styles.skills_grid_backend_box1}>
                                    <div className={Styles.skills_data}>
                                        <h4><CheckCircleFilled /> Node</h4>
                                        <p>Basic</p>
                                    </div>
                                    <div className={Styles.skills_data}>
                                        <h4><CheckCircleFilled /> MySQL</h4>
                                        <p>Basic</p>
                                    </div>
                                    <div className={Styles.skills_data}>
                                        <h4><CheckCircleFilled /> SQL</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                                <div className={Styles.skills_grid_backend_box2}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <div>
                        <Skeleton active />
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Skills