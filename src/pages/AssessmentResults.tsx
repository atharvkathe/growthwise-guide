
import { motion } from "framer-motion";
import { Download, ArrowRight, Brain, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = {
  strengths: [
    { skill: "Machine Learning", score: 8 },
    { skill: "Data Analysis", score: 7.5 },
    { skill: "Python Programming", score: 7 },
  ],
  weaknesses: [
    { skill: "Deep Learning", score: 4 },
    { skill: "Neural Networks", score: 4.5 },
    { skill: "Computer Vision", score: 5 },
  ],
  recommendedPath: [
    "Complete Neural Networks Fundamentals course",
    "Practice with TensorFlow projects",
    "Join AI Community forums",
  ],
};

const AssessmentResults = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold">Your Personalized Analysis</h1>
          <p className="text-muted-foreground">
            Based on your assessment, here's a detailed breakdown of your skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Strengths Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-green-600">Top Strengths</h2>
            <div className="space-y-6">
              {mockData.strengths.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-green-600">{item.score}/10</span>
                  </div>
                  <Progress
                    value={item.score * 10}
                    className="bg-green-100"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Weaknesses Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-orange-600">Areas to Improve</h2>
            <div className="space-y-6">
              {mockData.weaknesses.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-orange-600">{item.score}/10</span>
                  </div>
                  <Progress
                    value={item.score * 10}
                    className="bg-orange-100"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6">Skills Overview</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[...mockData.strengths, ...mockData.weaknesses]}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="skill" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="score"
                  fill="#6366F1"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6">Recommended Learning Path</h2>
          <div className="space-y-4">
            {mockData.recommendedPath.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-white/50"
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  {index === 0 ? (
                    <Brain className="w-5 h-5 text-primary" />
                  ) : index === 1 ? (
                    <Target className="w-5 h-5 text-primary" />
                  ) : (
                    <Zap className="w-5 h-5 text-primary" />
                  )}
                </div>
                <span>{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Start Learning Path
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2"
          >
            Download Report
            <Download className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AssessmentResults;
