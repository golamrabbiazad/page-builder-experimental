export function Navbar() {
  return (
    <header className="w-full h-6 flex items-center mb-4 mt-8">
      <nav className="mx-auto flex items-center justify-between py-2 text-black gap-8">
        <div className="flex gap-4">
          <h1 className="text-white">logo</h1>
          <ul className="flex items-center gap-2 text-gray-400">
            <li>Services</li>
            <li>Pricing</li>
            <li>Portfolio</li>
            <li>Contact us</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            id="search"
            className="p-2 rounded-full bg-white border border-gray-200 w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 rounded-full p-2 text-white w-full font-medium"
          >
            Register/Login
          </button>
        </div>
      </nav>
    </header>
  );
}
