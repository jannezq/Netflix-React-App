import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-multi-carousel/lib/styles.css";
import "./components/MyComponentsCss.css";
import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
// import MovieList from "./components/MovieList";
import CarouselMovies from "./components/CarouselMovies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Header h3Content="Movies" />
      <CarouselMovies movieTitle="Marvel" />
      <CarouselMovies movieTitle="Harry Potter" />
      <CarouselMovies movieTitle="Lord of the rings" />
      <Footer />
    </div>
  );
}

export default App;
