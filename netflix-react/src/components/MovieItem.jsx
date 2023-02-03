import { Component } from "react";
import "./MyComponentsCss.css";

class MovieItem extends Component {
  render() {
    return (
      <>
        <div className="movie-cover mx-3 show-card">
          <img
            key={this.props.movieObject.imbdID}
            src={this.props.movieObject.Poster}
            alt={this.props.movieObject.Title}
            className="imageCover"
          />
          <div className="infos-container">
            <h6 className="ml-3">{this.props.movieObject.Title}</h6>
            <p className="ml-3 mb-1">
              Year: {this.props.movieObject.Year}
              <span className="ml-3 mb-1">
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
