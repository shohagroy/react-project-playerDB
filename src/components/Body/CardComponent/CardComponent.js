import React from 'react';
import "./CardComponent.css"

const CardComponent = ({player}) => {

    const {strPlayer, strPosition, strSport, strTeam, strThumb} = player


    console.log(player)
    return (
        <div className='card'>
            <img src={strThumb} alt="" />
            <h3>{strPlayer}</h3>
            <p>Position: {strPosition}</p>
            <p>Team: {strTeam}</p>
            <p>{strSport}</p>
            
            <button>Add to Team</button>
        </div>
    );
};

export default CardComponent;