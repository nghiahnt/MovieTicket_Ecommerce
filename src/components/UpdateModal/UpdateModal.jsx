/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./UpdateModal.scss";
import axios from "axios";

function UpdateModal({ movieData = {}, ...data }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [director, setDirector] = useState("");
  const [actor, setActor] = useState("");
  const [movieType, setMovieType] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [videoDuration, setVideoDuration] = useState("");
  const [language, setLanguage] = useState("");
  const [rated, setRated] = useState("");
  const [description, setDescription] = useState("");

  const movieDataById = movieData;
  // console.log(data.movieId);

  const _data = data;
  const handleModifyMovie = async () => {
    if (_data.updateModal) {
      // console.log(_data.movieId);
      handleUpdteMovie(_data.movieId);
    } else {
      const data = {
        name,
        image,
        director,
        actor,
        movieType,
        publishDate,
        videoDuration,
        language,
        rated,
        description,
      };
      axios
        .post(`http://localhost:3000/api/addMovie`, data)
        .then((res) => {
          console.log(res);
          _data.closeModal();
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleUpdteMovie = async (id) => {
    const data = {
      name: movieDataById.Name,
      image: movieDataById.Image,
      director: movieDataById.Director,
      actor: movieDataById.Actor,
      movieType: movieDataById.MovieType,
      publishDate: movieDataById.PublishDate,
      videoDuration: movieDataById.VideoDuration,
      language: movieDataById.Language,
      rated: movieDataById.Rated,
      description: movieDataById.Description,
    };
    axios
      .patch(`http://localhost:3000/api/updateMovieById/${id}`, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem('id', id);
        _data.closeModal();
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header header-update">
              <h5 className="modal-title">{data.title}</h5>
              <button type="button" className="close" onClick={data.closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-field">
                <p>Ten phim: </p>
                <input
                  className="input"
                  type="text"
                  value={
                    data.updateModal ? name.concat(movieDataById.Name) : name
                  }
                  onChange={(name) => {
                    movieDataById.Name = "";
                    setName(name.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <p>HÌnh ảnh: </p>
                <input
                  className="input"
                  type="text"
                  value={
                    data.updateModal ? image.concat(movieDataById.Image) : image
                  }
                  onChange={(image) => {
                    movieDataById.Image = "";
                    setImage(image.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <p>Đạo diễn: </p>
                <input
                  className="input"
                  type="text"
                  value={
                    data.updateModal
                      ? director.concat(movieDataById.Director)
                      : director
                  }
                  onChange={(director) => {
                    movieDataById.Director = "";
                    setDirector(director.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <p>Diễn viên: </p>
                <input
                  className="input"
                  type="text"
                  value={
                    data.updateModal ? actor.concat(movieDataById.Actor) : actor
                  }
                  onChange={(actor) => {
                    movieDataById.Actor = "";
                    setActor(actor.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <p>Thể loại: </p>
                <input
                  className="input"
                  type="text"
                  value={
                    data.updateModal
                      ? movieType.concat(movieDataById.MovieType)
                      : movieType
                  }
                  onChange={(movieType) => {
                    movieDataById.MovieType = "";
                    setMovieType(movieType.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <p>Khởi chiếu: </p>
                <input
                  className="input"
                  type="text"
                  value={
                    data.updateModal
                      ? publishDate.concat(movieDataById.PublishDate)
                      : publishDate
                  }
                  onChange={(publishDate) => {
                    movieDataById.PublishDate = "";
                    setPublishDate(publishDate.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <p>Thời lượng: </p>
                <input
                  className="input"
                  type="text"
                  value={
                    data.updateModal
                      ? videoDuration.concat(movieDataById.VideoDuration)
                      : videoDuration
                  }
                  onChange={(VideoDuration) => {
                    movieDataById.VideoDuration = "";
                    setVideoDuration(VideoDuration.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <p>Ngôn ngữ: </p>
                <input
                  className="input"
                  type="text"
                  value={
                    data.updateModal
                      ? language.concat(movieDataById.Language)
                      : language
                  }
                  onChange={(Language) => {
                    movieDataById.Language = "";
                    setLanguage(Language.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <p>Rated: </p>
                <input
                  className="input"
                  type="text"
                  value={
                    data.updateModal ? rated.concat(movieDataById.Rated) : rated
                  }
                  onChange={(rated) => {
                    movieDataById.Rated = "";
                    setRated(rated.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <p>Mô tả: </p>
                <textarea
                  className="input"
                  type="text"
                  value={
                    data.updateModal
                      ? description.concat(movieDataById.Description)
                      : description
                  }
                  onChange={(description) => {
                    movieDataById.Description = "";
                    setDescription(description.target.value);
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={data.closeModal}
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleModifyMovie}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateModal;
