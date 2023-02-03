import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/MyComponentsCss.css";
import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Header h3Content="Movies" />
    </div>
  );
}

export default App;
