import React from 'react'
import '../Bank/bootstrap.css'
import '../Bank/bootstrap.bundle.min.js'
import money1 from '../Bank/money1.jpg'
import money2 from '../Bank/money2.jpg'
import money3 from '../Bank/money3.jpg'
import facpic1 from '../Bank/facpic1.png'
import facpic2 from '../Bank/facpic2.png'
import facpic3 from '../Bank/facpic3.png'
import facpic4 from '../Bank/facpic4.png'
import facpic5 from '../Bank/facpic5.png'
import facpic6 from '../Bank/facpic6.png'
import styled from 'styled-components'
const Container = styled.div`
    width: auto;
    height: auto;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    .example1 {
        margin-top: 10px;
        width: auto;
        height: 80px;	
        overflow: hidden;
         position: relative;
         display: flex;
         align-items: center;
         justify-content: center;
    }
    .example1 h3 {
         font-size: 30px;
         color: black;
         position: absolute;
         width: 100%;
        height: 100%;
        margin: 0;
         line-height: 50px;
         text-align: center;
         justify-content: center;
        /* Starting position */
        -moz-transform:translateX(100%);
         -webkit-transform:translateX(100%);	
         transform:translateX(100%);
         /* Apply animation to this element */	
         -moz-animation: example1 15s linear infinite;
         -webkit-animation: example1 15s linear infinite;
         animation: example1 15s linear infinite;
    }
        /* Move it (define the animation) */
        @-moz-keyframes example1 {
         0%   { -moz-transform: translateX(100%); }
         100% { -moz-transform: translateX(-100%); }
    }
        @-webkit-keyframes example1 {
         0%   { -webkit-transform: translateX(100%); }
         100% { -webkit-transform: translateX(-100%); }
    }
        @keyframes example1 {
         0%   { 
         -moz-transform: translateX(100%); /* Firefox bug fix */
         -webkit-transform: translateX(100%); /* Firefox bug fix */
         transform: translateX(100%); 		
         }
        100% { 
         -moz-transform: translateX(-100%); /* Firefox bug fix */
         -webkit-transform: translateX(-100%); /* Firefox bug fix */
         transform: translateX(-100%); 
         }
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
    .service{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: auto;
        height: 250px;
        /* background-color: aliceblue; */
    }
    
    .services{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 270px;
        height: 200px;
        color: white;
        background-color: orange;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 1px grey;
        transition: all 0.3s;  
    }
    .services:hover{
        transform: scale(1.1);
    }
    .icons{
        font-size: 60px;
    }
    .facility{
        width: auto;
        height: 700px;
        /* background-color: blue; */
        display: flex;
        flex-direction: column;
    }
    .top{
        width: auto;
        height: 200px;
        /* background-color: grey; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .line{
        width: 200px;
        height: 2px;
        background-image: linear-gradient(to right,orange,red);
    }
    .down{
        width: auto;
        display: flex;
        flex-direction: column;
        height: 500px;
        /* background-color: green; */
    }
    .facility1,.facility2{
        width: auto;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        /* background-color: orange; */
    }
    .boxes{
        width: 380px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        /* background-color: grey; */
        box-shadow: 1px 1px 1px 1px grey;
        border-radius: 10px;
        border: 1px solid orange;
        transition: all 0.3s;
    }
    .boxes:hover{
        margin-bottom: 20px ;
    }
    .images{
        width: 200px;
        height: 198px;
    }
    .line1{
        height: 150px;
        width: 2px;
        margin-left: 20px;
        background-color: orange;
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
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
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
                                <a class="nav-link active" href='/Contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={money1} class="d-block w-100" alt="..." height={480} />
                    </div>
                    <div class="carousel-item">
                        <img src={money2} class="d-block w-100" alt="..." height={480} />
                    </div>
                    <div class="carousel-item">
                        <img src={money3} class="d-block w-100" alt="..." height={480} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="example1">
                <h3>Newssss........................... </h3>
            </div>

            <div className="description">
                <div className="left">
                    <img src={money1} width={450} height={400} alt="" />
                </div>
                <div className="right">
                    <h4>Bank</h4>
                    <p>1951 ഡിസംബർ 31 ന് കോളാരി വിവിധോദ്ദേശ ഐക്യ <br />നാണയ സംഘമായി രജിസ്റ്റർ ചെയ്തു. 1952 മാർച്ച് 26 മുതൽ <br /> വിവിധോദ്ദേശ ഐക്യ നാണയ സംഘമായി പ്രവർത്തനം  <br />ആരംഭിച്ച് 21 .09 .1963 മുതൽ കോളാരി സർവ്വീസ് സഹകരണ <br /> സൊസൈറ്റി ആയും 07 .06 .1982 മുതൽ കോളാരി സർവ്വീസ് <br /> സഹകരണ ബാങ്കായും പ്രവർത്തിച്ചു വരുന്നു .നിലവിൽ  ക്ലാസ്സ് <br /> വൺ സൂപ്പർ ഗ്രേഡ് ബാങ്കാണ് . <br />
                        106 കോടി നിക്ഷേപം, 95 കോടി വായ്പ, 2.2 കോടി ഓഹരി <br /> മൂലധനം,115 കോടി പ്രവർത്തന മൂലധനവുമുണ്ട് .ഹെഡ്  <br />ഓഫീസ് കൂടാതെ 3  ശാഖകളും പ്രവർത്തിച്ചു വരുന്നു . എല്ലാ  <br />ശാഖകളും രാവിലെ 8 മാണി മുതൽ രാത്രി 8 വരെ <br /> പ്രവർത്തിക്കുന്നു .1951ൽ 31 അംഗങ്ങളുമായി ആരംഭിച്ച <br /> നമ്മുടെ സ്ഥാപനത്തിന് വിവിധ മേഖലകളിൽ നിന്നായി <br /> നിലവിൽ 11000 അംഗങ്ങളുണ്ട് . 2008  മുതൽ ഞങ്ങൾ <br /> തുടർച്ചയായി ലാഭത്തിൽ പ്രവർത്തിച്ചു  വരുന്നു .</p>
                    <a href="/About">Read More</a>
                </div>
            </div>

            <div className="service">
                <div className="services">
                    <div className='icons'><i class="fa-solid fa-dollar-sign"></i></div>
                    <h4>Deposit</h4>
                    <h6>Place funds securely for safekeeping.</h6>
                </div>
                <div className="services">
                    <div className='icons'><i class="fa-solid fa-landmark"></i></div>
                    <h4>Loan</h4>
                    <h6>Borrow, repay, interest, terms, approval.</h6>
                </div>
                <div className="services">
                    <div className='icons'><i class="fa-solid fa-money-bill"></i></div>
                    <h4>Gold Loan</h4>
                    <h6>Quick cash with gold collateral.</h6>
                </div>
                <div className="services">
                    <div className='icons'><i class="fa-solid fa-money-bill"></i></div>
                    <h4>Chitty</h4>
                    <h6>Shared deposit for mutual benefit.</h6>
                </div>
            </div>

            <div className="facility">
                <div className="top">
                    <h2>Our Facilities</h2>
                    <div className="line"></div>
                    <h5> Bank is a customer-centric organization that provides a wide range of facilities to its customers.<br /> The bank offers a variety of savings and deposit accounts, as well as loans for various purposes. In addition,<br />  the bank provides online banking services and branches across in Mattanur. <br /> Here are some of the key facilities offered by Bank:</h5>
                </div>
                <div className="down">
                    <div className="facility1">
                        <div className="boxes">
                            <div><img src={facpic1} className='images' alt="" /></div>
                            <div className="line1"></div>
                            <h4>LOCKER</h4>
                        </div>
                        <div className="boxes">
                            <div><img src={facpic2} className='images' alt="" /></div>
                            <div className="line1"></div>
                            <h4>RTGS/NEFT</h4>
                        </div>
                        <div className="boxes">
                            <div><img src={facpic3} className='images' alt="" /></div>
                            <div className="line1"></div>
                            <h4>MUTUAL <br /> BENIFIT <br /> DEPOSIT</h4>
                        </div>
                    </div>
                    <div className="facility2">
                        <div className="boxes">
                            <div><img src={facpic4} className='images' alt="" /></div>
                            <div className="line1"></div>
                            <h4>LOAN</h4>
                        </div>
                        <div className="boxes">
                            <div><img src={facpic5} className='images' alt="" /></div>
                            <div className="line1"></div>
                            <h4>DEPOSIT</h4>
                        </div>
                        <div className="boxes">
                            <div><img src={facpic6} className='images' alt="" /></div>
                            <div className="line1"></div>
                            <h4>GOLD <br /> LOAN</h4>
                        </div>
                    </div>
                </div>
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
                        <div><a href="/News">'എ' ക്ലാസ് അംഗങ്ങളുടെ വാർഷിക ജനറൽ ബോഡി 24 -11 -2023</a></div>
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