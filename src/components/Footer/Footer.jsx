import {useState} from 'react'

//Import das imagens
import Logo from "../../assets/logo.png"
import Whatsapp from "../../assets/whatsapp.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import GitHub from "../../assets/github.png"
import Medium from "../../assets/medium.png"

import Styles from "./Footer.module.scss"

export default function Footer() {

    const [redesSociais] = useState([
    {
        id:1,
        alt: "Logo do WhatsApp",
        img: Whatsapp,
        link: "https://wa.me/5511942331974",
    },
    {
        id:2,
        alt: "Logo do Instagram",
        img: Instagram,
        link: "https://www.instagram.com/paulo.henricks/",
    },
    {
        id:3,
        alt: "Logo do LinkedIn",
        img: Linkedin,
        link: "https://www.linkedin.com/in/paulohenriquemoreira1986/",

    },
    {
        id:4,
        alt: "Logo do GitHub",
        img: GitHub,
        link: "https://github.com/paulohenriquemoreira",

    },
    {
        id:5,
        alt: "Logo do Medium",
        img: Medium,
        link: "https://medium.com/@paulohenrique.moreira",

    }

  ])

  return (
    <footer className={Styles.FooterSection}>
      <div className={Styles.LogoConnect}>
        <img src={Logo} alt="Logo do projeto" />
        <h4 className={Styles.TextoLogo}>Connect</h4>
      </div>
      <div className={Styles.DireitosReservados}>
        <p className={Styles.DireitosReservadostexto}>© 2026 Vai na Web & Empower. Todos os direitos reservados.
          Projeto destinado exclusivamente a fins educativos.</p>
      </div>
        <section className={Styles.RedesSociaisLista}>
          {redesSociais.map((item)=>(
            <ul key={item.id}>
              <li><a href={item.link} target='_blank' rel="noopener noreferrer"><img src={item.img} alt={item.alt} className={Styles.RedesSociaisItem}/></a></li>
            </ul>
          ))}
          
        </section>
    </footer>
  )
}
