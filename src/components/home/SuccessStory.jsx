
import { new17, new18 } from "../../assets";

const stars = Array.from({ length: 700 }).map((_, i) => {
  const size = Math.random() * 2 + 0.8;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  const opacity = Math.random() * 0.5 + 0.2;
  const duration = 15 + Math.random() * 25;
  const starColor = Math.random() > 0.7 ? "#FFD700" : "#FFFFFF";

  return (
    <div
      key={i}
      className="absolute rounded-full animate-star-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: starColor,
        opacity: opacity,
        top: `${posY}%`,
        left: `${posX}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${Math.random() * 2}s`,
        boxShadow: `0 0 ${size}px ${starColor}40`,
      }}
    />
  );
});

const SuccessStory = () => {
  const stories = [
    {
      id: 1,
      name: "Beatrice & Faith",
      shortTitle: "University Admissions",
      description:
        "Mentees from Bangwe CDSS were selected to public universities — a testament to the power of mentorship.",
      outcome:
        "Their success has inspired other girls in the program, proving that with support and determination, educational dreams are achievable.",
      image: new18,
    },
    {
      id: 2,
      name: "Ellen",
      shortTitle: "From ICT Learner to IT Student",
      description:
        "A former participant in our ICT Skills for Girls program, Ellen is now pursuing a B.Sc. in Information Technology at MUBAS.",
      outcome:
        "Her journey highlights the long-term impact of our initiatives and serves as a beacon of possibility for current participants.",
      image: new17,
    },
  ];

  return (
    <div
      id="success-stories"
      className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: "#292496" }}
    >     
      <div className="absolute inset-0 pointer-events-none z-0">{stars}</div>
     
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide drop-shadow-md"
            style={{
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-white/70 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Stories */}
        <div className="space-y-16 md:space-y-24">
          {stories.map((story, idx) => (
            <div
              key={story.id}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-10`}
            >
              <div className="flex-shrink-0 w-full max-w-md md:max-w-xs lg:max-w-sm">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-1 border border-white/30 shadow-xl overflow-hidden">
                  <img
                    src={story.image}
                    alt={`${story.name} - ${story.shortTitle}`}
                    className="md:w-[420px] md:h-[400px] rounded-xl"
                  />
                </div>
              </div>
              <div className="bg-white backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/30 max-w-2xl w-full">
                <div className="text-yellow-700 text-sm font-semibold uppercase tracking-wider mb-2">
                  {story.shortTitle}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#000000" }}>
                  {story.name}
                </h3>
                <p className="text-red leading-relaxed mb-4 text-sm md:text-base">
                  {story.description}
                </p>
                <div className="border-l-2 border-cyan-600 pl-4 italic">
                  <p className="text-sm md:text-base">{story.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Star Animation */}
      <style>{`
        @keyframes star-float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(90deg); }
          50% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(180deg); }
          75% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 60 - 30}px) rotate(270deg); }
          100% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 80 - 40}px) rotate(360deg); }
        }
        .animate-star-float {
          animation: star-float ease-in-out infinite;
          will-change: transform;
        }
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');
      `}</style>
    </div>
  );
};

export default SuccessStory;