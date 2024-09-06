function Header({ currentSection }) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center sm:space-x-14 space-x-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-semibold hover:text-blue-600 transition-colors duration-300 ${
                    currentSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-800'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }

export default Header