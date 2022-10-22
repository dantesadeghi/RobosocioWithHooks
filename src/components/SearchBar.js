import React, { Component } from 'react';

class SearchBar extends Component {
      render() {
            const searchChange = this.props.searchChange;
            return (
                  <div className='pa2 grow'>
                        <input 
                              className='pa2 br2 ba b--navy bg-light-gray o-90'
                              type='search' 
                              placeholder='Search by Name' 
                              onChange={searchChange}
                        />
                  </div>
            );
      }
}

export default SearchBar;