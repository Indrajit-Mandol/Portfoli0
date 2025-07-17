import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-400 mb-4">&copy; 2024 Indrajit Mandol. All rights reserved.</p>
        <p className="text-slate-500 text-sm mb-6">
          Built with passion for innovation and excellence in AI/ML engineering
        </p>

        <Button
          onClick={scrollToTop}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition-colors"
        >
          <ArrowUp className="mr-2 h-4 w-4" />
          Back to Top
        </Button>
      </div>
    </footer>
  );
}
