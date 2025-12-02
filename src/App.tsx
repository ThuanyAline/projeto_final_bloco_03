
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/pages/home/Home"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categoria/formCategoria.tsx/FormCategoria"
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria"



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/categorias' element={<ListaCategoria />} />
          <Route path='/deletarcategoria/:id' element={<DeletarCategoria />} />
          <Route path='/cadastrarcategoria' element={<FormCategoria />} />
          <Route path='/editarcategoria/:id' element={<FormCategoria />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App