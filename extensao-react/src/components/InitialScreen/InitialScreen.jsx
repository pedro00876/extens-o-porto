import { useState, useEffect } from "react";
import "./InitialScreen.css";

const Section = ({ title, content, isOpen, onToggle }) => (
  <div className={`info-item ${isOpen ? "open" : ""}`}>
    <h3>{title}</h3>
    <div
      className="info-content"
      style={{ display: isOpen ? "block" : "none" }}
    >
      {content}
    </div>
    <button
      onClick={onToggle}
      className={isOpen ? "rotate" : ""}
      aria-expanded={isOpen}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
    </button>
  </div>
);

const InitialScreen = () => {
  const [contactData, setContactData] = useState([]);
  const [error, setError] = useState(null);
  const [openContent, setOpenContent] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  // Adiciona o estado do menu de configurações
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    clientData: true,
    description: true,
    platforms: true,
    plan: true,
    financialData: true,
  });

  // Fetch contacts
  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao listar contatos");
        return response.json();
      })
      .then((data) => setContactData(data.contacts || []))
      .catch((error) => setError(error));
  }, []);

  const toggleInfo = (infoId) =>
    setOpenContent(openContent === infoId ? null : infoId);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  //funções para escolher os campos listados
  const toggleSettingsMenu = () => setSettingsOpen(!settingsOpen);

  const toggleSectionVisibility = (section) => {
    setVisibleSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Content for each section
  const sections = [
    {
      id: "clientData",
      title: "Dados do Cliente",
      content:
        contactData.length === 0 ? (
          <p>Nenhum contato encontrado.</p>
        ) : (
          <ul>
            {contactData.map((contact) => (
              <li key={contact.id}>
                <p>Nome: {contact.name || "Não disponível"}</p>
                <p>Email: {contact.emails?.[0]?.email || "Não disponível"}</p>
                <p>
                  Telefone: {contact.phones?.[0]?.phone || "Não disponível"}
                </p>
                <p>Título: {contact.title || "Não disponível"}</p>
                <p>LinkedIn: {contact.linkedin || "Não disponível"}</p>
              </li>
            ))}
          </ul>
        ),
    },
    {
      id: "description",
      title: "Descrição",
      content: (
        <p>
          Últimos produtos/Serviços: <br /> Datas da última compra:
        </p>
      ),
    },
    {
      id: "platforms",
      title: "Plataformas",
      content: (
        <p>
          JetGO: <br /> URL: <br /> ID: <br /> JetSender: <br /> URL: <br /> ID:{" "}
          <br /> Outros: <br /> URL: <br /> ID:{" "}
        </p>
      ),
    },
    {
      id: "plan",
      title: "Plano",
      content: (
        <p>
          Plataforma: <br /> Usuários: <br /> Conexões: <br /> Conexões Sender:{" "}
          <br /> Teams:
        </p>
      ),
    },
    {
      id: "financialData",
      title: "Dados financeiros",
      content: (
        <p>
          Valor: <br /> Pagamento: <br /> Próximo vencimento: <br /> Primeiro
          pagamento: <br /> Último pagamento: <br /> Mensalidades pagas:
        </p>
      ),
    },
  ];

  if (error) return <div>Erro: {error.message}</div>;
  if (contactData.length === 0) return <div>Carregando...</div>;

  return (
    //botão para alternar o tema
    <div className={darkMode ? "pp dark" : "pp light"}>
      <h2 className="user-title">User</h2>
      <button onClick={toggleDarkMode} className="toggle-theme-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8 5v1H4.5a.5.5 0 0 0-.093.009A7 7 0 0 1 3.1 13zm0-1H2.255a7 7 0 0 1-.581-1H8zm-6.71-2a7 7 0 0 1-.22-1H8v1zM1 8q0-.51.07-1H8v1zm.29-2q.155-.519.384-1H8v1zm.965-2q.377-.54.846-1H8v1zm2.137-2A6.97 6.97 0 0 1 8 1v1z" />
        </svg>
      </button>

      {/* botão para alternar o que deve ser listado */}
      <div className="settings-container">
        <button className="gear-btn" onClick={toggleSettingsMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-gear-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9.605 1.05c.046-.168.07-.345.07-.523C9.676.248 9.435 0 9.176 0H6.824C6.565 0 6.324.248 6.324.527c0 .178.024.355.07.523A6.036 6.036 0 0 0 4.31 2.092l-.087-.09c-.244-.246-.671-.246-.915 0l-2.12 2.12c-.244.244-.244.671 0 .915l.09.088A6.05 6.05 0 0 0 1.05 6.395c-.168.046-.345.07-.523.07C.248 6.465 0 6.705 0 6.965v2.254c0 .26.248.5.527.5.178 0 .355-.024.523-.07a6.035 6.035 0 0 0 2.005 1.046l.09.087c.244.244.671.244.915 0l2.12-2.12c.244-.244.244-.671 0-.915l-.088-.09A6.05 6.05 0 0 0 9.605 1.05zm-.94 8.03-2.12 2.12a4.02 4.02 0 1 1 5.659-5.659l2.12-2.12a6.02 6.02 0 0 0-5.659 5.659z" />
          </svg>
        </button>

        {settingsOpen && (
          <div className="settings-menu">
            <h3>Escolha as informações</h3>
            {Object.keys(visibleSections).map((sectionKey) => (
              <label key={sectionKey}>
                <input
                  type="checkbox"
                  checked={visibleSections[sectionKey]}
                  onChange={() => toggleSectionVisibility(sectionKey)}
                />
                {sections.find((section) => section.id === sectionKey)?.title}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="info-list">
        {sections
          .filter((section) => visibleSections[section.id]) // Filtra as seções visíveis
          .map((section) => (
            <Section
              key={section.id}
              title={section.title}
              content={section.content}
              isOpen={openContent === section.id}
              onToggle={() => toggleInfo(section.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default InitialScreen;
