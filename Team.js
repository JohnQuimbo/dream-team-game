import React from 'react';
import PlayerSearchInput from './PlayerSearchInput';

function Team(props){
    return(
    <div className = "team" >
        <h1>{props.name}</h1> 
        <PlayerSearchInput position = "Point Guard"/>
        <PlayerSearchInput position = "Shooting Guard"/>
        <PlayerSearchInput position = "Small Forward"/>
        <PlayerSearchInput position = "Power Forward"/>
        <PlayerSearchInput position = "Center"/>
    </div>
    )
}

//eventually add a feature so that the user can name their own teams
//after the inputs are logged the application will fetch data and 

export default Team



