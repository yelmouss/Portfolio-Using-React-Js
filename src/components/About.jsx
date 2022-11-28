
function About() {
    //Calculate Age auto below
    var years = new Date(new Date() - new Date('1994-10-24')).getFullYear() - 1970
    return (
        <>
            <main className="main home">
                <div className="py-4 pt-md-0 pb-8 pb-sm-11 mt-lg-n8 text-light">
                    <section id="about" className="about container">
                        <div className="container">
                            <div className="row   p-5">
                                <h1 className="text-uppercase ps-0 fs-2 fw-bolder  lh-1 position-relative">About</h1>
                                <br />
                                    <h1 className="fw-bolder text-outlined ps-0 fs-lg-7 fs-sm-6 fs-5 text-white lh-1 mt-sm-n4 mt-n3 position-relative z-index--1">Me</h1>
                            </div>
                        </div>
                        {/* <!-- ======= About Me ======= --> */}
                        <div className="about-me container-fluid  elevation-5">
                            <div className="row">
                                <div className=" col-7 col-lg-3 p-2" data-aos="fade-right">
                                    <img src="img/About.jpg" className="img-fluid" alt="Yelmouss" />
                                </div>
                                <div className="col-lg-8 pt-lg-0 content" data-aos="fade-left">
                                    <h1>Fullstack Web Developer</h1>
                                    <p className="fst-italic">
                                        Dedicated and efficient full stack developer with 5+ years experience in application layers, presentation layers, and databases.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="fas fa-chevron-right"></i> <strong>Birthday:</strong> <span>24 October 1994</span></li>
                                                <li><i className="fas fa-chevron-right"></i> <strong>Website:</strong> <span><a href="./"> Here </a></span></li>
                                                <li><i className="fas fa-chevron-right"></i> <strong>Phone:</strong> <span>+212 612 865 681</span></li>
                                                <li><i className="fas fa-chevron-right"></i> <strong>City:</strong> <span>Rabat, Morrocco</span></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="fas fa-chevron-right"></i> <strong>Age:</strong> <span>{years}</span></li>
                                                <li><i className="fas fa-chevron-right"></i> <strong>Degree:</strong> <span>Bacheloor</span></li>
                                                <li><i className="fas fa-chevron-right"></i> <strong>Email:</strong> <span>yelmouss.devt@gmail.com</span></li>
                                                <li><i className="fas fa-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        Certified in both F/E and B/E technologies. Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and increased effectiveness of database administrators by 20%.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>

    )
}


export default About;