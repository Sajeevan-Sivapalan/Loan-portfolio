export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-red-800 leading-tight mb-6">
            Smarter Loan with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Predictive Intelligence
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-lg">
            Revolutionizing loan approvals using machine learning, and AI chatbots. Discover a faster, fairer, and smarter financial experience with QuickLoan.
          </p>
          <a
            href="#about"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md hover:shadow-xl"
          >
            🚀 Get Started
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfT7D77O7iEKvHQFSY__PgUkxaJ-WkxeHDV4Acsm73-sJsITdZgnnaX9Sl3l6ybhIMMw&usqp=CAU"
            alt="AI Loan System"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl border border-red-200"
          />
        </div>
      </div>
    </section>
  );
}