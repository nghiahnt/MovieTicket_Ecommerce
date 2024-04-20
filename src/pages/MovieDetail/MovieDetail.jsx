import "./MovieDetail.scss";
import images from "../../assets";
import UpdateModal from "../../components/UpdateModal/UpdateModal";
import { useState } from "react";

function MovieDetail() {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const openUpdateModal = () => {
    setShowUpdateModal(true);
  }
  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  }
  return (
    <div>
      {showUpdateModal && <UpdateModal title="Cap nhat" closeModal={closeUpdateModal} />}
      <div className="detail-page">
        <div className="movie-detail">
          <img
            src={images.thumbnail}
            alt="image"
            height={400}
            className="image-detail"
          />
          <div className="content-detail">
            <div className="header-detail">
              <p className="name-detail">YÊU CUỒNG LOẠN</p>
              <button className="btn-order_detail" onClick={openUpdateModal}>Sửa phim</button>
            </div>
            <div className="infor-detail">
              <p className="des-detail">Đạo diễn: Rose Glass</p>
              <p className="des-detail">
                Diễn viên: Kristen Stewart, Katy O Brian, Ed Harris
              </p>
              <p className="des-detail">Thể loại: Tình cảm,Tội phạm,Hồi hộp</p>
              <p className="des-detail">Khởi chiếu: 19-04-2024</p>
              <p className="des-detail">Thời lượng: 99 phút</p>
              <p className="des-detail">
                Ngôn ngữ: Tiếng Anh - Phụ đề tiếng Việt
              </p>
              <p className="des-detail">
                Rated: C18 - PHIM CẤM PHỔ BIẾN ĐẾN KHÁN GIẢ DƯỚI 18 TUỔI
              </p>
            </div>
          </div>
        </div>
        <div className="btn-detail">
          <button className="btn-detail-detail btn-detail_infor">
            Chi tiết
          </button>
          <button className="btn-detail_infor">Trailer</button>
          <button className="btn-detail_infor">Đánh giá</button>
        </div>
        <p className="description-detail">
          Cuộc tình mới chớm nở giữa nữ quản lý phòng tập Lou (Kristen Stewart)
          và vận động viên thể hình đầy tham vọng Jackie (Katy O’Brian) khiến cả
          hai bị lún sâu vào chuỗi những rắc rối đẫm máu liên quan đến gia đình
          tội phạm khét tiếng của Lou.
        </p>
        <button className="btn-order_detail detail_lastBtn">Đặt vé</button>
      </div>
    </div>
  );
}

export default MovieDetail;
