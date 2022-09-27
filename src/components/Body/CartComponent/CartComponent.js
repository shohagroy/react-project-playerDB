import React from 'react';
import './CartComponent.css'

const CartComponent = ({players}) => {


    console.log(players)
    return (
        <div className='cart'>
            <ol>
                {
                    players.map(player => <li 
                        seletePlayer={player}
                        >{player.strPlayer}
                        </li> )
                }
            </ol>
        </div>
    );
};

export default CartComponent;