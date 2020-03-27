import React from "react";
import MovieThumb from './MovieThumb.js';

class MovieList extends React.Component {
 render() {
     //produces list of movies from array, or returns no movies found
    if (this.props.movies.length > 1) {
        return (
            
        <section class="box">
            <div class="row" id="center"><h2><strong>List/Matches</strong></h2> </div>
            <div class="row">
                 <div class="column"><h3><strong>Poster</strong></h3></div>
                <div class="column"><h3><strong>Title</strong></h3></div>
                <div class="column"><h3><strong>Year</strong></h3></div>
                <div class="column"><h3><strong>Rating</strong></h3></div>
            </div>
            
        { this.props.movies.map( (p) =>
        <MovieThumb
        movie={p}
        key={p.id}
        fav={this.props.fav}
        favorites={this.props.favorites}
        remove={this.props.remove}
        /> 
        )}
        </section>
        );
        } else
        return <section class="box"><div class="row" id="center"><h2><strong>NO MOVIES FOUND</strong></h2> </div> </section>
       }
 
}
export default MovieList