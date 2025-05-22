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
        <h1 className={styles.title}>Quiz Ambientale</h1>
        <p className={styles.description}>
          Metti alla prova le tue conoscenze sull’ambiente! Rispondi a 10 domande a risposta multipla e scopri il tuo livello. Al termine, condividi il risultato con i tuoi amici!
        </p>
        <button className={styles.startButton} onClick={onStart}>
          Inizia il quiz
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
