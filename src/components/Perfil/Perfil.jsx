import React from 'react'
import FotoDePerfil from "../../assets/FotoPerfil.png"

export default function Perfil() {
  return (
    <section>
      <section>
        <img src={FotoDePerfil} alt="Foto de perfil" />
      </section>
      <section>
        <h2>Paulo Henrique Moreira</h2>
        <h6>Voluntário Ativo</h6>
        <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
        <div>
          <p>Osasco,SP</p>
          <p>paulo.henrick.moreira@hotmail.com</p>
          <p>Membro desde Janeiro de 2026</p>
        </div>
        <div>
          <p>Educação</p>
          <p>Meio Ambiente</p>
          <p>Assistência Social</p>
          <p>Design</p>
        </div>
      </section>
    </section>
  )
}
