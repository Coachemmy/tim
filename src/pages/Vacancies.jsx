// src/pages/Vacancies.jsx

const roles = [
  {
    id: 1,
    title: "Finance & Financial Administration Assistant",
    description: "Join our team to support all financial operations at Reach Out to Girls. This comprehensive role offers hands-on experience in nonprofit financial management.",
    responsibilities: [
      "Maintain accurate financial records for all RoG transactions including donations, expenses, and grants",
      "Monitor and log incoming contributions from volunteers, partners, and individual donors",
      "Prepare financial reports, organize receipts, and support documentation for audits",
      "Ensure transparency and accountability across all financial activities"
    ]
  }
];

const Vacancies = () => {
  return (
    <div className="py-16 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Volunteer Opportunities
          </h1>
          <p className="text-gray-600 text-lg">
            Join Reach Out to Girls and make a real difference in the lives of girls in Malawi.
          </p>
        </div>

        {/* Single Role Card */}
        <div className="space-y-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-[#292496] rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                <h2 className="text-xl md:text-2xl font-bold text-white">{role.title}</h2>
                <span className="bg-white text-black text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
                  Remote · Voluntary
                </span>
              </div>
              
              <p className="text-white mb-4">{role.description}</p>
              
              {/* Responsibilities List */}
              <div className="mb-6">
                <h3 className="font-semibold text-white mb-2">Key Responsibilities:</h3>
                <ul className="list-disc list-inside text-white space-y-1">
                  {role.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 mb-6">
                <p className="font-medium text-gray-800">
                  📝 <strong>Apply by 27th Feb 2026</strong>
                </p>
              </div>

              <div className="text-center">
                <a
                  href="https://forms.gle/NZgZifBovHfvJmtMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#292496] border border-white hover:bg-white hover:text-[#292496] text-white px-6 py-3 rounded-xl font-semibold transition shadow-md"
                >
                  Apply Now 
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Vacancies;