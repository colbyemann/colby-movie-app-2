import React from "react";
import Rating from './Rating.js';
import Modal, {closeStyle} from 'simple-react-modal'


class TitleBox extends React.Component {
//this component creates the panel with the single film data, and poster

    constructor(){
        super()
        this.state = {}
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
        let url = "https://image.tmdb.org/t/p/w342"  + this.props.movie;
        let tmdb = "https://www.themoviedb.org/movie/"  + this.props.movie;
        let imdb = "https://www.imdb.com/title/"  + this.props.movie;
        let url2 = "https://image.tmdb.org/t/p/w780" + this.props.movie;
        
        
        return(
            <article class="klob">
                <div class="klob">
                    <h1><strong>{this.props.movie}</strong></h1>
                   
                   <div>
                <a onClick={this.show.bind(this)}><img src={url} alt={this.props.movie}/></a>
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
                    <h1><strong>Information</strong></h1>
                    <h4>{this.props.movie}</h4>
                  {/*   <p>${this.props.movie.revenue}</p>
                    <p>{this.props.movie.runtime} minutes</p>
                    <p>{this.props.movie.tagline}</p>
                    <a href={imdb}><p>IMDB</p></a>
                    <a href={tmdb}><p>TMDB</p></a>
                    <p>{this.props.movie?.details?.overview}</p>
                    <Rating rating={this.props.movie?.ratings?.average}/>
                    <p>Popularity: {Math.round(this.props.movie?.ratings?.popularity)}</p>
                    <p>Vote Count: {this.props.movie?.ratings?.count}</p>
                    
                    {this.comp(this.props.movie?.production?.companies)}
                    {this.cont(this.props.movie?.production?.countries)}
                    {this.key(this.props.movie?.details?.keywords)}
                    {this.gen(this.props.movie?.details?.genres)} */}
                    
                 
                                        
                </div>

            </article>
        )
    }

}
export default TitleBox