import { Link } from "react-router-dom";
import {
  board3,
  reach12,
  new4,
  board2,
  board1,
  team,
  icon1,
  icon2,
  icon3,
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
  team8,
  team38,
  board4,
  team9,
} from "../assets";

const necTeam = [
  { name: "Chikondi Nkata", role: "National Coordinator", photo: team2 },
  {
    name: "Ngongite Chisiza",
    role: "Deputy National Coordinator",
    photo: team,
  },
  { name: "Samantha Dzikawanda", role: "Programs Coordinator", photo: team1 },
  { name: "Grace Taulo", role: "Deputy Programs Coordinator", photo: team7 },
  { name: "Cytnthia Kumbemba", role: "Finance Officer", photo: team8 },
  { name: "Jessie Mzembe", role: "Regional Coordinator", photo: team5 },
  { name: "Grace Kalua", role: "Regional Coordinator", photo: team4 },
  { name: "Lizzie Chikwembeni", role: "Regional Coordinator", photo: team6 },
  { name: "Thoko Major", role: "Capacity Building Officer", photo: team3 },
];

const operationsTeam = [
  {
    name: "Khudze Sarah",
    role: " Executive Director & Founder ",
    photo: board3,
  },
  { name: "", role: " Technical Leads", photo: icon1 },
  { name: "", role: "Programs Coordinator", photo: icon2 },
  { name: "", role: "Communications Officer", photo: icon3 },
  { name: " Harry Banda", role: "Administrative Officer", photo: team9 },
];

const board = [
  { name: "Mphatso Manda", role: "Board Chairperson", photo: board2 },
  { name: "Malchiel Chipingo", role: "Board Member", photo: board1 },
  { name: "Sarah Kambilinya", role: "Board Member", photo: board4 },
];

const About = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="text-center mb-16 max-w-3xl mx-auto relative">
        <div className="inline-block mb-24"></div>
        <h1
          className="text-4xl md:text-5xl font-normal tracking-wide"
          style={{
            fontWeight: 700,
            color: "#292496",
            letterSpacing: "0.02em",
          }}
        >
          About Reach Out to Girls
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-[#65a7b2] to-[#FFBE0B] mx-auto rounded-full mt-6"></div>

        <p className="text-gray-700 mt-8 leading-relaxed max-w-2xl mx-auto">
          Empowering girls in Malawi since 2020.
        </p>
      </div>

      <section className="py-16 md:py-24 px-4 bg-[#faf9f7]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5">
              <img
                src={team38}
                alt="Our Story"
                className="rounded-2xl shadow-lg border border-[#65a7b2]/20"
              />
            </div>
            <div className="md:w-3/5">
              <h2 className="text-2xl md:text-3xl font-bold text-[#292496] mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Reach Out to Girls (RoG) is a woman-founded, locally-led
                non-profit organisation that was established in 2015, and got
                incorporated with the government of Malawi in 2018 under the
                Companies Act, No 15 of 2013. RoG is committed to empowering
                girls to achieve success and close the gender divide through a
                range of targeted empowerment initiatives.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4">
                These initiatives primarily focus on the girl child and other
                vulnerable groups in her environment, including women, rural
                youth, and women’s groups. The activities of Reach Out to Girls
                revolve around key thematic areas such as STEM-digital skills
                and innovations, educational awareness, women`s health and
                wellness, agri-processing, and business management. The
                organisation believes that by addressing these areas, both
                individually and in an integrated manner based on each
                community’s needs, girls and women can sustainably thrive as
                equals in society
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-8">
            RoG operates in all of Malawi`s educational divisions. The
            day-to-day operations of RoG are managed by 50 young female
            volunteers, a board of directors, and technical project management
            staff. RoG`s volunteers are dispersed throughout Malawi, and
            depending on the initiatives, project management personnel provide
            support. This enables RoG to operate throughout Malawi and utilise a
            multi-sectoral approach to delivering its interventions.
          </p>
        </div>
      </section>

      <section
        className="py-16 md:py-24 px-4"
        style={{ backgroundColor: "#f0f9ff" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-normal"
              style={{
                fontWeight: 700,
                color: "#292496",
              }}
            >
              A Warm Welcome
            </h2>
            <div className="w-20 h-1 bg-[#65a7b2] mx-auto rounded-full mt-3"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/3 text-gray-700 leading-relaxed">
              <p>
                I`m happy to welcome you to Reach Out to Girls, a community
                dedicated to empowering girls, women and vulnerable groups to
                reach their full potential. At Reach Out to Girls, we believe
                that every girl deserves the opportunity to thrive. That`s why
                we focus on three key pillars: Girl Education: We champion
                access to quality education for girls because education unlocks
                a world of possibilities. By providing resources and support, we
                help girls develop their knowledge, skills, and confidence.
              </p>

              <p className="mt-4">
                Women Empowerment & Leadership: We empower women to become
                leaders in their communities and navigate their personal and
                professional lives with strength. We provide mentorship,
                training programs, and opportunities to connect with other
                inspiring women.
              </p>

              <p className="mt-4">
                Women`s Health: We believe access to healthcare, including
                education on sexual and reproductive health, is essential for a
                woman`s well-being. We offer resources and support to ensure
                women understand their health and can make informed decisions.
              </p>
            </div>
            <div className="md:w-1/3">
              <img
                src={board3}
                alt="Welcome"
                className="rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-[#fffbeb]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-2/5">
              <img
                src={reach12}
                alt="Performance"
                className="w-full h-96 object-cover rounded-2xl shadow-lg border border-[#FFBE0B]/30"
              />
            </div>
            <div className="md:w-3/5">
              <h2 className="text-2xl md:text-3xl font-bold text-[#292496] mb-6">
                Organisation Performance Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Between January and September 2024, Reach Out to Girls achieved
                significant milestones in empowering girls across Malawi. We
                co-facilitated a transformative Girl`s Retreat in Zomba,
                showcased our work at the ICTAM Expo with UNDP Malawi
                sponsorship, and celebrated the selection of our mentees to
                public universities.
              </p>{" "}
              <p className="mt-4">
                Additionally, our Beautiful Minds Scholars successfully passed
                their JCE exams, and we conducted impactful menstrual hygiene
                initiatives, reaching over 500 girls. These efforts underscore
                our commitment to education, health, and leadership for girls in
                Malawi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-normal text-center mb-16"
            style={{
              fontWeight: 700,
              color: "#292496",
            }}
          >
            Vision & Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-8 md:p-16 rounded-2xl border"
              style={{ backgroundColor: "#f8fbfd" }}
            >
              <h3 className="text-xl font-bold text-[#292496] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                Our vision is to nurture a society where girls and women thrive
                as equals, equipped with digital skills that empower them to
                realize their potential and contribute meaningfully to their
                communities.
              </p>
            </div>
            <div
              className="p-8 md:p-16 rounded-2xl border "
              style={{ backgroundColor: "#f0f9ff" }}
            >
              <h3 className="text-xl font-bold text-[#292496] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                Our mission is to empower girls, women and rural youths through
                targeted initiatives in STEM-digital skills, educational
                awareness, women’s health and wellness, agri-processing, and
                business management. Through these targeted initiatives Reach
                Out to Girls aim to significantly reduce gender divide and
                create pathways for sustainable growth and equality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-[#faf9f7]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5">
              <img
                src={new4}
                alt="Objectives"
                className="rounded-2xl shadow-md"
              />
            </div>
            <div className="md:w-3/5">
              <h2 className="text-2xl md:text-3xl font-bold text-[#292496] mb-6">
                Our Objectives
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Being an active player in eliminating all forms of abuse that
                  girl children and vulnerable groups face or are prone to.
                </li>
                <li>
                  Provide girls, women and vulnerable groups with access to
                  quality education and digital literacy programs, equipping
                  them with STEM-related skills and knowledge to bridge the
                  gender divide
                </li>
                <li>
                  Providing leadership training and opportunities to girls and
                  women to increase proportion of women in decision making
                  positions
                </li>
                <li>
                  Promoting Women`s Health through targeted actions in Sexual
                  and reproductive health and rights (SRHR) and Menstrual
                  Hygiene Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-[#f0f9ff]">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-normal mb-4"
            style={{
              fontWeight: 700,
              color: "#292496",
            }}
          >
            Meet the Board
          </h2>
          <div className="w-20 h-1 bg-[#65a7b2] mx-auto rounded-full mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
            {board.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-40 md:w-72 h-40 md:h-72 rounded-full overflow-hidden border-2 border-[#65a7b2]/30 shadow-md">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium text-[#292496] text-sm mt-3">
                  {member.name}
                </p>
                <p className="text-gray-600 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 md:gap-60">
            <div>
              <h3 className="text-2xl font-bold text-[#292496] text-center mb-8 pb-4 border-b border-[#65a7b2]/30">
                <h2
                  className="text-3xl md:text-4xl font-normal mb-4"
                  style={{
                    fontWeight: 700,
                    color: "#292496",
                  }}
                >
                  National Executive Committee
                </h2>
                <div className="w-20 h-1 bg-[#65a7b2] mx-auto rounded-full mb-12"></div>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                {necTeam.map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-[#65a7b2]/30 shadow-md">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-medium text-[#292496] text-sm mt-2">
                      {member.name}
                    </p>
                    <p className="text-gray-600 text-xs text-center">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#292496] text-center mb-8 pb-4 border-b border-[#65a7b2]/30">
                <h2
                  className="text-3xl md:text-4xl font-normal mb-4"
                  style={{
                    fontWeight: 700,
                    color: "#292496",
                  }}
                >
                  Operations Team
                </h2>
                <div className="w-20 h-1 bg-[#65a7b2] mx-auto rounded-full mb-12"></div>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                {operationsTeam.map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-[#65a7b2]/30 shadow-md">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-medium text-[#292496] text-sm mt-2">
                      {member.name}
                    </p>
                    <p className="text-gray-600 text-xs text-center">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#292496] text-center">
        <Link
          to="/donate"
          className="inline-block bg-white text-[#292496] px-8 py-4 animate-bounce rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 text-lg shadow-md"
        >
          Support Our Work
        </Link>
      </section>
    </div>
  );
};

export default About;
