import { GraduationCap, MapPin, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-xl text-slate-400">Passionate about creating innovative solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="AI/ML visualization with neural networks and data flow"
              className="rounded-xl shadow-2xl w-full h-auto animate-float"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                <GraduationCap className="inline mr-2" />
                Education
              </h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Jadavpur University (2020–2024)</p>
                <p className="text-slate-400">B.E. in Computer Engineering</p>
                <p className="text-slate-400">CGPA: 7.6</p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                <MapPin className="inline mr-2" />
                Location
              </h3>
              <p className="text-lg">Kolkata, India</p>
              <p className="text-slate-400">Available for remote work worldwide</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                <Target className="inline mr-2" />
                Career Focus
              </h3>
              <p className="text-slate-300">
                Transitioning from full-stack development to AI/ML engineering, combining practical development
                experience with cutting-edge machine learning expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
