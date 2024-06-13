import React from 'react'
import '../Bank/bootstrap.css'
import '../Bank/bootstrap.bundle.min.js'
import Deposit from '../Bank/Deposit.png'
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
    .line1{
        margin-top: 5px;
        width: 200px;
        height: 2px;
        background-image: linear-gradient(to right,orange,red);
    }
    .down{
        margin-top: 20px;
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
    .content{
        margin-top: 30px;
        width: auto;
        height: 1050px;
        /* background-color: grey; */
        display: flex;
        justify-content: space-evenly;
    }
    .left{
        width: 800px;
        height: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 1px 1px 1px grey;
        border-radius: 5px;
        /* background-color: blue; */
    }
    .right{
        width: 300px;
        height: 700px;
        display: flex;
        align-items: center;
        flex-direction: column;
        /* background-color: gray; */
    }
    table, th, td {
         border: 1px solid black;
         border-collapse: collapse;
         width: 90%;
         height: 50px;
         
    }
    th, td{
        padding:20px;
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

            <div className="content">
                <div className="left">
                    <div><img src={Deposit} width={770} height={300} alt="" /></div>
                    <div><h5>Deposite Schemes</h5></div>
                    <div><p>A financial foundation, a commitment to growth. Safeguard your funds, earn interest, and pave the way for future endeavors. Whether short-term goals or long-term dreams, a deposit is the first step towards financial security and prosperity. </p></div>
                    <div><h5>Current Account Deposit</h5></div>
                    <div><p> Bank's Current account deposit is ideal for daily transactions, this account offers flexibility with unlimited withdrawals and seamless fund management. Tailored for businesses and individuals, it provides easy access to funds while supporting financial operations with features like overdrafts and electronic transactions.</p></div>
                    <div><h5>Saving Bank Account</h5></div>
                    <div><p> Bank's savings bank account is a reliable financial tool that allows you to securely store and grow your money. With easy access to funds, interest accrual, and minimal fees, it provides a simple yet effective way to manage and save for your financial goals.</p></div>
                    <div><h5>Fixed Deposit</h5></div>
                    <div><p> Bank's fixed deposit safeguard your finances and watch your money grow with a stable, high-interest investment. Lock in your funds for a fixed period, enjoy guaranteed returns, and achieve financial security through a reliable and risk-free investment option</p></div>
                    <div><h5>Recurring Deposit</h5></div>
                    <div><p>Bank's recurring deposit a disciplined savings plan. Invest a fixed amount regularly and watch your savings grow with interest over time. Ideal for achieving financial goals with a steady, low-risk approach. </p></div>
                    <div><h5>Mutual Benefit Day Deposit Scheme</h5></div>
                    <div><p>Bank's mutual benefit day deposit Scheme fosters financial growth through collaborative savings. Participants pool resources for collective benefits, ensuring a mutually rewarding financial journey. This scheme emphasizes unity, shared prosperity, and the collective strength of contributors in achieving common financial goals.</p></div>
                </div>
                <div className="right">
                    <h3>Fixed Deposit Interest Rate</h3>
                    <div className="line1"></div>
                    <div className='down'>
                        <table>
                            <tr>
                                <th>15-45 days</th>
                                <th>6%</th>
                            </tr>
                            <tr>
                                <th>46-90 days</th>
                                <th>6.5%</th>
                            </tr>
                            <tr>
                                <th>91-179 days</th>
                                <th>7%</th>
                            </tr>
                            <tr>
                                <th>180-364 days</th>
                                <th>7.25%</th>
                            </tr>
                            <tr>
                                <th>1-2 years</th>
                                <th>8.25%</th>
                            </tr>
                            <tr>
                                <th>Above 2 years</th>
                                <th>8%</th>
                            </tr>
                            <tr>
                                <th>Senior Citizen</th>
                                <th>0.5% <br />Additional</th>
                            </tr>
                        </table>
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