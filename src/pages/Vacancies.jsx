import { Link } from "react-router-dom";

const Vacancies = () => {
  return (
    <div className="py-16 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Volunteer Opportunities
          </h1>
          <p className="text-gray-600 text-lg">
            Join Reach Out to Girls and make a real difference in the lives of girls in Malawi.
          </p>
        </div>

        <div className="bg-[#292496] rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-white mb-6">
            Finance & Financial Administration Assistant (Remote, Voluntary)
          </h2>

          <div className="mb-6">
            <h3 className="font-bold text-lg text-white mb-3">📌 Role Includes:</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Financial record-keeping</li>
              <li>Tracking volunteer contributions & donations</li>
              <li>Assisting with financial documentation & admin</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-lg text-white mb-3">💡 Who Should Apply:</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Experienced in accounting, bookkeeping, or finance admin</li>
              <li>Organized, detail-oriented, and ready to make an impact</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="font-medium text-gray-800">
              📝 <strong>Apply by 27th Feb 2026</strong>
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://forms.gle/NZgZifBovHfvJmtMA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-md transition transform hover:scale-[1.02]"
            >
              Apply Now 
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-white">
          <p>
            Not the right fit? <Link to="/contact" className="text-purple-600 hover:underline">Let us know</Link> — we’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;