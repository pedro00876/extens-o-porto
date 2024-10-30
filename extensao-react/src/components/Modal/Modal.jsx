import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button className="closeX" onClick={onClose} style={styles.closeButton}>
          <i class="bx bx-x"></i>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    // borderRadius: "5px",
    maxWidth: "500px",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  },
  content: {
    color: "#000",
  },
};

export default Modal;
