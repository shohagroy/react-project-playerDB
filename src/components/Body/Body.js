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


    const [selectPlayer, setSelectPlayer] = useState([])

    const selectButton = player =>{

        let newSelect = [...selectPlayer, player]
        setSelectPlayer(newSelect)

    }
    console.log(selectPlayer)

    if(players){
        return (
            <div className='body'>
              <div className='card-section'>
                  {
                      players.map(player => <CardComponent 
                        addedButton = {selectButton} 
                        player={player}/>)
                  }
              </div>
    
              <div className='cart-section'>
                <h3>Select Players</h3>
{/* 
                {
                    selectPlayer.map(player => <CartComponent player={player}/>)
                } */}
                
                <CartComponent players={selectPlayer}/>
    
              </div>
            </div>
        );

    }
    
};

export default Body;