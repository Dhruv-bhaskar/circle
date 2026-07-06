import { Link } from "react-router";
import BorderAnimatedContainer from "../BorderAnimatedContainer";

function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative max-w-4xl mx-auto">

        <div
          className="
          relative
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          px-8
          py-20
          overflow-hidden
          text-center
        "
        >

          {/* Pink Glow */}
          <div className="absolute -bottom-28 right-10 w-64 h-64 bg-pink-500/10 blur-[90px] rounded-full" />

          {/* Cyan Glow */}
          <div className="absolute -top-24 left-20 w-52 h-52 bg-cyan-500/10 blur-[80px] rounded-full" />

          <div className="relative z-10">
            

            <h2 className="text-5xl font-bold text-white">
              Ready to Join
              <span className="text-cyan-400"> Your Circle?</span>
            </h2>

            <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-8">
              Create your account and start chatting instantly with
              friends, share memories and stay connected with the
              people who matter the most.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">

              <Link
                to="/signup"
                className="btn bg-cyan-500 hover:bg-cyan-400 border-none text-white px-8"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="btn btn-outline border-slate-600 text-white hover:bg-blue-200/20 hover:text-white"
              >
                Login
              </Link>

            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-10">

              <div className="badge badge-outline badge-info px-4 py-4">
                Realtime
              </div>

              <div className="badge badge-outline badge-info px-4 py-4">
                Private
              </div>

              <div className="badge badge-outline badge-info px-4 py-4">
                Image Sharing
              </div>

              <div className="badge badge-outline badge-info px-4 py-4">
                Secure
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTASection;