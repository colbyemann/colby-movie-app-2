import React from "react";
import { Link } from 'react-router-dom';
import { CSSTransition, transit } from "react-css-transition";


class FavoriteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState({active: !this.state.active});
      }

     
        
    render () {  
        let url = "https://image.tmdb.org/t/p/w92/"  + this.props.fav;
        
        return (
          
                    
                    <div class="artist-collection-photo">
                        <button class="close2" type="button" onClick={() => {  this.handleClick(); this.props.remove(this.props.fav);}}>×</button>
                        <Link  to={{
                pathname: `/MovieDetails`,
                state: {id: this.props.favorites.id, fav: this.props.favorites}}}>
                         <img height='130px' src={url} class="img-thumbnail" />
                         </Link>
                        
                    </div>
                   
                    
          
           
            
    
)}

}
export default FavoriteItem