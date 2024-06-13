import React from 'react'
import '../Bank/bootstrap.css'
import '../Bank/bootstrap.bundle.min.js'
import facpic1 from '../Bank/facpic1.png'
import newspaper from '../Bank/newspaper.jpg'
import styled from 'styled-components'
const Container = styled.div`
    width: auto;
    height: auto;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    .up{
        width: auto;
        height:450px;
        background-image: url(${newspaper});
        background-repeat: no-repeat;
        background-size: cover;
    }
    .news{
        margin-top: 20px;
        width: auto;
        height: 600px;
        /* background-color: aliceblue; */
    }
    .newstop{
        width: auto;
        height: 140px;
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .newsdown{
        width: auto;
        height: 430px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: gray; */
    }
    .newsbox{
        width: 400px;
        height: 400px;
        box-shadow: 1px 1px 1px 1px grey;
        /* background-color: green; */
        display: flex;
        border-radius: 20px;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;
        font-size: 20px;
        transition: all 0.3s;
    }
    .newsbox:hover{
        margin-bottom: 20px;
    }
    a{
        text-decoration: none;
        color: black;
    }
    .newspic{
        border-radius: 10px;
    }
    .newsletter{
        margin-top: 20px;
        width: auto;
        height: 200px;
        background-color: aliceblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    
    .inp{
        border-radius: 20px;
        border: 1px solid orange;
        width: 400px;
        height: 40px;
    }
    .but{
        width: 100px;
        height: 40px;
        background-color: orange;
        border-radius: 20px;
        border: none;
        box-shadow: 1px 1px 1px 1px grey;
    }
    .footer{
        margin-top: 20px;
        width: auto;
        height: 350px;
        display: flex;
        justify-content: space-evenly;
        /* background-color: blueviolet; */
    }
    .footer1{
        width: 300px;
        height: 350px;
        display: flex;
        flex-direction: column;
        /* background-color: grey; */
    }
    .footer2{
        width: 300px;
        height: 350px;
        display: flex;
        flex-direction: column;
        /* background-color: grey; */
        align-items: center;
    }
    .home,.about,.serv{
        display: flex;
    }
    
    .footer3{
        width: 300px;
        height: 350px;
        /* background-color: grey; */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .line{
        width: 200px;
        height: 2px;
        background-image: linear-gradient(to right,orange,red);
    }
    .social{
        display: flex;

    }
    .facebook,.instagram,.linkedin,.twitter{
        font-size: 20px;
        margin-left: 10px;
    }
    .hh{
        margin-left: 10px;
    }
    .copyright{
        width: auto;
        height: 70px;
        background-color: orange;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .footers{
        margin-top: 80px;
    }
    .contact{
        margin-top: 20px;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
        text-align: center;
        /* background-color: grey; */
    }
    .details{
        width: auto;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        /* background-color: aqua; */
    }
    .boxes{
        width: 300px;
        height: 250px;
        /* background-color: green; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
    .icon{
        font-size: 50px;
    }
    .map{
        width: auto;
        height: 400px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    iframe{
        width: 80%;
        height: 300px;
        border-radius: 20px;
        box-shadow: 1px 1px 1px 1px grey;
    }

`

const Home = () => {
    return (
        <Container>

            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/About">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/Deposit'>Deposit</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/Loan'>Loan</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/News'>News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='#'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="up">
            </div>

            <div className="contact">
                <h3>CONTACT US</h3>
                <div className="line"></div>
                <h5>Contact us today to discuss how our services can benefit your business.</h5>
            </div>

            <div className="details">
                <div className="boxes">
                    <div className="icon"><i class="fa-solid fa-phone"></i></div>
                    <h4>CALL US</h4>
                    <h5>0000000000</h5>
                </div>
                <div className="boxes">
                    <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
                    <h4>OFFICE LOCATION</h4>
                    <h5>address</h5>
                    <h5>670702</h5>
                </div>
                <div className="boxes">
                    <div className="icon"><i class="fa-solid fa-earth-asia"></i></div>
                    <h4>EMAIL</h4>
                    <h5>......@gmail.com</h5>
                </div>
            </div>

            <div className="map">
                <h3>Location Map</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6303116502213!2d75.56953437359125!3d11.930795736844681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba431324a95bb55%3A0x71dc44869edf2d79!2sMattannur%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1700652857595!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="newsletter">
                <h2>Join Our Newletter</h2>
                <div className="line"></div>
                <h6>Stay informed and never miss out on updates. Join our newsletter today!</h6>
                <div className="send">
                    <input type="text" className='inp' name="" id="" />
                    <button className='but'>Subscribe</button>
                </div>
            </div>

            <div className="footer">
                <div className="footer1">
                    <div className="footers"><h5>Get In Touch</h5></div>
                    <h6>Phone :</h6>
                    <h6>0000000000</h6>
                    <h6>Email :</h6>
                    <h6>bank@gmail.com</h6>
                </div>
                <div className="footer2">
                    <div className="footers"><h5>Useful Links</h5></div>
                    <a href="#"><div className="home">
                        <div><i class="fa-solid fa-house"></i></div>
                        <div className='hh'><h6>Home</h6></div>
                    </div></a>
                    <a href="/About"><div className="about">
                        <div><i class="fa-solid fa-address-card"></i></div>
                        <div className='hh'><h6>About</h6></div>
                    </div></a>
                    <a href="#"><div className="serv">
                        <div><i class="fa-solid fa-gear"></i></div>
                        <div className='hh'><h6>Service</h6></div>
                    </div></a>
                </div>
                <div className="footer3">
                    <div className="footers"><h5>Our Social Network</h5></div>
                    <p>Join our vibrant community and <br /> experience a platform designed to <br /> foster meaningful connections, share <br /> your passions, and collaborate with <br /> like-minded individuals</p>
                    <div className="social">
                        <div className="facebook">
                            <a href=""><i class="fa-brands fa-facebook"></i></a>
                        </div>
                        <div className="instagram">
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                        </div>
                        <div className="linkedin">
                            <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                        <div className="twitter">
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <h7>© Copyright Bank. All Rights Reserved </h7>
                <h7>Designed by <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjz9syHr9SCAxV9zTgGHfAZBLAQFnoECAsQAQ&url=https%3A%2F%2Fwillsoar.in%2F&usg=AOvVaw0uDB-9vcIH8L7M1lejgl_i&opi=89978449">"Willsoar Technologies LLP"</a></h7>
            </div>

        </Container>
    )
}

export default Home