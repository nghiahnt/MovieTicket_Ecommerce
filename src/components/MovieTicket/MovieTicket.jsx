import images from "../../assets";
import "./MovieTicket.scss";
import { Link } from "react-router-dom";
function MovieTiclet() {
  return (
    // <Link to="/detail" className="movie-ticket-link">
    <div className="movie-ticket">
      <Link to="/detail" className="movie-ticket-link">
        <img
          src={images.thumbnail}
          alt="ticketImage"
          height={345}
          className="ticket-image"
        />
        <div className="ticket-text">
          <p className="text ticket-title">YÊU CUỒNG LOẠN (T18)</p>
          <p className="text ticket-des">99 PHÚT | C18</p>
          <p className="text ticket-des">KHỞI CHIẾU 19-04-2024</p>
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
