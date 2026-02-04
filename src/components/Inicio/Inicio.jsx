import React from 'react'

import ImgTelaInicial from "../../assets/img-tela-inicial.png"

import Styles from "../Inicio/Inicio.module.scss"

export default function Inicio() {
  return (
    
    <section className={Styles.SectionInicial}>
      <div className={Styles.TextosIniciais}>
        <h1>
            Projetos Sociais que transformam
        </h1>
        <p>
            Conectamos sua empresa com projetos sociais impactantes.
            Juntos, criamos mudanças reais na comunidade.
        </p>
      </div>
      <div className={Styles.SectionImg}>
          <img src={ImgTelaInicial} alt="Mãos segurando um globo terrestre cercado por figuras humanas coloridas de mãos dadas, simbolizando união e diversidade"  className={Styles.ImgInicial}/>          
      </div>
    </section>

  )
}
