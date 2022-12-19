import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigator = useNavigate();
    return (
        <div>
            Home{" "}
            <button onClick={() => navigator("contact", { replace: true })}>
                Contact
            </button>
        </div>
    );
}

export default Home;
