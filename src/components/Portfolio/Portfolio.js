import {React,useEffect, useState} from 'react'
import Styles from './Portfolio.module.css'
import {CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import {Skeleton} from 'antd'

function Portfolio() {
    const [toggle, setToggle] = useState(0);
    const [menu, setMenu] = useState('All');
    const [isloading, setIsLoading] = useState(false);

    const btnToggle = (index) => {
        setToggle(index)
    }

    useEffect(() => {
        setIsLoading(true);
    },[])

  return (
    <div className={Styles.portfolio}>
        <div className={Styles.portfolio_container}>
            <div className={Styles.portfolio_content}>
                <div className={Styles.portfolio_topic}>
                    <h1>Portfolio</h1>
                    <p>Most recent work</p>
                </div>
                <div className={Styles.portfolio_menu}>
                    <h3 onClick={() => setMenu('All')} className={menu === 'All' ? Styles.portfolio_menu_active : Styles.portfolio_menu}>All</h3>
                    <h3 onClick={() => setMenu('Web')} className={menu === 'Web' ? Styles.portfolio_menu_active : Styles.portfolio_menu}>Web</h3>
                    <h3 onClick={() => setMenu('App')} className={menu === 'App' ? Styles.portfolio_menu_active : Styles.portfolio_menu}>App</h3>
                </div>
                { isloading ? (
                    <div>
                        {menu == 'All' ? (
                            <div className={Styles.portfolio_grid_menu_all}>
                                <div className={Styles.portfolio_menu_all}>
                                    <h4>ระบบการจัดการสินค้าออนไลน์</h4>
                                    <h4>( E-Commerce )</h4>
                                    <p onClick={() => btnToggle(1)}>Seemore...</p>
                                    <div className={toggle === 1 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
                                        <div className={Styles.portfolio_modal_content}>
                                            <CloseCircleOutlined className={Styles.portfolio_modal_content_icon_close} onClick={() => btnToggle(0)}/>
                                            <div className={Styles.portfolio_modal_topic}>
                                                <h4>ระบบการจัดการสินค้าออนไลน์</h4>
                                                <h4>( E-Commerce )</h4>
                                            </div>
                                            <div className={Styles.portfolio_modal_data}>
                                                <p><CheckCircleOutlined />ผู้สมัครสมาชิก</p>
                                                <p><CheckCircleOutlined />ผู้ดูแลระบบ</p>
                                                <p><CheckCircleOutlined />ค้นหาสินค้า</p>
                                                <p><CheckCircleOutlined />ชำระเงินออนไลน์</p>
                                                <p><CheckCircleOutlined />ซื้อ-ขายสินค้า</p>
                                                <p><CheckCircleOutlined />จัดการสินค้า เพิ่ม ลบ แก้ไข</p>
                                                <p><CheckCircleOutlined />ออกรายงาน</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.portfolio_menu_all}>
                                    <h4>แอปพลิเคชันสังคมผู้สูงอายุ</h4>
                                    <h4>( Senior Social )</h4>
                                    <p onClick={() => btnToggle(2)}>Seemore...</p>
                                    <div className={toggle === 2 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
                                        <div className={Styles.portfolio_modal_content}>
                                            <CloseCircleOutlined className={Styles.portfolio_modal_content_icon_close} onClick={() => btnToggle(0)}/>
                                            <div className={Styles.portfolio_modal_topic}>
                                                <h4>แอปพลิเคชันสังคมผู้สูงอายุ</h4>
                                                <h4>( Senior Social )</h4>
                                            </div>
                                            <div className={Styles.portfolio_modal_data}>
                                                <p><CheckCircleOutlined />ผู้สมัครสมาชิก</p>
                                                <p><CheckCircleOutlined />ผู้ดูแลระบบ</p>
                                                <p><CheckCircleOutlined />สนทนาข้อความ</p>
                                                <p><CheckCircleOutlined />ค้นหาห้องสนทนา</p>
                                                <p><CheckCircleOutlined />เข้าร่วมกิจกรรม</p>
                                                <p><CheckCircleOutlined />ค้นหากิจกรรม</p>
                                                <p><CheckCircleOutlined />จัดการห้องสนทนา เพิ่ม ลบ แก้ไข</p>
                                                <p><CheckCircleOutlined />จัดการห้องกิจกรรม เพิ่ม ลบ แก้ไข</p>
                                                <p><CheckCircleOutlined />จัดการข่าว เพิ่ม ลบ แก้ไข</p>
                                                <p><CheckCircleOutlined />แสดงห้องที่ใกล้เคียงกับสิ่งที่สมาชิกสนใจ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ):(
                            <>
                                {menu === 'Web' ? (
                                    <div className={Styles.portfolio_grid_menu_all}>
                                        <div className={Styles.portfolio_menu_all}>
                                            <h4>ระบบการจัดการสินค้าออนไลน์</h4>
                                            <h4>( E-Commerce )</h4>
                                            <p onClick={() => btnToggle(1)}>Seemore...</p>
                                            <div className={toggle === 1 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
                                                <div className={Styles.portfolio_modal_content}>
                                                    <CloseCircleOutlined className={Styles.portfolio_modal_content_icon_close} onClick={() => btnToggle(0)}/>
                                                    <div className={Styles.portfolio_modal_topic}>
                                                        <h4>ระบบการจัดการสินค้าออนไลน์</h4>
                                                        <h4>( E-Commerce )</h4>
                                                    </div>
                                                    <div className={Styles.portfolio_modal_data}>
                                                        <p><CheckCircleOutlined />ผู้สมัครสมาชิก</p>
                                                        <p><CheckCircleOutlined />ผู้ดูแลระบบ</p>
                                                        <p><CheckCircleOutlined />ค้นหาสินค้า</p>
                                                        <p><CheckCircleOutlined />ชำระเงินออนไลน์</p>
                                                        <p><CheckCircleOutlined />ซื้อ-ขายสินค้า</p>
                                                        <p><CheckCircleOutlined />จัดการสินค้า เพิ่ม ลบ แก้ไข</p>
                                                        <p><CheckCircleOutlined />ออกรายงาน</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ):(
                                    <>
                                        {menu === 'App' ? (
                                            <div className={Styles.portfolio_grid_menu_all}>
                                                <div className={Styles.portfolio_menu_all}>
                                                    <h4>แอปพลิเคชันสังคมผู้สูงอายุ</h4>
                                                    <h4>( Senior Social )</h4>
                                                    <p onClick={() => btnToggle(2)}>Seemore...</p>
                                                    <div className={toggle === 2 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
                                                        <div className={Styles.portfolio_modal_content}>
                                                            <CloseCircleOutlined className={Styles.portfolio_modal_content_icon_close} onClick={() => btnToggle(0)}/>
                                                            <div className={Styles.portfolio_modal_topic}>
                                                                <h4>แอปพลิเคชันสังคมผู้สูงอายุ</h4>
                                                                <h4>( Senior Social )</h4>
                                                            </div>
                                                            <div className={Styles.portfolio_modal_data}>
                                                                <p><CheckCircleOutlined />ผู้สมัครสมาชิก</p>
                                                                <p><CheckCircleOutlined />ผู้ดูแลระบบ</p>
                                                                <p><CheckCircleOutlined />สนทนาข้อความ</p>
                                                                <p><CheckCircleOutlined />ค้นหาห้องสนทนา</p>
                                                                <p><CheckCircleOutlined />เข้าร่วมกิจกรรม</p>
                                                                <p><CheckCircleOutlined />ค้นหากิจกรรม</p>
                                                                <p><CheckCircleOutlined />จัดการห้องสนทนา เพิ่ม ลบ แก้ไข</p>
                                                                <p><CheckCircleOutlined />จัดการห้องกิจกรรม เพิ่ม ลบ แก้ไข</p>
                                                                <p><CheckCircleOutlined />จัดการข่าว เพิ่ม ลบ แก้ไข</p>
                                                                <p><CheckCircleOutlined />แสดงห้องที่ใกล้เคียงกับสิ่งที่สมาชิกสนใจ</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ):(
                                            <></>
                                        )}
                                    </>
                                )}
                            </>
                        )}
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

export default Portfolio