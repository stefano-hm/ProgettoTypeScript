import React from "react";
import styles from "./ResultPage.module.css";
import ShareButton from "../../components/ShareButton/ShareButton";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const getLevel = (score: number): string => {
  if (score <= 3) return "Basic";
  if (score <= 7) return "Intermediate";
  if (score <= 9) return "Expert";
  return "Master";
};

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score;

  if (typeof score !== "number") {
    return (
      <div className={styles.container}>
        <h2>Oops! Score not found.</h2>
        <button onClick={() => navigate("/")}>Back to Start</button>
      </div>
    );
  }

  const level = getLevel(score);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Environmental Quiz</title>
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
          <button className={styles.button} onClick={() => navigate("/")}>
            Restart the quiz
          </button>
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
