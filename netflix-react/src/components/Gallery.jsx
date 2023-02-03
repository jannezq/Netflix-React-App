import { Component } from "react";
import { Container } from "react-bootstrap";
import MovieList from "./MovieList";
import "./MyComponentsCss.css";

class CarouselMovies extends Component {
  render() {
    return (
      <>
        <Container fluid className="mt-4 mx-3">
          <h5 className=" movieName text-left mb-2">{this.props.movieTitle}</h5>
          <Container fluid className="mt-3 pl-0">
            <MovieList movieTitle={this.props.movieTitle} />
          </Container>
        </Container>
      </>
    );
  }
}

export default CarouselMovies;
