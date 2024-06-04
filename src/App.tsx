import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Route>
    </Routes>
    </>
  )
}
