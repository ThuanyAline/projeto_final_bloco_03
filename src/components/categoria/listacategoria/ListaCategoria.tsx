import { useEffect, useState } from "react"
import CardCategoria from "../cardcategoria/CardCategoria"
import type { Categoria } from "../../../models/Categoria"
import { buscar } from "../../../services/Service"
import { SyncLoader } from "react-spinners"

function ListaCategoria() {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [categorias, setCategorias] = useState<Categoria[]>([])

  async function buscarCategorias() {
    try {

      setIsLoading(true)

      await buscar('/categorias', setCategorias)

    } catch (error: any) {
      alert('Erro ao carregar as categorias!')
      console.log(error)

    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])

  return (
    <>
        {isLoading && (
                <div className="flex justify-center w-full h-full py-8">
                    <SyncLoader color="#3800d1ff" size={32} />
                </div>
            )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">

          {
            (!isLoading && categorias.length) === 0 && (
              <span className="text-3xl text-center my-8 font-bold">
                Nenhuma categoria foi encontrada!
              </span>
            )
          }

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategoria