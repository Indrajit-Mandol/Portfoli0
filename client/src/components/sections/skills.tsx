import { Code, Brain, Globe } from "lucide-react";
import SkillBar from "@/components/ui/skill-bar";

export default function Skills() {
  const programmingSkills = [
    { skill: "Python", percentage: 95 },
    { skill: "SQL", percentage: 90 },
    { skill: "JavaScript", percentage: 85 },
    { skill: "TypeScript", percentage: 80 },
    { skill: "C++", percentage: 75 },
    { skill: "PHP", percentage: 70 },
  ];

  const aimlSkills = [
    { skill: "Scikit-learn", percentage: 90 },
    { skill: "Pandas/NumPy", percentage: 92 },
    { skill: "NLP (spaCy/NLTK)", percentage: 88 },
    { skill: "TensorFlow", percentage: 85 },
    { skill: "Matplotlib", percentage: 85 },
    { skill: "Tesseract OCR", percentage: 80 },
  ];

  const webSkills = [
    { skill: "Git/GitHub", percentage: 92 },
    { skill: "Streamlit", percentage: 90 },
    { skill: "MySQL", percentage: 88 },
    { skill: "React.js", percentage: 85 },
    { skill: "Tailwind CSS", percentage: 85 },
    { skill: "Postman", percentage: 80 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-400">Expertise across multiple domains</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              <Code className="inline mr-2" />
              Languages
            </h3>
            <div className="space-y-4">
              {programmingSkills.map((skill) => (
                <SkillBar
                  key={skill.skill}
                  skill={skill.skill}
                  percentage={skill.percentage}
                  color="blue"
                />
              ))}
            </div>
          </div>

          {/* AI/ML Technologies */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">
              <Brain className="inline mr-2" />
              AI/ML
            </h3>
            <div className="space-y-4">
              {aimlSkills.map((skill) => (
                <SkillBar
                  key={skill.skill}
                  skill={skill.skill}
                  percentage={skill.percentage}
                  color="purple"
                />
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              <Globe className="inline mr-2" />
              Web/Tools
            </h3>
            <div className="space-y-4">
              {webSkills.map((skill) => (
                <SkillBar
                  key={skill.skill}
                  skill={skill.skill}
                  percentage={skill.percentage}
                  color="green"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
