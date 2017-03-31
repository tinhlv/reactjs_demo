import React from 'react';

class Image extends React.Component{
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
        <div>
        	<img className="img-reponsive" src={this.props.source} alt={this.props.name}/>
        </div>
    );
  }
}

export default Image;