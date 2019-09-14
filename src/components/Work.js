import React, { Component } from 'react'
import '../styles/Work.scss'

class Work extends Component {

  render() {
    const isOpen = this.props.isOpen
    const fadeOut = this.props.fadeOut

    let rootClassName = isOpen ? 'work-active' : ''
    rootClassName += fadeOut ? ' o-40' : ''

    return (
      <div className={rootClassName}>
        <div className={`work-company tc f3 ttu avenir pa2 tracked ${ isOpen ? 'fw3' : 'fw2'}`}
             onClick={this.props.handleClick}>
          {this.props.company}
        </div>
        {isOpen ? (
          <div className="avenir pv2">
            <p className="i f7 ph3 tc">{this.props.via}</p>
            <div className="ph3">
              {this.props.children}
            </div>
            {this.props.tech ? (
              <p className="f7 ph3 tr o-70">Tech: {this.props.tech}</p>
            ) : ''}
          </div>
        ) : ''}
      </div>
    );
  }
}

export default Work