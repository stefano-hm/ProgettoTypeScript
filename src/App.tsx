import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const StartPage = lazy(() => import("./pages/StartPage/StartPage"));
const QuizPage = lazy(() => import("./pages/QuizPage/QuizPage"));
const ResultPage = lazy(() => import("./pages/ResultPage/ResultPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
