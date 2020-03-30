import React from "react";
import { Link } from 'react-router-dom';

import { Transition } from 'react-transition-group';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: '' };
       }
    handleChange = e => {
        this.setState({ title: e.currentTarget.value });
        console.log(this.state.title)
       }

 render() {
    //Hero Image modified from Lab 2
    //Transition example modified from http://reactcommunity.org/react-transition-group/transition
    // image retrived from unsplashed https://unsplash.com/photos/rfRoZPJ8NOg
 let imgUrl =
"https://images.unsplash.com/photo-1523828469188-8ec2b90b6490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
 return (
 <div className = 'banner'
 style = {{ backgroundImage: `url(${imgUrl})`,
 height: '800px',
backgroundSize: 'cover',
backgroundPosition: 'center center',
backgroundRepeat: 'no-repeat'
 }}>


<Transition timeout={4000} in={true} appear>
    {(status) => 
    <div className={`animation animation-${status}`}>
 <div class="homebox">
 <h1>Movie Browser</h1>
 <form >
 <h3>Enter Title</h3>
   <input type='text' name='title' onChange={this.handleChange}/>
 <p>
 <Link  to={{
     pathname: `/browse`, state: this.state.title
     }}>
 <button>Show Matching Movies</button>
 </Link>

 <Link to={{ pathname: '/browse'}}>
 <button>Show All Movies</button>
 </Link>
 </p>
 </form>
 </div></div>}
 </Transition>


 <h4 class="credit">Photo Credit: @artur_luczka</h4>
 </div>
 
 );
 }
}
export default Home