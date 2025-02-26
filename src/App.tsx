
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Index from "@/pages/Index";
import Assessment from "@/pages/Assessment";
import AssessmentQuestions from "@/pages/AssessmentQuestions";
import AssessmentResults from "@/pages/AssessmentResults";
import AssessmentAnalysis from "@/pages/AssessmentAnalysis";
import NotFound from "@/pages/NotFound";
import LearnMore from "@/pages/LearnMore";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/assessment/questions" element={<AssessmentQuestions />} />
        <Route path="/assessment/results" element={<AssessmentResults />} />
        <Route path="/assessment/analysis" element={<AssessmentAnalysis />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
