export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-indigo-800 leading-tight mb-6">
            Smarter Lending with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
              Predictive Intelligence
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-lg">
            Revolutionizing loan approvals using machine learning, OCR, and AI chatbots. Discover a faster, fairer, and smarter financial experience with SmartLend AI.
          </p>
          <a
            href="#about"
            className="inline-block bg-indigo-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md hover:shadow-xl"
          >
            🚀 Get Started
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/data-analysis-illustration_114360-903.jpg?w=826&t=st=1700000000~exp=1700003600~hmac=fakehash"
            alt="AI Loan System"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl border border-purple-200"
          />
        </div>
      </div>
    </section>
  );
}