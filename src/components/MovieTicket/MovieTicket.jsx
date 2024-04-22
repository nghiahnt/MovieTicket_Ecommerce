/* eslint-disable no-unused-vars */
import "./MovieTicket.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieType } from "../../MovieContext";

function MovieTiclet(data) {
  const { movieId, setMovieId } = useContext(MovieType);

  const handleRoute = (id) => {
    // console.log(id);
    setMovieId(id);
  };

  const preProcessDate = (date) => {
    const time = new Date(date);
    let newDate = "";
    newDate = `${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}`;
    return newDate;
  };

  return (
    // <Link to="/detail" className="movie-ticket-link">
    <div className="movie-ticket">
      <Link
        to="/detail"
        className="movie-ticket-link"
        onClick={() => handleRoute(data.id)}
      >
        <img
          src={data.image}
          alt="ticketImage"
          height={330}
          className="ticket-image"
        />
        <div className="ticket-text">
          <p className="text ticket-title">{data.title}</p>
          <p className="text ticket-des">{data.duration}</p>
          <p className="text ticket-des">
            KHỞI CHIẾU {preProcessDate(data.publish)}
          </p>
        </div>
        <div className="ticket-button">
          <button className="orderBtn">TRAILER</button>
          <button className="orderBtn">ĐẶT VÉ</button>
        </div>
      </Link>
    </div>
    // </Link>
  );
}

export default MovieTiclet;
