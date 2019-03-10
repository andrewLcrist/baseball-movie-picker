import React, { Component } from 'react';

const ActorCard = ({actor}) => {

  return(
      <div className="actor-card-content">
        <img src={`https://image.tmdb.org/t/p/w200/` + actor.profile_path} />
      </div>
    )
    }

export default ActorCard;
