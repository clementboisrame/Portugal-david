import React from 'react';
import PropTypes from 'prop-types';

function Popup({ title, onClose, message, confirmText, cancelText, showConfirmButton }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className='buttonOnclose'>
          <button type="button" onClick={onClose}>
            {cancelText}
          </button>
          {showConfirmButton && (
            <button type="button" onClick={onClose}>
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string,
  showConfirmButton: PropTypes.bool 
};

Popup.defaultProps = {
 message: '',
 showConfirmButton: false 
};

export default Popup;