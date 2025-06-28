export const questions = [
  {
    id: 1,
    question:
      "¿Cuál de estos libros no tiene una puntuación de 5 estrellas en tu Goodreads?",
    quote: {
      english: "Every book tells a story, but some resonate more deeply.",
      spanish:
        "Cada libro cuenta una historia, pero algunos resuenan más profundo.",
    },
    options: [
      { id: "A", text: "The Catcher in the Rye", isCorrect: false },
      { id: "B", text: "Lolita", isCorrect: false },
      { id: "C", text: "El acontecimiento", isCorrect: false },
      { id: "D", text: "Normal People", isCorrect: true },
    ],
    gift: {
      title: "Mrs. Dalloway",
      author: "Virginia Woolf",
      description: "Una obra maestra del modernismo literario",
    },
  },
  {
    id: 2,
    question: "¿En cuál de estos años leíste más libros según tu Goodreads?",
    quote: {
      english: "Some years we devour books like never before.",
      spanish: "Algunos años devoramos libros como nunca antes.",
    },
    options: [
      { id: "A", text: "2020", isCorrect: false },
      { id: "B", text: "2024", isCorrect: false },
      { id: "C", text: "2021", isCorrect: true },
      { id: "D", text: "2023", isCorrect: false },
    ],
    gift: {
      title: "Crying in H Mart",
      author: "Michelle Zauner",
      description: "Una emotiva memoria sobre identidad, comida y pérdida",
    },
  },
  {
    id: 3,
    question:
      "¿Con cuántos años conoce Humbert Humbert a Lolita en la famosa obra de Nabokov?",
    quote: {
      english: "Light of my life, fire of my loins. My sin, my soul.",
      spanish: "Luz de mi vida, fuego de mis entrañas. Mi pecado, mi alma.",
    },
    options: [
      { id: "A", text: "13", isCorrect: false },
      { id: "B", text: "12", isCorrect: true },
      { id: "C", text: "14", isCorrect: false },
      { id: "D", text: "17", isCorrect: false },
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
