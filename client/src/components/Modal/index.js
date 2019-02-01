import React from "react";

function Modal(props) {
  const showHideStyle = props.show ? "block" : "none";
  const textString = props.title + " was saved to the database!";
  return (
    <div className="modal" id="myModal" role="dialog" style={{display: showHideStyle}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Book Saved</h5>
            <button type="button" className="close" onClick={props.handleClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body"><h5>{textString}</h5>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={props.handleClose} data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
