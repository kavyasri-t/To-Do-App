import styles from "./Modal.module.css";
const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <p>Warning</p>
        <p className={styles.mssg}>{props.mssg}</p>
        <button
          type="button"
          onClick={() => {
            props.closeModal(true);
          }}
          className={styles.button}
        >
          ok
        </button>
      </div>
    </div>
  );
};
export default Modal;
