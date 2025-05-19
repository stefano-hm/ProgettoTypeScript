import React from "react";
import styles from "./ResultScreen.module.css";
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
  const shareText = `Ho ottenuto ${score}/10 al quiz ambientale 🌍 - Livello: ${level}!`;

  const handleShare = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Risultato Quiz</title>
      </Helmet>
      <h1 className={styles.title}>Il tuo risultato 🎉</h1>
      <p className={styles.score}>
        Hai totalizzato <strong>{score}/10</strong>
      </p>
      <p className={styles.level}>
        Livello raggiunto: <strong>{level}</strong>
      </p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onRestart}>
          Ricomincia
        </button>
        <button className={styles.button} onClick={handleShare}>
          Condividi su X
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
