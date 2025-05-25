const milestones = [
  {
    title: "Project Topic Assessment",
    date: "July 2024",
    description: "Initial topic assessment document submitted. Included research problem, objectives, and task breakdown.",
    marks: "No marks allocated",
  },
  {
    title: "Project Charter Submission",
    date: "January 2023",
    description: "Finalized topic and submitted project charter including all key aspects of the research.",
    marks: "No marks allocated",
  },
  {
    title: "Project Proposal Presentation",
    date: "August 2024",
    description: "Presented the proposed research to a panel of judges.",
    marks: "Marks Allocation - 6%",
  },
  {
    title: "Project Proposal Report",
    date: "August 2024",
    description: "In-depth analysis and proposed solution submitted as a formal report.",
    marks: "Marks Allocation - 6%",
  },
  {
    title: "Status Document 1",
    date: "May 2023",
    description: "Overview of implementation tasks completed by team members.",
    marks: "Marks Allocation - 1%",
  },
  {
    title: "Progress Presentation 1",
    date: "December 2024",
    description: "Evaluation of 50% completion of the proposed solution.",
    marks: "Marks Allocation - 15%",
  },
  {
    title: "Research Paper Draft",
    date: "February 2025",
    description: "Submitted draft research paper for supervisor review.",
    marks: "Marks Allocation - 10%",
  },
  {
    title: "Final Thesis Submission",
    date: "March 2025",
    description: "Group and individual thesis documents submitted for evaluation.",
    marks: "Marks Allocation - 19%",
  },
  {
    title: "Progress Presentation 2",
    date: "March 2025",
    description: "Evaluation of 90% project completion.",
    marks: "Marks Allocation - 18%",
  },
  {
    title: "Log Book & Status Document 2",
    date: "October 2023",
    description: "Logbook and final implementation tasks summary submitted.",
    marks: "Marks Allocation - 3%",
  },
  {
    title: "Website Assessment",
    date: "May 2025",
    description: "Research website submitted for review.",
    marks: "Marks Allocation - 2%",
  },
  {
    title: "Final Presentation & Viva",
    date: "May 2025",
    description: "Final evaluation of the completed product by judges.",
    marks: "Marks Allocation - 20%",
  },
];

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 bg-gradient-to-br from-sky-50 via-white to-red-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-red-800 mb-16">📌 Project Milestones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 border-l-4 border-red-500 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-red-800 mb-1">{m.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{m.date}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
              </div>
              <div className="mt-4">
                <span className="inline-block text-xs font-semibold bg-red-100 text-red-800 px-3 py-1 rounded-full">
                  {m.marks}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
