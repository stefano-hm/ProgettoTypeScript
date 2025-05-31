import React from "react";
import styles from "./StartCard.module.css";

interface StartCardProps {
  onStart: () => void;
}

const StartCard: React.FC<StartCardProps> = ({ onStart }) => {
  return (
    <div className={styles.startContent}>
      <h1 className={styles.startTitle}>Environmental Quiz</h1>
      <p className={styles.startDescription}>
        Test your knowledge about the environment! Answer 10 multiple-choice
        questions and find out your level. At the end, share your result with
        your friends!
      </p>
      <button className={styles.startButton} onClick={onStart}>
        Start the quiz
      </button>
    </div>
  );
};

export default StartCard;
