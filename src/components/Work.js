import React, { Component } from 'react'

class Work extends Component {

  render() {
    const isOpen = this.props.isOpen
    const fadeOut = this.props.fadeOut

    let rootClassName = isOpen ? 'active' : ''
    rootClassName += fadeOut ? ' o-20' : ''

    return (
      <div className={rootClassName}>
        <div className={`tc f3 ttu avenir pa2 ${ isOpen ? 'b' : ''}`}
             onClick={this.props.handleClick}>
          {this.props.company}
        </div>
        {isOpen ? (
          <div className="avenir pv2">
            <p className="i f7 ph3 tc">{this.props.via}</p>
            <div className="ph3">
              {this.props.children}
            </div>
            <p className="f7 ph3 tr o-70">Tech: {this.props.tech}</p>
          </div>
        ) : ''}
      </div>
    );
  }
}

export default Work