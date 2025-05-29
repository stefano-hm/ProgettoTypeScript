import React from "react";
import styles from "./ResultPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ShareButton from "../../components/ShareButton/ShareButton";
import ResultCard from "../../components/ResultCard/ResultCard";

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

      <ResultCard
        score={score}
        level={level}
        onRestart={() => navigate("/")}
        shareButton={<ShareButton />}
      />
    </div>
  );
};

export default ResultPage;
