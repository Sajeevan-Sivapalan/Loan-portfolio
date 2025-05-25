const tools = [
  { name: "React", icon: "⚛️", description: "Frontend UI development" },
  { name: "Tailwind CSS", icon: "🎨", description: "Modern utility-first CSS" },
  { name: "TypeScript", icon: "🧠", description: "Static typing for JavaScript" },
  { name: "Python", icon: "🐍", description: "AI/ML backend services" },
  { name: "TensorFlow", icon: "🧮", description: "Model training & evaluation" },
  { name: "HuggingFace Transformers", icon: "🤗", description: "LLM fine-tuning & inference" },
  { name: "Firebase", icon: "🔥", description: "NoSQL database for analytics" },
  { name: "FastAPI", icon: "⚡", description: "Lightweight Python backend" },
  { name: "Vite", icon: "🚀", description: "Blazing fast dev server for React" },
  { name: "MySQL", icon: "🗄️", description: "Relational database management for structured financial data" },
  { name: "GitHub Actions", icon: "🔁", description: "Automation workflows for building, testing, deploying" },
  { name: "Figma", icon: "🎨", description: "UI/UX design and prototyping for the system’s frontend and user workflows" }, 
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-gradient-to-tr from-red-100 via-white to-red-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-red-800 mb-16">🧰 Technology Stack</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-xl shadow-lg border-l-4 border-red-500 p-6 hover:shadow-xl hover:border-red-500 transition duration-300"
            >
              <div className="text-4xl text-red-600">{tool.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-red-800 mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-600 leading-snug">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
