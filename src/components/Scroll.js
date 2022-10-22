import React, { Component } from 'react';

class Scroll extends Component {
      render() {
            return (
                  <div style={{ overflowY: 'scroll', border: 'none', height: '750px' }}>
                        {this.props.children}
                  </div>
            );
      }
}

export default Scroll;