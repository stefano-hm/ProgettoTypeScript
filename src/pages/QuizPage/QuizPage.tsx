import React, { useState } from "react";
import styles from "./QuizPage.module.css";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { questions } from "../../data/questions";
import { Helmet } from "react-helmet";


const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (index: number) => {
    const isCorrect = index === currentQuestion.correctIndex;
    const newScore = score + (isCorrect ? 1 : 0);
    setScore(newScore);

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      navigate("/result", { state: { score: newScore } });
    }
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Environmental Quiz</title>
      </Helmet>

      <ProgressBar
        current={currentQuestionIndex + 1}
        total={questions.length}
      />

      <div className={styles.content}>
        <h2 className={styles.question}>
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </h2>

        <div className={styles.options}>
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              className={styles.optionButton}
              onClick={() => handleAnswer(idx)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
