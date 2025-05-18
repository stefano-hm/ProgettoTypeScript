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
      <h1 className={styles.title}>Quiz Ambientale 🌍</h1>
      <p className={styles.description}>
        Rispondi a 10 domande a risposta multipla sul tema dell'ambiente. Alla
        fine scoprirai il tuo livello di conoscenza e potrai condividere il
        risultato sui social!
      </p>
      <button className={styles.startButton} onClick={onStart}>
        Inizia il quiz
      </button>
    </div>
  );
};

export default StartScreen;
