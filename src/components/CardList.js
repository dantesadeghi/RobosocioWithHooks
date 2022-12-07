import React from 'react';
import Card from './Card.js';

const CardList = ({ type }) => {
      const cardArray = type.map((user, i) => {
            return <Card 
                              key={type[i].id} 
                              id={type[i].id} 
                              name={type[i].name} 
                              email={type[i].email}
                        />
      })
      return (
            <div>
                  {cardArray}
            </div>
      );
}

export default CardList;