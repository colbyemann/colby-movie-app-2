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
        let url = "https://image.tmdb.org/t/p/w92"  + this.props.fav.poster;
        
        return (
          //css transition modified from example https://wikiwi.github.io/react-css-transition/
            <CSSTransition
          defaultStyle={{ transform: "translate(0, 0)" }}
          enterStyle={{ transform: transit("translate(50px, 0)", 500, "ease-in-out") }}
          leaveStyle={{ transform: transit("translate(0, 0)", 500, "ease-in-out") }}
          activeStyle={{ transform: "translate(50px, 0)" }}
          active={this.state.active}
          >
                    
                    <div class="artist-collection-photo">
                        <button class="close2" type="button" onClick={() => {  this.handleClick(); this.props.remove(this.props.fav.id);}}>×</button>
                        <Link  to={{
                pathname: `/MovieDetails`,
                state: {id: this.props.fav.id, fav: this.props.favorites}}}>
                         <img height='130px' src={url} class="img-thumbnail" />
                         </Link>
                        
                    </div>
                   
                    
            </CSSTransition>    
           
            
    
)}

}
export default FavoriteItem