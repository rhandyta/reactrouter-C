import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
    const navigator = useNavigate();
    return (
        <div>
            Contact<button onClick={() => navigator(-1)}>Back</button>
        </div>
    );
}

export default Contact;
