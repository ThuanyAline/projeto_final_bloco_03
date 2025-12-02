import { ShieldCheck, Truck, CreditCard, ShoppingBagOpen } from '@phosphor-icons/react'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Bem-vindo à Farmácia
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sua saúde merece o melhor cuidado. Encontre medicamentos, 
            produtos de higiene e muito mais com qualidade e preços justos.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg">
            Ver Produtos
          </button>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Por que escolher nossa farmácia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBagOpen size={32} className="text-blue-600" weight="fill" />
              </div>
              <h3 className="text-xl font-bold mb-2">Variedade</h3>
              <p className="text-gray-600">
                Milhares de produtos disponíveis
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={32} className="text-green-600" weight="fill" />
              </div>
              <h3 className="text-xl font-bold mb-2">Segurança</h3>
              <p className="text-gray-600">
                Produtos certificados e seguros
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={32} className="text-purple-600" weight="fill" />
              </div>
              <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">
                Receba em casa rapidamente
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={32} className="text-orange-600" weight="fill" />
              </div>
              <h3 className="text-xl font-bold mb-2">Facilidade</h3>
              <p className="text-gray-600">
                Várias formas de pagamento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-xl mb-8">
            Explore nossas categorias e encontre tudo o que precisa
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300">
            Explorar Categorias
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home