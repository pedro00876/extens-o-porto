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
          <button>Carteira Sigma</button>
          <button>Manutenção</button>
        </header>
      </div>
      <main>
        <div>
          <section>
            <h3>Dados do Cliente</h3>
            <i class="bx bx-chevron-down"></i>
          </section>
        </div>
        <div>
          <section>
            <h3>Descrição</h3>
            <i onClick={openModal} class="bx bx-chevron-down"></i>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h2>Conteúdo do Modal</h2>
              <p>Este é um modal em React usando Vite.</p>
            </Modal>
          </section>
        </div>
        <div>
          <section>
            <h3>Plataformas</h3>
            <i class="bx bx-chevron-down"></i>
          </section>
        </div>
        <div>
          <section>
            <h3>Plano</h3>
            <i class="bx bx-chevron-down"></i>
          </section>
        </div>
        <div>
          <section>
            <h3>Dados financeiros</h3>
            <i class="bx bx-chevron-down"></i>
          </section>
        </div>
      </main>
      <div>
        <footer>
          <button>Sigma</button>
        </footer>
      </div>
    </div>
  );
};

export default InitialScreen;
