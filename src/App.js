import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alamat from "./components/Alamat";
import Contact from "./components/Contact";
import Email from "./components/Email";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import DetailPost from "./components/posts/DetailPost";
import Post from "./components/posts/Post";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />}>
                    <Route index element={<Alamat />} />
                    <Route path="alamat" element={<Alamat />} />
                    <Route path="email" element={<Email />} />
                </Route>
                <Route path="contact" element={<Contact />} />
                <Route path="posts" element={<Post />}>
                    <Route path=":id" element={<DetailPost />} />
                </Route>
                <Route path="single/:id" element={<DetailPost />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
