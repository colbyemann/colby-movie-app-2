import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'antd';


class CastView extends React.Component {
//pulls from tmdb api key and makes array of cast member information
    constructor(){
        super()
        this.state = {cast: []}
      }

      async componentDidMount() {
        
        this.setState({loading: true});
        try {
        const url = "https://api.themoviedb.org/3/person/" + this.props.cast + "?api_key=6fb043e047db59ebfe3e818bfe1b3c94";
        const response = await fetch(url);
        const jsonData = await response.json();
       console.log(jsonData)
        this.setState( {cast: jsonData, loading: false} );
        
        }
        catch (error) {
        console.error(error);
        }
       }

       birthday =(b) =>{
        if(b === null || b === undefined)
        {
           return 
        }
        else{
            return <p>Birthday: {b}</p>
        }
    }

    home =(b) =>{
        if(b === null || b === undefined)
        {
           return 
        }
        else{
            return <p>{b}</p>
        }
    }

    
    imdb =(b) =>{
        let url = "https://www.imdb.com/name/" + b;
        if(b === null || b === undefined)
        {
           return 
        }
        else{

            return <a href={url}><p>IMDB</p></a>
        }
    }

    photo = (p) =>{

        let url = "https://image.tmdb.org/t/p/w342"+ p;
        if(p === null || p === undefined)
        {
           return <img src="https://i.imgur.com/nahEb9t.jpg"/>
        }
        else{

            return <img src={url}/>
        }
    }

    
    render(){
        
        
        return(
            <article class="klob">
                <div class="klob">
                    <h1><strong>{this.state.cast.name}</strong></h1>
                   
                   <div>
                    {this.photo(this.state.cast.profile_path)}
                    
     
      </div>

                </div>
                <div class="klobright">
                    
                    <h1><strong>Information</strong></h1>
                    
                    {this.birthday(this.state.cast.birthday)}
                    {this.home(this.state.cast.biography)}
                    {this.home(this.state.cast.place_of_birth)}
                    {this.imdb(this.state.cast.imdb_id)}
                    
                    <Link  to={{
                pathname: `/MovieDetails`,
                state: {id: this.props.movie.id, fav: this.props.favorites}}}>
                    <Button>Close</Button></Link>
                
                 
                    
                   
               
                    
                 
                                        
                </div>

            </article>
        )
    }

}
export default CastView