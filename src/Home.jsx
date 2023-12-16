import React from 'react'
import './home.css';
import yourImage from './images/your-image.png';
function Home() {

   
    return (
        <>
            {/* navbar */}
            <nav class="navbar">
                <div class="container-fluid input-group mb-2">
                    <span class="navbar-brand mb-0 h1 ms-5">Furnit</span>
                    {/* <form class="d-flex" role="search">
                    <input class="form-control w-75" type="search" placeholder="Search" aria-label="Search" />
                   
                </form>
                */}
                    <input type="text" class="form-control ms-5" placeholder="what are you looking for?" />

                    <i class="fa-regular fa-heart me-3 ms-3"></i><br />
                    <i class="fa-solid fa-bag-shopping me-3"></i><br />
                    <i class="fa-regular fa-user me-3"></i>
                    <h6 class="me-3">Hey!</h6>
                    <h6 class="me-3">Login/Sign Up</h6>


                </div>

            </nav>

            <nav id='navbar' class="navbar navbar-expand-lg bg-body">
                <div class="container-fluid">


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav  mb-2 " >
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Sofas</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Living</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Bedroom</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Dining & Kitchen</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Storage</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Study & Office</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Dector</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Sale</a>

                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            {/* navbar ends */}

            < div  class='content'  id="content"><br />
                {/* Your component content goes here */}
                <h1>DISCOVER YOUR DREAM</h1>
                <h1>FURNITURE COLLECTION</h1>
               <p id='para' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptas fuga nihil saepe iusto labore. .</p>
                <button class="btn btn-outline-success" type="submit">Shop Now</button><br />
                <img src={yourImage} height={200} alt="" />

            </div>
           
        </>
    )
}

export default Home