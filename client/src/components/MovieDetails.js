import React from "react";
import TitleBox from './TitleBox.js';
import CastBox from './CastBox.js';
import Loader from './Loader.js';
import Favorites from "./Favorites.js";

class MovieDetials extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movie: [],  loading: false};
       }

    //fetch array of single movie data
    async componentDidMount() {
        
        this.setState({loading: true});
        try {
        const url = "https://colby-movie-app-2.herokuapp.com/api/movies/" + this.props.location.state.id;
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData[0])
       
        this.setState( {movie: [jsonData], loading: false} );
        console.log(this.state.movie);
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
               {loading ? <Loader /> : <TitleBox movie={this.state.movie} fav={this.props.fav} />}
               {loading ? <Loader /> : <CastBox movie={this.state.movie} favorites={this.props.location.state.fav}/>}
               </div>
           )
       }

}
export default MovieDetials