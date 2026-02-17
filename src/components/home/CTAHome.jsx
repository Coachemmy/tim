/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import { new13 } from "../../assets";

const CTAHome = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${new13})` }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>

      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#65a7b2]/20 blur-xl animate-float-slow"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full bg-[#FFBE0B]/20 blur-xl animate-float-medium"></div>

      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl mx-auto text-white">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 drop-shadow-lg"
            style={{
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            Reach Out to Girls
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Improving the well-being of girls
            through Education, Empowerment and Leadership, and Health
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-[#292496] px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
              Support a Girl
            </Link>
          </div>

          <div onClick={scrollToContent} className="mt-28 cursor-pointer group">
            <p className="font-extrabold text-sm opacity-70 group-hover:opacity-100 transition-opacity">
              Discover our impact
            </p>

            <div className="w-6 h-10 mx-auto border-2 border-white rounded-full flex justify-center mt-2 group-hover:border-[#FFBE0B] transition-colors">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-5deg);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CTAHome;
