import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
    return (
        <>
            <div>About</div>
            <Link to={"alamat"}>Alamat</Link>
            <Link to={"email"}>Email</Link>
            <Outlet />
        </>
    );
}

export default About;
