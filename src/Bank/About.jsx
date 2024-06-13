import React from 'react'
import '../Bank/bootstrap.css'
import '../Bank/bootstrap.bundle.min.js'
import money1 from '../Bank/money1.jpg'
import facpic2 from '../Bank/facpic2.png'
import styled from 'styled-components'
const Container = styled.div`
    width: auto;
    height: auto;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    .up{
        width: auto;
        height:450px;
        background-image: url(${facpic2});
        background-repeat: no-repeat;
        background-size: cover;
    }
    .description{
        width: auto;
        height: 500px;
        /* background-color: blue; */
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .left,.right{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .line{
        width: 200px;
        height: 2px;
        background-image: linear-gradient(to right,orange,red);
    }
   
    a{
        text-decoration: none;
        color: black;
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
    .who{
        margin-top: 20px;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }
    .mission{
        width: auto;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* background-color: grey; */
    }
    .mv{
        width: auto;
        height: 500px;
        /* background-color: green; */
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .mvleft,.mvright{
        width: 550px;
        height: 450px;
        display: flex;
        flex-direction: column;
        text-align: center;
        box-shadow: 1px 1px 1px 1px grey;
        /* background-color: gray; */
        transition: all 0.3s;
    }
    .mvright:hover{
        margin-bottom: 20px;
    }
    .mvleft:hover{
        margin-bottom: 20px;
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
                                <a class="nav-link active" href="#">About</a>
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
                                <a class="nav-link active" href='/Contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="up">

            </div>
            <div className="who">
                <h2>Who We Are</h2>
                <div className="line"></div>
            </div>

            <div className="description">
                <div className="left">
                    <img src={money1} width={450} height={400} alt="" />
                </div>
                <div className="right">
                    <h4>Bank</h4>
                    <p>1951 ഡിസംബർ 31 ന് കോളാരി വിവിധോദ്ദേശ ഐക്യ <br />നാണയ സംഘമായി രജിസ്റ്റർ ചെയ്തു. 1952 മാർച്ച് 26 മുതൽ <br /> വിവിധോദ്ദേശ ഐക്യ നാണയ സംഘമായി പ്രവർത്തനം  <br />ആരംഭിച്ച് 21 .09 .1963 മുതൽ കോളാരി സർവ്വീസ് സഹകരണ <br /> സൊസൈറ്റി ആയും 07 .06 .1982 മുതൽ കോളാരി സർവ്വീസ് <br /> സഹകരണ ബാങ്കായും പ്രവർത്തിച്ചു വരുന്നു .നിലവിൽ  ക്ലാസ്സ് <br /> വൺ സൂപ്പർ ഗ്രേഡ് ബാങ്കാണ് . <br />
                        106 കോടി നിക്ഷേപം, 95 കോടി വായ്പ, 2.2 കോടി ഓഹരി <br /> മൂലധനം,115 കോടി പ്രവർത്തന മൂലധനവുമുണ്ട് .ഹെഡ്  <br />ഓഫീസ് കൂടാതെ 3  ശാഖകളും പ്രവർത്തിച്ചു വരുന്നു . എല്ലാ  <br />ശാഖകളും രാവിലെ 8 മാണി മുതൽ രാത്രി 8 വരെ <br /> പ്രവർത്തിക്കുന്നു .1951ൽ 31 അംഗങ്ങളുമായി ആരംഭിച്ച <br /> നമ്മുടെ സ്ഥാപനത്തിന് വിവിധ മേഖലകളിൽ നിന്നായി <br /> നിലവിൽ 11000 അംഗങ്ങളുണ്ട് . 2008  മുതൽ ഞങ്ങൾ <br /> തുടർച്ചയായി ലാഭത്തിൽ പ്രവർത്തിച്ചു  വരുന്നു .</p>

                </div>
            </div>

            <div className="mission">
                <h2>MISSION & VISION</h2>
                <div className="line"></div>
            </div>

            <div className="mv">
                <div className="mvleft">
                    <h4>Our Mission</h4>
                </div>
                <div className="mvright">
                    <h4>Our Vision</h4>
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