import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Smartphone from "./pages/Smartphone"
import Tablet from "./pages/Tablet"
 
export default function App() {
  return (
    // <> </> อันนี้เขาเรียก React.Fragment
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/wowwowwow" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/product" element={ <Product /> } />
          <Route path="/product/smartphone" element={ <Smartphone /> } />
          <Route path="/product/tablet" element={ < Tablet /> } />    
        </Routes>
      </BrowserRouter>
    </>
  )
}