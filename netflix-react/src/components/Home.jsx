import { Container } from "react-bootstrap";
import MovieList from "./MovieList";

const Home = () => {
  return (
    <Container fluid className="mt-4 mx-3">
      <Container fluid className="mt-3 pl-0">
        <h5 className=" movieName text-left mb-2">Comedy</h5>
        <MovieList movieTitle="Comedy" />
        <h5 className=" movieName text-left mb-2">Action</h5>
        <MovieList movieTitle="Action" />
      </Container>
    </Container>
  );
};

export default Home;
