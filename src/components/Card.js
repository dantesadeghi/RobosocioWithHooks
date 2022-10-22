import './Card.css';
import React, { Component } from 'react';

class Card extends Component {
	render () {
            const {id, name, email} = this.props
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
}

export default Card;
