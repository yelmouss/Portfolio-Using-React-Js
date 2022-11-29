import Typed from 'react-typed';
import { TechData } from "../data/Tech";
// import { ProjectsData } from "../data/Projects";
import Carousel from 'react-bootstrap/Carousel';
// import Card from 'react-bootstrap/Card';
// import Figure from 'react-bootstrap/Figure';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);
import React from "react";
// import { useState } from 'react';


function Home({ dark, updateDark }) {
    return (
        <>

            <main className={`flex-shrink-0 ${dark ? "" : "home"}`} >
                <div className="container ">
                    <div className={`row p-2 text-center ${dark ? "text-dark" : "text-light"}`}>
                        <div className="col-lg-12 h-100  p-3  text-center">

                            <h1 className={`fw-bolder fs-2`}>
                                <Typed
                                    strings={['I\'am Yass']}
                                    typeSpeed={50}
                                    showCursor={false}
                                />
                                <br />
                            </h1>
                            <img src="Geek.png" alt="Geek" width="100"
                                    height="100"
                                    className="d-inline-block align-top"
                                />

                            <h2 className={`fw-bolder fs-1`}>
                                
                                <Typed
                                    showCursor={false}
                                    strings={[
                                        ' Web developer 💻',
                                        ' Web Designer 🖌',
                                        'FullStack Web Developer 💻']}
                                    typeSpeed={60}
                                    backSpeed={70}
                                />
                            </h2>
                            <hr />

                            <h1 className={` fs-5 fw-bolder text-center`}>
                                <Typed
                                    strings={['From Morocco 🇲🇦']}
                                    typeSpeed={50}
                                    showCursor={false}
                                />
                                <br />
                            </h1>
                        </div>
                        <div className="container col-10 col-lg-6">
                            <h1 className={`fw-bolder fs-2`}>
                                <Typed
                                    showCursor={false}
                                    strings={['Welcome, Bienvenue, مرحبا  😎']}
                                    typeSpeed={40}
                                /></h1>
                            <br />
                            <h2 className='text-dark text-center bg-light p-2 border border-dark rounded'>
                                <Typed
                                    strings={['I master this technologies🖥']}
                                    typeSpeed={80}
                                    showCursor={false}
                                />
                            </h2>
                            <br />

                            <div className="row">
                                <div className="col">
                                    <Carousel >
                                        {TechData.map((item, i) =>
                                            <Carousel.Item interval={5000} key={i} className=' text-center'>
                                                <div className={`card mb-5 text-center p-2  ${dark ? "bg-transparent" : " text-dark"}`}>
                                                    <img className="img-petite container  col-5 col-lg-3 rounded"
                                                        width={100}
                                                        height={100}
                                                        alt="ProjectImage"
                                                        src={item.image}
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="card-title"> {item.title} </h5>
                                                        <a href="/" className="btn btn-light">Go to Doc</a>
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )}
                                    </Carousel>
                                </div>
                                <div className="col-12">
                                    <h2 className='fs-4'>
                                        <Typed
                                            strings={['Through this website, I share with you the demonstrations and projects on which I work']}
                                            typeSpeed={80}
                                            showCursor={false}
                                        />
                                    </h2>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;













