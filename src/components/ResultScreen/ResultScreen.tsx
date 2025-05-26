import React from "react";
import styles from "./ResultScreen.module.css";
import ShareButton from "../ShareButton/ShareButton";
import { Helmet } from "react-helmet";

type ResultScreenProps = {
  score: number;
  onRestart: () => void;
};

const getLevel = (score: number): string => {
  if (score <= 3) return "Basic";
  if (score <= 7) return "Intermediate";
  if (score <= 9) return "Expert";
  return "Master";
};

const ResultScreen: React.FC<ResultScreenProps> = ({ score, onRestart }) => {
  const level = getLevel(score);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Environmental Quiz - Results</title>
      </Helmet>

      <div className={styles.card}>
        <h1 className={styles.title}>Your result</h1>
        <p className={styles.score}>
          You scored <strong>{score}/10</strong>
        </p>
        <p className={styles.level}>
          Level achieved: <strong>{level}</strong>
        </p>

        <div className={styles.buttons}>
          <button className={styles.button} onClick={onRestart}>
            Restart the quiz
          </button>
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
