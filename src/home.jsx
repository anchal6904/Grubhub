import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import {  Link,useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
       <nav>
        <div class="box1">
            <ul class="box4">
                <li class="box9" >
                    <FontAwesomeIcon icon={faUtensils} className='navIcon'  size='2xl' style={{color:" #fbb828"}} />     
                    <span class="box2">GRUBHUB</span>
                </li>
                <li class="box8">
                    <div class="box7">
                        <div  class="box51" onClick={() => navigate('/order')}> Order in the App</div>
                        <div className='signbtn'>
                            <a href="@" type="button" class="box5">Sign in</a>
                        </div>
                        
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <section id="first" class="text-center">
        <div class="box7">
            <div class="box52">
                <p class="box8">Get food delievery and more</p>
            </div>
            <div class="box53">
                <div class="input-group box54 text-center">
                    <input type="text" class="form-control box55" placeholder="Enter your delievery address" aria-label="Username" aria-describedby="basic-addon1"/>
                    <div class="box57">
                        <a href="3" type="button" class="box56">See what's nearby</a>
                    </div>                  
                </div>
            </div>
            
        </div>
    </section>
    <section id="second">
        <div class="box9 text-center py-3">
            <p>Why you'll love Grubhub</p>
        </div>
        <div class="box10">
            <div class="container">
                <div class="row text-center box14">
                    <div class="col-md-4">
                        <img src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo1.svg" class="box11" alt=""/>
                        <p class="box17 py-4">Something for everyone</p>
                        <p class="box18 text-muted">We've got every meal covered and more: snacks, alcohol, dessert, paper towels...</p>
                    </div>
                    <div class="col-md-4 box15">
                        <img src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo2.svg" class="box12" alt=""/>
                        <p class="box17 py-4">Delivery or pickup</p>
                        <p class="box18 text-muted">Sit back and relax, have us deliver to you or skip the line with pickup.</p>
                    </div>
                    <div class="col-md-4 box16">
                        <img src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo3.svg" class="box13" alt=""/>
                        <p class="box17 py-4">Save with Grubhub+</p>
                        <p class="box18 text-muted">Join Grubhub+ and get unlimited $0 delivery fees, exclusive offers, and more.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section id="third" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="box20">Pickup or delivery from restaurants near you</p>
                    <p class="box21">Explore restaurants that deliver near you, or try yummy takeout fare. With a place for every taste, it’s easy to find food you crave, and order online or through the Grubhub app. Find great meals fast with lots of local menus. Enjoy eating the convenient way with places that deliver to your door.</p>
                </div>
                <div class="col-md-6 py-4 box23">
                    <img class="box22" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzr8O-CXC9V6pvHHl0zr1R5R3_bp1kTnj6QkTNUZ8yQGezYaWW" alt=""/>
                </div>
            </div>
        </div>
    </section>

    <section id="fourth">
        <div class="container">
            <div class="row">
                <div class="col-md-6 box26">
                    <p class="box27">Restaurant Owners: Sign up with Grubhub to tap into millions of hungry customers</p>
                </div>
                <div class="col-md-6 box28">
                    <span class="box29">Get more delivery and pickup orders from 31.5 million Grubhub customers hungry for new local restaurants.</span><a href="$"> Sign up with Grubhub for Restaurants </a><span class="box29">to access hassle-free technology and marketing tools that will help you grow your business. It's easy to get started and your first 30 days are free!</span>
                </div>
            </div>
        </div>
    </section><br/><br/>
    <section id="fifth">
        <div class="container">
            <div class="row">
                <div class="col-md-6 box30">
                    <p>About Grubhub</p>
                </div>
                <div class="col-md-6 box31">
                    <p class="box32">Grubhub helps you find and order food from wherever you are. How it works: you type in an address, we tell you the restaurants that deliver to that locale as well as showing you droves of pickup restaurants near you. Want to be more specific? Search by cuisine, restaurant name or menu item. We'll filter your results accordingly. When you find what you're looking for, you can place your order online or by phone, free of charge. Oh, and we also give you access to reviews, coupons, special deals and a 24/7 customer care team that tracks each order and makes sure you get exactly what you want.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="sixth">
        <div class="box45">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 box37">
                        <p class="boxcol1">Sign up for special offers</p>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your@email.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">ZIP Code</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="11111"/>
                        </div>
                        <div class="box49">
                            <a href="d" type="button" class="box50">Count me in!</a>
                        </div>
                    </div>
                    <div class="col-md-3 box38">
                        <p class="boxcol2">Get to know us</p>
                        <a href="/">About Grubhub</a><br/>
                        <a href="8">Our apps</a><br/>
                        <a href="a">Our blog</a><br/>
                        <a href="z">Our tech blog, Grubhub Bytes</a><br/>
                        <a href="x">Careers</a><br/>
                        <a href="x">Investor relations</a><br/>
                        <a href="d">News</a>
                    </div>
                    <div class="col-md-3 box39">
                        <p class="boxcol3">Useful links</p>
                        <a href="s">Gift cards</a><br/>
                        <a href="j">Grubhub+</a><br/>
                        <a href="f">Grubhub Guarantee</a><br/>
                        <a href="d">Grubhub Perks</a>
                        <br/><a href="s">Help</a><br/>
                        <a href="d">Catering</a><br/>
                        <a href="d">Student discounts</a><br/>
                        <a href="m">Keyboard Shortcuts</a><br/>
                        <a href="m">Answers</a><br/>
                        <a href="d">Amazon Prime Deal</a><br/><br />
                        <p className='partnerpara'>Connect with us</p>
                        <a href="d">Facebook</a><br/>
                        <a href="d">Twitter/X</a><br/>
                        <a href="s">Instagram</a><br/>
                        <a href="s">YouTube</a>
                    </div>
                    <div class="col-md-3 box40">
                        <p class="boxcol4">Partner with us</p><br />
                        <div className='partnerdiv1'>
                             <Link className='partnerLink1' to="/">For restaurants</Link><br /><br />
                        </div>
                       <div className="partnerdiv1">
                           <Link className='partnerLink2' to="/">For drivers</Link><br /><br />
                       </div>
                        <div className="partnerdiv1">
                            <Link className='partnerLink3' to="/">For corporate accounts</Link><br /><br />
                        </div>
                        <div className="partnerdiv1">
                            <Link className='partnerLink4' to="/">Become an Affiliate</Link><br /><br />
                        </div>
                        <div className="partnerdiv1">
                            <Link className='partnerLink5' to="/">For campuses & hotels</Link>
                        </div>                       
                    </div>
                </div><hr/>
            </div>
            <div class="box41">
                <p>Browse delivery restaurants</p>
            </div>
            <div className="container">
                <div className="row">
                    <div class="col-md-3">
                        <p>Browse by cuisines</p>
                        <a href="s">Alcohol delievery</a><br/>
                        <a href="d">American Food delivery</a><br/>
                        <a href="d">Asian Food delivery</a><br/>
                        <a href="x">Breakfast delivery</a><br/>
                        <a href="b">Chicken delivery</a><br/>
                        <a href="g">Chienese Food delivery</a><br/>
                        <a href="j">Dessert delivery</a><br/>
                        <a href="k">Dinner delivery</a><br/>
                        <a href="d">Gluten-free delivery</a><br/>
                        <a href="a">Healthy Food delivery</a><br/>
                        <a href="e">Ice-Cream delivery</a><br/>
                        <a href="c">Indian Food delivery</a><br/>
                        <a href="h">Italian Food delivery</a><br/>
                        <a href="k">Japenese delivery</a><br/>
                        <a href="w">Late Night delivery</a><br/>
                        <a href="x">Lunch delivery</a><br/>
                        <a href="y">Mexican Food delivery</a><br/>
                        <a href="z">Organic delivery</a><br/>
                        <a href="a">Pasta delivery</a><br/>
                        <a href="b">Pizza delivery</a><br/>
                        <a href="v">Sandwiches delivery</a><br/>
                        <a href="s">Seafood delivery</a><br/>
                        <a href="r">Soup delivery</a><br/>
                        <a href="s">Steak delivery</a><br/>
                        <a href="i">Sushi delivery</a><br/>
                        <a href="b">Thai Food delivery</a><br/>
                        <a href="k">Vegetarian Food delivery</a><br/>
                        <a href="f">Wings delivery</a><br/>
                        <a href="s" class="box42">See more</a>
                    </div>
                <div class="col-md-3">
                    <p>Browse by cities</p>
                    <a href="a">Ann Arbor restaurants</a><br/>
                    <a href="b">Austin restaurants</a><br/>
                    <a href="c">Bloomington restaurants </a><br/>
                    <a href="d">Boulder restaurants</a><br/>
                    <a href="e">Champaign resturants</a><br/>
                    <a href="f">Columbus resturants</a><br/>
                    <a href="g">Denver restaurants</a><br/>
                    <a href="h">Fort Worth restaurants</a><br/>
                    <a href="i">Houston restaurants</a><br/>
                    <a href="j">Las Vegas restaurants</a><br/>
                    <a href="k">Madison restaurants</a><br/>
                    <a href="l">Miami restaurants</a><br/>
                    <a href="m">Nashville restaurants</a><br/>
                    <a href="n">New York City restaurants</a><br/>
                    <a href="o">Orange County restaurants</a><br/>
                    <a href="p">Phoenix restaurants</a><br/>
                    <a href="q">Portland restaurants</a><br/>
                    <a href="a">Rochester restaurants</a><br/>
                    <a href="b">San Francisco restaurants</a><br/>
                    <a href="c">Scottsdale restaurants</a><br/>
                    <a href="d">Syracuse restaurants</a><br/>
                    <a href="e">Tempe restaurants</a><br/>
                    <a href="f">Washington, DC restaurants</a><br/>
                </div>
                <div class="col-md-3">
                    <br/>
                    <a href="g">Atlanta restaurants</a><br/>
                    <a href="h">Baltimore restaurants</a><br/>
                    <a href="i">Boston restaurants</a><br/>
                    <a href="j">Brooklyn restaurants</a><br/>
                    <a href="k">Chicago restaurants</a><br/>
                    <a href="l">Dallas restaurants</a><br/>
                    <a href="m">Detroit restaurants</a><br/>
                    <a href="n">Hartford restaurants</a><br/>
                    <a href="o">Ithaca restaurants</a><br/>
                    <a href="p">Los Angeles restaurants</a><br/>
                    <a href="q">Manhattan restaurants</a><br/>
                    <a href="g">Milwaukee restaurants</a><br/>
                    <a href="h">New Haven restaurants</a><br/>
                    <a href="i">Oakland restaurants</a><br/>
                    <a href="j">Philadelphia restaurants</a><br/>
                    <a href="k">Pittsburgh restaurants</a><br/>
                    <a href="l">Qyeens restaurants</a><br/>
                    <a href="m">San Diego restaurants</a><br/>
                    <a href="n">San Jose restaurants</a><br/>
                    <a href="o">Seattle restaurants</a><br/>
                    <a href="p">Tampa restaurants</a><br/>
                    <a href="q">Urbana restaurants</a><br/>
                    <a href="s" class="box42">See more</a>
                </div>
                <div class="col-md-3">
                    <p>Browse by restaurants</p>
                    <a href="a">Restaurant Chains Delivery</a><br/>
                    <a href="b">Burger King Delivery</a><br/>
                    <a href="c">Pizza Hut Delivery</a><br/>
                    <a href="d">Denny's</a><br/>
                    <a href="e">Church's Chicken Menu</a><br/>
                    <a href="f">Papa John's Pizza</a><br/>
                    <a href="g">Restaurants Near Me</a><br/>
                    <p>Browse by dish</p>
                    <a href="h">Burgers near me</a><br/>
                    <a href="i">Bubble Tea near me</a><br/>
                    <a href="j">Pho near me</a><br/>
                    <a href="k">Milshake near me</a><br/>
                    <a href="l">Cupcakes near me</a><br/>
                    <a href="m">Donuts near me</a><br/>
                    <a href="n">Philly cheesesteak near me</a><br/>
                    <a href="o">Nachos near me</a><br/>
                    <a href="p">Funnel Cake near me</a><br/>
                    <a href="q">Dumplings near me</a><br/>
                    <a href="x">Fish Tacos near me</a><br/>
                    <a href="s">Hibachi near me</a><br/>
                    <a href="s">Colamari near me</a><br/>
                    <a href="s" class="box42">See more</a>
                </div>
            </div>
            <hr/>
        </div>
        <div class="container">
            <div class="row box47">
                <div class="col-md-3">
                    <p>© 2024 Grubhub All rights reserved.</p>
                </div>
                <div class="col-md-3">
    
                </div>
                <div class="col-md-3">
                    <a href="d">Terms of Use</a><br/>
                    <a href="s">Notice of Financial Incentive</a>
                </div>
                <div class="col-md-3 box44">
                    <a href="d">Privacy Policy</a><br/>
                    <a href="d" class="box48">Do Not Sell or Share My Personal Information</a>
                </div>
            </div>
        </div>
        </div>
        
    </section>
    </div>
  )
}

export default Home;
