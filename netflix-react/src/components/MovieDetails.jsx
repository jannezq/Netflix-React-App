import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log("PARAMS ARE: ", params);

  console.log("The id of this movie is: ", params.movieId);

  const [movieObj, setMovieObj] = useState(null);
  console.log("movie object: ", movieObj);

  const fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=8787cd52&s=" + params.movieId,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let moviesDataRaw = await response.json();
        setMovieObj(moviesDataRaw.Search);

        console.log("Movie object:".movieObj);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
    let foundMovieObject = movieObj.find((movie) => movie.movieId.toString);
  });
  return (
    <>
      <Container className="justify-content-center">
        <h1 className="text-center movieHeader mt-3">Movie title goes here!</h1>
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
