// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


function Contact({ dark, updateDark }) {
    //Calculate Age auto below

    return (
        <>
            <main className={`flex-shrink-0 ${dark ? "" : "home"}`} >
                <div className="container p-5">

                    <div className='row'>

                        <div className="col-lg-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="col">
                            <h2>
                                <img src="Geek.png" alt="Geek" width="150"
                                    height="150"
                                    className="d-inline-block align-top"
                                />
                            </h2>
                        </div>
                    </div>

                </div>
            </main>
        </>

    )
}


export default Contact;