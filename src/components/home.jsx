import Typed from 'react-typed';
import { TechData } from "../data/Tech";
import { ProjectsData } from "../data/Projects";
import Carousel from 'react-bootstrap/Carousel';
// import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);


function Home() {
    return (
        <>


            <main className="flex-shrink-0  home">
                <div className="container ">

                    <div className="row p-2 text-light   text-center">

                        <div className="col-lg-12 h-100  p-2  text-center">

                            <h1 className='text-light fs-1 fw-bolder p-2'>
                                <Typed
                                    strings={['I\'am Yass 👨‍💻']}
                                    typeSpeed={50}
                                    showCursor={false}
                                />
                                <br />
                            </h1>
                            <h2 className='fw-bolder  p-2'>
                                <Typed
                                    showCursor={false}
                                    strings={[
                                        ' Web developer 💻',
                                        ' Web Designer 🖌',
                                        ' FullStack Web Developer 💻']}
                                    typeSpeed={60}
                                    backSpeed={70}
                                />
                            </h2>
                            <hr />
                            <h1 className='text-light fs-5 fw-bolder text-center'>
                                <Typed
                                    strings={['From Morocco 🇲🇦']}
                                    typeSpeed={50}
                                    showCursor={false}
                                />
                                <br />
                            </h1>

                        </div>

                        <div className="container col-10 col-lg-6">
                            <h1 className="mt-5  p-2"> <Typed
                                showCursor={false}
                                strings={['Welcome, Bienvenue, مرحبا  😎']}
                                typeSpeed={40}
                            /></h1>
                            <br />
                            <h2 className='text-light text-center bg-light p-2 border border-dark rounded'>
                                <Typed
                                    strings={['I master this technologies🖥']}
                                    typeSpeed={80}
                                    showCursor={false}
                                />
                            </h2>
                            <br />
                            <Carousel>
                                {TechData.map((item, i) =>
                                    <Carousel.Item interval={5000} key={i} className=' text-center'>
                                        <div className="card mb-5 text-center bg-transparent">
                                            
                                            <img  className="img-petite container  col-5 col-lg-3"
                                                width={100}
                                                height={100}
                                                alt="ProjectImage"
                                                src={item.image}
                                                />                                             
                                                <div className="card-body">
                                                    <h5 className="card-title"> {item.title} </h5>                                                   
                                                    <a href="/" className="btn btn-primary">Go to Doc</a>
                                                </div>
                                             
                                        </div>
                                        {/* <Figure className='text-center'>
                                            <Figure.Image
                                                className="imgFigure"
                                                width={150}
                                                height={150}
                                                alt="Project-Image"
                                                src={item.image}
                                            />
                                            <Figure.Caption>
                                                {item.title}
                                            </Figure.Caption>
                                            <Figure.Caption>
                                                La documentation ici     {item.doc}

                                            </Figure.Caption>
                                        </Figure> */}
                                    </Carousel.Item>
                                )}
                            </Carousel>
                        </div>

                    </div>


                </div>
            </main>
        </>
    );
}


export default Home;













