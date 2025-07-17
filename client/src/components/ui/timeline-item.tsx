import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  location?: string;
  date: string;
  description?: string;
  achievements?: string[];
  children?: ReactNode;
}

export default function TimelineItem({
  title,
  subtitle,
  location,
  date,
  description,
  achievements,
  children,
}: TimelineItemProps) {
  return (
    <div className="relative pl-12 pb-12">
      <div className="timeline-item relative">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
              <p className="text-lg text-slate-300">{subtitle}</p>
              {location && <p className="text-slate-400">{location}</p>}
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-purple-400">{date}</p>
            </div>
          </div>

          {description && <p className="text-slate-300 mb-4">{description}</p>}

          {achievements && achievements.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-300">{achievement}</p>
                </div>
              ))}
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  );
}
