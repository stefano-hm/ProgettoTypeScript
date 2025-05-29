import React from "react";
import styles from "./QuestionCard.module.css";

interface QuestionCardProps {
  question: string;
  options: string[];
  questionNumber: number;
  onSelect: (index: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  questionNumber,
  onSelect,
}) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.question}>
        {questionNumber}. {question}
      </h2>

      <div className={styles.options}>
        {options.map((option, idx) => (
          <button
            key={idx}
            className={styles.optionButton}
            onClick={() => onSelect(idx)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
