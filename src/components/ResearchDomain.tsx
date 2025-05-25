import { useState } from "react";

const sections = [
  {
    label: "Abstract",
    content: (
      <p className="text-gray-700 leading-relaxed">
        This research presents a machine learning-powered web system to predict loan eligibility and eligible credit limits. It addresses issues in traditional banking such as delays, inefficiencies, and lack of transparency. Key components include: an AI chatbot for personalized loan insights, a document-based prediction module for loan qualification, and a financial literacy tool that offers alternative financing suggestions. The system achieves 79% prediction accuracy and 0.001 MSE for alternate financing models, enhancing both efficiency and financial inclusivity.
      </p>
    ),
  },
  {
    label: "Introduction",
    content: (
      <p className="text-gray-700 leading-relaxed">
        Traditional loan processing systems in Sri Lanka often involve manual steps and static eligibility criteria, leading to inefficiencies, human bias, and limited guidance. This project introduces a predictive system combining ML, and AI to automate and enhance customer interaction, eligibility prediction, and alternative financing. It empowers users and reduces bank workload while aligning with real-time financial insights.
      </p>
    ),
  },
  {
    label: "Research Problem",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        {[{
          title: "🔍 Loan Prediction Bias",
          desc: "Current systems rely on static salary-based rules, ignoring asset-based potential and leading to unfair rejections."
        }, {
          title: "📄 Manual Document Review",
          desc: "Traditional banking workflows require manual checks for payslips, ID documents, and CRIB reports, causing delays."
        }, {
          title: "💬 Lack of Personalized Support",
          desc: "Applicants lack clarity on eligibility and do not receive targeted guidance when rejected."
        }, {
          title: "📉 Low Financial Literacy",
          desc: "Most users are unaware of alternative financing methods, resulting in missed opportunities for loan approval."
        }, {
          title: "📉 Loan Details Accessibility",
          desc: "There is no easy access to loan details for customers, as general inquiries are typically handled via phone calls. Bank staff must manually access internal databases, leading to delays and inefficiencies."
        }].map(({ title, desc }, i) => (
          <div key={i} className="bg-white p-5 rounded-lg shadow-md border border-red-200 hover:shadow-lg transition">
            <h4 className="text-red-700 font-bold mb-2">{title}</h4>
            <p className="text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Objectives",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        {[{
          title: "🤖 AI Chatbot",
          desc: "To assist users with general and personalized loan information using NLP and structured financial documents."
        }, {
          title: "📊 Loan Eligibility Prediction",
          desc: "To develop a data-driven module that uses ML to determine eligibility based on payslips, CRIB, and assets."
        }, {
          title: "💡 Financial Guidance",
          desc: "To offer alternative solutions (collateral-based loans, savings plans) to users rejected under traditional criteria."
        }, {
          title: "📈 Automation",
          desc: "To reduce bank workload and approval time through integrated ML and chatbot workflows."
        }].map(({ title, desc }, i) => (
          <div key={i} className="bg-white p-5 rounded-lg shadow-md border border-red-200 hover:shadow-lg transition">
            <h4 className="text-red-700 font-bold mb-2">{title}</h4>
            <p className="text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function ResearchDomain() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="domain" className="py-24 bg-gradient-to-b from-white via-red-50 to-red-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-red-700 mb-12">
          🧪 Research Summary
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 text-sm rounded-full font-medium transition shadow-sm hover:shadow-md duration-200 ${
                activeTab === index
                  ? "bg-red-600 text-white"
                  : "bg-white text-red-700 border border-red-300 hover:bg-red-100"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-200">
          {sections[activeTab].content}
        </div>
      </div>
    </section>
  );
}