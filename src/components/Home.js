import React from "react";
import image from "../assets/img/forest.jpg";

export default function Home() {
    return (
        <main>
            <img
                src={image}
                alt="Leaves in Background"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center pt-12 lg:pt-64 px-4 h-5">
                <div className="justify-items-center">
                    <h1 className="text-6xl text-white font-bold fancy leading-none text-center mb-4 lg:leading-snug home-name">
                        Hello, I'm Reese.
                    </h1>
                    <p className="text-lg text-white font-bold fancy text-center">
                        I'm a Computer Science Senior who likes to build things
                        using code. Check out my random thoughts or my projects,
                        and reach out if you'd like to work with me.
                    </p>
                </div>
            </section>
        </main>
    );
}
