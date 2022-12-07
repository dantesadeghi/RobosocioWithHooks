import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList.js';
import SearchBar from '../components/SearchBar.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
import './App.css';

const App = () => {
      // Using React Hooks
      const [robots, setRobots] = useState([]);
      const [searchfield, setSearchfield] = useState('');

      // The [] as a 2nd arg. is a shortcut so that useEffect() functions like componentDidMount().
      // Because setRobots(users) updates the 'robots' state, the App will need to re-render, and each time it 
      // re-renders it will call useEffect(), which will call setRobots(users) again, and cause another re-render,
      // and so on, and so on, infinitely...
      // The empty array argument is preventing useEffect() from infinitely running each time we fetch 'users'.
      // It makes it so that useEffect is only ran once (when the App loads initially).
      // If we put something inside of the array, for instance: [robots] --> useEffect() would be called each time 
      // there is a change to 'robots'. 
      useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
      }, []);

      const onSearchChange = (event) => {
            setSearchfield(event.target.value);
      }

      const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })

      if (!robots.length) {
            return <h1 className='tc'>Loading...</h1>
      } else {
            return (
                  <div className='tc'>
                        <h1>RoboSocio</h1>
                        <hr />
                        <SearchBar searchChange={onSearchChange}/>
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

export default App;