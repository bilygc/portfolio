import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-cyan-600 hover:text-cyan-700">
                            Hi, I'm Bily.
                            <br className=" hidden :inline-block" />
                            I love to build amazing apps
                        </h1>
                        <p className="mb-8 leading-relaxed">
                        I studied for a degree in computer science at the autonomous university of Sinaloa. graduated 12 years ago. that's how my career as a developer started
                        </p>
                        <div className="flex justify-center" >
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
                    <div className="lg:max-w-md lg:w-full md:w-1/2 w-2/3">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./portadaWeb.jpg"
                    />
                    </div>
                </div>
            </section>
        )
    }
}
