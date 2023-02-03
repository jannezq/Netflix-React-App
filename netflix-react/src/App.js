import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-multi-carousel/lib/styles.css";
import "./components/MyComponentsCss.css";
import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
// import MovieList from "./components/MovieList";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Header h3Content="Movies" />
      <Gallery movieTitle="Marvel" />
      <Gallery movieTitle="Harry Potter" />
      <Gallery movieTitle="Lord of the rings" />
      <Gallery movieTitle="Horror" />
      <Gallery movieTitle="Star wars" />
      <Footer />
    </div>
  );
}

export default App;
