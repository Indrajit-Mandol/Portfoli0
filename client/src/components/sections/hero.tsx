import { ArrowDown, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import Particles from "@/components/ui/particles";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Particles />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                alt="Professional developer workspace"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg animate-pulse-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="gradient-text">Indrajit Mandol</span>
          </h1>

          {/* Typing Animation */}
          <div className="text-xl sm:text-2xl text-slate-300 mb-8 h-12">
            <TypingAnimation
              text="AI/ML Engineer & Full Stack Developer"
              speed={100}
              className="typing-animation"
            />
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Aspiring AI/ML Engineer transitioning from full-stack development. Proficient in Python, SQL, NLP,
            and data engineering with experience building scalable web apps, automation systems, and AI-powered solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Hire Me Now
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("#projects")}
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              View My Work
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="mailto:indrajit142024@gmail.com"
              className="text-slate-400 hover:text-blue-400 text-2xl transition-colors"
            >
              <Mail />
            </a>
            <a
              href="tel:+91-9851584780"
              className="text-slate-400 hover:text-blue-400 text-2xl transition-colors"
            >
              <Phone />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
