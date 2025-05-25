const highlights = [
  {
    title: "AI Chatbot",
    icon: "🤖",
    description:
      "Built with Retrieval-Augmented Generation (RAG), the chatbot delivers instant, accurate responses to user-specific and policy-based loan inquiries.",
  },
  {
    title: "Loan Prediction Models",
    icon: "📈",
    description:
      "Implements Logistic Regression for binary eligibility classification and Random Forest Regression for personalized loan amount prediction.",
  },
  {
    title: "Financial Guidance Engine",
    icon: "💡",
    description:
      "Suggests collateral-based loan alternatives and savings plans with a guidance model achieving R² = 0.98 and MSE ≈ 0.0010.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 bg-gradient-to-br from-red-50 via-white to-red-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-red-700 mb-16">
          📌 Research Highlights
        </h2>

        {/* Centered grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-red-200 p-6 text-center shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-red-600">{item.icon}</div>
                <h3 className="text-lg font-bold text-red-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
