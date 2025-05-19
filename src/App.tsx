import { useState, Suspense, lazy } from "react";
import { questions } from "./data/questions";


const StartScreen = lazy(() => import("./components/StartScreen/Startscreen"));
const QuizBox = lazy(() => import("./components/QuizBox/QuizBox"));
const ResultScreen = lazy(() => import("./components/ResultScreen/ResultScreen"));


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
          <ResultScreen score={score} onRestart={() => {
            setScore(null);
            setQuizStarted(false);
          }} />
        )}
      </Suspense>
    </div>
  );
}

export default App;