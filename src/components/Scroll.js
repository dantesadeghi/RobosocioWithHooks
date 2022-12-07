import React from 'react';

const Scroll = ({ children }) => {
      return (
            <div style={{ overflowY: 'scroll', border: 'none', height: '750px' }}>
                  {children}
            </div>
      );
}

export default Scroll;