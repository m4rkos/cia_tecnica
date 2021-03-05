import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { UserList as Home } from './components/UserList';
import { UserRegistre } from './components/UserRegistre';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/create' component={UserRegistre} />
      </Layout>
    );
  }
}
