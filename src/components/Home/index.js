import React from 'react';
import YouTube from 'react-youtube';

const HomePage = () => {

  const opts = {
  playerVars: {
    autoplay: 0,
    loop: 1,
    controls: 1,
    rel: 0,
    playsinline: 0,
    modestbranding: 1,
    iv_load_policy: 3,
    width: '100%'
  }
}
  return (
  <div id="homepage-container">
    <YouTube
      id="montage"
      videoId={'ItYScNYRA5w'}
      opts={opts}
    />
  </div>
);
}

const condition = authUser => !!authUser;

export default HomePage;
