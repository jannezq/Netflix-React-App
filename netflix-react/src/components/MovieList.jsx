import { Component } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
// import Carousel from "react-multi-carousel";
import SingleMovie from "./SingleMovie";
import "./MyComponentsCss.css";
import { Link } from "react-router-dom";

class MovieList extends Component {
  state = {
    moviesArray: [],
    searchTitle: this.props.movieTitle,
    isLoading: true,
    isError: false,
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=8787cd52&s=" + this.state.searchTitle,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let moviesDataRaw = await response.json();
        let moviesData = moviesDataRaw.Search;
        this.setState({
          ...this.state,
          moviesArray: moviesData,
          isLoading: false,
        });
        console.log(this.state.moviesArray);
      } else {
        this.setState({
          ...this.state,
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        ...this.state,
        isLoading: false,
        isError: true,
      });
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    // const responsive = {
    //   superLargeDesktop: {
    //     // the naming can be any, depends on you.
    //     breakpoint: { max: 4000, min: 3000 },
    //     items: 5,
    //   },
    //   desktop: {
    //     breakpoint: { max: 3000, min: 1024 },
    //     items: 3,
    //   },
    //   tablet: {
    //     breakpoint: { max: 1024, min: 464 },
    //     items: 2,
    //   },
    //   mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1,
    //   },
    // };
    return (
      <>
        {this.state.isLoading && <Spinner animation="border" variant="info" />}
        {this.state.isError && (
          <Alert variant="danger">Oww snap...Something went wrong 😐</Alert>
        )}

        {/* <Carousel responsive={responsive}>
          {this.state.moviesArray.map((movieObject) => {
            return <MovieItem movieObject={movieObject} />;
          })}
        </Carousel>
        ; */}
        {/* <Carousel>
          <CarouselItem> */}
        <Row className="movie-row d-flex justify-content-center">
          {this.state.moviesArray.slice(0, 6).map((movieObject) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} xl={2} key={movieObject.imdbID}>
                <Link to={`/moviedetails/` + movieObject.imdbID}>
                  <SingleMovie movieObject={movieObject} />;
                </Link>
              </Col>
            );
          })}
        </Row>
        {/* </CarouselItem>
        </Carousel> */}
      </>
    );
  }
}

export default MovieList;
