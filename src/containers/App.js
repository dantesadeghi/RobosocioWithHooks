import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBar from '../components/SearchBar.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
import './App.css';
// import { robots } from './robots';

class App extends Component {
      constructor() {
            super();
            this.state = { // 'STATE' is something that can Change and Affect our App.
                  robots: [],
                  searchfield: ''
            };
      }

      componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
      }

      onSearchChange = (event) => {
            this.setState({ searchfield: event.target.value });
      }

      render() {
            let input = this.state.searchfield;

            const filteredRobots = this.state.robots.filter(robot => {
                  return robot.name.toLowerCase().includes(input.toLowerCase());
            })

            if (!this.state.robots.length) {
                  return <h1 className='tc'>Loading...</h1>
            } else {
                  return (
                        <div className='tc'>
                              <h1>RoboSocio</h1>
                              <hr />
                              <SearchBar searchChange={this.onSearchChange}/>
                              <hr />
                              <Scroll>
                                    <ErrorBoundry>
                                          <CardList type={filteredRobots}/>
                                    </ErrorBoundry>
                              </Scroll>
                        </div>
                  );
            }
      }
}

export default App;