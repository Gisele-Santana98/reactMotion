import WelcomeCard from "./WelcomeCard";
import AnimatedButton from "./AnimatedButton";
import ListItems from "./ListItems";
import Toast from "./Toast";
import "./App.css";

function App() {
  return (
    /* A classe 'container' agora gerencia o fundo e o alinhamento via App.css */
    <div className="container">
      
      {/* Parte 1: Fundamentos */}
      <section>
        <h2>Parte 1: Bem vindo</h2>
        <div className="content-wrapper">
          <WelcomeCard />
        </div>
      </section>

      {/* Parte 2: Interação */}
      <section>
        <h2>Parte 2: Interação</h2>
        <div className="content-wrapper">
          <AnimatedButton />
        </div>
      </section>

      {/* Parte 3: Orquestração */}
      <section>
        <h2>Parte 3: Lista em Estágio</h2>
        <ListItems />
      </section>

      {/* Parte 4: Saída (Unmounting) */}
      <section>
        <h2>Parte 4: Animação de Saída</h2>
        <div className="content-wrapper">
          <Toast />
        </div>
      </section>

    </div>
  );
}

export default App;