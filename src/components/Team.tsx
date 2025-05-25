const team = [
  {
    name: "Pathirathna D N",
    role: "Group Member (IT21164644)",
    email: "it21164644@my.sliit.lk",
    img: "https://ui-avatars.com/api/?name=Pathirathna+D+N&background=8b5cf6&color=fff",
  },
  {
    name: "Hilma M.I.F",
    role: "Group Member (IT21142178)",
    email: "it21142178@my.sliit.lk",
    img: "https://ui-avatars.com/api/?name=Hilma+M+I+F&background=8b5cf6&color=fff",
  },
  {
    name: "P.R.I. Pravean",
    role: "Group Member (IT21191060)",
    email: "it21191060@my.sliit.lk",
    img: "https://ui-avatars.com/api/?name=Pravean+P+R+I&background=8b5cf6&color=fff",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-12">💼 Project Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-purple-200"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-purple-400 mb-4"
              />
              <h3 className="text-lg font-bold text-purple-800">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-sm text-indigo-600 hover:underline mt-2 inline-block"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}