import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
// const Backdrop = () => {
//   return <div className={styles.backdrop}></div>;
// };
// const ModalPort = (props) => {
//   return (
//     <div className={styles.modal}>
//       <p>Warning</p>
//       <p className={styles.mssg}>{props.mssg}</p>
//       <button
//         type="button"
//         onClick={() => {
//           props.closeModal(true);
//         }}
//         className={styles.button}
//       >
//         ok
//       </button>
//     </div>
//   );
// };
const Modal = (props) => {
  return (
    <>
      {/* {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdropRoot")
      )}

      {ReactDOM.createPortal(
        <ModalPort mssg={props.mssg} closeModal={props.closeModal} />,
        document.getElementById("modalRoot")
      )} */}
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
    </>
  );
};
export default Modal;
