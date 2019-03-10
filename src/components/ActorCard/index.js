import React, { Component } from 'react';

const ActorCard = ({actor}) => {

  return(
      <div className="actor-card-content">
        <div className="actor-card-profile-container">
          <img className="actor-card-profile" src={`https://image.tmdb.org/t/p/w200/` + actor.profile_path} />
        </div>
      </div>
    )
    }

export default ActorCard;
