import React from "react";
import TitleBox from './TitleBox.js';
import CastBox from './CastBox.js';
import Loader from './Loader.js';
import Favorites from "./Favorites.js";

class MovieDetials extends React.Component {


       render(){
           const loading = this.state.loading;
           
           return(
               <div>
                <Favorites favorites={this.props.location.state.fav} remove={this.props.remove}/>
               {loading ? <Loader /> : <TitleBox id={this.props.location.state.id} fav={this.props.fav} />}
               <CastBox id={this.props.location.state.id} favorites={this.props.location.state.fav}/>
               </div>
           )
       }

}
export default MovieDetials