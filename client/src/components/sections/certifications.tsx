import { Bot, TrendingUp, CheckSquare } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Machine Learning with Python",
      provider: "IBM",
      grade: "96.19%",
      icon: Bot,
      color: "blue",
    },
    {
      title: "What is Data Science?",
      provider: "IBM",
      grade: "93.50%",
      icon: TrendingUp,
      color: "purple",
    },
    {
      title: "Foundations of Project Management",
      provider: "Google",
      grade: "92.10%",
      icon: CheckSquare,
      color: "green",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Certifications</h2>
          <p className="text-xl text-slate-400">Professional achievements and continuous learning</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">
                  <IconComponent className={`text-${cert.color}-400 mx-auto`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-slate-400 mb-2">{cert.provider}</p>
                <p className={`text-2xl font-bold text-${cert.color}-400`}>{cert.grade}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
