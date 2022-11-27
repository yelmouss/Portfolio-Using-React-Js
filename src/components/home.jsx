import Typed from 'react-typed';
import { TechData } from "../data/Tech";
import { ProjectsData } from "../data/Projects";


import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import Figure from 'react-bootstrap/Figure';

function Home() {
    return (
        <>
            <main className="flex-shrink-0 mb-5 home">
                <div className="container mt-2">

                    <div className="row p-2 mb-5">

                        <div className="col-lg-6 h-100">
                            <h1 className="mt-5"> <Typed
                                showCursor={false}
                                strings={['Welcome, Bienvenue, مرحبا  😎']}
                                typeSpeed={40}
                            /></h1>
                            <br />
                            <h1 className='text-dark fs-1 fw-bolder'>
                                <Typed
                                    strings={['I\'am Yass 👨‍💻']}
                                    typeSpeed={50}
                                    showCursor={false}
                                />
                                <br />
                            </h1>
                            <h2 className='text-danger'>
                                <Typed
                                    showCursor={false}
                                    strings={[
                                        ' Web developer 💻',
                                        ' Web Designer 🖌',
                                        ' FullStack Web Developer 💻 🔥 🖥']}
                                    typeSpeed={60}
                                    backSpeed={70}
                                />
                            </h2>
                            <hr />
                            <h1 className='text-dark fs-5 fw-bolder text-center'>
                                <Typed
                                    strings={['From Morocco 🇲🇦']}
                                    typeSpeed={50}
                                    showCursor={false}
                                />
                                <br />
                            </h1>

                        </div>

                        <div className="col-lg-6 container ">
                            <div className="tablet col-11">
                                <div className="content ">
                                    <iframe src="/strml" frameBorder="0" title='strml' className='col-12 p-2 h-100' ></iframe>
                                </div>
                            </div>
                        </div>


                    </div>




                    {/* {ProjectsData.map((item, i) =>
                        <li key={i}>{item.title}</li>
                    )} */}


                    <div className="row">


                        <div className="col-lg-6">
                            <h2 className='text-dark text-center'>
                                <Typed
                                    strings={['Latest projects ⌚']}
                                    typeSpeed={80}
                                    showCursor={false}
                                />
                                <br />


                                <Carousel>
                                    {ProjectsData.map((item, i) =>


                                        <Carousel.Item interval={1000} key={i}>
                                            <Figure>
                                                <Figure.Image
                                                    width={171}
                                                    height={180}
                                                    alt="171x180"
                                                    src= {item.image}
                                                />
                                                <Figure.Caption>
                                                    {item.title}
                                                </Figure.Caption>
                                            </Figure>
                                        </Carousel.Item>
                                    )}


                                </Carousel>
                            </h2>


                        </div>

                        <div className="container col-10 col-lg-4">
                            <h2 className='text-dark text-center'>
                                <Typed
                                    strings={['I master this technologies🖥']}
                                    typeSpeed={80}
                                    showCursor={false}
                                />
                                <br />
                            </h2>
                            <Carousel fade >
                                {TechData.map((item, i) =>
                                    <Carousel.Item key={i}>
                                        <Card className='col-12'>
                                            <Card.Img variant="left" src={item.image} className="TechCardImg container col-4 mt-2" />
                                            <Card.Body className='p-2'>
                                                <Card.Title className='mt-2'>{item.title}</Card.Title>
                                                <Card.Text>
                                                    {item.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
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