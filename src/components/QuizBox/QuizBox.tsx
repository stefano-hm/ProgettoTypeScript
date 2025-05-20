import React, { useState } from "react";
import styles from "./QuizBox.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

type QuizBoxProps = {
  questions: Question[];
  onFinish: (score: number) => void;
};

const QuizBox: React.FC<QuizBoxProps> = ({ questions, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (index: number) => {
    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      onFinish(score + (index === currentQuestion.correctIndex ? 1 : 0));
    }
  };

  return (
    <div className={styles.container}>
      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />

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
  );
};

export default QuizBox;
