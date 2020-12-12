import React from "react";
import loadingGif from "../assets/gif/loadingcat.gif";
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="bg-gray-200 min-h-screen min-w-screen p-12 flex-col content-center">
            <div className="relative mx-auto">
                <img
                    src={loadingGif}
                    alt="Spinning Cat"
                    className="w-128 h-128 mx-auto mb-10"
                />
            </div>
            <div className="relative mx-auto">
                <h1 className="text-center text-2xl fancy">
                    Uh oh! Space cat couldn't find what you were looking for.{" "}
                    <br />
                    <NavLink to="/" className="text-blue-600">
                        Click here to be redirected to the home page.
                    </NavLink>
                </h1>
            </div>
        </main>
    );
}
