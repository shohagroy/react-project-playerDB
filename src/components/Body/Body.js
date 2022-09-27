import React, { useEffect, useState } from 'react';
import './Body.css'
import CardComponent from './CardComponent/CardComponent.js';
import CartComponent from './CartComponent/CartComponent';

const Body = ({search}) => {

    const [players, setPlayers] = useState();

    useEffect(()=>{
        fetch(`https://thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data.player))
    },[search]);

    if(players){
        return (
            <div className='body'>
              <div className='card-section'>
                  {
                      players.map(player => <CardComponent player={player}/>)
                  }
              </div>
    
              <div className='cart-section'>
                <CartComponent/>
    
              </div>
            </div>
        );

    }
    
};

export default Body;