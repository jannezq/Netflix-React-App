import { useNavigate } from "react-router-dom";
import "./MyComponentsCss.css";

const SingleMovie = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="movie-cover mx-3 show-card">
        <img
          key={props.movieObject.imbdID}
          src={props.movieObject.Poster}
          alt={props.movieObject.Title}
          className="imageCover"
        />
        <div className="infos-container">
          <h6 className="ml-3">{props.movieObject.Title}</h6>
          <button
            className="ml-auto"
            onClick={() =>
              navigate("/moviedetails/" + props.movieObject.imbdID)
            }
          >
            more info
          </button>
          <p className="ml-3 mb-1">
            Year: {props.movieObject.Year}
            <span className="ml-3 mb-1"> Type: {props.movieObject.Type}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
