/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Import our custom CSS
import "../scss/styles.scss";
import images from "../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import UpdateModal from "../components/UpdateModal/UpdateModal";

function DefaultLayout({ App }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const showAddModel = () => {
    setShowUpdateModal(true);
  };
  const closeModal = () => {
    setShowUpdateModal(false);
  };
  return (
    <div>
      {showUpdateModal && (
        <UpdateModal title="Them phim" closeModal={closeModal} />
      )}

      <div className="MovieTicket_App">
        <div className="wrapper">
          <div className="header container-fluid bg-dark">
            <Link to="/">
              <img
                to="/"
                src={images.logo}
                alt="Logo"
                height={50}
                className="logo"
              />
            </Link>
            <div className="navbar-items">
              <ul className="items">
                <li>LỊCH CHIẾU</li>
                <li className="add-movie" onClick={showAddModel}>
                  THÊM PHIM
                </li>
                <li>PHIM ĐANG CHIẾU</li>
                <li>PHIM SẮP CHIẾU</li>
                <li>ƯU ĐÃI</li>
                <li>TIN TỨC PHIM</li>
                <li>THÀNH VIÊN</li>
              </ul>
            </div>
            <div className="navbar-buttons">
              <a className="btn">Login</a>
              <a className="btn">Logout</a>
            </div>
          </div>
        </div>
        <div className="content-listMovie, container">
          <App />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
