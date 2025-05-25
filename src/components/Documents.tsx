const allDocuments = [
  {
    category: "Project Proposal",
    files: [
      { name: "Proposal Report - IT21164644 ", path: "IT21164644 -Project-Proposal.pdf" },
      { name: "Proposal Report - IT21068478", path: "IT21068478-Project-Proposal.pdf" },
      { name: "Proposal Report - IT21191060", path: "IT2191060_Project_Proposal" },
    ],
  },
  {
    category: "Final Reports",
    files: [
      { name: "Final Report - IT21164644 ", path: "IT21164644 _Final-Report.pdf" },
      { name: "Final Report - IT21068478", path: "IT21068478_Final-Report.pdf" },
      { name: "Final Report - IT21191060 ", path: "IT2191060_Final" },
      { name: "Final Group Report", path: "Final_Report-24_25J_257.pdf" },
    ],
  },
  {
    category: "Presentations",
    files: [
      { name: "Proposal Presentation", path: "Proposal_Presentation-24-25J-.pdf" },
      { name: "Progress Presentation 1", path: "Progress_Presentation_1-24-25J-.pdf" },
      { name: "Progress Presentation 2", path: "Progress_Presentation_2-24-25J-.pdf" },
      { name: "Final Presentation", path: "Final_Presentation.pdf" },
    ],
  },
  {
    category: "Research Paper",
    files: [
      { name: "Research Paper", path: "Research_Paper-24-25J-.pdf" },
    ],
  },
];

export default function Documents() {
  return (
    <section id="documents" className="py-24 bg-gradient-to-tr from-red-50 to-red-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-700 mb-16">
          📁 Project Documents
        </h2>

        {allDocuments.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold text-red-800 mb-6 border-b border-red-300 pb-2">
              {section.category}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {section.files.map((file, i) => (
                <div key={i} className="bg-white shadow-lg rounded-xl p-5 border-t-4 border-red-400 hover:border-red-600 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">📄</div>
                    <div className="text-sm font-medium text-gray-800 line-clamp-2">
                      {file.name}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between text-xs text-red-600 font-medium">
                    <a
                      href={`/docs/${file.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      View
                    </a>
                    <a
                      href={`/docs/${file.path}`}
                      download
                      className="hover:underline"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
