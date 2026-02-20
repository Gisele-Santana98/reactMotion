import { motion } from "framer-motion";

const WelcomeCard = () => {
  return (
    <motion.div
      // 1. Começa invisível e abaixo (y: 50)
      initial={{ opacity: 0, y: 50 }} 
      // 2. Vai para posição original (y: 0) com opacidade total
      animate={{ opacity: 1, y: 0 }}
      // 3. Configuração de tempo (1.2 segundos)
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ textAlign: 'center' }} // Apenas alinhamento
>
      <h1>Bem-vindo ao Framer Motion!</h1>
      <p>Esta animação ocorreu assim que o componente montou.</p>
    </motion.div>
  );
};

export default WelcomeCard;