import { useEffect, useState } from "react";
import { Card, Container, Spinner, Alert, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log("PARAMS ARE: ", params);
  //   console.log("The id of this movie is: ", params.movieId);
  const movieId = params.movieId;
  const [movieObj, setMovieObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=8787cd52&i=" + movieId
      );
      //   console.log(response);
      if (response.ok) {
        let moviesDataRaw = await response.json();
        console.log("movie object: ", moviesDataRaw);
        setMovieObj(moviesDataRaw);
        setIsLoading(false);
      } else {
        console.log("error");
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  return (
    <>
      <Container className="justify-content-center">
        {isLoading && <Spinner animation="border" role="status"></Spinner>}
        {isError && (
          <Alert variant="danger">
            oops something went wrong! Retry again!
          </Alert>
        )}
        <Row>
          <Col>
            {" "}
            <div className="card-movie-detail">
              <h1 className="text-center movieHeader mt-3">{movieObj.Title}</h1>
              <Card>
                <Card.Img
                  variant="top"
                  src={movieObj.Poster}
                  className="imageCover"
                />
                <Card.Body>
                  <Card.Title>{movieObj.Title}</Card.Title>
                  <Card.Text>
                    <b>Plot:</b> {movieObj.Plot}
                  </Card.Text>
                  <Card.Text>
                    <b>Released:</b> {movieObj.Released}
                  </Card.Text>
                  <Card.Text>
                    <b>Genre:</b> {movieObj.Genre}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          {/* <Col>
            <div>
              <h2>Review</h2>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
