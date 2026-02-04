import React from 'react'

//Import das imagens
import Logo from "../../assets/logo.png"
import Whatsapp from "../../assets/whatsapp.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"

import Styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <section className={Styles.FooterSection}>
      <div className={Styles.LogoConnect}>
        <img src={Logo} alt="Logo do projeto" />
        <h4>Connect</h4>
      </div>
      <div className={Styles.DireitosReservados}>
        <p>© 2026 Vai na Web & Empower. Todos os direitos reservados.
          Projeto destinado exclusivamente a fins educativos.</p>
      </div>
      <div>
        <img src={Whatsapp} alt="Ícone do WhatsApp" className={Styles.RedesSociais}/>
        <img src={Instagram} alt="Ícone do Instagram" className={Styles.RedesSociais} />
        <img src={Linkedin} alt="Ícone do LinkedIn" className={Styles.RedesSociais} />
      </div>
    </section>
  )
}
