import React, { Component } from 'react'

class Image extends Component {

  render() {

    const mainImage = (<img className={this.props.className}
                            src={this.props.src} 
                            alt={this.props.alt} />);

    return (
      (this.props.canExpand ? (
        <a href={this.props.src}>{mainImage}</a>
      ) : mainImage)
    );
  }
}

export default Image