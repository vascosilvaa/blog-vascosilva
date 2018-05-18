import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Styles from '../css/index.scss'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
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
          <title>{this.props.title || 'Next.js Starter Project'}</title>
          <style dangerouslySetInnerHTML={{ __html: Styles }} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">Vasco Silva</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink><Link href="/components/">Components</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link href="/components/">Components</Link></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Container className="p-4">
          {this.props.children}
        </Container>
      </React.Fragment>
    )
  }
}
