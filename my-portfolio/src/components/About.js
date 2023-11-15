import React from "react";
import { TypeAnimation } from 'react-type-animation';
export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Hi, I'm Ralph.",
                                7000,

                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1.5em', display: 'inline-block' }}
                            repeat={Infinity}
                        />

                        <br className="hidden lg:inline-block" />Software Engineer / Flutter Developer

                    </h1>
                    <p className="mb-8 leading-relaxed">
                        •Proficient in Dart and Flutter, I specialize in building sleek, responsive UIs with widget magic.
                        <br></br>
                        •Connecting the dots with seamless integration for smooth data flow.
                        <br></br>
                        •I thrive on solving coding puzzles with innovation and tenacity.
                    </p>
                    <p className=" leading-relaxed font-bold">
                        Why Flutter?
                    </p>
                    <p className="mb-8">
                        Flutter is my canvas, where ideas come to life with the magic of hot reload, enabling swift iterations for polished applications.
                    </p>

                    <p className=" leading-relaxed font-bold">
                        Let's Build Together:
                    </p>
                    <p className="mb-8">
                        Whether you're a startup or an established business, I'm ready to bring your ideas to life through the lens of Flutter.
                    </p>


                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}