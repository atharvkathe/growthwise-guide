
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, ChevronRight, LineChart, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const ANALYSIS_STEPS = [
  { icon: Brain, text: "Analyzing your skills and expertise..." },
  { icon: Target, text: "Identifying areas for improvement..." },
  { icon: LineChart, text: "Generating personalized recommendations..." },
];

const AssessmentAnalysis = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => navigate("/assessment/results"), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [navigate]);

  useEffect(() => {
    setCurrentStep(Math.floor((progress / 100) * ANALYSIS_STEPS.length));
  }, [progress]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-16 h-16 mx-auto text-primary"
          >
            <Brain className="w-full h-full" />
          </motion.div>
          <h1 className="text-3xl font-bold">AI Analysis in Progress</h1>
          <p className="text-muted-foreground">
            Please wait while our AI analyzes your responses...
          </p>
        </motion.div>

        <div className="space-y-8">
          <Progress value={progress} className="h-2 w-full" />
          
          <div className="space-y-4">
            {ANALYSIS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isComplete = index < currentStep;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center space-x-4 ${
                    isActive ? "text-primary" : isComplete ? "text-muted-foreground" : "text-gray-300"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="flex-1">{step.text}</span>
                  {isComplete && (
                    <ChevronRight className="w-5 h-5 text-primary" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentAnalysis;
