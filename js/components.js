const components = {};

components.mainPage = `<nav id="log-in">
<img src="images/main/close.svg" class="close-btn" id="close-menu-lg">
<div class="lg-lb">
    <img src="images/base/logo_eztravel.png" id="img-lg">
    <p>Log in</p>
</div>
<p>Email</p>
<input type="email" id="email-lg" type="text" placeholder="Type your email">
<p>Username</p>
<input id="user" type="text" placeholder="Type your username">
<p>Password</p>
<input type="password" id="password-lg" type="text" placeholder="Type your password">
<button id="open-signup">Don't have an account?</button>
<input id='comfirm-lg' type="submit" value="Confirm">
</nav>
<form id="sign-up-form">
<nav id="sign-up">
<img src="images/main/close.svg" class="close-btn" id="close-menu-su">
<div class="lg-lb">
    <img src="images/base/logo_eztravel.png" id="img-su">
    <p>Sign up</p>
</div>
<p>Full Name</p>
<input type="text" id="fullname-su" type="text" placeholder="Type your name">
<div class="error-message" id="fullname-error-message"></div>
<p>Email</p>
<input type="email" id="email-su" type="text" placeholder="Type your email">
<div class="error-message" id="email-error-message"></div>
<p>Username</p>
<input type='text' id="user-su" type="text" placeholder="Type your username">
<div class="error-message" id="user-error-message"></div>
<p>Password</p>
<input type="password" id="password-su" type="text" placeholder="Type your password">
<div class="error-message" id="password-error-message"></div>
<p>Re-Password</p>
<input type="password" id="repassword-su" type="text" placeholder="Re-Type your password">
<div class="error-message" id="repassword-error-message"></div>
<button id="open-login">Already has an account?</button>
<input id='comfirm-su' type="submit" value="Confirm">
</nav>
</form>
<nav id="about-us">
<img src="images/main/close.svg" class="close-btn" id="close-menu-au">
</nav>
<form id="menu-form">
<nav id="overlay">
<img src="images/main/close.svg" class="close-btn" id="close-menu">
<ul>
    <li>
        <a id='home'>Home</a>
    </li>
    <li>
        <button id="log-in-btn">Log in</button>
    </li>
    <li>
        <button id="sign-up-btn">Sign up</button>
    </li>
    <li>
        <button id="about-us-btn">About us</button>
    </li>
</ul>
</nav>
</form>
<header>
<a href="#" class="logo">Ez Travel</a>
<img src="images/main/menu.svg" class="menu-btn" id="open-menu">
</header>
<section>
<h1>Welcome to Ez Travel</h1>
</section>
`;

components.welcomePage = `
<div class="banner">
<div id="d1" class="d1">
    <img src="images/index/d1.png" alt="d1">
</div>
<div id="d2" class="d2">
    <img src="images/index/d2.png" alt="d2">
</div>
<div id="d3" class="d3">
    <img src="images/index/d3.png" alt="d3">
</div>
<div id="d4" class="d4">
    <img src="images/index/d4.png" alt="d4">
</div>
<div id="d5" class="d5">
    <img src="images/index/d5.png" alt="d4">
</div>
<div id="d6" class="d6">
    <div class=explore id="explore">
        <a data-scroll href="#content" class="js-anchor-link" onclick="parallaxUp()">EXPLORE</a>
    </div>
    <div class="content" id="content">
        <div class="galery">
            <div class="single text-center">
                <a href="/main">
                    <div class="to-main">
                        <p>SINGLE TRIP</p>
                    </div>
                </a>
            </div>

            <div class="couple text-center">
                <a href="/main">
                    <div class="to-main">
                        <p>COUPLE TRIP</p>
                    </div>
                </a>
            </div>

            <div class="family text-center">
                <a href="/main">
                    <div class="to-main">
                        <p>FAMILY TRIP</p>
                    </div>
                </a>
            </div>

            <div class="team text-center">
                <a href="/main">
                    <div class="to-main">
                        <p>TEAM TRIP</p>
                    </div>
                </a>
            </div>
        </div>
        <a data-scroll href="#explore" class="content-up" onclick="parallaxDown()"><img class="js-anchor-link"
                src="images/index/up.png"></a>
    </div>
</div>
`;