import React from "react";


  class SingleFavorite extends React.Component {
   
     render() {
       return (
         <div className="column is-1">
           <img src={"https://image.tmdb.org/t/p/w185/" + this.props.favorite.poster} alt="Sample Title" />
         </div>
       )
     }
   }
   

export default SingleFavorite;