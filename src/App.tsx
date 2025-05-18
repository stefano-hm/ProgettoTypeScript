import { useState, Suspense, lazy } from "react";

const StartScreen = lazy(() => import("./components/StartScreen/Startscreen"));
const QuizBox = lazy(() => import("./components/QuizBox/QuizBox"));

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

const questions: Question[] = [
  {
    question: "Qual è la principale causa del cambiamento climatico?",
    options: ["Eruzioni vulcaniche", "Emissioni di gas serra", "Ciclo solare", "Deforestazione naturale"],
    correctIndex: 1,
  },
  {
    question: "Quale di questi materiali è riciclabile?",
    options: ["Plastica", "Vetro", "Alluminio", "Tutti e tre"],
    correctIndex: 3,
  },
  {
    question: "Quale gas è il più associato all'effetto serra?",
    options: ["Azoto", "Ossigeno", "Anidride carbonica", "Elio"],
    correctIndex: 2,
  },
  {
    question: "Cosa indica il termine biodiversità?",
    options: ["La varietà di piante", "La varietà di animali", "La varietà degli esseri viventi", "Il numero di specie marine"],
    correctIndex: 2,
  },
  {
    question: "Qual è la fonte di energia rinnovabile?",
    options: ["Carbone", "Gas naturale", "Petrolio", "Sole"],
    correctIndex: 3,
  },
  {
    question: "Quale di questi comportamenti riduce l’inquinamento?",
    options: ["Usare la bici", "Usare il condizionatore", "Comprare vestiti ogni settimana", "Tenere accese le luci tutto il giorno"],
    correctIndex: 0,
  },
  {
    question: "Qual è il simbolo internazionale del riciclo?",
    options: ["Un albero", "Un cerchio verde", "Tre frecce a triangolo", "Un bidone verde"],
    correctIndex: 2,
  },
  {
    question: "Quale impatto ha la deforestazione?",
    options: ["Aumenta la biodiversità", "Riduce le emissioni", "Contribuisce al cambiamento climatico", "Migliora la qualità dell'aria"],
    correctIndex: 2,
  },
  {
    question: "Cos'è l’impronta ecologica?",
    options: ["Un’impronta lasciata sulla terra", "L’impatto delle attività umane sull’ambiente", "Un’impronta di animale", "Una tecnica agricola"],
    correctIndex: 1,
  },
  {
    question: "Quale risorsa è scarsa e va risparmiata?",
    options: ["Sabbia", "Acqua dolce", "Sale", "Aria"],
    correctIndex: 1,
  },
];


function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleStart = () => {
    setQuizStarted(true);
  };

  const handleFinish = (finalScore: number) => {
    setScore(finalScore);
  };

  return (
    <div>
      <Suspense fallback={<div>Caricamento...</div>}>
        {!quizStarted ? (
          <StartScreen onStart={handleStart} />
        ) : score === null ? (
          <QuizBox questions={questions} onFinish={handleFinish} />
        ) : (
          <div>SCHERMATA FINALE QUI (prossimo step)</div>
        )}
      </Suspense>
    </div>
  );
}

export default App;