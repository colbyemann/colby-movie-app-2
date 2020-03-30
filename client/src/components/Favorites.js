import React from "react";
import FavoriteItem from "./FavoriteItem";
import ToggleFavs from "./ToggleFavs.js";
class Favorites extends React.Component {
    render () {
            return (<article class="favorites">
                    <h1 class="title is-4">❤</h1>  
                    
                    {this.props.favorites.map(m => <FavoriteItem fav={m} favorites={this.props.favorites} remove={this.props.remove}/>)}
		    

                    
                        
                  
            </article>
            
            
            )}

}
export default Favorites