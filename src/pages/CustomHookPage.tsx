import Modal from "antd/lib/modal/Modal";
import useFetch from "../hooks/useFetch";
import useModal from "../hooks/useModal";

function CustomHookPage() {
  const [todos] = useFetch("https://jsonplaceholder.typicode.com/todos");

  const { handleClose, handleOpen, isOpen } = useModal();
  console.log(todos);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Custom hook demo</h2>
      <Modal visible={isOpen} onCancel={handleClose}>
        <div>This is a modal</div>
      </Modal>

      <button onClick={handleOpen}>Open</button>
    </div>
  );
}

export default CustomHookPage;
