import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import Layout from '../components/Layout'
import styled from 'styled-components'

import ArticleCard from '../components/ArticleCard';

class Contacts extends React.Component {
  render() {
    return (
      <Layout title="VASCO SILVA" subtitle="Contacte-me sempre que desejar">
        <StyledForm>
        
        </StyledForm>
      </Layout>
    )
  }
}

export default Contacts

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

const StyledForm = styled.div`
`