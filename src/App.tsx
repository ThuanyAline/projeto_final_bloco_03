import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/pages/home/Home"



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App