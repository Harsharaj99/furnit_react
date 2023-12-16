import React from 'react'

import { Col, Row } from 'react-bootstrap';


function Items() {
    return (
        <>
            <div style={{ textAlign: 'center' }} >
                <br />  <h3>Most Popular Items</h3>
                <p>Browse throug out top picks,loved by customers like you</p>
            </div><br />

            <Row>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100% h-100%" style={{ width: '248px' }}>
                        <img src="https://i.pinimg.com/originals/cf/80/00/cf8000a7c910bc4617f4d0f97761f8b3.jpg" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$2599.00</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100%" style={{ width: '248px' }}>
                        <img src="http://www.pngmart.com/files/7/Chair-PNG-Free-Download.png" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$4599.00</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100%" style={{ width: '248px' }}>
                        <img src="http://www.millenniumseating.com/Shared/images/Product/hd-6145_pr.jpg" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$2599.00</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100%" style={{ width: '248px' }}>
                        <img src="https://tse2.mm.bing.net/th?id=OIP.v5h0uu8muaLFPqsirGrI7wHaHa&pid=Api&P=0&h=180" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$2599.00</h6>
                        </div>
                    </div>
                </Col>

            </Row><br />
            {/* card */}


            <div class="ms-3">
                <h4>Whats's new at Furnit</h4>
                <p>Browse through our top picks,loved by customers like you</p>
            </div>
            <div>

                <Row class="ms-5">
                    <Col lg={6}>
                        <img id='img' src="https://wallpapercave.com/wp/wp2758453.jpg" height={400} width={600} alt="" />

                    </Col>

                    <Col lg={3}>
                        <div style={{ color: 'white', height: '150px', width: '290px', backgroundColor: 'green', textAlign: 'center' }}>
                            <h4 >Whats New</h4>
                            <button class="btn btn-outline-success" style={{ color: 'white' }} type="submit">Discover More</button>
                        </div><br />
                        <div>
                            <img src="https://www.betterhomeindia.com/wp-content/uploads/2019/01/4-min-1.jpg" alt="" height={230} width={290} />
                        </div>

                    </Col>
                    <Col lg={3}>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.NKf9jRAcPZs8f64le4AWkgHaGn&pid=Api&P=0&h=180" alt="" height={230} width={280} br />  <hr />
                        <img src="https://tse4.mm.bing.net/th?id=OIP.IthkNsU4GM5BXbSqyo_miQHaHa&pid=Api&P=0&h=180" alt="" height={140} width={280} />
                    </Col>
                </Row><br />
            </div>

            <div>
                <div style={{ textAlign: 'center' }}>
                    <h1>Discover the best</h1>
                    <p>Elevate the excellence today</p>
                   
                </div>

                <Row>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100% h-100%" style={{ width: '248px' }}>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.fsJjgzbyffC2qPilZcYTkAHaE8&pid=Api&P=0&h=180" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$2599.00</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100%" style={{ width: '248px' }}>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.w9A6RF5A92j8oILbcDojpAHaIt&pid=Api&P=0&h=180" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$4599.00</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100%" style={{ width: '248px' }}>
                        <img src="https://tse1.mm.bing.net/th?id=OIP.x1FzPCu7fmJdVFEzEIGevwHaF6&pid=Api&P=0&h=180" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$2599.00</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100%" style={{ width: '248px' }}>
                        <img src="https://www.freepngimg.com/thumb/aquarium/46031-4-yellow-sofa-image-free-png-hq.png" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$2599.00</h6>
                        </div>
                    </div>
                </Col>

            </Row><br />
           <div class="text-center"> <button class="btn btn-outline-success"  type="submit">Discover Chairs</button></div><br />




            </div><br />

          <div className=' ms-5'>
                <Row>
                    <Col lg={6}>
                        <Row style={{width:'700px'}}>
                            <Col lg={3} >
                               
                                    <h3>Comfortable  Chairs</h3>
                                    <p id='chairs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta incidunt doloremque adipisci laudantium eligendi dolorem ea temporibus. </p>
                                    <button class="btn btn-outline-success"  type="submit">Discover Chairs</button>
                               
    
    
                            </Col>
                            <Col lg={4}>
                                <img src="https://i.pinimg.com/originals/cf/80/00/cf8000a7c910bc4617f4d0f97761f8b3.jpg" height={300} width={300} alt="" />

                            </Col>
                        </Row>
    
                    </Col>
                    <Col lg={6}>
                    <Row style={{width:'700px'}}>
                            <Col lg={3}>
                                <h3>Comfortable  Chairs</h3>
                               <div id='chairs'> <p id='chairs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta incidunt doloremque adipisci laudantium eligendi dolorem ea temporibus. </p></div>
                                <button class="btn btn-outline-success"  type="submit">Discover Desks</button>
    
    
                            </Col>
                            <Col lg={4}>
                                <img src="https://secure.img1.wfcdn.com/lf/maxsquare/hash/37962/30157286/1/Ashley-Club-Chair-HD60144.jpg" height={300} width={300} alt="" />

                            </Col>
                        </Row>
    
                    </Col>
                </Row>

          </div><br />

          <div style={{ textAlign: 'center' }} >
                <br />  <h3>Most Popular Items</h3>
                <p>Browse throug out top picks,loved by customers like you</p>
            </div><br />

            <Row>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100% h-100%" style={{ width: '248px' }}>
                        <img src="https://i.pinimg.com/originals/cf/80/00/cf8000a7c910bc4617f4d0f97761f8b3.jpg" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$2599.00</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100%" style={{ width: '248px' }}>
                        <img src="http://www.pngmart.com/files/7/Chair-PNG-Free-Download.png" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$4599.00</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100%" style={{ width: '248px' }}>
                        <img src="http://www.millenniumseating.com/Shared/images/Product/hd-6145_pr.jpg" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$2599.00</h6>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="card-body ms-4 w-100%" style={{ width: '248px' }}>
                        <img src="https://tse2.mm.bing.net/th?id=OIP.v5h0uu8muaLFPqsirGrI7wHaHa&pid=Api&P=0&h=180" height={250} width={450} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rams velvet Arm Chair in Dual Color</h5>
                            <p class="card-text">Furnit Metal</p>
                            <h6>$2599.00</h6>
                        </div>
                    </div>
                </Col>

            </Row>
            <br />




        </>
    )
}

export default Items