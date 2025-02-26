
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Brain, Target, BarChart3, FileBarChart, ArrowRight, Check, Users, Book, Rocket, LightbulbIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LearnMore = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: "01",
      title: "AI Assessment",
      description: "Take an AI-driven test to analyze your skillset",
    },
    {
      number: "02",
      title: "Detailed Weakness Report",
      description: "AI identifies improvement areas and suggests solutions",
    },
    {
      number: "03",
      title: "Personalized Learning Plan",
      description: "Receive customized learning materials and exercises",
    },
    {
      number: "04",
      title: "Track Progress & Improve",
      description: "AI continuously monitors progress and updates recommendations",
    },
  ];

  const beneficiaries = [
    {
      title: "Students",
      description: "Track academic progress and identify areas for improvement to excel in your studies.",
      icon: Book,
    },
    {
      title: "Professionals",
      description: "Enhance your career prospects by developing in-demand skills aligned with industry needs.",
      icon: Users,
    },
    {
      title: "Entrepreneurs",
      description: "Identify and develop crucial skills needed to lead and grow your business effectively.",
      icon: Rocket,
    },
  ];

  const startAssessment = () => {
    navigate("/assessment");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Discover SkillSense AI</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your AI-powered companion for professional growth and skill development
              </p>
            </motion.div>

            <div className="space-y-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-primary" />
                  What is SkillSense AI?
                </h3>
                <p className="text-muted-foreground">
                  SkillSense AI is an innovative platform that leverages advanced artificial intelligence to analyze your skills, identify growth opportunities, and create personalized learning paths. We combine cutting-edge technology with proven learning methodologies to accelerate your professional development.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  How Does It Work?
                </h3>
                <Card className="border-2 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6">
                    <ul className="space-y-6">
                      {steps.map((step) => (
                        <li key={step.number} className="flex gap-4">
                          <div className="text-primary font-bold text-lg">{step.number}</div>
                          <div>
                            <h4 className="font-semibold">{step.title}</h4>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Who Can Benefit?
                </h3>
                <div className="grid gap-4">
                  {beneficiaries.map((beneficiary) => (
                    <Card 
                      key={beneficiary.title} 
                      className="border-2 transition-all duration-300 hover:shadow-md hover:border-primary/50 hover:-translate-y-1"
                    >
                      <CardHeader className="space-y-1">
                        <CardTitle className="text-xl flex items-center gap-2">
                          <beneficiary.icon className="w-5 h-5 text-primary" />
                          {beneficiary.title}
                        </CardTitle>
                        <CardDescription>{beneficiary.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <LightbulbIcon className="w-6 h-6 text-primary" />
                  Why Choose SkillSense AI?
                </h3>
                <Card className="border-2 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6">
                    <ul className="space-y-5">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1" />
                        <div>
                          <p className="font-medium">AI-Driven Insights</p>
                          <p className="text-muted-foreground">Advanced algorithms provide precise skill analysis and recommendations</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1" />
                        <div>
                          <p className="font-medium">Personalized Learning</p>
                          <p className="text-muted-foreground">Customized paths tailored to your goals and learning style</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1" />
                        <div>
                          <p className="font-medium">Real-Time Progress Tracking</p>
                          <p className="text-muted-foreground">Monitor your growth with detailed analytics and insights</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your personalized skill development journey today and unlock your full potential with SkillSense AI.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                onClick={startAssessment}
              >
                Start Free Assessment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearnMore;
