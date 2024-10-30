import "./TokenScreen.css";

const TokenScreen = () => {
  return (
    <div>
      <header>
        <h1>Insira o Token</h1>
      </header>
      <main>
        <input type="text" placeholder="Adicione Aqui" id="token" />
        <div>
          <button>Enviar</button>
        </div>
      </main>
    </div>
  );
};

export default TokenScreen;
