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
    .line{
        width: 200px;
        height: 2px;
        background-image: linear-gradient(to right,orange,red);
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
    .social{
        display: flex;

    }
    .facebook,.instagram,.linkedin,.twitter{
        font-size: 20px;
        margin-left: 10px;
    }
    h5{
        /* margin-top: 80px; */
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
                                <a class="nav-link active" href='#'>News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href='/Contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="up">
            </div>

            <div className="news">
                <div className="newstop">
                    <h2>News & Events</h2>
                    <div className="line"></div>
                    <h5>Experience exceptional service tailored to your needs. We provide comprehensive <br /> solutions and unparalleled support to meet your unique requirements.</h5>
                </div>
                <div className="newsdown">
                    <div className="newsbox">
                        <img src={facpic1} className='newspic' width={400} height={250} alt="" />
                        <div><a href="/News1">'എ' ക്ലാസ് അംഗങ്ങളുടെ വാർഷിക ജനറൽ ബോഡി 24 -11 -2023</a></div>
                    </div>
                </div>
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