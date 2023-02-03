import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-multi-carousel/lib/styles.css";
import "./components/MyComponentsCss.css";
import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
// import MovieList from "./components/MovieList";
import CarouselMovies from "./components/CarouselMovies";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Header h3Content="Movies" />
      <CarouselMovies movieTitle="Harry Potter" />
      <CarouselMovies movieTitle="Lord of the rings" />
      <CarouselMovies movieTitle="Marvel" />
    </div>
  );
}

export default App;
