export const questions = [
  {
    id: 1,
    question: "¿Quién escribió:",
    quote: {
      english: "Words are, of course, the most powerful drug used by mankind.",
      spanish:
        "Las palabras son, por supuesto, la droga más poderosa usada por la humanidad.",
    },
    options: [
      { id: "A", text: "Rudyard Kipling", isCorrect: true },
      { id: "B", text: "William Blake", isCorrect: false },
      { id: "C", text: "Samuel Taylor Coleridge", isCorrect: false },
      { id: "D", text: "George Eliot", isCorrect: false },
    ],
    gift: {
      title: "Mrs. Dalloway",
      author: "Virginia Woolf",
      description: "Una obra maestra del modernismo literario",
    },
  },
  {
    id: 2,
    question: "¿Qué poeta escribió:",
    quote: {
      english:
        "If I can stop one heart from breaking, I shall not live in vain.",
      spanish:
        "Si puedo evitar que un corazón se rompa, no habré vivido en vano.",
    },
    options: [
      { id: "A", text: "Elizabeth Barrett Browning", isCorrect: false },
      { id: "B", text: "Emily Dickinson", isCorrect: true },
      { id: "C", text: "Christina Rossetti", isCorrect: false },
      { id: "D", text: "Mary Shelley", isCorrect: false },
    ],
    gift: {
      title: "Crying in H Mart",
      author: "Michelle Zauner",
      description: "Una emotiva memoria sobre identidad, comida y pérdida",
    },
  },
  {
    id: 3,
    question: "¿De qué autor es esta línea de sus diarios personales:",
    quote: {
      english: "Kiss me, and you will see how important I am.",
      spanish: "Bésame, y verás qué importante soy.",
    },
    options: [
      { id: "A", text: "Sylvia Plath", isCorrect: true },
      { id: "B", text: "Anne Sexton", isCorrect: false },
      { id: "C", text: "Virginia Woolf", isCorrect: false },
      { id: "D", text: "Anaïs Nin", isCorrect: false },
    ],
    gift: {
      title: "Ana Non",
      author: "Autor por confirmar",
      description: "Tu tercer regalo literario especial",
    },
  },
]

export const gifts = [
  {
    id: 1,
    title: "Mrs. Dalloway",
    author: "Virginia Woolf",
    description:
      "Una obra maestra del modernismo literario que explora la conciencia y el tiempo en un solo día en Londres.",
    emoji: "📖",
  },
  {
    id: 2,
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    description:
      "Una emotiva memoria sobre identidad, comida y pérdida que conecta con el corazón de cualquier lector.",
    emoji: "💝",
  },
  {
    id: 3,
    title: "Ana Non",
    author: "Autor por confirmar",
    description:
      "Tu tercer regalo literario especial, elegido con cariño para tu cumpleaños.",
    emoji: "🎁",
  },
]
