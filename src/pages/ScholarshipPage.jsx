import { Link } from "react-router-dom";
import { face4, new12, new15, } from "../assets";

const ScholarshipPage = () => {
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
          Beautiful Minds Scholarship
        </h1>
        <div className="w-20 h-1 bg-[#65a7b2] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-700 text-lg max-w-md mx-auto leading-relaxed">
          Education is a powerful tool for breaking the cycle of poverty and
          creating a pathway to a brighter future.
        </p>
        <div className="flex justify-center mb-12 mt-8">
          <img
            src={new12}
            alt="Beautiful Minds Scholarship"
            className="w-[350px] md:w-[500px] h-fit object-contain border-2 border-[#65a7b2] rounded-lg"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-10 text-gray-700">
        <div className="bg-[#f8fbfd] border-l-4 border-[#65a7b2] p-6 rounded-r-lg">
          <p className="mb-4">
            In Malawi, many bright and promising girls face significant
            financial barriers that prevent them from accessing quality
            education. To address this, our{" "}
            <strong>Beautiful Minds Scholarship</strong> initiative sponsors
            talented yet underprivileged girls from rural community day
            secondary schools.
          </p>
          <p className="mb-4">
            We cover school fees, provide essential learning materials, and
            offer ongoing mentorship to help them achieve their goals.
          </p>
          <p>
            One standout beneficiary,{" "}
            <strong>Trinity Ben from Nsipe CDSS</strong>, consistently ranks in
            the top three of her class — a testament to what’s possible when
            potential meets opportunity.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#292496] mb-4 text-center">
            Our Objectives
          </h2>
          <div className="bg-white border border-[#65a7b2]/20 rounded-xl p-6">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Provide financial support for school fees and educational
                materials to bright girls from less privileged backgrounds.
              </li>
              <li>
                Mentor and guide these girls, helping them set and achieve
                academic and personal goals.
              </li>
              <li>
                Empower girls through education, fostering their personal and
                professional development.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#292496] mb-4 text-center">
            Monitoring & Academic Performance
          </h2>

          <p className="leading-relaxed mb-4">
            Regular monitoring is conducted for all 13 girls currently on
            scholarship to ensure they receive timely support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#f0f9ff] border-l-4 border-[#4ECDC4] p-4 rounded-r-lg">
              <h3 className="font-bold text-[#292496] mb-2">✅ Success</h3>
              <p>
                Overall, scholarship recipients have shown satisfactory JCE
                performance, with most excelling academically.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <h3 className="font-bold text-yellow-800 mb-2">⚠️ Challenge</h3>
              <p>
                Some girls are underperforming due to lack of essential learning materials.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#292496] mb-6 text-center">
            Scholars in Focus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[ face4, new15].map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-[#65a7b2]/20 shadow-sm"
              >
                <img
                  src={img}
                  alt={`Scholarship moment ${idx + 1}`}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#f8fbfd] border-l-4 border-[#FFBE0B] p-6 rounded-r-lg">
          <h2 className="text-xl font-bold text-[#292496] mb-3">
            Join Us in Empowering Scholars
          </h2>
          <p className="mb-4">
            The Beautiful Minds Scholarship has transformed lives — but
            challenges remain. We are raising funds to purchase textbooks for
            the girls at Chisambe CDSS so they too can thrive.
          </p>
          <p>
            Your support ensures that <b>no girl is left behind</b> because of
            poverty.
          </p>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/donate"
            className="inline-block bg-[#292496] text-white animate-bounce px-8 py-3.5 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 text-lg shadow-md"
          >
            Provide Textbooks Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;
