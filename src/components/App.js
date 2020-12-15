import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Axios from 'axios';
require('dotenv').config()




class App extends React.Component {

    state = {
        movies: [],

            searchQuery: ""
    }


  async componentDidMount(){
       const response = await Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
       this.setState({movies: response.data.results})
   }


    deleteMovie = async (movie) => {

        //Axios.delete(`http://localhost:3002/movies/${movie.id}`)

        const newMovielist = this.state.movies.filter(
            x => x.id !== movie.id
        )

        this.setState(state => ({
            movies: newMovielist
        }))

    }

    searchMovie = (event) => {
        this.setState({searchQuery: event.target.value})
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.title.toLocaleLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
            }
        )
        

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar 
                        searchMovieProp = {this.searchMovie}/>
                    </div>
                </div>
                    <MovieList
                    movies={filteredMovies} 
                    deleteMovieProp ={this.deleteMovie}/>
            </div>
        )
    }
}

export default App