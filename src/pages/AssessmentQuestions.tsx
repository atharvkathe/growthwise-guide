import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AssessmentData {
  domain: string;
  skills: Record<string, number>;
  learningPreferences: {
    method: string;
    timePerWeek: string;
  };
  challenges: string[];
  goals: {
    shortTerm: string;
    longTerm: string;
  };
}

const DOMAINS = [
  { id: "ai", name: "Artificial Intelligence", color: "from-blue-500 to-purple-500" },
  { id: "web", name: "Web Development", color: "from-green-500 to-teal-500" },
  { id: "finance", name: "Finance", color: "from-yellow-500 to-orange-500" },
  { id: "marketing", name: "Marketing", color: "from-pink-500 to-red-500" },
];

const DOMAIN_SKILLS = {
  ai: ["Machine Learning", "Python Programming", "Data Analysis", "Deep Learning"],
  web: ["HTML/CSS", "JavaScript", "React", "Backend Development"],
  finance: ["Financial Analysis", "Investment", "Risk Management", "Economics"],
  marketing: ["Digital Marketing", "Content Strategy", "Analytics", "Social Media"],
};

const LEARNING_METHODS = [
  { id: "videos", label: "Video Courses" },
  { id: "books", label: "Books & Documentation" },
  { id: "projects", label: "Hands-on Projects" },
  { id: "mentoring", label: "1-on-1 Mentoring" },
];

const TIME_OPTIONS = [
  { id: "0-2", label: "0-2 hours/week" },
  { id: "2-5", label: "2-5 hours/week" },
  { id: "5-10", label: "5-10 hours/week" },
  { id: "10+", label: "10+ hours/week" },
];

const AssessmentQuestions = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<AssessmentData>({
    domain: "",
    skills: {},
    learningPreferences: {
      method: "",
      timePerWeek: "",
    },
    challenges: [],
    goals: {
      shortTerm: "",
      longTerm: "",
    },
  });

  const handleNext = () => {
    if (step === 4) {
      if (!data.learningPreferences.method || !data.learningPreferences.timePerWeek || 
          !data.challenges.length || !data.goals.shortTerm || !data.goals.longTerm) {
        toast({
          title: "Please fill in all fields",
          description: "All fields are required to generate your personalized learning path.",
          variant: "destructive",
        });
        return;
      }
      navigate("/assessment/analysis", { state: { domain: data.domain } });
    } else {
      if (step === 3 && (!data.learningPreferences.method || !data.learningPreferences.timePerWeek)) {
        toast({
          title: "Please fill in all fields",
          description: "Please select both your learning method and time commitment.",
          variant: "destructive",
        });
        return;
      }
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <DomainSelection
            selectedDomain={data.domain}
            onSelect={(domain) => {
              setData((prev) => ({ ...prev, domain }));
              setTimeout(() => handleNext(), 500);
            }}
          />
        );
      case 2:
        return (
          <SkillsRating
            domain={data.domain}
            skills={data.skills}
            onSkillsUpdate={(skills) => setData((prev) => ({ ...prev, skills }))}
          />
        );
      case 3:
        return (
          <LearningPreferences
            preferences={data.learningPreferences}
            onPreferencesUpdate={(prefs) =>
              setData((prev) => ({ ...prev, learningPreferences: prefs }))
            }
          />
        );
      case 4:
        return (
          <ChallengesAndGoals
            data={data}
            onUpdate={(updates) => setData((prev) => ({ ...prev, ...updates }))}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={step === 1}
            className={cn(
              "transition-opacity",
              step === 1 ? "opacity-0" : "opacity-100"
            )}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  step >= i ? "bg-primary" : "bg-gray-300"
                )}
              />
            ))}
          </div>
          <div className="w-[72px]" /> {/* Spacer for alignment */}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {step !== 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 flex justify-end"
          >
            <Button
              onClick={handleNext}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              {step === 4 ? "Complete" : "Continue"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const DomainSelection = ({
  selectedDomain,
  onSelect,
}: {
  selectedDomain: string;
  onSelect: (domain: string) => void;
}) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-center">Choose Your Domain</h2>
    <p className="text-muted-foreground text-center mb-8">
      Select the area you want to focus on for improvement
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {DOMAINS.map((domain) => (
        <motion.button
          key={domain.id}
          onClick={() => onSelect(domain.id)}
          className={cn(
            "relative overflow-hidden rounded-xl p-6 text-white text-left transition-transform hover:scale-[1.02]",
            `bg-gradient-to-br ${domain.color}`,
            selectedDomain === domain.id && "ring-2 ring-white ring-offset-2"
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-xl font-semibold mb-2">{domain.name}</h3>
          <p className="text-white/80">Master the fundamentals and advanced concepts</p>
        </motion.button>
      ))}
    </div>
  </div>
);

const SkillsRating = ({
  domain,
  skills,
  onSkillsUpdate,
}: {
  domain: string;
  skills: Record<string, number>;
  onSkillsUpdate: (skills: Record<string, number>) => void;
}) => (
  <div className="space-y-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold">Rate Your Skills</h2>
      <p className="text-muted-foreground mt-2">
        How would you rate your current proficiency in these areas?
      </p>
    </div>
    <div className="space-y-6">
      {DOMAIN_SKILLS[domain as keyof typeof DOMAIN_SKILLS]?.map((skill) => (
        <div key={skill} className="space-y-3">
          <div className="flex justify-between">
            <label className="font-medium">{skill}</label>
            <span className="text-muted-foreground">
              {skills[skill] || 0}/10
            </span>
          </div>
          <Slider
            value={[skills[skill] || 0]}
            onValueChange={([value]) =>
              onSkillsUpdate({ ...skills, [skill]: value })
            }
            max={10}
            step={1}
          />
        </div>
      ))}
    </div>
  </div>
);

const LearningPreferences = ({
  preferences,
  onPreferencesUpdate,
}: {
  preferences: {
    method: string;
    timePerWeek: string;
  };
  onPreferencesUpdate: (prefs: {
    method: string;
    timePerWeek: string;
  }) => void;
}) => (
  <div className="space-y-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold">Learning Preferences</h2>
      <p className="text-muted-foreground mt-2">
        Help us understand how you learn best
      </p>
    </div>

    <div className="space-y-6">
      <div className="space-y-4">
        <label className="font-medium block">How do you prefer to learn?</label>
        <RadioGroup
          value={preferences.method}
          onValueChange={(value) =>
            onPreferencesUpdate({ ...preferences, method: value })
          }
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {LEARNING_METHODS.map((method) => (
            <div key={method.id} className="flex items-center space-x-2">
              <RadioGroupItem value={method.id} id={method.id} />
              <label
                htmlFor={method.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {method.label}
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <label className="font-medium block">
          How much time can you dedicate weekly?
        </label>
        <RadioGroup
          value={preferences.timePerWeek}
          onValueChange={(value) =>
            onPreferencesUpdate({ ...preferences, timePerWeek: value })
          }
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {TIME_OPTIONS.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem value={option.id} id={option.id} />
              <label
                htmlFor={option.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {option.label}
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  </div>
);

const ChallengesAndGoals = ({
  data,
  onUpdate,
}: {
  data: AssessmentData;
  onUpdate: (updates: Partial<AssessmentData>) => void;
}) => (
  <div className="space-y-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold">Challenges & Goals</h2>
      <p className="text-muted-foreground mt-2">
        Let's understand your obstacles and aspirations
      </p>
    </div>

    <div className="space-y-6">
      <div className="space-y-4">
        <label className="block font-medium">
          What challenges are you facing in your learning journey?
        </label>
        <textarea
          className="w-full p-3 rounded-md border bg-background"
          rows={4}
          placeholder="Describe your main obstacles..."
          value={data.challenges.join("\n")}
          onChange={(e) =>
            onUpdate({ challenges: e.target.value.split("\n").filter(Boolean) })
          }
        />
      </div>

      <div className="space-y-4">
        <label className="block font-medium">What are your short-term goals?</label>
        <textarea
          className="w-full p-3 rounded-md border bg-background"
          rows={3}
          placeholder="What do you want to achieve in the next 3-6 months?"
          value={data.goals.shortTerm}
          onChange={(e) =>
            onUpdate({ goals: { ...data.goals, shortTerm: e.target.value } })
          }
        />
      </div>

      <div className="space-y-4">
        <label className="block font-medium">What are your long-term goals?</label>
        <textarea
          className="w-full p-3 rounded-md border bg-background"
          rows={3}
          placeholder="What do you want to achieve in the next 1-2 years?"
          value={data.goals.longTerm}
          onChange={(e) =>
            onUpdate({ goals: { ...data.goals, longTerm: e.target.value } })
          }
        />
      </div>
    </div>
  </div>
);

export default AssessmentQuestions;
