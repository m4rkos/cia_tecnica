import React, { Component } from 'react';

import '@coreui/coreui/dist/css/coreui.min.css';

import { CSidebar, CContainer } from './coreui/index';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        
        <CContainer >
          <CSidebar />
          {this.props.children}
        </CContainer>
      </div>
    );
  }
}
