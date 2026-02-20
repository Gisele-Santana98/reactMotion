import { motion } from "framer-motion";

// Definição das Variants (Objetos externos conforme pedido na Parte 3)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Propriedade para efeito cascata
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ListItems = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <motion.ul
      variants={containerVariants} // Repassa as variantes para o pai
      initial="hidden"
      animate="visible"
      style={{ listStyle: "none", padding: 0 }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants} // Os filhos herdam o estado do pai e respeitam o staggerChildren
          style={{
            background: "#444",
            color: "white",
            margin: "5px",
            padding: "10px",
            borderRadius: "4px",
            width: "200px"
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ListItems;