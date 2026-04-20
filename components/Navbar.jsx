export default function Navbar() {
  return (
    <header className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-heading font-bold">Fame</h1>

        <nav className="hidden md:flex gap-8">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-primary text-white px-5 py-2 rounded">
          Get Started
        </button>
      </div>
    </header>
  );
}