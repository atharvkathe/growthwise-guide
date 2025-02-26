
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LearnMore from "./pages/LearnMore";
import Assessment from "./pages/Assessment";
import AssessmentQuestions from "./pages/AssessmentQuestions";
import AssessmentResults from "./pages/AssessmentResults";
import AssessmentAnalysis from "./pages/AssessmentAnalysis";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/assessment/questions" element={<AssessmentQuestions />} />
        <Route path="/assessment/results" element={<AssessmentResults />} />
        <Route path="/assessment/analysis" element={<AssessmentAnalysis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
