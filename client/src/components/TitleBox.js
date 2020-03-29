import React from "react";
import Rating from './Rating.js';
import Modal, {closeStyle} from 'simple-react-modal'


class TitleBox extends React.Component {
//this component creates the panel with the single film data, and poster

constructor(props) {
    super(props);
    this.state = { movie: [],  loading: false};
   }

//fetch array of single movie data
async componentDidMount() {
    
    this.setState({loading: true});
    try {
    const url = "https://colby-movie-app-2.herokuapp.com/api/movies/" + this.props.id;
    const response = await fetch(url);
    const jsonData = await response.json();
    
    this.setState( {movie: jsonData, loading: false} );
    console.log(this.state.movies)
    }
    catch (error) {
    console.error(error);
    }
   }

    //these functions filter if company, country, keywords, or genres are empty in array
    comp =(comp) =>{
        if(comp === null || comp === undefined)
        {
           return 
        }
        else{
            return <div><h4>Companies</h4> <p>
            {comp.map((c) =>  c.name + " ")}
            </p></div>
        }
    }

    cont =(cont) =>{
        if(cont === null || cont === undefined)
        {
           return 
        }
        else{
            return <div><h4>Countries</h4> <p>
            {cont.map((c) =>  c.name + " ")}
            </p></div>
        }
    }

    key =(key) =>{
        if(key === null || key === undefined)
        {
           return 
        }
        else{
            return <div><h4>Keywords</h4> <p>
            {key.map((c) =>  c.name + " ")}
            </p></div>
        }
    }

    gen =(gen) =>{
        if(gen === null || gen === undefined)
        {
           return 
        }
        else{
            return <div><h4>Genres</h4> <p>
            {gen.map((c) =>  c.name + " ")}
            </p></div>
        }
    }

    show(){
        this.setState({show: true})
      }
    
      close(){
        this.setState({show: false})
      }
    
    
    render(){
        let url = "https://image.tmdb.org/t/p/w342"  + this.state.movie.poster;
        let tmdb = "https://www.themoviedb.org/movie/"  + this.state.movie.tmdb_id;
        let imdb = "https://www.imdb.com/title/"  + this.state.movie.imdb_id;
        let url2 = "https://image.tmdb.org/t/p/w780" + this.state.movie.poster;
        
        
        return(
            <article class="klob">
                <div class="klob">
                    <h1><strong>{this.state.movie.title}</strong></h1>
                   
                   <div>
                <a onClick={this.show.bind(this)}><img src={url} alt={this.state.movie.title}/></a>
      <Modal
        //Modal Compent used from https://codepen.io/ph1p/pen/XjNONb
      containerStyle={{background: '#C8D5B9', width: "800px"}} //changes styling on the inner content area
      closeOnOuterClick={true}
      show={this.state.show}
      onClose={this.close.bind(this)}>

      <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
      <div class='test-class2'><img src={url2} /></div>
          

      </Modal>
      </div>

                </div>
                <div class="klobright">
                    <button onClick={ () => this.props.fav(this.state.movie) }>Add to Favs ❤</button>
                    <h1><strong>Information</strong></h1>
                    <h4>{this.state.movie.release_date}</h4>
                    <p>${this.state.movie.revenue}</p>
                    <p>{this.state.movie.runtime} minutes</p>
                    <p>{this.state.movie.tagline}</p>
                    <a href={imdb}><p>IMDB</p></a>
                    <a href={tmdb}><p>TMDB</p></a>
                    <p>{this.state.movie?.details?.overview}</p>
                    <Rating rating={this.state.movie?.ratings?.average}/>
                    <p>Popularity: {Math.round(this.state.movie?.ratings?.popularity)}</p>
                    <p>Vote Count: {this.state.movie?.ratings?.count}</p>
                    
                    {this.comp(this.state.movie?.production?.companies)}
                    {this.cont(this.state.movie?.production?.countries)}
                    {this.key(this.state.movie?.details?.keywords)}
                    {this.gen(this.state.movie?.details?.genres)}
                    
                 
                                        
                </div>

            </article>
        )
    }

}
export default TitleBox