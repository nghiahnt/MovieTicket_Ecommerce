/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MovieTiclet from "../../components/MovieTicket/MovieTicket";
import "./HomePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MovieType } from "../../MovieContext";

function HomePage() {
  const { movieId, setMovieId } = useContext(MovieType);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      await axios
        .get(`http://localhost:3000/api/getAllMovies`)
        .then((res) => {
          setMovieData(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    fetchMovie();
  }, []);

  return (
    <>
      <div className="homepage">
        <div className="homepage-btn">
          <button className="btn-home movieBtn1">Phim đang chiếu</button>
          <button className="btn-home movieBtn2">Phim sắp chiếu</button>
        </div>
        <div className="homepage-movie">
          {movieData.map((movie, index) => {
            return (
              <div key={index}>
                <MovieTiclet
                  image={movie.Image}
                  title={movie.Name}
                  duration={movie.VideoDuration}
                  publish={movie.PublishDate}
                  id={movie._id}
                  
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
