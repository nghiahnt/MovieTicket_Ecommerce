/* eslint-disable no-unused-vars */
import "./MovieDetail.scss";
import images from "../../assets";
import UpdateModal from "../../components/UpdateModal/UpdateModal";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MovieType } from "../../MovieContext";
import axios from "axios";

function MovieDetail() {
  const { movieId, setMovieId } = useContext(MovieType);
  const [movieData, setMovieData] = useState([]);
  const [movieDataById, setMovieDataById] = useState([]);

  useEffect(() => {
    const idMovieLocal = localStorage.getItem("id");
    async function fetchMovieById() {
      axios
        .get(`http://localhost:3000/api/getMovieById/${movieId}`)
        .then((res) => {
          setMovieData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    async function fetchMovie(idMovieLocal) {
      axios
        .get(`http://localhost:3000/api/getMovieById/${idMovieLocal}`)
        .then((res) => {
          setMovieDataById(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    movieId.length != "" ? fetchMovieById() : fetchMovie(idMovieLocal);
  }, []);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const openUpdateModal = async () => {
    setShowUpdateModal(true);
    // Get movie by id
    await axios
      .get(`http://localhost:3000/api/getMovieById/${movieId}`)
      .then((res) => {
        setMovieDataById(res.data.data);
        // console.log(movieDataById);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };

  const preProcessDate = (date) => {
    const time = new Date(date);
    let newDate = "";
    newDate = `${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}`;
    return newDate;
  };

  const handleDeleteMovie = async () => {
    axios
      .delete(`http://localhost:3000/api/deleteMovieById/${movieId}`)
      .then((res) => {
        console.log("Movie deleted");
        setMovieId("");
        console.log(res);
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {showUpdateModal && (
        <UpdateModal
          title="Cap nhat"
          movieData={movieDataById}
          closeModal={closeUpdateModal}
          updateModal={showUpdateModal}
          movieId={movieId}
        />
      )}
      <div className="detail-page">
        <div className="movie-detail">
          <img
            src={movieData.Image}
            alt="image"
            height={400}
            className="image-detail"
          />
          <div className="content-detail">
            <div className="header-detail">
              <p className="name-detail">{movieData.Name}</p>
              <button className="btn-order_detail" onClick={openUpdateModal}>
                Sửa phim
              </button>
            </div>
            <div className="infor-detail">
              <p className="des-detail">{movieData.Director}</p>
              <p className="des-detail">Diễn viên: {movieData.Actor}</p>
              <p className="des-detail">Thể loại: {movieData.MovieType}</p>
              <p className="des-detail">
                Khởi chiếu: {preProcessDate(movieData.PublishDate)}
              </p>
              <p className="des-detail">
                Thời lượng: {movieData.VideoDuration}
              </p>
              <p className="des-detail">Ngôn ngữ: {movieData.Language}</p>
              <p className="des-detail">Rated: {movieData.Rated}</p>
            </div>
          </div>
        </div>
        <div className="btn-detail">
          <button className="btn-detail-detail btn-detail_infor">
            Chi tiết
          </button>
          <button className="btn-detail_infor">Trailer</button>
          <button className="btn-detail_infor">Đánh giá</button>
          <button
            className="btn-detail_infor deleteBtn"
            onClick={handleDeleteMovie}
          >
            Xóa phim
          </button>
        </div>
        <p className="description-detail">{movieData.Description}</p>
        <button className="btn-order_detail detail_lastBtn">Đặt vé</button>
      </div>
    </div>
  );
}

export default MovieDetail;
