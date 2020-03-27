import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class Rating extends React.Component {
    //this component creates the star rating, via rounding math, and adds a half star if decimal place
    //stars from font awesome https://www.npmjs.com/package/@fortawesome/react-fontawesome

    stars = () =>{let rounded = Math.round(this.props.rating*2)/2; 
                    if(rounded % 1 != 0){
                        var i = 0;
                        var list = []
                        for(i = 0; i < Math.round(rounded); i++)   
                            {
                                
                            list.push(<FontAwesomeIcon icon={faStar} />)
                            }
                            list.push(<FontAwesomeIcon icon={faStarHalf} />)
                            return list
                    }
                    else
                    {
                        var list = []
                        
                        var i = 0;
                        for(i = 0; i < rounded; i++)   
                        {
                            list.push(<FontAwesomeIcon icon={faStar} />)
                        }
                        return list
                    }
    }

  
    render(){
        
        
        return(
            <h3>{this.stars()}</h3>
        )
    }

}
export default Rating