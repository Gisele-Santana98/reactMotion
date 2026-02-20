🚀 Framer Motion: Atividade Prática
Este projeto é uma aplicação React desenvolvida para demonstrar o domínio da biblioteca Framer Motion. 
Através de quatro desafios progressivos, explorei desde fundamentos de ciclo de vida até orquestração complexa de animações e gerenciamento de saída de componentes do DOM.

🛠️ Tecnologias Utilizadas
React (Vite)

Framer Motion (Animações declarativas)

CSS3 (Glassmorphism & Estilização moderna)

📋 Funcionalidades Implementadas
O projeto foi dividido em quatro partes principais, conforme o escopo da atividade:

1. Welcome Card (Fundamentos)
Objetivo: Animar a entrada de um componente.

Propriedades: initial, animate e transition (configurada para 1.2s).

Efeito: O card inicia invisível e deslocado, deslizando para sua posição final suavemente.

2. Feedback de Interação (Gestos)
Objetivo: Feedback visual tátil.

Propriedades: whileHover (escala 1.1) e whileTap (escala 0.95).

Efeito: O botão reage ao mouse e ao clique do usuário de forma orgânica.

3. Orquestração de Lista (Variants)
Objetivo: Coordenar múltiplas animações dependentes.

Propriedades: variants (objetos externos) e staggerChildren.

Efeito: Os itens da lista entram um após o outro em um efeito de "cascata" elegante.

4. Alerta Toast (Animação de Saída)
Objetivo: Resolver o desaparecimento instantâneo de elementos do DOM.

Propriedades: AnimatePresence e exit.

Efeito: O alerta desliza para fora da tela antes de ser efetivamente removido pelo React.

🚀 Como Rodar o Projeto
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Entre na pasta do projeto:

Bash
cd reactMotion
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
