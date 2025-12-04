import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { Categoria } from "../../../models/Categoria"
import { buscar, atualizar, cadastrar } from "../../../services/Service"
import { ClipLoader, SyncLoader } from "react-spinners"


function FormCategoria() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  const { id } = useParams<{ id: string }>()

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)

    } catch (error: any) {
      alert('Erro ao carregar a categoria!')
      console.log(error)
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id)
    } else {
      setCategoria({
        id: undefined,
        nome: ""
      })
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar('/categorias', categoria, setCategoria)

        alert("Categoria atualizada com sucesso!")
      } catch (error: any) {
        alert('Erro ao atualizar a categoria!')
        console.log(error)
      }

    } else {
      try {
        await cadastrar('/categorias', categoria, setCategoria)

        alert("Categoria cadastrada com sucesso!")
      } catch (error: any) {
        alert('Erro ao cadastrar a categoria!')
        console.log(error)
      }
    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className="container mx-auto flex flex-col items-center py-12">
      <h1 className="my-8 text-center text-4xl font-bold text-slate-700">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome"></label>
          <input
            type="text"
            placeholder="Categoria"
            name="nome"
            className="border-2 border-slate-700 rounded p-2 bg-white"

            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        {/* <button
          className="rounded text-slate-100 bg-indigo-800
                     hover:bg-indigo-950 w-1/2 py-2 mx-auto flex justify-center transition delay-2"
          type="submit"
        >
         {isLoading && (
                <div className="flex justify-center w-full h-full py-8">
                    <SyncLoader color="#226efb" size={32} />
                </div>
            )}
      
        </button> */}
        <button
                className="flex justify-center w-full py-4 mt-4 text-base font-semibold rounded-lg
                text-blue- bg-indigo-300 hover:bg-indigo-200 transition"
                type="submit"
            >
                {isLoading ?
                <ClipLoader
                color="#101828"
                size={24}
                />
                :
                <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                }
            </button>
      </form>
    </div>
  )
}

export default FormCategoria