import React, { useState } from 'react';
import { When } from 'react-if';

import { LogionContext } from './context'

class Login extends React.Component {

  static contextType = LogionContext;

  render() {
    const isLoggedIn = this.context.isLoggedIn;
    const canDo = this.props.capability ? this.context.can(this.props.capability) : true;
    const okToRender = isLoggedIn && canDo;

    return (
      <When condition={okToRender}>
        {this.props.children}
      </When>
    )
  }
}

export default Login;