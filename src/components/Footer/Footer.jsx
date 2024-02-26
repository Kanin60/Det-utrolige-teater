
import style from './Footer.module.scss';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {


    return (
        <footer className={style.footer}>
            <ul>
                <h4>Adresse</h4>
                <li>Det utrolige teater</li>
                <li>Havnegade 901</li>
                <li>9000 Aalborg</li>
                <li>EAN 5798003279845</li>
                <li>CVR 1001 0012</li>
                <li><a href="#">Find vej på kort</a> </li>
            </ul>
            <ul>
                <h4>billetservice</h4>
                <li><a href="#">Se åbningstider</a></li>
                <li>Billettelefon: +45 96 31 80 80</li>
                <li><a href="https://www.billet@dut.dk" target='_blank'>billet@dut.dk</a></li>
                <h4>administration</h4>
                <li>Telefon: +45 96 31 80 90</li>
                <li><a href="mailto:adm@dut.dk">adm@dut.dk</a></li>
            </ul>
            <ul>
                <h4>Praktisk info</h4>
                <li><a href="#">Kontakt</a></li>
                <li><a href="#">Kom trygt i teatret</a></li>
                <li><a href="#">Presseside</a></li>
                <li><a href="#">Skoleforestillinger</a></li>
                <li><a href="#">Teatercaféen</a></li>
                <li><a href="#">Handelsbetingelser</a></li>
            </ul>
            <figure>
                <a href="https://www.facebook.com" target='_blank'><FaFacebookSquare /></a>
                <a href="https://www.instagram.com" target='_blank'><FaInstagramSquare /></a>
                <a href="https://www.linkedin.com" target='_blank'><FaLinkedin /></a>
            </figure>
        </footer>
    )
}

