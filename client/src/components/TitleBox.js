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
       
        
        return(
            <article class="klob">
                <div class="klob">
                    <h1><strong>{this.props.movie}</strong></h1>
                   
                   <div>
          
  
      </div>

                </div>
                <div class="klobright">
                  
                 
                                        
                </div>

            </article>
        )
    }

}
export default TitleBox