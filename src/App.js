import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alamat from "./components/Alamat";
import Contact from "./components/Contact";
import Email from "./components/Email";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />}>
                    <Route path="alamat" element={<Alamat />} />
                    <Route path="email" element={<Email />} />
                </Route>
                <Route path="contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
