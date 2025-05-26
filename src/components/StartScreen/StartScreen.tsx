import React from "react";
import styles from "./StartScreen.module.css";
import { Helmet } from "react-helmet";

type StartScreenProps = {
  onStart: () => void;
};

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Quiz Ambientale - Inizia</title>
      </Helmet>
      <div className={styles.content}>
        <h1 className={styles.title}>Environmental Quiz</h1>
        <p className={styles.description}>
          Test your knowledge about the environment! Answer 10 multiple-choice questions and find out your level. At the end, share your result with your friends!
        </p>
        <button className={styles.startButton} onClick={onStart}>
          Start the quiz
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
