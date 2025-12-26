import React from "react";
import {
  IconYoutube,
  IconInstagram,
  IconCanva,
  IconPinterest,
} from "./Icons";

const CREATIVE_WORK = [
  {
    title: "YouTube – Teaching & Explanations",
    description:
      "Concept-driven teaching videos focused on Mathematics, Science, and problem-solving using simple, visual explanations.",
    platform: "YouTube",
    link: "https://youtube.com/playlist?list=PLeP580VIPr09Dk7J9SY5FED7ESLb3-QnN&si=c5l547kNUEr9YWZd",
    tags: ["Teaching", "Maths", "Science", "Explainers"],
    icon: IconYoutube,
  },
  {
    title: "Canva – Educational Designs",
    description:
      "Designed presentations, posters, and visual learning materials to simplify complex academic and technical concepts.",
    platform: "Canva",
    link: "https://linktr.ee/mahesh18bangadkar",
    tags: ["PPT Design", "Posters", "Visual Learning"],
    icon: IconCanva,
  },
  {
    title: "Instagram – Learning & Motivation",
    description:
      "Short-form educational and motivational content focused on self-growth, learning discipline, and student life.",
    platform: "Instagram",
    link: "https://www.instagram.com/the_real_mahesh",
    tags: ["Reels", "Education", "Motivation"],
    icon: IconInstagram,
  },
  // {
  //   title: "Pinterest – Visual Inspiration",
  //   description:
  //     "Curated boards for educational visuals, presentation ideas, UI references, and creative learning layouts.",
  //   platform: "Pinterest",
  //   link: "https://www.pinterest.com/YOUR_PROFILE",
  //   tags: ["Visual Ideas", "Layouts", "Design"],
  //   icon: IconPinterest,
  // },
].filter(item => item.link);

const CreativeWork: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Creative <span className="text-neon-DEFAULT">Work</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CREATIVE_WORK.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-neon-DEFAULT/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-neon-DEFAULT/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-6 h-6 text-neon-DEFAULT" />
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-DEFAULT transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-neon-glow bg-neon-dark px-2 py-1 rounded border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-400 text-sm flex-grow leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors text-sm"
                  >
                    View on {item.platform} →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreativeWork;
