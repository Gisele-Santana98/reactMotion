import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Toast = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Botão para alternar o estado e testar a saída */}
      <button 
        onClick={() => setIsVisible(!isVisible)}
        style={{ padding: "10px", cursor: "pointer" }}
      >
        {isVisible ? "Esconder Alerta" : "Mostrar Alerta"}
      </button>

      {/* O AnimatePresence é essencial aqui: ele detecta quando o componente 
        está prestes a ser removido e espera a animação de 'exit' terminar.
      */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            // initial: Estado antes de entrar (pesquisado na doc)
            initial={{ opacity: 0, x: 50 }}
            // animate: Estado visível
            animate={{ opacity: 1, x: 0 }}
            // exit: Estado ao sair (objetivo da Parte 4)
            exit={{ opacity: 0, x: 50 }}
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "#ff4757",
              color: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}
          >
            <strong>Alerta:</strong> Animação de saída concluída com sucesso!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;