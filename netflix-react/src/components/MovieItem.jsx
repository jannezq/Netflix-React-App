import { Component } from "react";
import "./MyComponentsCss.css";

class MovieItem extends Component {
  render() {
    return (
      <>
        <img
          key={this.props.movieObject.imbdID}
          className="movie-cover"
          src={this.props.movieObject.Poster}
          alt={this.props.movieObject.Title}
        />
      </>
    );
  }
}

export default MovieItem;
