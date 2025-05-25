const features = [
  {
    title: "AI Chatbot Assistance",
    desc: "Provides intelligent, document-aware responses for loan-related queries. Supports both general inquiries and personalized answers by integrating NLP, RAG, and customer data retrieval."
  },
  {
    title: "Document-Driven Eligibility Check",
    desc: "Analyzes OCR-extracted information from payslips, CRIB reports, and ID documents to evaluate loan eligibility using a logistic regression model with 79% accuracy."
  },
  {
    title: "Credit Limit Prediction",
    desc: "Uses a random forest regression model to recommend personalized loan amounts based on verified financial data, such as income, savings, and credit history."
  },
  {
    title: "Financial Guidance & Alternatives",
    desc: "Offers actionable recommendations for rejected applicants, including collateral-based options, savings plans, and reapplication strategies powered by a high-performing predictive model (R² = 0.98)."
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-red-50 via-white to-red-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-red-700 mb-16">
          ✨ Key Features of the System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border border-red-200 transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-red-600 text-white font-bold rounded-full flex items-center justify-center shadow-sm">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-red-800">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
