import Link from 'next/link'
import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import Layout from '../components/layout';
import ArticleCard from '../components/articleCard';

const Index = () => {
    return (
      <Layout>
       <Row>
        <Col size=""><ArticleCard /></Col>
        <Col><ArticleCard /></Col>
        <Col><ArticleCard /></Col>
        </Row>
      </Layout>
    )
}

export default Index;