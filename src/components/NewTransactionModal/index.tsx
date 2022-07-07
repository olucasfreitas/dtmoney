import Modal from "react-modal";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h2>Cadastrar Transação</h2>

      <input type="text" placeholder="Titulo" />
      <input type="number" placeholder="Valor" />
      <input type="text" placeholder="Categoria" />
    </Modal>
  );
}
