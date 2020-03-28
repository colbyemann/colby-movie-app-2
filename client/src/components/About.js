import React from 'react';
import Modal, {closeStyle} from 'simple-react-modal'

export default class App extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  show(){
    this.setState({show: true})
  }

  close(){
    this.setState({show: false})
  }


  render(){
    return (
      <div>
        
      <a onClick={this.show.bind(this)}><button>About</button></a>
      <Modal
      //this will completely overwrite the default css completely
      //Modal Compent used from https://codepen.io/ph1p/pen/XjNONb
      containerStyle={{background: '#C8D5B9'}} //changes styling on the inner content area
      closeOnOuterClick={true}
      show={this.state.show}
      onClose={this.close.bind(this)}>

      <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
      <h1>About</h1>
          <h3>Colby Emann</h3>
          <a href="https://github.com/colbyemann/colby-movie-app-2"><h3>Github</h3></a>
          <br></br>
          <h3>API LINKS</h3>
          <a href="https://colby-movie-app-2.herokuapp.com/api/movies/"><p>All Movies</p></a>
          <a href="https://colby-movie-app-2.herokuapp.com/api/movies/11"><p>Movie By ID</p></a>
          <a href="https://colby-movie-app-2.herokuapp.com/api/brief"><p>Movies Brief</p></a>
          <a href="https://colby-movie-app-2.herokuapp.com/api/find/title/Rocky"><p>Find movie by Title</p></a>
          <a href="https://colby-movie-app-2.herokuapp.com/api/find/year/2009/2010"><p>Find Year Range</p></a>
          <a href="https://colby-movie-app-2.herokuapp.com/api/find/rating/4/5"><p>Find Ratings Range</p></a>
          

      </Modal>
      </div>
    )
  }
}

          
     