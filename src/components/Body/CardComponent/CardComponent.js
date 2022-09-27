import React from 'react';
import "./CardComponent.css"

const CardComponent = ({player, addedButton}) => {

    const {strPlayer, strPosition, strSport, strTeam, strThumb} = player


    return (
        <div className='card'>
            <img src={strThumb} alt="" />
            <h3>{strPlayer}</h3>
            <p>Position: {strPosition}</p>
            <p>Team: {strTeam}</p>
            <p>{strSport}</p>
            
            <button onClick={()=> addedButton(player)}>Add to Team</button>
        </div>
    );
};

export default CardComponent;