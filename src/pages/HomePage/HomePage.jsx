/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MovieTiclet from "../../components/MovieTicket/MovieTicket";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <div className="homepage-btn">
          <button className="btn-home movieBtn1">Phim đang chiếu</button>
          <button className="btn-home movieBtn2">Phim sắp chiếu</button>
        </div>
        <div className="homepage-movie">
          <MovieTiclet />
          <MovieTiclet />
          <MovieTiclet />
          <MovieTiclet />
          <MovieTiclet />
          <MovieTiclet />
          <MovieTiclet />
          <MovieTiclet />
        </div>
      </div>
    </>
  );
}

export default HomePage;
