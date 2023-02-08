import { Container } from "react-bootstrap";
import MovieList from "./MovieList";

const TVShows = () => {
  return (
    <Container fluid className="mt-4 mx-3">
      <h5 className=" movieName text-left mb-2">Criminal Minds</h5>
      <Container fluid className="mt-3 pl-0">
        <MovieList movieTitle="Criminal Minds" />
      </Container>
    </Container>
  );
};

export default TVShows;
