import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Brain, Target, BarChart3, FileBarChart, ArrowRight, Check, Users, Book, Rocket, LightbulbIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Skill Analysis",
      description: "Advanced AI evaluates your skills and identifies growth opportunities",
    },
    {
      icon: Target,
      title: "Personalized Learning Path",
      description: "Tailored recommendations to help you improve efficiently",
    },
    {
      icon: BarChart3,
      title: "Real-time Progress Tracking",
      description: "Monitor your development with AI-driven insights",
    },
    {
      icon: FileBarChart,
      title: "Actionable Insights & Reports",
      description: "Get step-by-step strategies and in-depth analysis",
    },
  ];

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

  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "Basic AI analysis",
        "Limited insights",
        "Core feature access",
        "Email support",
      ],
    },
    {
      name: "Premium",
      price: "29",
      description: "Best for serious learners",
      features: [
        "Full AI analysis",
        "Detailed reports",
        "Personalized learning paths",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "49",
      description: "For maximum growth",
      features: [
        "One-on-one AI coaching",
        "Real-time tracking",
        "Exclusive insights",
        "24/7 priority support",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      content: "SkillSense AI transformed my learning journey. The personalized recommendations were spot-on!",
      avatar: "/placeholder.svg",
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      content: "The AI-driven insights helped me focus on exactly what I needed to improve. Incredible tool!",
      avatar: "/placeholder.svg",
    },
    {
      name: "Emma Davis",
      role: "UX Designer",
      content: "The progress tracking feature kept me motivated and helped me achieve my goals faster.",
      avatar: "/placeholder.svg",
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Learn More Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Brain className="w-6 h-6 text-primary" />
                    What is SkillSense AI?
                  </h3>
                  <p className="text-muted-foreground">
                    SkillSense AI is an innovative platform that leverages advanced artificial intelligence to analyze your skills, identify growth opportunities, and create personalized learning paths. We combine cutting-edge technology with proven learning methodologies to accelerate your professional development.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    How Does It Work?
                  </h3>
                  <ul className="space-y-4">
                    {steps.map((step) => (
                      <li key={step.number} className="flex gap-4">
                        <span className="text-primary font-bold">{step.number}</span>
                        <div>
                          <h4 className="font-semibold">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Who Can Benefit?
                  </h3>
                  <div className="grid gap-4">
                    {beneficiaries.map((beneficiary) => (
                      <Card key={beneficiary.title}>
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
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <LightbulbIcon className="w-6 h-6 text-primary" />
                    Why Choose SkillSense AI?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <div>
                        <p className="font-medium">AI-Driven Insights</p>
                        <p className="text-muted-foreground">Advanced algorithms provide precise skill analysis and recommendations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Personalized Learning</p>
                        <p className="text-muted-foreground">Customized paths tailored to your goals and learning style</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Real-Time Progress Tracking</p>
                        <p className="text-muted-foreground">Monitor your growth with detailed analytics and insights</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your personalized skill development journey today and unlock your full potential with SkillSense AI.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Free Assessment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how SkillSense AI can transform your learning journey with our cutting-edge features
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="relative overflow-hidden border-2">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our simple four-step process to accelerate your growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 text-4xl font-bold text-primary/10">
                    {step.number}
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect plan for your learning journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className={`relative overflow-hidden ${plan.popular ? 'border-primary border-2' : ''}`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm">
                        Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <Check className="h-4 w-4 text-primary mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our mission is to help individuals unlock their full potential using AI-driven skill analysis
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Cutting-edge AI Technology</p>
                      <p className="text-muted-foreground">Advanced algorithms provide precise skill analysis</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Actionable Insights</p>
                      <p className="text-muted-foreground">Clear, practical steps for improvement</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <div>
                      <p className="font-medium">User-Friendly Experience</p>
                      <p className="text-muted-foreground">Intuitive interface designed for easy navigation</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-accent/5 p-6 rounded-lg"
                    >
                      <div className="flex items-center mb-4">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="italic text-muted-foreground">{testimonial.content}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
