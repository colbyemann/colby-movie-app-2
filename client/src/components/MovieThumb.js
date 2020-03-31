import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class MovieThumb extends React.Component {
//creates tumbnails of posts, with other info
 render() {
 const file = this.props.movie.poster;
 const imgURL = "https://image.tmdb.org/t/p/w92" + file ;
 return (
 <div class="row">
 <div class="column"><figure><Link  to={{
     pathname: `/MovieDetails`,
     state: {id: this.props.movie.id, fav: this.props.favorites}}}><img src={imgURL} title={this.props.movie.title} alt={this.props.movie.title} /></Link>
 </figure></div>
 <div class="column"><Link  to={{
     pathname: `/MovieDetails`,
     state: {id: this.props.movie.id, fav: this.props.favorites}}}><p>{this.props.movie.title}</p></Link></div>
 <div class="column"><p>{this.props.movie.release_date.substring(0, 4)}</p></div>
 <div class="column"><p>{this.props.movie.ratings.average}</p> </div>
 <div class="column"><Link  to={{
     pathname: `/MovieDetails`,
     state: {id: this.props.movie.id, fav: this.props.favorites}}}><Button >View</Button></Link><Button onClick={ () => this.props.fav(this.props.movie.poster) }>❤</Button></div>
</div>
 
 
 
 );
 }
}
export default MovieThumb