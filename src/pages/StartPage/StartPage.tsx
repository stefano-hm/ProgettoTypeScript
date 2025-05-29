import React from "react";
import styles from "./StartPage.module.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const StartPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Environmental Quiz</title>
      </Helmet>
      <div className={styles.content}>
        <h1 className={styles.title}>Environmental Quiz</h1>
        <p className={styles.description}>
          Test your knowledge about the environment! Answer 10 multiple-choice questions and find out your level. At the end, share your result with your friends!
        </p>
        <button className={styles.startButton} onClick={handleStart}>
          Start the quiz
        </button>
      </div>
    </div>
  );
};

export default StartPage;
