import React from "react";
import { useParams } from "react-router-dom";

function DetailPost() {
    const params = useParams();
    return (
        <div>
            <h1>Post {params.id}</h1>
            <p>Post {params.id}</p>
        </div>
    );
}

export default DetailPost;
