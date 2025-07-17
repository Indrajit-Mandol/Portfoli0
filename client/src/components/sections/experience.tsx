import TimelineItem from "@/components/ui/timeline-item";
import { Server, Cog, Rocket, Gauge, Smartphone, RefreshCw } from "lucide-react";

export default function Experience() {
  const workAchievements = [
    "Managed 40+ microsites using centralized codebase with domain-specific rendering",
    "Developed custom admin portal with dynamic content control via MySQL",
    "Implemented CI/CD pipeline for automatic deployment",
    "Achieved 90+ PageSpeed score through performance optimizations",
    "Built Android app for call metadata logging and CRM integration",
    "Automated Facebook lead sync via API workflows",
  ];

  const achievementIcons = [Server, Cog, Rocket, Gauge, Smartphone, RefreshCw];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-xl text-slate-400">Professional journey and achievements</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

          {/* Experience Item */}
          <TimelineItem
            title="Full Stack Developer"
            subtitle="The Homestore"
            location="Kolkata, India"
            date="Sep 2024 – Present"
          >
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {workAchievements.map((achievement, index) => {
                const IconComponent = achievementIcons[index];
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className={`h-5 w-5 mt-1 text-${['blue', 'purple', 'green', 'yellow', 'indigo', 'pink'][index]}-400`} />
                    <p className="text-slate-300">{achievement}</p>
                  </div>
                );
              })}
            </div>
          </TimelineItem>

          {/* Education Timeline Item */}
          <TimelineItem
            title="Bachelor of Engineering"
            subtitle="Jadavpur University"
            location="Computer Engineering"
            date="2020 – 2024"
            description="CGPA: 7.6"
          />
        </div>
      </div>
    </section>
  );
}
