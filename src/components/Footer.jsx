function Footer() {
    return (
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Mehedi Hasan. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
export default Footer