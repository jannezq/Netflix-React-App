import { Component } from "react";
import "./MyComponentsCss.css";

class MovieItem extends Component {
  render() {
    return (
      <>
        <div className="movie-item">
          <img
            className="movie-image"
            src={this.props.movieObject.Poster}
            alt=""
          />
        </div>
      </>
    );
  }
}

export default MovieItem;
