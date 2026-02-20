import { motion } from "framer-motion";

const AnimatedButton = () => {
  return (
    <motion.button
  className="btn-primary" // Classe do CSS
  whileHover={{ scale: 1.05 }} // Escala aumenta levemente ao passar o mouse
  whileTap={{ scale: 0.95 }} // Escala diminui ao clicar
>
  Enviar
</motion.button>
  );
};

export default AnimatedButton;