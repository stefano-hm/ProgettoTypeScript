export type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

export const questions: Question[] = [
  {
    question: "What is the main cause of climate change?",
    options: ["Volcanic eruptions", "Greenhouse gas emissions", "Solar cycle", "Natural deforestation"],
    correctIndex: 1,
  },
  {
    question: "Which of these materials is recyclable?",
    options: ["Plastic", "Glass", "Aluminum", "All three"],
    correctIndex: 3,
  },
  {
    question: "Which gas is most associated with the greenhouse effect?",
    options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
    correctIndex: 2,
  },
  {
    question: "What does the term biodiversity refer to?",
    options: ["The variety of plants", "The variety animals", "The variety of living organisms", "The number of marine species"],
    correctIndex: 2,
  },
  {
    question: "Which one is a source of renewable energy?",
    options: ["Coal", "Natural gas", "Oil", "Sun"],
    correctIndex: 3,
  },
  {
    question: "Which of these behaviors reduces pollution?",
    options: ["Riding a bike", "Using the air conditioner", "Buying clothes every week", "Keeping the lights on all day"],
    correctIndex: 0,
  },
  {
    question: "What is the international symbol for recycling?",
    options: ["A tree", "A green circle", "Three arrows forming a triangle", "A green trash bin"],
    correctIndex: 2,
  },
  {
    question: "What impact does deforestation have?",
    options: ["Increases biodiversity", "Reduces emissions", "Contributes to climate change", "Improves air quality"],
    correctIndex: 2,
  },
  {
    question: "What is the ecological footprint?",
    options: ["A footprint left on the ground", "The impact of human activities on the environment", "An animal’s footprint", "An agricultural technique"],
    correctIndex: 1,
  },
  {
    question: "Which resource is scarce and should be conserved?",
    options: ["Sand", "Freshwater", "Salt", "Air"],
    correctIndex: 1,
  },
];
