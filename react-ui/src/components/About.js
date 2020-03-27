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
            <p>Built in 48 hours</p>
          <h3>Colby Emann</h3>
          <a href="https://github.com/colbyemann/colby-movie-app"><h3>Github</h3></a>
          <br></br>
          <h3>Resources</h3>
          <a href="https://www.npmjs.com/package/react-rangeslider"><p>Range Slider</p></a>
          <a href="https://www.npmjs.com/package/fuzzy-search"><p>Fuzzy Search</p></a>
          <a href="https://www.npmjs.com/package/@fortawesome/react-fontawesome"><p>Font Awesome</p></a>
          <a href="https://unsplash.com/photos/Lq6rcifGjOU"><p>Hero Image</p></a>
          <a href="https://github.com/glenselle/simple-react-modal"><p>Simple Modal</p></a>
          <a href="http://reactcommunity.org/react-transition-group/transition"><p>React Transition Group</p></a>
          

      </Modal>
      </div>
    )
  }
}

          
     