import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

import Styles from '../../css/index.scss'
import { StyledHeader, StyledHeaderTitle, StyledHeaderSubtitle } from './layoutComponents';
import Footer from '../Footer'
import Fonts from '../../utils/Fonts'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  componentDidMount() {
    Fonts()
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title || 'Vasco Silva - Blog'}</title>
          <style dangerouslySetInnerHTML={{ __html: Styles }} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous" />
        </Head>
        <StyledHeader>
          <Navbar expand="md">
            <Container>
              <NavbarBrand><Link href="/" >vascosilvaa.pt</Link></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink><Link href="/">Blog</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link href="/about/">Sobre mim</Link></NavLink>
                  </NavItem>
                 {/*  <NavItem>
                    <NavLink><Link href="/contacts/">Contactos</Link></NavLink>
                  </NavItem> */}
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <StyledHeaderTitle>
            {this.props.title}
            <StyledHeaderSubtitle>{this.props.subtitle}</StyledHeaderSubtitle>
          </StyledHeaderTitle>

        </StyledHeader>
        <Container className="p-5">
          {this.props.children}
        </Container>
        <Footer />
      </React.Fragment>
    )
  }
}