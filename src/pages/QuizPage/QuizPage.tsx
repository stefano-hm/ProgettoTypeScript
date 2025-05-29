import React, { useState } from "react";
import styles from "./QuizPage.module.css";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
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

      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        questionNumber={currentQuestionIndex + 1}
        onSelect={handleAnswer}
      />
    </div>
  );
};

export default QuizPage;
