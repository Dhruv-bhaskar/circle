import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-full border border-cyan-400 flex items-center justify-center bg-cyan-500/10">
                <span className="text-cyan-400 font-bold text-xl">
                  C
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-widest text-white">
                CIRCLE
              </h2>
            </div>

            <p className="text-slate-400 mt-4 max-w-sm">
              Private real-time conversations with the people who matter most.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-14">

            <div>
              <h3 className="font-semibold text-white mb-3">
                Product
              </h3>

              <div className="flex flex-col gap-2 text-slate-400">
                <a href="#features" className="hover:text-cyan-400 transition">
                  Features
                </a>

                <a href="#cta" className="hover:text-cyan-400 transition">
                  Get Started
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">
                Account
              </h3>

              <div className="flex flex-col gap-2 text-slate-400">

                <Link to="/login" className="hover:text-cyan-400 transition">
                  Login
                </Link>

                <Link to="/signup" className="hover:text-cyan-400 transition">
                  Signup
                </Link>

              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Circle. Built for real conversations.
          </p>

          <div className="flex gap-3">

            <span className="badge badge-outline border-cyan-500 text-cyan-400">
              Real-Time
            </span>

            <span className="badge badge-outline border-cyan-500 text-cyan-400">
              Private
            </span>

            <span className="badge badge-outline border-cyan-500 text-cyan-400">
              Fast
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;