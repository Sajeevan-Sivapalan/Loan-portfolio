export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-cyan-600 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">© {new Date().getFullYear()} QuickLoan</p>
          <p className="text-cyan-100">Empowering smarter financial decisions through AI & Automation</p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
          <a href="#about" className="hover:underline text-cyan-100">About</a>
          <a href="#domain" className="hover:underline text-cyan-100">Research</a>
          <a href="#team" className="hover:underline text-cyan-100">Team</a>
          <a href="#contact" className="hover:underline text-cyan-100">Contact</a>
        </div>
      </div>
    </footer>
  );
}
