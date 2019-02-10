import React from 'react';

const favoriteItem= (props)=>{
    const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/5855174537.jpg`;
    return(
      <figure className="favorites">
         <img src={imgURL} className="photoThumb" alt={"test"}/>
      </figure>

    );

}
export default favoriteItem