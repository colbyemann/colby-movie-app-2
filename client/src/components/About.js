import React from 'react';
import Modal, {closeStyle} from 'simple-react-modal';

import {
  QuestionCircleOutlined
} from '@ant-design/icons';

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
        
      <a onClick={this.show.bind(this)}><QuestionCircleOutlined />About</a>
      <Modal
      //this will completely overwrite the default css completely
      //Modal Compent used from https://codepen.io/ph1p/pen/XjNONb
      containerStyle={{background: '#C8D5B9', textAlign: 'center'}} //changes styling on the inner content area
      closeOnOuterClick={true}
      show={this.state.show}
      onClose={this.close.bind(this)}>

      <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
      <h1>About</h1>
          <h3>Colby Emann</h3>
          <a href="https://github.com/colbyemann/colby-movie-app-2"><p>Github</p></a>
          <br></br>
          <h3>Tech</h3>
          <a href="https://ant.design/"><p>Design Components from Ant Design</p></a>
          <a href="https://www.mongodb.com/cloud/atlas"><p>API created with and hosted by MonogoDB Atlus</p></a> 
          <a href="https://ejs.co/"><p>Login Created with Node + View Template Engine Ejs</p></a> 
          <p>Single Page App Created in React</p>
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

          
     