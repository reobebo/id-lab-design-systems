/* ID Lab Content */
const idLabNavigationHtml=`
<nav id="nav-menu-container" class="ml-auto">
<ul class="nav-menu">
<li class="menu-active"><a href="../">Home</a></li>
<li><a href="../what-we-do">What We Do</a></li>
<li><a href="../our-team">Meet Our Team</a></li>
<li><a href="../contact-us">Contact Us</a></li>
<li class="menu-has-children"><a>Events</a>
<ul>
<li><a href="https://odi2019.depaulidlab.com/">ODI 2019</a></li>
<li><a href="https://odi2018.depaulidlab.com/">ODI 2018</a></li>
<li><a href="https://odi2017.depaulidlab.com/">ODI 2017</a></li>
<li><a href="https://agile2016.depaulidlab.com/" target="_blank">ODI 2016</a></li>
</ul>
</li>
<!--<li><a href="https://ikp.depaulidlab.com/">Knowledge Portal</a></li>-->
</ul>
</nav><!-- #nav-menu-container -->
`;

const idLabNavigationCss=`
/* ------- NAV BAR ------- */
.nav-menu, .nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-menu ul {
  position: absolute;
  display: none;
  top: 100%;
  left: 0;
  z-index: 99;
}
.nav-menu li {
  font-family: 'D-DIN DIN-Bold', serif;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 1.8px;
  position: relative;
  white-space: nowrap;
}
.nav-menu > li {
  float: left;
  margin-left: 18px;
}
.nav-menu li:hover > ul,
.nav-menu li.sfHover > ul {
  display: block;
}
.nav-menu ul ul {
  top: 0;
  left: 100%;
}
.nav-menu ul li {
  min-width: 180px;
}
.nav-menu a {
  padding-bottom: 10px;
  text-decoration: none;
  display: inline-block;
  color: #000;
  font-family: "D-DIN Regular", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 13px;
  outline: none;
}
.nav-menu > li > a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0091FF;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
.menu-has-children > a:before {
  background-color: white !important;
}
.nav-menu a:hover:before, .nav-menu li:hover > a:before, .nav-menu .menu-active > a:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
.nav-menu ul {
  margin: 4px 0 0 0;
  border: 1px solid #e7e7e7;
}
.nav-menu ul li {
  background: #fff;
}
.nav-menu ul li:first-child {
  border-top: 0;
}
.nav-menu ul li a {
  padding: 10px;
  color: #333;
  transition: 0.3s;
  display: block;
  font-size: 13px;
  text-transform: none;
}
.nav-menu ul li a:hover {
  /* background: #2dc997; */
  background: #0091FF;
  color: #fff;
}
.nav-menu ul ul {
  margin: 0;
}
.sf-arrows .sf-with-ul {
  padding-right: 30px;
}
.sf-arrows .sf-with-ul:after {
  content: "\f107";
  position: absolute;
  right: 15px;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
}
.sf-arrows ul .sf-with-ul:after {
  content: "\f105";
}
#nav-menu-container {
  float: right;
  margin: 0px 3%;
}

@media (max-width: 768px) {
  #nav-menu-container {
    display: none;
  }
}

/* ------- MOBILE NAV BAR ------- */
#mobile-nav-toggle {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  margin: 20px 20px 0 0;
  border: 0;
  background: none;
  font-size: 24px;
  display: none;
  transition: all 0.4s;
  outline: none;
  cursor: pointer;
}
#mobile-nav-toggle i {
  color: #000;
}
#mobile-nav-toggle i.fa-times {
  color: #fff;
}
#mobile-nav {
  position: fixed;
  top: 0;
  padding-top: 18px;
  bottom: 0;
  z-index: 998;
  background: rgba(225, 225, 225, 0.9);
  left: -260px;
  width: 260px;
  overflow-y: auto;
  transition: 0.4s;
}
#mobile-nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
#mobile-nav ul li {
  position: relative;
}
#mobile-nav ul li a {
  color: #000;
  font-size: 16px;
  overflow: hidden;
  padding: 10px 22px 10px 15px;
  position: relative;
  text-decoration: none;
  width: 100%;
  display: block;
  outline: none;
}
#mobile-nav ul li a:hover {
  color: #0182FF;
}
#mobile-nav ul li li {
  padding-left: 30px;
}
#mobile-nav ul .menu-has-children i {
  position: absolute;
  right: 0;
  z-index: 99;
  padding: 15px;
  cursor: pointer;
  color: #000;
}
#mobile-nav ul .menu-has-children i.fa-chevron-up {
  color: #0182FF;
}
#mobile-nav ul .menu-item-active {
  color: #0182FF;
}
#mobile-body-overly {
  width: 100%;
  height: 100%;
  z-index: 997;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(52, 59, 64, 0.9);
  display: none;
}
body.mobile-nav-active {
  overflow: hidden;
}
body.mobile-nav-active #mobile-nav {
  left: 0;
}
body.mobile-nav-active #mobile-nav-toggle {
  color: #fff;
}

@media (max-width: 768px) {
  #mobile-nav-toggle {
    display: inline;
  }
}

`;


/* ODI Content */
const odiNavigationHtml=`
<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div class="container">
      <div class="row">
        <div class="navbar-logo">
            <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/ODI logo.svg" width="170px"></a>
            <div class="logo-text text-white letter-spacer">2020</div>
        </div></div>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="fas fa-bars" style="color:#fff; font-size:25px;"></i></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto my-2 my-lg-0">
                <li class="nav-item menu-active"><a class="nav-link js-scroll-trigger" href="#home">Home</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#highlights">Highlights</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#sponsorship">Sponsorship</a></li>
                <li class="nav-item "><a class="nav-link js-scroll-trigger" href="#speakers">Speakers</a></li>
                <li class="nav-item "><a class="nav-link js-scroll-trigger" href="#location">Location</a></li>
                <li class="nav-item "><a class="nav-link js-scroll-trigger" href="#schedule">Schedule</a></li>
            </ul>
        </div>
    </div>

</nav>
`;

const odiNavigationCss=`
.navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  .navbar .container,
  .navbar .container-fluid,
  .navbar .container-sm,
  .navbar .container-md,
  .navbar .container-lg,
  .navbar .container-xl {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
  }
  .navbar-brand:hover, .navbar-brand:focus {
    text-decoration: none;
  }
  
  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }
  
  .navbar-text {
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
  }
  
  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .navbar-toggler:hover, .navbar-toggler:focus {
    text-decoration: none;
  }
  
  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
  }
  
  @media (max-width: 575.98px) {
    .navbar-expand-sm > .container,
  .navbar-expand-sm > .container-fluid,
  .navbar-expand-sm > .container-sm,
  .navbar-expand-sm > .container-md,
  .navbar-expand-sm > .container-lg,
  .navbar-expand-sm > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }
  @media (min-width: 576px) {
    .navbar-expand-sm {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-sm .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-sm .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-sm > .container,
  .navbar-expand-sm > .container-fluid,
  .navbar-expand-sm > .container-sm,
  .navbar-expand-sm > .container-md,
  .navbar-expand-sm > .container-lg,
  .navbar-expand-sm > .container-xl {
      flex-wrap: nowrap;
    }
    .navbar-expand-sm .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-sm .navbar-toggler {
      display: none;
    }
  }
  @media (max-width: 767.98px) {
    .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid,
  .navbar-expand-md > .container-sm,
  .navbar-expand-md > .container-md,
  .navbar-expand-md > .container-lg,
  .navbar-expand-md > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }
  @media (min-width: 768px) {
    .navbar-expand-md {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-md .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-md .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid,
  .navbar-expand-md > .container-sm,
  .navbar-expand-md > .container-md,
  .navbar-expand-md > .container-lg,
  .navbar-expand-md > .container-xl {
      flex-wrap: nowrap;
    }
    .navbar-expand-md .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-md .navbar-toggler {
      display: none;
    }
  }
  @media (max-width: 991.98px) {
    .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid,
  .navbar-expand-lg > .container-sm,
  .navbar-expand-lg > .container-md,
  .navbar-expand-lg > .container-lg,
  .navbar-expand-lg > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }
  @media (min-width: 992px) {
    .navbar-expand-lg {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-lg .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid,
  .navbar-expand-lg > .container-sm,
  .navbar-expand-lg > .container-md,
  .navbar-expand-lg > .container-lg,
  .navbar-expand-lg > .container-xl {
      flex-wrap: nowrap;
    }
    .navbar-expand-lg .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
  }
  @media (max-width: 1199.98px) {
    .navbar-expand-xl > .container,
  .navbar-expand-xl > .container-fluid,
  .navbar-expand-xl > .container-sm,
  .navbar-expand-xl > .container-md,
  .navbar-expand-xl > .container-lg,
  .navbar-expand-xl > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }
  @media (min-width: 1200px) {
    .navbar-expand-xl {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-xl .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-xl > .container,
  .navbar-expand-xl > .container-fluid,
  .navbar-expand-xl > .container-sm,
  .navbar-expand-xl > .container-md,
  .navbar-expand-xl > .container-lg,
  .navbar-expand-xl > .container-xl {
      flex-wrap: nowrap;
    }
    .navbar-expand-xl .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-xl .navbar-toggler {
      display: none;
    }
  }
  .navbar-expand {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand > .container,
  .navbar-expand > .container-fluid,
  .navbar-expand > .container-sm,
  .navbar-expand > .container-md,
  .navbar-expand > .container-lg,
  .navbar-expand > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-expand .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand > .container,
  .navbar-expand > .container-fluid,
  .navbar-expand > .container-sm,
  .navbar-expand > .container-md,
  .navbar-expand > .container-lg,
  .navbar-expand > .container-xl {
    flex-wrap: nowrap;
  }
  .navbar-expand .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand .navbar-toggler {
    display: none;
  }
  
  .navbar-light .navbar-brand {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.5);
  }
  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, 0.3);
  }
  .navbar-light .navbar-nav .show > .nav-link,
  .navbar-light .navbar-nav .active > .nav-link,
  .navbar-light .navbar-nav .nav-link.show,
  .navbar-light .navbar-nav .nav-link.active {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0.1);
  }
  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
  .navbar-light .navbar-text {
    color: rgba(0, 0, 0, 0.5);
  }
  .navbar-light .navbar-text a {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {
    color: rgba(0, 0, 0, 0.9);
  }
  
  .navbar-dark .navbar-brand {
    color: #fff;
  }
  .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
    color: #fff;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.5);
  }
  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(255, 255, 255, 0.75);
  }
  .navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, 0.25);
  }
  .navbar-dark .navbar-nav .show > .nav-link,
  .navbar-dark .navbar-nav .active > .nav-link,
  .navbar-dark .navbar-nav .nav-link.show,
  .navbar-dark .navbar-nav .nav-link.active {
    color: #fff;
  }
  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }
  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
  .navbar-dark .navbar-text {
    color: rgba(255, 255, 255, 0.5);
  }
  .navbar-dark .navbar-text a {
    color: #fff;
  }
  .navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {
    color: #fff;
  }

  .navbar-logo {
    display: none !important;
  }
  .navbar-toggler-right{
    margin-left: 18rem !important;
  }
  .navbar {
    display: none;
  }
  #mainNav {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    background-color: #001A2C;
    transition: background-color 0.2s ease;
  }
  #mainNav .navbar-brand {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    color: #212529;
  }
  #mainNav .navbar-nav .nav-item .nav-link {
    color: #fff;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 300;
    font-size: 1.1rem;
    padding: 0.75rem 0;
  
  }
  
  #mainNav .navbar-nav .nav-item .nav-link:hover, #mainNav .navbar-nav .nav-item .nav-link:active {
    color: #fff;
  }
  
  #mainNav .navbar-nav .nav-item .nav-link.active {
    /* color: #f4623a !important; */
    border-bottom: 2px solid #0077E0;
  
  }
  
  @media (min-width: 992px) {
    #mainNav {
      box-shadow: none;
      background-color: transparent;
    }
    #mainNav .navbar-brand {
      color: rgba(255, 255, 255, 0.7);
    }
    #mainNav .navbar-brand:hover {
      color: #fff;
    }
  
    #mainNav .navbar-brand img {
      width:10rem;
    }
  
    #mainNav .navbar-nav .nav-item .nav-link {
      color: rgba(255, 255, 255, 0.7);
      padding: 0 1.5rem;
    }
    #mainNav .navbar-nav .nav-item .nav-link:hover {
        border-bottom: 2px solid #0077E0;
    }
    #mainNav .navbar-nav .nav-item:last-child .nav-link {
      padding-right: 0;
    }
    #mainNav.navbar-scrolled {
      /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); */
      /* background-color: transparent; */
      background-color: rgba(255,255,255,0.9);;
    }
    #mainNav.navbar-scrolled .navbar-logo {
      display: none;
    }
    #mainNav.navbar-scrolled .navbar-brand {
      color: #212529;
    }
    #mainNav.navbar-scrolled .navbar-brand:hover {
      color: #f4623a;
    }
    #mainNav.navbar-scrolled .navbar-nav .nav-item .nav-link {
      color: #212529;
    }
    #mainNav.navbar-scrolled .navbar-nav .nav-item .nav-link:hover {
      color: #000;
    }
  
  }
`;

/* Knowledge Portal */
const ikpNavigationHtml=`
<div class="fxd-header logo-left" style="top: 32px; display: block;">
                <div class="container-fluid">
                    <div class="logo-box text-left alchem_header_style alchem_default_logo">
                        <a href="https://ikp.depaulidlab.com/">
                    
                                            <img class="site-logo normal_logo" alt="Knowledge Portal" src="https://ikp.depaulidlab.com/wp-content/uploads/2019/03/KP-LOGO2_website.png">
                                          
                                            </a>
                        <div class="name-box">
                            <a href="https://ikp.depaulidlab.com/"><h1 class="site-name">Knowledge Portal</h1></a>
                            <span class="site-tagline"></span>
                        </div>
                    </div>
                    <button class="site-nav-toggle">
                        <span class="sr-only">Toggle navigation</span>
                        <i class="fa fa-bars fa-2x"></i>
                    </button>
                    <nav class="site-nav" role="navigation" style="">
                        <ul id="menu-main" class="main-nav"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item menu-item-20"><a href="https://ikp.depaulidlab.com/" aria-current="page"><span class="menu-item-label">Home</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="https://ikp.depaulidlab.com/videos/"><span class="menu-item-label">Videos</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><a href="https://ikp.depaulidlab.com/aboutus/"><span class="menu-item-label">Contact Us</span></a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-144"><a href="https://depaulidlab.com/"><span class="menu-item-label"><depaulidlab id=""> DePaul iD Lab</depaulidlab></span></a></li>
<li class="menu-item menu-item-search-icon"><a href="javascript:;"><i class="fa fa-search site-search-toggle"></i></a><form role="search" class="search-form" action="https://ikp.depaulidlab.com/">
 <div>
  <label class="sr-only">Search for:</label>
   <input type="text" name="s" value="" placeholder="Search...">
   <input type="submit" value="">
  </div>
 </form></li></ul>                    </nav>
                </div>
            </div>
`;

const ikpNavigationCss=`
Unable to retreve CSS
`;



export const navigation=[idLabNavigationHtml,idLabNavigationCss,odiNavigationHtml,odiNavigationCss,ikpNavigationHtml,ikpNavigationCss];