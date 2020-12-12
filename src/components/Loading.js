import React from "react";
import loadingGif from "../assets/gif/loadingcat.gif";

export default function Loader() {
    return (
        <main className="bg-gray-200 min-h-screen p-12 justify-items-center">
            <img src={loadingGif} alt="Spinning Cat" className="w-128 h-128" />
            <h1>Loading ...</h1>
        </main>
    );
}
