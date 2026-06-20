// components/landing/FeaturesSection.jsx

import {
  ShieldCheck,
  Bell,
  Image,
  Sparkles,
  Volume2,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Private Conversations",
    desc: "Your chats stay secure with JWT authentication and protected APIs.",
  },
  {
    icon: <Image size={28} />,
    title: "Share Images",
    desc: "Send images instantly with Cloudinary-powered uploads.",
  },
  {
    icon: <Bell size={28} />,
    title: "Instant Notifications",
    desc: "Get notified as soon as new messages arrive.",
  },
  {
    icon: <Volume2 size={28} />,
    title: "Typing Sounds",
    desc: "Smooth typing sound effects for a more immersive experience.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Beautiful UI",
    desc: "Modern glassmorphism interface with smooth animations.",
  },
  {
    icon: <Zap size={28} />,
    title: "Realtime Chat",
    desc: "Powered by Socket.IO for lightning-fast messaging.",
  },
];

function FeaturesSection() {
  return (
    <section className="relative py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm">
            Features
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Built for Modern Conversations
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-lg">
            Fast, secure and beautifully designed messaging experience with
            everything you need for seamless communication.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="
              group
              bg-slate-900/40
              backdrop-blur-lg
              border border-slate-700
              rounded-3xl
              p-8
              transition-all
              duration-300
              hover:border-cyan-400/50
              hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(34,211,238,.12)]
            "
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-cyan-500/10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;