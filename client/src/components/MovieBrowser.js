import React from "react";
import MovieFilters from './MovieFilters.js';
import MovieList from './MovieList.js';
import Favorites from './Favorites.js';
import Loader from './Loader.js';


class PhotoBrowser extends React.Component {
    state = {
        initialItems: [],
        items: [],
        loading: false
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
             this.props.search(e)
             this.props.location.state = undefined;
          }
      }
    

 render() {
 const loading = this.state.loading;
 this.handleHome(this.props.location.state)
 return (
 <div>
     
 <Favorites favorites={this.props.favorites} remove={this.props.remove}/>
 <MovieFilters search={this.props.search} 
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