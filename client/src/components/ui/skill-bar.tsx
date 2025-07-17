import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
}

export default function SkillBar({ skill, percentage, color = "blue" }: SkillBarProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(skillRef, { threshold: 0.5 });

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage]);

  const colorMap = {
    blue: "from-blue-500 to-purple-600",
    purple: "from-purple-500 to-pink-600",
    green: "from-green-500 to-blue-600",
  };

  return (
    <div ref={skillRef} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill}</span>
        <span className={`text-sm text-${color}-400`}>{percentage}%</span>
      </div>
      <div className="skill-bar h-3">
        <div
          className={`skill-progress bg-gradient-to-r ${colorMap[color as keyof typeof colorMap] || colorMap.blue}`}
          style={{
            width: `${animatedPercentage}%`,
            transition: "width 2s ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
