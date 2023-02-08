import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-multi-carousel/lib/styles.css";
import "./components/MyComponentsCss.css";
import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
// import MovieList from "./components/MovieList";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Header h3Content="Movies" />
        <Routes>
          <Route
            element={<Gallery movieTitle="Marvel" />}
            path="/galleryMarvel"
          />
          <Route
            element={<Gallery movieTitle="Harry Potter" />}
            path="/galleryMarvel"
          />
          <Route
            element={<Gallery movieTitle="Lord of the rings" />}
            path="/galleryMarvel"
          />
          <Route
            element={<Gallery movieTitle="Horror" />}
            path="/galleryMarvel"
          />
          <Route
            element={<Gallery movieTitle="Star wars" />}
            path="/galleryMarvel"
          />{" "}
          <Route element={<TVShows />} path="/tv-shows" />
          <Route element={<MovieDetails />} path="/moviedetails/:movieId" />
          {/* <Route element={<NotFound />} path="*" /> */}
        </Routes>

        {/* <Gallery movieTitle="Harry Potter" /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
