import React from "react";
import styles from "./ResultScreen.module.css";
import ShareButton from "../ShareButton/ShareButton";
import { Helmet } from "react-helmet";

type ResultScreenProps = {
  score: number;
  onRestart: () => void;
};

const getLevel = (score: number): string => {
  if (score <= 3) return "Base";
  if (score <= 7) return "Intermedio";
  if (score <= 9) return "Esperto/a";
  return "Maestro/a";
};

const ResultScreen: React.FC<ResultScreenProps> = ({ score, onRestart }) => {
  const level = getLevel(score);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Quiz Ambientale - Risultato</title>
      </Helmet>

      <div className={styles.card}>
        <h1 className={styles.title}>Il tuo risultato</h1>
        <p className={styles.score}>
          Hai totalizzato <strong>{score}/10</strong>
        </p>
        <p className={styles.level}>
          Livello raggiunto: <strong>{level}</strong>
        </p>

        <div className={styles.buttons}>
          <button className={styles.button} onClick={onRestart}>
            Ricomincia il quiz
          </button>
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
