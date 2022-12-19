import React from "react";
import { Link, Outlet } from "react-router-dom";
import DetailPost from "./DetailPost";

function post() {
    return (
        <div>
            <li>
                <Link to={"/single/1"}>Post 1</Link>
            </li>
            <li>
                <Link to={"/single/2"}>Post 2</Link>
            </li>
            <li>
                <Link to={"/single/3"}>Post 3</Link>
            </li>
        </div>
    );
}

export default post;
