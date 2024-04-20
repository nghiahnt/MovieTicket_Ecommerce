/* eslint-disable no-unused-vars */
import "./UpdateModal.scss";

function UpdateModal(data) {
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
                <input className="input" type="text" />
              </div>
              <div className="input-field">
                <p>Diễn viên: </p>
                <input className="input" type="text" />
              </div>
              <div className="input-field">
                <p>Thể loại: </p>
                <input className="input" type="text" />
              </div>
              <div className="input-field">
                <p>Khởi chiếu: </p>
                <input className="input" type="text" />
              </div>
              <div className="input-field">
                <p>Thời lượng: </p>
                <input className="input" type="text" />
              </div>
              <div className="input-field">
                <p>Ngôn ngữ: </p>
                <input className="input" type="text" />
              </div>
              <div className="input-field">
                <p>Rated: </p>
                <input className="input" type="text" />
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
                onClick={data.closeModal}
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
