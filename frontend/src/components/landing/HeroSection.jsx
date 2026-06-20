// components/landing/HeroSection.jsx

import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[85vh] overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl w-full mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm">
            Real Time Messaging Platform
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-bold text-white leading-tight">
            Stay Close
            <br />
            To Your
            <span className="text-cyan-400"> Circle.</span>
          </h1>

          <p className="mt-8 text-slate-400 text-lg max-w-xl leading-relaxed">
            Fast, secure and beautiful conversations built for everyday
            communication. Chat with friends instantly, share images and
            experience real-time messaging without distractions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/signup"
              className="btn bg-cyan-500 hover:bg-cyan-400 border-none text-white px-8"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/login"
              className="btn btn-outline border-slate-600 text-white hover:bg-slate-800"
            >
              Sign In
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full"></div>

            <div className="relative w-[350px] h-[350px] rounded-full border border-cyan-500/20 bg-slate-900/40 backdrop-blur-xl flex items-center justify-center">

              <div className="absolute w-[250px] h-[250px] rounded-full border border-cyan-500/30 animate-pulse"></div>

              <div className="absolute w-[170px] h-[170px] rounded-full border border-cyan-400/40"></div>

              <div className="text-center">

                <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500 flex items-center justify-center mx-auto">

                  <span className="text-cyan-400 text-4xl font-bold">
                    C
                  </span>

                </div>

                <h2 className="text-4xl font-bold tracking-[10px] mt-6 text-white">
                  CIRCLE
                </h2>

                <p className="text-slate-400 mt-3">
                  Connect Beyond Distance
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}