import React from "react";
import CastView from './CastView.js';
import CastBox from './CastBox.js';
import Loader from './Loader.js';
import Favorites from "./Favorites.js";

class CastDetials extends React.Component {
    //component called when view cast member button is clicked, re-populates cast and crew panel
    constructor(props) {
        super(props);
        this.state = { movie: [],  loading: false, cast: []}
       }

       async componentDidMount() {
        
        this.setState({loading: true});
        try {
        const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=" + this.props.location.state.id;
        const response = await fetch(url);
        const jsonData = await response.json();
        
        this.setState( {movie: jsonData, loading: false} );
        
        }
        catch (error) {
        console.error(error);
        }
       }

       render(){
           const loading = this.state.loading;
           
           return(
               <div>
                <Favorites favorites={this.props.location.state.fav} remove={this.props.remove}/>
               {loading ? <Loader /> : <CastView movie={this.state.movie} cast={this.props.location.state.cast} favorites={this.props.location.state.fav}/>}
               <CastBox movie={this.state.movie} favorites={this.props.location.state.fav}/>
               </div>
           )
       }

}
export default CastDetials