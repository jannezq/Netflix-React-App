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
        "http://www.omdbapi.com/?apikey=8787cd52&s=" + movieId,
        {
          method: "GET",
        }
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
        <h1 className="text-center movieHeader mt-3">{movieObj.Title}</h1>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default MovieDetails;
