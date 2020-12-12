import React from "react";
import loadingGif from "../assets/gif/loadingcat.gif";

export default function Loader() {
    return (
        <main className="bg-gray-200 min-h-screen min-w-screen p-12 flex justify-center">
            <div>
                <img
                    src={loadingGif}
                    alt="Spinning Cat"
                    className="w-128 h-128"
                />
                <h1 className="text-center text-5xl fancy">Loading ...</h1>
            </div>
        </main>
    );
}
