import React from 'react'
import s from './footer.module.css'
import home from '../../assets/home.png'
import user from '../../assets/user.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import github from '../../assets/twitter_bw.png'
import linkedin from '../../assets/linkedin_bw.png'
// import instagram from '../../assets/instagram_bw.png'
// import { FiPhone } from 'react-icons/fi'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.links}>
                <div className={s.link}>
                    <a href="#home">
                    <img src={home} alt="Home" />
                    <p>Home</p>
                    </a>
                </div>
                <div className={s.link}>
                    <a href="#about">
                    <img src={user} alt="User" />
                    <p>About me</p>
                    </a>
                </div>
            </div>
            <div className={s.socials}>
                <a id="contact-github" href="https://github.com/faizanhamid0717" target="_blank">
                    <img src={github} alt="Github" />
                </a>
                <a  id="contact-linkedin" href="https://www.linkedin.com/in/faizan-hamid29/" target="_blank">
                    <img src={linkedin} alt="Linkedin" />
                </a>
               
            <div className={s.email} id="contact-email">
                <img src={email} alt="Email" />
                <p >faizanhamid162@gmail.com</p>
            </div>
            <div className={s.phone}  id="contact-phone">
                <img src={phone} alt="Phone" />
                <p>9682589618</p>
            </div>

            </div>
        </div>
    )
}
export default Footer;