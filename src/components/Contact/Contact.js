import {React, useRef, useState} from 'react'
import Styles from './Contact.module.css'
import {MailOutlined, FacebookOutlined, SendOutlined} from '@ant-design/icons'
import emailjs from '@emailjs/browser';

function Contact() {

const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qdtj30j', 'template_zac4aw9', form.current, 'Zgx8f768Ir00jAd1f')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setName('');
        setEmail('');
        setDescription('');
    };

  console.log(name,email,description)

  return (
    <div className={Styles.contact}>
        <div className={Styles.contact_container}>
            <div className={Styles.contact_content}>
                <div className={Styles.contact_topic}>
                    <h1>Contact</h1>
                    <p>Get in touch</p>
                </div>
                <div className={Styles.contact_grid}>
                    <div className={Styles.contact_grid_info}>
                        <h3>Talk to me</h3>
                        <div className={Styles.contact_info}>
                            <MailOutlined className={Styles.contact_info_icon}/>
                            <p>Email</p>
                            <p>apisit.thsb@gmail.com</p>
                        </div>
                        <div className={Styles.contact_info}>
                            <FacebookOutlined className={Styles.contact_info_icon}/>
                            <p>Facebook</p>
                            <a href="https://www.facebook.com/aof.thewin" target="_blank">Apisit Thsb</a>
                        </div>
                    </div>
                    <div className={Styles.contact_grid_form}>
                        <h3>Write to me</h3>
                        <form ref={form} onSubmit={sendEmail} className={Styles.contact_form_input}>
                            <div className={Styles.contact_form}>
                                <label>Name</label>
                                <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} className={Styles.contact_form_input_name} placeholder="Enter your name..."/>
                            </div>
                            <div className={Styles.contact_form}>
                                <label>Email</label>
                                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className={Styles.contact_form_input_email} placeholder="Enter your email..."/>
                            </div>
                            <div className={Styles.contact_form}>
                                <label>Description</label>
                                <textarea name="description" onChange={(e) => setDescription(e.target.value)} value={description} className={Styles.contact_form_input_description} rows="4" cols="50" placeholder="Enter your description..."></textarea>
                            </div>
                            <div className={Styles.contact_form_btn}>
                                <button  className={Styles.contact_form_btn_send}>
                                    Send Message<SendOutlined />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact