import { Component } from "react";
import "./MyComponentsCss.css";

class MovieItem extends Component {
  render() {
    return (
      <>
        <div className="movie-cover mx-3">
          <img
            key={this.props.movieObject.imbdID}
            src={this.props.movieObject.Poster}
            alt={this.props.movieObject.Title}
            className="imageCover"
          />
          <div class="infos-container">
            <h6 class="ml-3">{this.props.movieObject.Title}</h6>
            <p class="ml-3 mb-1">
              Year: {this.props.movieObject.Year}
              <span class="ml-3 mb-1">
                {" "}
                Type: {this.props.movieObject.Type}
              </span>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default MovieItem;
