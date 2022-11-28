import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [51.505, -0.09];


function Footer() {
    return (
        <>
            <footer className='footer mt-auto  text-light p-5' >
                <div className="container-fluid mt-2">
                    <div className="row">

                        <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3  p-2">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Yelmouss Software in the Map
                            </h6>
                            <MapContainer center={[51.505, -0.09]} zoom={14} scrollWheelZoom={false} className="rounded">
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://yelmouss.com">Yelmouss</a>'
                                />
                                <Marker position={position}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold  bg-light text-dark text-center p-2 rounded">Contact</h6>
                            <p><i className="fas fa-home mr-3"></i> Rabat, Agdal 10095, MA</p>
                            <p><i className="fas fa-envelope mr-3"></i> yelmouss@yelmouss.com</p>
                            <p><i className="fas fa-phone mr-3"></i> + 212 612 865 681</p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Follow me</h6>                          
                            <a className="btn btn-danger btn-floating m-1 " href="#!" role="button" ><i className="fab fa-google"></i></a>
                            <a className="btn btn-primary btn-floating m-1" href="#!" role="button"  ><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-primary btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>

                            <a className="btn btn-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>
                        </div>

                    </div>

                </div>

                <div className=" card-footer text-center text-light fw-bold">© 2020 Copyright : <a className="text-warning" target={'_blank'} href="https://yelmouss.com/">yelmouss.com</a>
                </div>

                <a href="https://wa.me/212612865681" class="float" target="_blank">
                    <i class="fa fa-whatsapp my-float"></i>
                </a>

            </footer>

        </>
    );
}

export default Footer;