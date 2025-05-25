export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-sky-50 via-white to-red-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-red-800 mb-4">
            🚀 About Our Smart Loan Platform
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A transformative{" "}
            <span className="font-semibold text-red-700">
              AI-driven loan eligibility system
            </span>{" "}
            designed to make credit more accessible, efficient, and transparent.
            Developed by a team of passionate undergraduates, it blends
            technology and usability to serve the needs of modern banking in Sri
            Lanka.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 place-items-center">
            {[
              {
                icon: "💬",
                title: "Conversational Chatbot",
                desc: "Delivers instant responses on loan questions with intelligent document-based and user-specific dialogue support.",
              },
              {
                icon: "📈",
                title: "Predictive Credit Engine",
                desc: "Applies regression models to recommend loan amounts using secure financial data insights.",
              },
              {
                icon: "🔍",
                title: "Smart Financing Advisor",
                desc: "Guides users toward alternatives like asset-based loans, with advanced ML-powered suggestions.",
              },
            ].map(({ icon, title, desc }, idx) => (
              <div
                key={idx}
                className="bg-white border border-red-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 text-center flex flex-col items-center"
              >
                <div className="text-4xl mb-4 text-red-600">{icon}</div>
                <h4 className="text-lg font-bold text-red-800 mb-2">{title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
