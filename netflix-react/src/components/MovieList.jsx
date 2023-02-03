import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import MovieItem from "./MovieItem";

class MovieList extends Component {
  state = {
    moviesArray: [],
    harry_url: "http://www.omdbapi.com/?apikey=8787cd52&s=harry%20potter",
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(this.state.harry_url, {
        method: "GET",
      });
      if (response.ok) {
        let moviesDataRaw = await response.json();
        let moviesData = moviesDataRaw.Search;
        this.setState({
          moviesArray: moviesData,
        });
        console.log(this.state.moviesArray);
      } else {
        alert("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <>
        <Row>
          {this.state.moviesArray.map((movieObject) => {
            return (
              <Col key={movieObject.imdbID}>
                <MovieItem movieObject={movieObject} />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default MovieList;
