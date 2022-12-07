import './Card.css';
import React from 'react';

const Card = ({ id, name, email }) => {
      return (
            <div id='card' className='dib br3 pa3 ma2 grow bw2 o-90'>
                  <img 
                        src={`https://robohash.org/${id}/set_set1?size=200x200`} 
                        alt='Profile'
                  />
                  <div>
                        <h2>{name}</h2>
                        <p>{email}</p>
                  </div>
            </div>
      );
}

export default Card;
