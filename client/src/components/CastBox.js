import React from "react";
import { Link } from 'react-router-dom';
import ToggleBox from "./ToggleBox.js";
import ToggleBoxClosed from "./ToggleBoxClosed.js";

class CastBox extends React.Component {

    //see if cast array is empty, if not populate with cast members
    cast =(cast) =>{
        if(cast === null || cast === undefined)
        {
           return <div class="column2"><p>No Cast Listed</p></div>
        }
        else{
            return <div>
            {cast.map((c) =>  
                                <div class="row">
                                <div class="column2">{c.character}</div>
                                <div class="column2">{c.name}</div>
                                
                                <Link  to={{
     pathname: `/CastDetails`,
     state: {id: this.props.movie.id, fav: this.props.favorites, cast: c.id}}}><button>View</button></Link>
                                </div>)}
            </div>
        }
    }

    //this works the same as cast, even though you mentioned all items have crew. Future proof!
    crew =(crew) =>{
        if(crew === null || crew === undefined)
        {
           return <div class="column2"><p>No Crew Listed</p></div>
        }
        else{
            return<div>
            {crew.map((c) =>  <div class="row">
                                <div class="column3"><p>{c.department}</p></div>
                                <div class="column3"><p>{c.job}</p></div>
                                <div class="column3"><p>{c.name}</p></div>
                                </div>)}
                                </div>
        }
    }
    
    render(){
      
        //toogle box compentents used to open and close divs, heavily modified from https://www.digitalocean.com/community/tutorials/how-to-build-a-custom-toggle-switch-with-react
        return(
            <article class="wings"> 
             <Link  to={{
     pathname: `/browse`,
     }}><button class='close'>Close</button></Link>
            <ToggleBox title="Cast"  >
            {this.cast(this.props.movie?.production?.cast)}
			</ToggleBox>
            <ToggleBoxClosed title="Crew"  >
            {this.crew(this.props.movie?.production?.crew)}
			</ToggleBoxClosed>
                
               

           
           
                
            </article>
        )
    }

}
export default CastBox