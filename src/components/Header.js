import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="avenir tc pv4 pv5-ns">
        <img src="http://tachyons.io/img/logo.jpg" className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
        <h1 className="f3 f4-ns fw6 mid-gray">Tom Graft</h1>
        <h2 className="f6 gray fw2 ttu tracked">
          Full Stack Web Developer<br />
          11 years experience<br />
          Brooklyn, NY
        </h2>
      </header>
    );
  }
}

export default Header