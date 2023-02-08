import { Container } from "react-bootstrap";
import MovieList from "./MovieList";

const TVShows = () => {
  return (
    <Container fluid className="mt-4 mx-3">
      <Container fluid className="mt-3 pl-0">
        <MovieList movieTitle="Harry Potter" />
      </Container>
    </Container>
  );
};

export default TVShows;
