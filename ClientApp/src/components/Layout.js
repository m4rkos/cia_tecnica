import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import '@coreui/coreui/dist/css/coreui.min.css';

import { CSidebar } from './coreui/index';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          <CSidebar />
          {this.props.children}
        </Container>
      </div>
    );
  }
}
