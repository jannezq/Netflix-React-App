import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log("PARAMS ARE: ", params);
  console.log("The id of this movie is: ", params.movieId);
  const movieId = params.movieId;
  const [movieObj, setMovieObj] = useState({});

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
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  return (
    <>
      <Container className="justify-content-center">
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
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default MovieDetails;
