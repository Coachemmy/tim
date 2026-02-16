import { Link } from "react-router-dom";
import { new30, new31, reach14, reach17 } from "../assets";

const ICTPage = () => {
  return (
    <div
      className="w-full bg-[#f9feff] py-12 md:py-16 px-4"
      style={{
        backgroundImage: `
      radial-gradient(circle at 10% 20%, rgba(101, 167, 178, 0.03) 1px, transparent 1px),
      radial-gradient(circle at 90% 80%, rgba(41, 36, 150, 0.02) 1px, transparent 1px)
      `,
        backgroundSize: "60px 60px",
      }}
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          style={{ color: "#292496" }}
        >
          ICT & STEM for Girls
        </h1>

        <div className="w-20 h-1 bg-[#65a7b2] mx-auto rounded-full mb-6"></div>

        <p className="text-gray-700 text-lg max-w-md mx-auto leading-relaxed">
          In todays rapidly evolving digital landscape, possessing Information
          and Communication Technology (ICT) skills is crucial for personal and
          professional success.
        </p>
        <div className="flex justify-center mb-12 mt-8">
          <img
            src={reach14}
            alt="ICT Skills for Girls"
            className="w-[350px] md:w-[500px] h-fit object-contain border-2 border-[#65a7b2] rounded-lg"
          />
        </div>

        <div className="flex justify-center mb-12 mt-4">
        {/* <div className="w-full max-w-3xl">
          <video
            controls
            poster={new31}
            className="w-full rounded-xl shadow-lg"
          >
            <source src={ictvvid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
      </div>
      </div>

      

      <div className="max-w-5xl mx-auto space-y-12 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-[#292496] mb-6 text-center">
            ICT Skills for Girls
          </h2>

          <div className="bg-[#f8fbfd] border-l-4 border-[#65a7b2] p-6 rounded-r-lg mb-8">
            <p className="mb-4">
              Recognizing the growing digital divide and the unique challenges
              faced by girls in Malawi, our organization launched the ICT Skills
              for Girls initiative. This program equips secondary school
              learners and MSCE graduates — particularly those from
              disadvantaged backgrounds — with essential ICT skills to thrive in
              the digital age.
            </p>

            <h3 className="font-bold text-[#292496] mb-2">Objectives:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Bridge the digital divide by providing ICT training to girls
                from disadvantaged backgrounds.
              </li>
              <li>
                Empower girls with skills for education and employment
                opportunities.
              </li>
              <li>
                Enhance self-confidence and self-reliance through technological
                proficiency.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#292496] mb-6 text-center">
            Essentials for Young Women in STEM
          </h2>

          <div className="bg-[#f0f9ff] border-l-4 border-[#4ECDC4] p-6 rounded-r-lg mb-8">
            <p className="mb-4">
              In the modern world, Science, Technology, Engineering, and
              Mathematics (STEM) fields drive innovation and economic growth.
              Yet women — especially in developing countries like Malawi —
              remain underrepresented. Our Essentials for Young Women in STEM
              initiative mentors university students, connects them with
              internships, and enhances their practical skills.
            </p>
            <p className="font-medium mb-3">
              Impact: Over 10,000 young women have benefited from this
              initiative.
            </p>

            <h3 className="font-bold text-[#292496] mb-2">Objectives:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide mentorship to young women pursuing STEM degrees.</li>
              <li>
                Facilitate internships by connecting students with employers.
              </li>
              <li>
                Enhance practical and theoretical STEM skills for career
                success.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-[#292496] mb-6 text-center">
            Digital Futures in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[new30, new31, reach17].map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-[#65a7b2]/20 shadow-sm"
              >
                <img
                  src={img}
                  alt={`ICT/STEM moment ${idx + 1}`}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-[#292496] mb-6 text-center">
            By the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-5 bg-white border border-[#65a7b2]/20 rounded-xl">
              <div className="text-3xl font-bold text-[#292496]">500+</div>
              <div className="text-gray-600">Girls Trained (ICT)</div>
            </div>
            <div className="text-center p-5 bg-white border border-[#65a7b2]/20 rounded-xl">
              <div className="text-3xl font-bold text-[#292496]">10,000+</div>
              <div className="text-gray-600">Women Reached (STEM)</div>
            </div>
            <div className="text-center p-5 bg-white border border-[#65a7b2]/20 rounded-xl">
              <div className="text-3xl font-bold text-[#292496]">85%</div>
              <div className="text-gray-600">Pursue Further Tech Studies</div>
            </div>
          </div>
        </section>
        <section className="text-center mt-12">
          <p className="text-lg mb-6">
            Help us close the digital gender gap — one girl at a time.
          </p>
          <Link
            to="/donate"
            className="inline-block bg-[#292496] text-white px-8 py-3.5 rounded-full animate-bounce font-medium hover:bg-opacity-90 transition-all duration-300 text-lg shadow-md"
          >
            Support Digital Education
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ICTPage;
