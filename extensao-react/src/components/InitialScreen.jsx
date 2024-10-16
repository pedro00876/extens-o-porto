import { useState } from "react";
import Modal from "./Modal";
import "./InitialScreen.css";

const InitialScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <header>
          <h2>User:</h2>
          <button className="buttonSigma">Token</button>
          <button className="buttonSigma">Departamento</button>
          <button className="buttonSigma">Informações</button>
        </header>
      </div>
      <main>
        <div className="modal1">
          <section>
            <h3>Dados do Cliente</h3>
            <i onClick={openModal} class="bx bx-chevron-down"></i>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h2 className="modalh2">XXXXXXX</h2>
              <p className="modalP">Este é um modal em React usando Vite.</p>
            </Modal>
          </section>
        </div>
        <div className="modal2">
          <section>
            <h3>Descrição</h3>
            <i onClick={openModal} class="bx bx-chevron-down"></i>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h2 className="modalh2">Descrição</h2>
              <li className="modalP">
                <ul>Ultimos produtos/serviços adquiridos:xxxxxx</ul>
                <ul>data da ultima compra:xxx-xxxx</ul>
              </li>
            </Modal>
          </section>
        </div>
        <div className="modal3">
          <section>
            <h3>Plataformas</h3>
            <i onClick={openModal} class="bx bx-chevron-down"></i>
          </section>
        </div>
        <div className="modal4">
          <section>
            <h3>Plano</h3>
            <i onClick={openModal} class="bx bx-chevron-down"></i>
          </section>
        </div>
        <div className="modal5">
          <section>
            <h3>Dados financeiros</h3>
            <i onClick={openModal} class="bx bx-chevron-down"></i>
          </section>
        </div>
      </main>
      <div className="modal6">
        <footer>
          <button className="buttonFooter">Sigma</button>
        </footer>
      </div>
    </div>
  );
};

export default InitialScreen;
