import { Heart, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Farmácia</h3>
            <p className="text-gray-400">
              Sua saúde e bem-estar em primeiro lugar. 
              Produtos de qualidade com os melhores preços.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/home" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/categorias" className="hover:text-white transition">Categorias</Link></li>
              <li><Link to="/produtos" className="hover:text-white transition">Produtos</Link></li>
              <li><Link to="/contato" className="hover:text-white transition">Contato</Link></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <GithubLogo size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <LinkedinLogo size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Feito com <Heart size={20} weight="fill" className="text-red-500" /> 
            por Você © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer