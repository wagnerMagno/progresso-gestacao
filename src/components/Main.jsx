import React, { Component } from "react";
import HeaderComponent from './Header';
import CarrouselPrincipalComponent from './CarrouselPrincipal';
import SectionComponent from "./Section";
import images from './../asserts/images/index';

const MainComponent = () => {

  const listSection = [
    {
      title: "Primeiro mês de gravidez",
      description: `Olá, acabei de ser descoberto, mamãe e papai estão muito felizes, porém ainda não sabem se sou Ravi ou Jasmine,
      falar a verdade nem eu sei hehe. Mas quero dizer que estou super ansioso de te conhecer, porém disseram que vou ficar aqui por
      9 meses então vai demorar um pouquinho, mas não fique aperriado não, que logo logo passa e chega o dia em que você vai poder me visitar.
      Cheirinho!`,
      images: [images.testeAnalogico, images.testteDigital],
      key: "mes_1"
    },
    {
      title: "Segundo mês de gravidez",
      description: `Opa, vá com calma, ainda não cheguei nesse mês gestacional, então acalme o coração que já já estou aí com você`,
      images: [],
      key: "mes_2"

    },
    {
      title: "Terceiro mês de gravidez",
      description: `Opa, vá com calma, ainda não cheguei nesse mês gestacional, então acalme o coração que já já estou aí com você`,
      images: [],
      key: "mes_3"

    },
    {
      title: "Quarto mês de gravidez",
      description: `Opa, vá com calma, ainda não cheguei nesse mês gestacional, então acalme o coração que já já estou aí com você`,
      images: [],
      key: "mes_4"

    },
    {
      title: "Quinto mês de gravidez",
      description: `Opa, vá com calma, ainda não cheguei nesse mês gestacional, então acalme o coração que já já estou aí com você`,
      images: [],
      key: "mes_5"

    },
    {
      title: "Sexto mês de gravidez",
      description: `Opa, vá com calma, ainda não cheguei nesse mês gestacional, então acalme o coração que já já estou aí com você`,
      images: [],
      key: "mes_6"

    },
    {
      title: "Sétimo mês de gravidez",
      description: `Opa, vá com calma, ainda não cheguei nesse mês gestacional, então acalme o coração que já já estou aí com você`,
      images: [],
      key: "mes_7"

    },
    {
      title: "Oitavo mês de gravidez",
      description: `Opa, vá com calma, ainda não cheguei nesse mês gestacional, então acalme o coração que já já estou aí com você`,
      images: [],
      key: "mes_8"

    },
    {
      title: "Nono mês de gravidez",
      description: `Opa, vá com calma, ainda não cheguei nesse mês gestacional, então acalme o coração que já já estou aí com você`,
      images: [],
      key: "mes_9"

    },
  ]

  return (
    <div>
      <HeaderComponent />
      <div className="divTitle">
        <h1 >
          Ravi ou Jasmine
        </h1>
      </div>
      <div id="content">
        <CarrouselPrincipalComponent />
        {
          listSection.map(obj => <SectionComponent props={obj} />)
        }

      </div>
    </div>
  );
}

export default MainComponent;
