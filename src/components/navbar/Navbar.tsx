import { Link } from 'react-router-dom'
import { House, List } from '@phosphor-icons/react'

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white text-blue-600 rounded-lg p-2">
              <House size={32} weight="fill" />
            </div>
            <span className="text-2xl font-bold">Farmácia Legal 💊</span>
          </Link>

          {/* Menu */}
          <div className="flex gap-6 items-center">
            <Link 
              to="/home" 
              className="hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
            >
              Home
            </Link>
            <Link 
              to="/categorias" 
              className="hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
            >
              Categorias
            </Link>
            <Link 
              to="/cadastrarcategoria" 
              className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition duration-300"
            >
              Cadastrar Categoria
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar