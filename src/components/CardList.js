import React, { Component } from 'react';
import Card from './Card.js';

class CardList extends Component {
      render() {
            const robots = this.props.type
            const cardArray = robots.map((user, i) => {
                  return <Card 
                                    key={robots[i].id} 
                                    id={robots[i].id} 
                                    name={robots[i].name} 
                                    email={robots[i].email}
                              />
            })
            return (
                  <div>
                        {cardArray}
                  </div>
            );
      }
}

export default CardList;