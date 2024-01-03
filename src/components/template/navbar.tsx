export function Navbar() {
  return (
    <header className="w-[594px] h-12">
      <nav className="flex items-center justify-between py-2 text-black">
        <div className="flex justify-between">
          <div>Logo</div>
          <ul className="flex items-center gap-2">
            <li>Service</li>
            <li>Pricing</li>
            <li>Portfolio</li>
            <li>Contact us</li>
            <li>About us</li>
          </ul>
        </div>
        {/* <div className="flex items-center">
        <div className="w-[100px] h-5">
          <label htmlFor="search">
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="bg-white rounded-full p-4"
            />
          </label>
        </div>
        <div className="w-20 h-5">
          <button className="text-white bg-blue-600 rounded-full p-4">
            Register/Login
          </button>
        </div>
      </div> */}
      </nav>
    </header>
  );
}
