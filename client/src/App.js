import React from 'react';
import './App.css';
import HeaderApp from './components/HeaderApp.js';
import Home from './components/Home.js';

import MovieBrowser from './components/MovieBrowser.js';
import { Route } from 'react-router-dom';
import Loader from './components/Loader.js';
import MovieDetials from './components/MovieDetails.js';
import CastDetials from './components/CastDetails.js';


class App extends React.Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

   //Add Fav to array
   addFavClick = (e) => {
    let check = undefined;
    let tempArray = this.state.favorites;

    check = tempArray.find( ({ id }) => id === e.id );
    console.log(check)

    if (check === undefined)
    {tempArray.push(e);
      this.setState({favorites: tempArray})
    }}

    //Remove Fav from Array
    removeFav = (e) =>{
      let check = [];
      let tempArray = this.state.favorites;
      check = tempArray.filter(({ id }) => id != e)
      console.log(check)
      
        this.setState({favorites: check})
      

    }

    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }
    
    callApi = async () => {
      const response = await fetch('/api/users/1');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      
      return body;
    };
  

  render() {
    const loading = this.state.loading;
    //use the loading to display loader wheel from Loader 
    //return routes for access to pages, pass items they require, messy process 
  return (
  <main>
  <HeaderApp />
  {loading ? (<Loader />) :<Route path='/' exact render={(props) => <Home {...props} movies={this.state.movies}/>} />}
  <Route path='/home' exact render={(props) => <Home {...props} movies={this.state.movies}/>}/>
 
  <Route path='/MovieDetails' exact render={(props) => <MovieDetials {...props} fav={this.addFavClick} remove={this.removeFav} key={Math.random()}/>}/>
  <Route path='/CastDetails' exact render={(props) => <CastDetials {...props} remove={this.removeFav} key={Math.random()}/>}/>

  {loading ? (<Loader />) :<Route path='/browse' exact render={ (props) =>
  <MovieBrowser {...props} movies={this.state.movies} loading={this.state.loading} favorites={this.state.favorites} fav={this.addFavClick} remove={this.removeFav}/>
  }/>}
  </main>
  );
  }
 }

export default App;
