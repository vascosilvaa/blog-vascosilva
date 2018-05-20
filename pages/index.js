import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import Layout from '../components/Layout'
import styled from 'styled-components'

import ArticleCard from '../components/ArticleCard';

class Index extends React.Component {
  render() {
    return (
      <Layout title="VASCO SILVA" subtitle="O meu blog">
        <StyledText>
          Olá! Eu sou um fã de javascript que vive em Portugal.
          Tenho especial gosto pela àrea de desenvolvimento Frontend, contudo, tenho experiência em todo o processo de desenvolvimento web.
          Convido-o a acompanhar alguns dos meus últimos artigos:
        </StyledText>
        <Row className="mt-5 mb-5">
          <Col md="4"><ArticleCard id="1" title="Redux Form: uma simples alternativa para formulários com React+Redux" subtitle="Por vezes, a criação e manipulação de formulários em aplicações web pode tornar-se aborrecida e dispendiosa para programadores. A utilização de frameworks e bibliotecas geralmente procura simplificar todo este processo." img="http://aosd.net/wp-content/uploads/2017/11/Computer-Programmer.jpg"/></Col>
          <Col md="4"><ArticleCard id="2" title="Trabalho remoto: um novo conceito, uma nova experiência" subtitle="Apesar de não ser um conceito muito comum e popular em Portugal, o trabalho remoto tem vindo a tornar-se numa realidade cada vez mais desejada tanto por profissionais, como por empresas que procuram contributos diferenciadores e novos métodos de trabalho." img="https://blog.bia.pt/wp-content/uploads/2018/04/RemoteMountain.jpg"/></Col>
        </Row>
      </Layout>
    )
  }
}

export default Index

const StyledText = styled.div`
  color: #8d8d8d;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  line-height: 31px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  text-transform: none;
  padding: 40px;
  text-align:center;
`