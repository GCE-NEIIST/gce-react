import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import LandingPageHero from '../LandingPageHero/LandingPageHero';
import LandingPageSection from '../LandingPageSection/LandingPageSection';

function LandingPage() {
  return (
    <>
      <LandingPageHero />
      <LandingPageSection
        id="thesis"
        position="right"
        title="GCE Thesis"
        body_text={`Prestes a escolher a tua tese de mestrado?\nO GCE criou um serviço que te permite ver quais as propostas de tese de mestrado, classificadas por área de especialização!`}
        button_text="Visitar GCE Thesis"
      />
      <LandingPageSection
        id="hashcode"
        position="left"
        title="Hash Code"
        body_text={`A Google e o GCE trazem-te um desafio de programação!\nO Google Hash Code é um hackathon à escala global que te desafia a resolver um problema real em equipa!`}
        button_text="Sobre Hash Code"
      />
      <LandingPageSection
        id="articles"
        position="center"
        title="Artigos & Entrevistas"
        body_text={`Lê aqui todas as publicações dos nossos colaboradores e descobre o que te espera no mundo profissional.\nDe alunos para alunos!`}
        button_text="Ver Todos os Artigos"
      />
    </>
  );
}

export default LandingPage;
