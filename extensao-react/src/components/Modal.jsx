const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  color: "#000",
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
    borderRadius: "5px",
    maxWidth: "500px",
    width: "100%",
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
};

export default Modal;
