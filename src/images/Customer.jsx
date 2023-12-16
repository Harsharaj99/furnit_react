import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Customer() {
    return (
        <>
            <div style={{textAlign:'center'}}>
                <h1>Customer Love</h1>
                <p>Discover Why Our Products Are Earning Rave Reviews</p>
            </div><br />
            <div>
                <Row class="ms-5">
                    <Col lg={3}>
                        <div class="card-body ms-5" style={{width:'270px'}}>
                            <img style={{borderRadius:'50%',height:'40%',width:'40%'}}  src="https://tse3.mm.bing.net/th?id=OIP.4MwwMkBoAHyJ1fRaQRu87wHaHa&pid=Api&P=0&h=180" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">Oliver John</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div class="card-body ms-5" style={{width:'270px'}}>
                            <img style={{borderRadius:'50%',height:'40%',width:'40%'}}  src="https://tse4.mm.bing.net/th?id=OIP.vGGyumkkRAuSghTNHnLPKwHaHW&pid=Api&P=0&h=180" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">Smitha Smith</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div class="card-body ms-5" style={{width:'270px'}}>
                            <img style={{borderRadius:'50%',height:'40%',width:'40%'}}  src="https://tse2.mm.bing.net/th?id=OIP.8E92ZiqboR-GqhX-TRX93gHaHb&pid=Api&P=0&h=180" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">Jack Sparrow</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div class="card-body ms-5" style={{width:'270px'}}>
                            <img style={{borderRadius:'50%',height:'40%',width:'40%'}}  src="https://tse2.mm.bing.net/th?id=OIP.JFknyWl7Au3APww41TIhFwHaHa&pid=Api&P=0&h=180" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">Angel John</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               
                            </div>
                        </div>
                    </Col>
                </Row>
            </div><br />

            {/* last container */}

            <div  style={{backgroundColor:'#354f3d',color:'white'}} >
                <Row >
                    <Col lg={6} class="ms-5 mt-5">
                        <div class='ms-3 mt-3'>
                            <h3 >Furnit.</h3>
                            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sit in sed excepturi placeat rem qui tempora ducimus ipsum ab optio veniam, pariatur, laudantium similique tenetur accusamus minima temporibus aspernatur.</p>
                            <i class="fa-solid fa-globe "></i>
                            <i class="fa-brands fa-instagram ms-3"></i>
                            <i class="fa-brands fa-twitter ms-3"></i>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <h3>Services</h3>
                        <h6>Email marketing</h6>
                        <h6>Our Product</h6>
                        <h6>Branding</h6>
                        <h6>Contact</h6>
                    </Col>
                    <Col lg={2}>
                    <h3>Furniture</h3>
                        <h6>Chair</h6>
                        <h6>Lambs</h6>
                        <h6>Desk</h6>
                        <h6>Sofa</h6>
                        <h6>All furnitures</h6>
                    </Col>
                    <Col lg={2}>
                    <h3>Follow Us</h3>
                        <h6>+02-123-879-4632</h6>
                        <h6>st.Newyork 26785.USA</h6>
                        <h6>mail@panti.com</h6>
                        
                    </Col>
                </Row>
            </div>
        </>

    )
}

export default Customer