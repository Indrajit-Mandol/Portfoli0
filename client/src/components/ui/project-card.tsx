import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  codeSnippet?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
  codeSnippet,
}: ProjectCardProps) {
  return (
    <Card className="project-card p-6 rounded-xl">
      <CardContent className="p-0">
        <div className="mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
            <div className="flex space-x-2">
              {githubUrl && (
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-slate-400 hover:text-blue-400"
                >
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {demoUrl && (
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-slate-400 hover:text-green-400"
                >
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <p className="text-slate-300">{description}</p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {codeSnippet && (
            <div className="bg-slate-900/50 p-3 rounded-lg font-mono text-sm text-green-400 overflow-x-auto">
              <pre>{codeSnippet}</pre>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
