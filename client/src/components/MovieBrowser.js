import React from "react";
import MovieFilters from './MovieFilters.js';
import MovieList from './MovieList.js';
import Favorites from './Favorites.js';
import Loader from './Loader.js';
import FuzzySearch from 'fuzzy-search';

class PhotoBrowser extends React.Component {
    state = {
        initialItems: [],
        items: [],
        loading: false
    }

   
    searchTitle  = (event) => {
        this.setState({loading: true});
        if(event === '')
        {
            console.log("no title")
        }
        else{
          
            fetch(`https://colby-movie-app-2.herokuapp.com/api/find/title/${event}`)
              .then(res => res.ok && res.json())
              .then(data => this.setState({ items: data.results, loading: false }))
              .catch(error => this.setState({ error, loading: false }));
          
        }
      }

      searchBeforeYear = (event) => {
        this.setState({loading: true});
        let items = this.state.items;
        items = items.filter((item) => {
            return item.release_date.substring(0, 4) < event;
          });
          this.setState({items: items, loading: false});
      }

      searchAfterYear = (event) => {
        this.setState({loading: true});
        let items = this.state.items;
        items = items.filter((item) => {
            return item.release_date.substring(0, 4) > event;
          });
          this.setState({items: items, loading: false});
      }

      searchBetweenYear = (event, event2) => {
        this.setState({loading: true});
        let items = this.state.items;
        items = items.filter((item) => {
            return item.release_date.substring(0, 4) > event && item.release_date.substring(0, 4) < event2;
          });
          this.setState({items: items, loading: false});
      }

      searchBelowRating = (event) => {
        this.setState({loading: true});
        let items = this.state.items;
        items = items.filter((item) => {
            return item.ratings.average < event;
          });
          this.setState({items: items, loading: false});
      }

      searchAboveRating = (event) => {
        this.setState({loading: true});
        let items = this.state.items;
        items = items.filter((item) => {
            return item.ratings.average > event;
          });
          this.setState({items: items, loading: false});
      }

      searchBetweenRating = (event, event2) => {
        this.setState({loading: true});
        let items = this.state.items;
        items = items.filter((item) => {
            return item.ratings.average > event && item.ratings.average < event2;
          });
          this.setState({items: items, loading: false});
      }

       componentWillMount = () => {
        this.setState({
            initialItems: this.props.movies,
            items: this.props.movies
        })
      }

      handleHome = (e) =>
      {
          if(e != undefined)
          {
             this.searchTitle(e)
             this.props.location.state = undefined;
          }
      }
    

 render() {
 const loading = this.state.loading;
 this.handleHome(this.props.location.state)
 return (
 <div>
     
 <Favorites favorites={this.props.favorites} remove={this.props.remove}/>
 <MovieFilters search={this.searchTitle} 
 year={this.searchBeforeYear} yearAfter={this.searchAfterYear} yearBe={this.searchBetweenYear}
 below={this.searchBelowRating} above={this.searchAboveRating} ratingBe={this.searchBetweenRating}/>
 {loading ? <Loader /> :
 <MovieList movies={this.state.items} fav={this.props.fav} favorites={this.props.favorites} remove={this.props.remove}/>
 }
 </div>
 );
 }
}
export default PhotoBrowser