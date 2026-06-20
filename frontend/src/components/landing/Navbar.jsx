import { Link } from "react-router";
import BorderAnimatedContainer from "../BorderAnimatedContainer";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between">

          {/* LOGO */}

          <BorderAnimatedContainer className="rounded-full">
            <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">

              <span className="text-cyan-400 font-bold text-lg tracking-widest">
                C
              </span>

            </div>
          </BorderAnimatedContainer>

          {/* NAME */}

          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <h1 className="text-white text-2xl font-bold tracking-[8px]">
              CIRCLE
            </h1>
          </div>

          {/* BUTTONS */}

          <div className="flex gap-3">

            <Link
              to="/login"
              className="btn btn-ghost text-slate-300 hover:text-white"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="btn bg-cyan-500 hover:bg-cyan-400 border-none text-white"
            >
              Get Started
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;