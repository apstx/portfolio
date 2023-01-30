import React,{ useState } from 'react'
import Styles from './Header.module.css';
import 'boxicons'

function Header() {
    const [toggles, setToggle] = useState(false);

  return (
    <div className={Styles.header}>
        <div className={Styles.container}>
            <div className={Styles.logo}>
                <h1>PORTFOLIO</h1>
            </div>
            <div className={toggles ? Styles.show_menubar : Styles.menubar}>
                <ul className={Styles.ulmenu}>
                    <li className={Styles.limenu}>
                        <a href="#" className={Styles.link}>
                            <div className={Styles.nav_icon}>
                                <box-icon name='home' color='#4f4f4f'></box-icon>
                            </div>
                            Home
                        </a>
                    </li>
                    <li className={Styles.limenu}>
                        <a href="#" className={Styles.link}>
                            <div className={Styles.nav_icon}>
                                <box-icon name='user' color='#4f4f4f'></box-icon>
                            </div>
                            About
                        </a>
                    </li>
                    <li className={Styles.limenu}>
                        <a href="#" className={Styles.link}>
                            <div className={Styles.nav_icon}>
                                <box-icon name='file' color='#4f4f4f'></box-icon>
                            </div>
                            Skill
                        </a>
                    </li>
                    {/* <li className={Styles.limenu}>
                        <a href="#" className={Styles.link}>
                            <div className={Styles.nav_icon}>
                                <box-icon name='briefcase-alt-2' color='#4f4f4f'></box-icon>
                            </div>
                            Service
                        </a>
                    </li> */}
                    <li className={Styles.limenu}>
                        <a href="#" className={Styles.link}>
                            <div className={Styles.nav_icon}>
                                <box-icon name='photo-album' color='#4f4f4f'></box-icon>
                            </div>
                            Portfolio
                        </a>
                    </li>
                    <li className={Styles.limenu}>
                        <a href="#" className={Styles.link}>
                            <div className={Styles.nav_icon}>
                                <box-icon name='user-circle' color='#4f4f4f'></box-icon>
                            </div>
                            Contact
                        </a>
                    </li>
                </ul>
                <div className={Styles.nav_close} onClick={()=>setToggle(false)}>
                    <box-icon name='x-circle' color='#4f4f4f'></box-icon>
                </div>
            </div>
            <div className={Styles.nav_toggle} onClick={()=>setToggle(true)}>
                <box-icon name='menu'></box-icon>
            </div>
        </div>
    </div>
  )
}

export default Header