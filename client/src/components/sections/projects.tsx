import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
  const projects = [
    {
      title: "ResumeIQ Pro",
      description: "AI-powered resume classifier with ATS scoring using Python, NLP, and TF-IDF to identify candidate fit based on job descriptions.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "NLP", "TF-IDF", "ML"],
      githubUrl: "#",
      demoUrl: "#",
      codeSnippet: `// AI-powered resume analysis
from sklearn.feature_extraction.text import TfidfVectorizer
import spacy
nlp = spacy.load("en_core_web_sm")`,
    },
    {
      title: "Property Price Predictor",
      description: "ML model to predict Mumbai property prices using scraped data from 99acres.com with interactive Streamlit app for real-time predictions.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "ML", "Streamlit", "Web Scraping"],
      githubUrl: "#",
      demoUrl: "#",
      codeSnippet: `// ML prediction model
import streamlit as st
from sklearn.ensemble import RandomForestRegressor
model = RandomForestRegressor()`,
    },
    {
      title: "Interactive Sudoku Solver",
      description: "Advanced Sudoku solver built with backtracking algorithm and interactive React UI, demonstrating algorithm visualization and problem-solving techniques.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "Algorithms", "JavaScript", "UI/UX"],
      githubUrl: "#",
      demoUrl: "#",
      codeSnippet: `// Backtracking algorithm
function solveSudoku(board) {
  return backtrack(board, 0, 0);
}`,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-400">Showcasing innovation and technical excellence</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
