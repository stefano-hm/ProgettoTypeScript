import React from "react";
import styles from "./ResultCard.module.css";

interface ResultCardProps {
  score: number;
  level: string;
  onRestart: () => void;
  shareButton: React.ReactNode;
}

const ResultCard: React.FC<ResultCardProps> = ({
  score,
  level,
  onRestart,
  shareButton,
}) => {
  return (
    <div className={styles.resultContainer}>
      <h1 className={styles.resultTitle}>Your result</h1>
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
        {shareButton}
      </div>
    </div>
  );
};

export default ResultCard;
