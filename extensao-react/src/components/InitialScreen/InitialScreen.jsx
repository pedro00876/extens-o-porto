import { useState } from "react";
import Modal from "../Modal/Modal";
import "./InitialScreen.css";

const InitialScreen = () => {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  const [isPlatformModalOpen, setIsPlatformModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isFinancialDataModalOpen, setIsFinancialDataModalOpen] =
    useState(false);

  return (
    <div>
      <div>
        <header>
          <h2>User:</h2>
        </header>
      </div>
      <main>
      <div className="modal">
          <section>
            <h3>Dados do Cliente</h3>
            <i onClick={() => setIsClientModalOpen(true)} className="bx bx-chevron-down"></i>
            <Modal isOpen={isClientModalOpen} onClose={() => setIsClientModalOpen(false)}>
              <h2 className="modalh2">XXXXXXX</h2>
              <p className="modalP">Este é um modal em React usando Vite.</p>
            </Modal>
          </section>
        </div>

        <div className="modal">
          <section>
            <h3>Descrição</h3>
            <i onClick={() => setIsDescriptionModalOpen(true)} className="bx bx-chevron-down"></i>
            <Modal isOpen={isDescriptionModalOpen} onClose={() => setIsDescriptionModalOpen(false)}>
              <h2 className="modalh2">Descrição</h2>
              <ul className="modalP">
                <li>Últimos produtos/serviços adquiridos: xxxxxx</li>
                <li>Data da última compra: xxx-xxxx</li>
              </ul>
            </Modal>
          </section>
        </div>

        <div className="modal">
          <section>
            <h3>Plataformas</h3>
            <i onClick={() => setIsPlatformModalOpen(true)} className="bx bx-chevron-down"></i>
            <Modal isOpen={isPlatformModalOpen} onClose={() => setIsPlatformModalOpen(false)}>
              {/* Conteúdo do modal para "Plataformas" */}
              <p>Informações sobre plataformas...</p>
            </Modal>
          </section>
        </div>

        <div className="modal">
          <section>
            <h3>Plano</h3>
            <i onClick={() => setIsPlanModalOpen(true)} className="bx bx-chevron-down"></i>
            <Modal isOpen={isPlanModalOpen} onClose={() => setIsPlanModalOpen(false)}>
              {/* Conteúdo do modal para "Plano" */}
              <p>Informações sobre o plano...</p>
            </Modal>
          </section>
        </div>

        <div className="modal">
          <section>
            <h3>Dados financeiros</h3>
            <i onClick={() => setIsFinancialDataModalOpen(true)} className="bx bx-chevron-down"></i>
            <Modal isOpen={isFinancialDataModalOpen} onClose={() => setIsFinancialDataModalOpen(false)}>
              {/* Conteúdo do modal para "Dados financeiros" */}
              <p>Informações financeiras...</p>
            </Modal>
          </section>
        </div>
      </main>
    </div>
  );
};

export default InitialScreen;
