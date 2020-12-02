/* ID Lab Home Page */
const idLabInfo = `This is the main ID Lab website home page.  NOTE: JavaScript is included on the main HTML page`;

const idLabHtml=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>DePaul iD-Lab - Home</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Favicons -->
  <link href="wp-content/themes/idlabtheme/img/logo_iDLab_png.png" rel="icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="wp-content/themes/idlabtheme/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="wp-content/themes/idlabtheme/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="wp-content/themes/idlabtheme/lib/line-awesome/css/line-awesome.min.css" rel="stylesheet">
  <link href="wp-content/themes/idlabtheme/lib/animate/animate.min.css" rel="stylesheet">
  <link href="wp-content/themes/idlabtheme/lib/d-din/d-din.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="wp-content/themes/idlabtheme/style.css" rel="stylesheet">
</head>

<body>

  <!--==========================
  Header
  ============================-->
  <header id="header">
    <div class="container-fluid d-flex align-items-center">

      <div id="logo" class="pull-left">
        <a href="#hero"><img src="wp-content/themes/idlabtheme/img/logo_iDLab.svg" alt="" title="" /></a>
      </div>

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
    </div>
  </header><!-- #header -->

  <main id="main">

    <section id="about" class="fade-scroll">
      <div class="container-fluid">
        <div class="about-container">
          <div id="particles-js" class="row w-100 h-100 animated fadeIn"></div>
          <div class="row">
            <div id="welcome-heading" class="col-lg-8">
              <div id="lab-name">DEPAUL INNOVATION DEVELOPMENT LAB</div>
              <div class="txt-xl">We Bring Innovative Ideas to Life</div>
              <div class="welcome-text txt-rg">
                We partner and collaborate with our clients to provide excellent service on turning innovative ideas into functional and testable prototypes at a quick turnaround.
              </div>
<!--              <a id="btn-welcome" href="#" class="btn no-radius uppercase">Learn more-->
<!--                <span class="la la-arrow-right left-sapce"></span>-->
<!--              </a>-->
            </div>
          </div>
          <div class="row">
            <div id="bottom-arrow" class="col-md-12 text-center">
              <div id="button-arrow">
                <a href="#strategies"><i class="la la-arrow-down la-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="strategies" class="h-100">
      <div class="container-fluid">
        <div id="strategies-content-1" class="row fade-scroll">
          <div id="strategies-text" class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div class="txt-lg text-light strategies-title">Our Mission</div>
            <div class="txt-rg text-light strategies-description justify-content-md-center">We partner and collaborate with our clients to provide excellent service on turning innovative ideas into functional and testable prototypes at a quick turnaround.</div>
            <br>
            <div class="txt-lg text-light strategies-title">Our Vision</div>
            <div class="txt-rg text-light strategies-description justify-content-md-center">We envision growing into a leading technology innovation hub in the city of Chicago through partnership with top companies from diverse industries, and to create and develop industry-focused, user-centric innovative ideas that will adapt to the needs of a rapidly changing world.</div>
<!--            <a id="btn-case-studies-2" href="#" class="btn-case-studies btn no-border btn-arrow txt-btn">See case studies <span class="la la-arrow-right left-space"></span></a>-->
          </div>
          <div class="col-xs-12 colsm-12 col-md-12 col-lg-6 col-xl-6 strategies-image-div">
            <img id="strategies-image-1" class="strategies-image" src="wp-content/themes/idlabtheme/img/hero-section.jpg">
          </div>
        </div>
      </div>
    </section>

    <section id="foundation">
      <div class="container-fluid">
        <div class="col-12">
          <div id="foundation-yele" class="row justify-content-end">
            <div id="foundation-pic" class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
              <div id="foundation-imagebox" class="d-flex justify-content-md-center justify-content-lg-start justify-content-xl-start">
                <img src="wp-content/themes/idlabtheme/img/new-foundation-yele.jpg">
              </div>
            </div>
            <div id="foundation-text" class="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 px-lg-1">
              <div id="foundation-title" class="d-flex flex-row align-items-center txt-lg">
                <div>How We Started</div>
                <div class="divider"><div class="inner"></div></div>
              </div>
              <div id="foundation-description" class="txt-rg text-justify">
                DePaul’s ID Lab was founded by Dr. Olayele Adelakun based on his research on Information Technology innovation and outsourcing which led to the development of re-defining the University – Corporate relationship. The ID Lab was born and designed to grow into a leading innovation hub in Chicago through a partnership between the University and top companies in the industry through top development, design and data analytics.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="our-thinking">
      <div class="container-fluid">
        <div class="row">
          <div id="our-thinking-title" class="d-flex flex-row align-items-center txt-lg">
            <div>Our thinking</div>
            <div class="divider"><div class="inner"></div></div>
          </div>
        </div>
        <div id="our-thinking-background"class="row">
          <div id="our-thinking-box"></div>
          <div id="our-thinking-1" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h2 class="txt-md">Collaboration is at the Center of Our Core</h2>
            <div id="our-thinking-1-description" class="txt-rg text-justify">
              We take on your complex challenge and look at the big question to develop your innovative idea and
              create a user-centric solution that will grow your business and create meaningful relationships with
              your users. We ensure having a functional prototype at a quick turnaround using the agile methodology.
            </div>
          </div>
          <div id="our-thinking-2" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h2 class="txt-lg">What’s Agile?</h2>
            <div id="our-thinking-2-description" class="txt-rg text-justify">
              A method that values individuals, interactions and progress. We   collaborate closely with our customers
              so that we can respond to change in real time from direct feedback and deliver changes at a fast pace.
              We use  University research resources such as the usability lab and 3D printing to deliver the best
              results to you.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="our-clients" > <!--class="fade-scroll"-->
      <div class="container-fluid">
        <div id="our-clients-content" class="row justify-content-center">
          <div id="our-clients-title" class="col-12 txt-lg text-center">Our clients</div>
          <div id="our-clients-list" class="row justify-content-center align-items-center col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-12">
            <div class="our-clients-client">
              <a>
                <img src="wp-content/themes/idlabtheme/img/clients/abbott.png" class="w-100 h-100">
              </a>
            </div>
            <div class="our-clients-client">
              <a>
                <img src="wp-content/themes/idlabtheme/img/clients/career-builder.png" class="w-100 h-100">
              </a>
            </div>
            <div class="our-clients-client">
              <a>
                <img src="wp-content/themes/idlabtheme/img/clients/allstate.png" class="w-100 h-100">
              </a>
            </div>
            <div class="our-clients-client">
              <a>
                <img src="wp-content/themes/idlabtheme/img/clients/bosch.png" class="w-100 h-100">
              </a>
            </div>
            <div class="our-clients-client cdw-logo">
              <a>
                <img src="wp-content/themes/idlabtheme/img/clients/cdw.png" class="w-100 h-100">
              </a>
            </div>
            <div class="our-clients-client">
              <a>
                <img src="wp-content/themes/idlabtheme/img/clients/digitalmint.png" class="w-100 h-100">
              </a>
            </div>
            <div class="our-clients-client">
              <a>
                <img src="wp-content/themes/idlabtheme/img/clients/continental.png" class="w-100 h-100">
              </a>
            </div>
            <div class="our-clients-client">
              <a>
                <img src="wp-content/themes/idlabtheme/img/clients/kimberly.png" class="w-100 h-100">
              </a>
            </div>
            <div class="our-clients-client">
              <a>
                <img src="wp-content/themes/idlabtheme/img/clients/baxter.png" class="w-100 h-100">
              </a>
            </div>
            <div class="our-clients-client legalGeneral-logo">
              <a>
                <img src="wp-content/themes/idlabtheme/img/clients/legal_general.png" class="w-100 h-100">
              </a>
            </div>
          </div>
        </div>
		</div>
      </section>

    <section id="leadership" class="col-12">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div id="leadership-heading" class="row justify-content-center col-xs-12 col-sm-12 col-md-9 col-lg-7 col-xl-6">
            <div id="leadership-title" class="txt-lg">Leadership</div>
<!--              <div id="leadership-text" class="txt-rg text-center">-->
<!--                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply Lorem -->
<!--              </div>-->
          </div>
        </div>
        <div class="leadership-group row justify-content-center">
          <div class="row justify-content-center col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-9">
            <div class="leadership-item col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <a href="https://www.linkedin.com/in/patrickemmons/" class="just-link" target="_blank">
              <img src="wp-content/themes/idlabtheme/img/board/patrick.jpg">
              <div class="board-name px-3 pt-4">Patrick Emmons</div>
              <div class="board-title px-3 pb-4">CEO <br><br> DragonSpears</div>
              </a>
            </div>
            <div class="leadership-item col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <a href="https://www.linkedin.com/in/nickionita/" class="just-link" target="_blank">
              <img src="wp-content/themes/idlabtheme/img/board/nick.jpg">
              <div class="board-name px-3 pt-4">Nick Ionita</div>
              <div class="board-title px-3 pb-4">Co-Founder/CEO <br><br> Flux</div>
              </a>
            </div>
            <div class="leadership-item col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <a href="https://www.linkedin.com/in/lawrenceedwardjohnson/" class="just-link" target="_blank">
              <img src="wp-content/themes/idlabtheme/img/board/lawrence.JPG">
              <div class="board-name px-3 pt-4">Lawrence Johnson</div>
              <div class="board-title px-3 pb-4">
                SVP and Head of Fintech Engagement <br><br> Morningstar
              </div>
              </a>
            </div>
            <div class="leadership-item col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <a href="https://www.linkedin.com/in/ram-jambunathan-350667/" class="just-link" target="_blank">
              <img src="wp-content/themes/idlabtheme/img/board/ram.jpg">
              <div class="board-name px-3 pt-4">Ram Jambunathan</div>
              <div class="board-title px-3 pb-4">SVP and Managing Director <br><br> SAP</div>
              </a>
            </div>
            <div class="leadership-item col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <a href="https://www.linkedin.com/in/lauren-rosen-growth-strategy/" class="just-link" target="_blank">
              <img src="wp-content/themes/idlabtheme/img/board/lauren.jpg">
              <div class="board-name px-3 pt-4">Lauren Rosen</div>
              <div class="board-title px-3 pb-4">Innovation Partner - Office of Innovation <br><br> Salesforce</div>
              </a>
            </div>
            <div class="leadership-item col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <a href="https://www.linkedin.com/in/dwayne-prosko-a1350/" class="just-link" target="_blank">
                <img src="wp-content/themes/idlabtheme/img/board/dwayneProsko.jpg">
                <div class="board-name px-3 pt-4">Dwayne Prosko</div>
                <div class="board-title px-3 pb-4">Managing Director <br><br> KPMG</div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section id="business">
      <div class="container-fluid">
        <div class="row row-eq-height">
          <div class="business-container d-flex col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div id="business-left" class="business-box col-12">
              <div id="business-left-title" class="business-title btm-box-title">Strategic Partnership</div>
              <div id="business-left-text" class="business-text btm-box-text">
                Looking for help to expand your innovative portfolio and add value to your business? Let us become
                your strategic partner and grow your business by using our expertise in data analytics, software
                development and UI/UX design.
              </div>
              <a id="business-left-btn" href="../contact-us" class="btn btn-business no-radius btn-arrow txt-box-btn">Get Involved<span class="la la-arrow-right left-sapce"></span></a>
            </div>
          </div>
          <div class="business-container d-flex col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div id="business-right" class="business-box col-12">
              <div id="business-right-title" class="business-title btm-box-title">Business Inquiry</div>
              <div id="business-right-text" class="business-text btm-box-text">
                Want to learn more about us, or need help with a problem, or developing a specific solution?  Get in
                touch with us to learn our capabilities and what we can do for your business.
              </div>
              <a id="business-right-btn" href="../contact-us" class="btn btn-business no-radius btn-arrow txt-box-btn">Contact Us<span class="la la-arrow-right left-sapce"></span></a>
            </div>
          </div>
        </div>
        </div>
      </section>

  </main>

      <!--==========================
      Footer
      ============================-->
      <?php include('footer.php'); ?>

        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

        <!-- JavaScript Libraries -->
        <script src="wp-content/themes/idlabtheme/lib/jquery/jquery.min.js"></script>
        <script src="wp-content/themes/idlabtheme/lib/jquery/jquery-migrate.min.js"></script>
        <script src="wp-content/themes/idlabtheme/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="wp-content/themes/idlabtheme/lib/easing/easing.min.js"></script>
        <script src="wp-content/themes/idlabtheme/lib/wow/wow.min.js"></script>
        <script src="wp-content/themes/idlabtheme/lib/waypoints/waypoints.min.js"></script>
        <script src="wp-content/themes/idlabtheme/lib/counterup/counterup.min.js"></script>
        <script src="wp-content/themes/idlabtheme/lib/superfish/hoverIntent.js"></script>
        <script src="wp-content/themes/idlabtheme/lib/superfish/superfish.min.js"></script>
        <script src="wp-content/themes/idlabtheme/lib/particlesJS/particles.js"></script>

        <!-- Contact Form JavaScript File -->
        <script src="wp-content/themes/idlabtheme/contactform/contactform.js"></script>

        <!-- Template Main Javascript File -->
        <script src="wp-content/themes/idlabtheme/js/main.js"></script>

        <!-- Background effect -->
        <script type="text/javascript">
        particlesJS("particles-js", {
          "particles": {
            "number": {
              "value": 200,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#000000"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 30,
              "color": "#000000",
              "opacity": 0.4,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
        </script>

      </body>
      </html>
`

const idLabCss=`
/*----------------------------------------------------------------------------------------------------------------------
# Home Page
----------------------------------------------------------------------------------------------------------------------*/

/* ------- ABOUT SECTION ------- */
#particles-js {
  background-color: white;
  z-index: -1;
  position: absolute;
}
#about {
  width: 100%;
  min-height: 100vh;
  background: rgba(216, 216, 216, 0);
}
#lab-name {
    font-family: 'D-DIN Regular', serif;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1px;
    margin-top: 15px;
    color: #0182FF;
}
#btn-welcome {
  text-align: center;
  font-family: 'D-DIN DIN-Bold', serif;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 2.5px;
  background: #0182FF;
  color: white;
  padding: 10px 25px;
  position: relative;
}

#btn-welcome span {
  font-size: 14px;
  position: absolute;
  top: 30%;
  margin-left: 10px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

#btn-welcome:hover span {
  margin-left: 20px;
}
#welcome-heading {
  padding: calc(70px + 5%) 10% 10%;
  height: calc((100vh - 180px));
}
#bottom-arrow {
  margin: 5em 0 2em 0;
  height: 100%;
}
#button-arrow {
  display: flex;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #FF8C00;
}
#button-arrow a {
  display: flex;
  margin: auto;
  color: white;
}

@media(min-width: 768px) {
  #lab-name {
    font-size: 14px;
  }
}

/* ------- STRATEGIES SECTION ------- */
#strategies-text {
  background-color: rgb(15, 20, 41);
  padding: 2em;
}
.strategies-title {
  margin-bottom: 5%;
}
.strategies-description {
  letter-spacing: 1px;
  justify-content: center;
}
.btn-case-studies {
  padding-left: 0 !important;
  color: #FF8C00 !important;
  margin: 3% 0;
}
.strategies-image-div {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.strategies-image {
  width: 100%;
  height: 100%;
}

@media (min-width: 768px) {
  #strategies-text {
    padding: 8% 5%;
  }
}

/* ------- FOUNDATION SECTION ------- */
#foundation-pic img{
  width: 319px;
  height: 388px;
  margin-left: auto;
  margin-right: auto;
  max-width:200px
  max-height: 52px;
  /*margin-top: 2em;*/
}
#foundation-text {
  z-index: -1;
}
#foundation-title {
  font-family: 'D-DIN DIN-Bold', serif;
  font-size: 26px;
  color: #0E0E0E;
  letter-spacing: 2px;
  text-align: center;
  padding: 2em 0
}
#foundation-description {
  padding: 2em;
  background: #EFF0F1;
  font-family: 'D-DIN Regular', serif;
  font-size: 14px;
  color: #000000;
  letter-spacing: 1px;
  line-height: 30px;
}
.divider {
  display: none;
}

@media (min-width: 768px) {
  #foundation-yele {
    padding: 5em;
    min-height: 900px;
  }
  #foundation-text {
    position: absolute;
    top: 100px;
    right: 35%;
    width: 450px;
  }
  #foundation-title {
    margin-left: 2em;
  }
  .inner {
    width: 120px;
  }
  #foundation-description {
    padding: 3em;
  }
  #foundation-pic {
    position: absolute;
    left: 60%;
    width: 250px;
  }
  #foundation-pic img {
    width: 204px;
    height: 280px;
  }
  .divider {
    display: inherit;
    margin-left: 1em;
  }
}
@media (min-width: 1200px) {
  #foundation-text {
    top: 200px;
    right: 40%;
    width: 570px;
  }
  #foundation-title {
    margin-left: 3em;
  }
  .inner {
    width: 200px;
  }
  #foundation-description {
    padding: 5em;
  }
  #foundation-pic {
    left: 55%;
    width: 350px;
  }
  #foundation-pic img {
    width: 280px;
    height: 356px;
  }
}


/* ------- OUR THINKING SECTION ------- */
#our-thinking h2 {
  color: #0182FF;
}

#our-thinking-title {
  margin: 2em auto;
  text-align: center;
}
#our-thinking-background {
  margin: 0 5%;
  width: 90%;
}
#our-thinking-1 {
  background-color: white;
  padding: 3em;
  margin-bottom: 1em;
  box-shadow: 0 2px 40px 0 rgba(0,0,0,0.15);
  height: 100%;
}
#our-thinking-2 {
  background-color: white;
  padding: 3em;
  margin-bottom: 1em;
  box-shadow: 0 2px 40px 0 rgba(0,0,0,0.15);
  height: 100%;
}

@media (min-width: 768px) {
  #our-thinking-title {
    margin: 2em 0 1em 30%;
    text-align: right;
  }
  #our-thinking-box {
    position: absolute;
    left: calc((100% - 768px)/2);
    height: 500px;
    width: 768px;
    background: url('img/our-thinking.jpg') no-repeat;
    background-size: cover;
  }
  #our-thinking-background {
    max-width: 950px;
    margin: 0 auto 5em;
  }
  #our-thinking-1 {
    margin: 0;
    position: relative;
    top: -8em;
    left: 50%;
    min-height: 350px;
  }
  #our-thinking-2 {
    margin: 0;
    position: relative;
    top: 16em;
    right: 50%;
    min-height: 300px;
  }
  #our-thinking-heading {
    margin-top: 50px;
  }
}

@media (min-width: 1025px) {
  #our-thinking-box {
    left: calc((100% - 850px)/2);
    width: 850px;
  }
}

/* ------- OUR CLIENTS SECTION ------- */
#our-clients {
  padding: 2em 0;
}
#our-clients-title {
  font-family: 'D-DIN DIN-Bold', serif;
  font-size: 26px;
  letter-spacing: 1.9px;
  line-height: 28px;
  color: black;
  margin-top: 127px;
  margin-bottom: 60px;
}
.our-clients-client {
  margin: 21px 35px;
  width: 200px;
  height: 52px;
}
.cdw-logo {
  width: 155px;
  height: 95px;
}
.legalGeneral-logo {
  width: 160px;
  height: 84px;
}


/* ------- LEADERSHIP SECTION ------- */
#leadership {
  background: rgba(216, 216, 216, .16);
}
#leadership-title {
  margin-top: 10%;
  margin-bottom: 5%;
}
#leadership-text {
  padding-bottom: 5%;
}
.leadership-group {
  padding: 1% 0;
  padding: 0 5% 10%;
}
.leadership-item {
  transition: box-shadow .3s;
  box-shadow: 0 2px 40px 0 rgba(0,0,0,0.04);
  margin: 29px 15px;
  background: #fff;
  position:relative;
  padding: 0;
}
.leadership-item img {
  width: 100%;
  /*filter: gray;*/
  /*-webkit-filter: grayscale(1);*/
  transition: all .8s ease-in-out;
  -webkit-transition: all .8s ease-in-out;
}
.leadership-item img:hover {
  filter: none;
  -webkit-filter: grayscale(0);
  transform: scale(1.01);
  -webkit-transform: scale(1.01);
}
.leadership-item:hover {
  box-shadow: 0 0 20px rgba(33,33,33,.3);
}
.board-name {
  font-family: 'D-DIN DIN-Bold', serif;
  font-size: 16px;
  letter-spacing: 1.2px;
  line-height: 17px;
  color: black;
  padding: 5% 3%;
}
.board-title {
  font-family: 'D-DIN Regular', serif;
  font-size: 12px;
  letter-spacing: .9px;
  line-height: 13px;
  color: #777777;
  padding: 3%;
}

@media (min-width: 768px) {
  .leadership-group {
    padding: 0 5% 10%;
  }
  #our-clients {
    padding: 10em 0;
  }
}

`;

const idLabJs=`
JavaScript is contained in the HTML Section
`

/* odi homepage */

const odiInfo=`This is the ODI 2020 Homepage which contains sections such as Home, About, Highlights,Sponsorship, Speakers, Location, and Schedule.  NOTE: JavaScript is included in the main HTML Page`

const odiHtml=`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="ODI 2020 - iD Lab" />
        <meta name="keywords" content="odi-2020, odi 2020, odi2020, idlab, id-lab, id lab, depaul, depaul university, cdm, college of computing, college of computing and digital media, depaul cdm, odi, optimizing digital innovation, innovation lab, depaul innovation lab, depaul innovation development lab, depaul innovation development laboratory, depaul idlab, depaul id-lab, depaul id lab, innovation, design, development, ui, ux, ui-ux, ui ux,">
        <meta name="author" content="iD Lab" />
        <title>iD Lab ODI - 2020</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/img/ODI logo.svg" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
        <!-- Third party plugin CSS-->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" />
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />


    </head>
    <body id="page-top">
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
      <!-- Masthead-->

      <!-- Home-->
      <header class="masthead" id="home">
          <div class="container h-100">
              <div class="row h-100 align-items-center justify-content-center text-center">
                  <div class="col-lg-10 align-self-center">
                      <h1 class="text-capitalize text-white font-weight-light letter-spacer pt-7 header-text">Optimize Digital Innovation:</h1>
                      <h1 class="sub-text text-left text-white font-weight-bold letter-spacer header-text2">For a Great Reset</h1>
                  </div>

                  <div class="col-lg-10 align-self-start pad-more">
                      <div class="hero-img-div justify-content-left text-left">
                          <img src="assets/img/HighLight.svg" width="49px" height="81px">
                      </div>
                      <div class="hero-detail-div justify-content-left text-left">
                          <p class="text-white font-weight-light mb-3 hero-detail-para sub-text">October 15th-16th, 2020</p>
                          <p class="text-white font-weight-light sub-text">DePaul University, Chicago, IL</p>
                      </div>
                  </div>

                  <div class="col-lg-10 align-self-start pad-more">
                      <div class="justify-content-left text-left pad-more header-button d-flex">
                        <!-- <a class="btn btn-secondary btn-xl text-uppercase resp-button disabled" href="#">Registeration Comming Soon</a> -->
                        <a target="_blank" class="btn btn-outline-blue btn-xl text-uppercase resp-button" href="https://my.cdm.depaul.edu/CIM/ODIConf/register">Register Here</a>
                        <a class="btn btn-danger btn-xl text-uppercase resp-button mx-3" href="#">Join Conference</a>
                      </div>

                        <!--Modal-->
                        <div class="modal modal-open" id="registrationModal" tabindex="-1" role="dialog">
                            <div class="modal-dialog modal-show" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div> <img  class="modal-image" width="115px" src="./assets/img/Group 103.svg"/></div>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body justify-content-center">
                                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdFv8p-eUgvvTK21U-tCkgsVmcrzpcTZe2brfRY3mdkoKO-Jw/viewform?embedded=true" width="100%" height="750" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!--Modal-->
                        <div class="modal modal-open" id="codeModal" tabindex="-1" role="dialog">
                          <div class="modal-dialog modal-show" role="document">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <div> <img  class="modal-image" width="115px" src="./assets/img/Group 103.svg"/></div>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div class="modal-body justify-content-center">
                                    <p id ="error-message" style="color: red; display: none;">Registration code is incorrect, please try again.</p>
                                    <p>Enter your registration code: </p>
                                    <div>
                                      <form name="registrationCode">
                                        <input class="justify-content-center" type="password" name="inputCode"/>

                                        <div class="regSubmit modal-button">
                                          <input type="button" class="btn btn-secondary btn-xl text-uppercase" onclick="check(this.form)" value="Submit"/>

                                        </div>
                                      </form>

                                    </div>

                                  </div>
                                  <div class="modal-footer">
                                      <p class="text-left"><a class="text-left noRegCode" >Payment Registration Coming Soon!</a></p>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>

                  <div class="justify-content-center align-self-baseline hero-arrow-div">
                      <a class="btn js-scroll-trigger" href="#about"><img src="assets/img/Arrow%20Button.svg"></a>
                  </div>

              </div>
          </div>
      </header>

      <!-- About-->
      <section class="page-section bg-about" id="about">
        <div class="container">
            <div class="row justify-content-center pt-5 pb-3 mt-5 mb-5">
                <div class="col-md-6 text-left">
                    <h1 class="text-bold text-big font-weight-bold about-logo mb-5 small-margin">What is <img class="small-image" src="./assets/img/Group 103.svg" height="40.0rem"> &nbsp?</h1>
                    <p class="text-light-grey" style="line-height: 2em;">The Optimizing Digital Innovation Conference is an annual gathering hosted by the DePaul Innovation Development Lab. Each year, nearly 200 industry professionals from a number of Fortune 500 Companies come together to discuss new ways that their organizations can approach innovation. The event features discussions with speakers ranging from Executives and Sr. Directors to Academics and Award-Winning Authors. ODI is a one-of-a-kind opportunity to network and learn groundbreaking innovation strategies that can be applied at any level.</p>

                </div>

                <div class="col-md-6 col-xs-12 text-center">

                    <div class="row justify-content-center pt-8 row-small">
                        <div class="col-sm col-small col-xs-4">
                            <h1 class="text-idlab-blue font-weight-bold letter-spacer2">138</h1>
                            <p class="text-light-grey2">Professionals attended the ODI 2019</p>
                        </div>
                        <div class="col-sm col-small col-xs-4">
                            <h1 class="text-idlab-blue font-weight-bold letter-spacer2">39+</h1>
                            <p class="text-light-grey2">Companies participated to make the event happen</p>
                        </div>
                        <div class="col-sm col-small col-xs-4">
                            <h1 class="text-idlab-blue font-weight-bold letter-spacer2">39</h1>
                            <p class="text-light-grey2">Speakers shared their knowledge about Innovation</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </section>

      <!-- Highlights-->
      <section class="page-section" id="highlights">
          <div class="container mt-3">
              <h1 class="text-left text-uppercase text-small letter-spacer2 font-weight-bold mt-0"><img class="rectangleTitle" width="25px" src="./assets/img/Rectangle 4690.svg"/> 2019 Highlights</h1>

              <div class="row justify-content-center resp-row">

                  <div class="col-md-5 mt-3 pl-6 pt-3 highlights-links resp-padding">
                      <a class="data-toggler resp-anchor-first" data-id="#Reception"><h3 class="font-weight-normal lh">Reception</h3></a>
                      <a class="data-toggler resp-anchor" data-id="#Keynotes"><h3 class="font-weight-normal lh">Keynotes</h3></a>
                      <a class="data-toggler resp-anchor" data-id="#Panels"><h3 class="font-weight-normal lh">Panels</h3></a>
                      <a class="data-toggler resp-anchor" data-id="#Booths"><h3 class="font-weight-normal lh">Booths</h3></a>
                      <a class="data-toggler resp-anchor" data-id="#Sponsors"><h3 class="font-weight-normal lh">Sponsors</h3></a>
                      <a class="data-toggler resp-anchor-last" data-id="#FeaturedSpeakers"><h3 class="font-weight-normal lh">Featured Speakers</h3></a>


                  </div>
                  <div class="col-md-7 text-center pt-4">
                      <div>
                          <div id="Reception" class="data-toggle">
                              <div id="carouselCaptions" class="carousel slide" data-ride="carousel">
                                  <ol class="carousel-indicators">
                                      <li data-target="#carouselCaptions" data-slide-to="0" class="active"></li>
                                      <li data-target="#carouselCaptions" data-slide-to="1"></li>
                                  </ol>
                                  <div class="carousel-inner">

                                      <div class="carousel-item highlights active">
                                          <img src="./assets/img/reception/reception1.JPG" height="385px" class="d-block w-95" alt="reception #1">
                                          <div class="carousel-caption d-none d-md-block bg-white">
                                              <p class="carousel-para">A crucial component of our convention is the opportunity for networking. Last year, ODI hosted a reception where participants were able to socialize and discuss the new ideas they had learned. </p>
                                          </div>
                                      </div>
                                      <div class="carousel-item highlights ">
                                          <img src="./assets/img/reception/reception2.JPG" height="385px" class="d-block w-95" alt="reception #2">
                                          <div class="carousel-caption d-none d-md-block bg-white">
                                              <p class="carousel-para">Networking Reception at MorningStar</p>
                                          </div>
                                      </div>

                                  </div>
                                  <a class="carousel-control-prev image-rotater-left" href="#carouselCaptions" role="button" data-slide="prev">
                                    <img class="image-rotater-left" src="./assets/img/Arrow Button-blue.svg">
                                    <span class="sr-only">Previous</span>
                                  </a>
                                  <a class="carousel-control-next image-rotater-right" href="#carouselCaptions" role="button" data-slide="next">
                                    <img class="image-rotater-right" src="./assets/img/Arrow Button-blue.svg">

                                    <span class="sr-only">Next</span>
                                  </a>
                              </div>

                          </div>

                          <div id="Keynotes" class="data-toggle" style="display:none;">
                              <div id="carouselCaptions2" class="carousel slide" data-ride="carousel">
                                  <ol class="carousel-indicators">
                                      <li data-target="#carouselCaptions2" data-slide-to="0" class="active"></li>
                                      <li data-target="#carouselCaptions2" data-slide-to="1"></li>
                                  </ol>
                                  <div class="carousel-inner">

                                      <div class="carousel-item highlights active">
                                          <img src="./assets/img/keynote/keynotes.jpg" height="385px" class="d-block w-95" alt="keynote #1">
                                          <div class="carousel-caption d-none d-md-block bg-white">

                                              <!-- <p class="carousel-para">ODI 2019 was honored to host a panel of successful CIOs and CEOs who shared their insights about enterprise level innovation challenges.</p> -->
                                              <p class="carousel-para">(pictured: Lauren Rosen: Innovation Partner - Office of Innovation at Salesforce)</p>
                                          </div>
                                      </div>
                                      <div class="carousel-item highlights">
                                          <img src="./assets/img/keynote/keynotes2.jpg" height="385px" class="d-block w-95" alt="keynote #2" style=" justify-content: center; align-items: center;">
                                          <div class="carousel-caption d-none d-md-block bg-white">
                                              <!-- <h5>2 slide label</h5> -->
                                              <p class="carousel-para">Our 2019 speaker, accomplished astrophotographer Jon Carmichael, gave an insightful look into the innovation of his field. He shared both his striking images and his process behind them. </p>
                                          </div>
                                      </div>

                                  </div>
                                  <a class="carousel-control-prev image-rotater-left" href="#carouselCaptions2" role="button" data-slide="prev">
                                    <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                                    <img class="image-rotater-left" src="./assets/img/Arrow Button-blue.svg">
                                    <span class="sr-only">Previous</span>
                                  </a>
                                  <a class="carousel-control-next image-rotater-right" href="#carouselCaptions2" role="button" data-slide="next">
                                    <img class="image-rotater-right" src="./assets/img/Arrow Button-blue.svg">

                                    <span class="sr-only">Next</span>
                                  </a>
                              </div>
                          </div>

                          <div id="Panels" class="data-toggle" style="display:none;">
                              <div id="carouselCaptions3" class="carousel slide" data-ride="carousel">
                                  <ol class="carousel-indicators">
                                      <li data-target="#carouselCaptions3" data-slide-to="0" class="active"></li>
                                  </ol>
                                  <div class="carousel-inner">

                                      <div class="carousel-item highlights active pr-0 mr-0">
                                          <img src="./assets/img/panel/panel1.jpg" height="385px" class="d-block w-95" alt="panel #1">
                                          <div class="carousel-caption d-none d-md-block bg-white">
                                              <!-- <h5>1 slide label</h5> -->
                                              <p class="carousel-para"> ODI 2019 also featured panel discussions from our very own iD Lab alumni. </p>
                                              <p class="carousel-para">(pictured: Dhyaanesh Mullagur Rangasamy: Software Engineer, Rommel Taylor: Product Owner/Lab Manager, Akbar Aidarov: Data Science)</p>
                                          </div>
                                      </div>

                                  </div>
                                  <a class="carousel-control-prev image-rotater-left" href="#carouselCaptions3" role="button" data-slide="prev">
                                    <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                                    <img class="image-rotater-left" src="./assets/img/Arrow Button-blue.svg">
                                    <span class="sr-only">Previous</span>
                                  </a>
                                  <a class="carousel-control-next image-rotater-right" href="#carouselCaptions3" role="button" data-slide="next">
                                    <img class="image-rotater-right" src="./assets/img/Arrow Button-blue.svg">

                                    <span class="sr-only">Next</span>
                                  </a>
                              </div>
                          </div>

                          <div id="Booths" class="data-toggle" style="display:none;">
                              <div id="carouselCaptions4" class="carousel slide" data-ride="carousel">
                                  <ol class="carousel-indicators">
                                      <li data-target="#carouselCaptions4" data-slide-to="0" class="active"></li>
                                  </ol>
                                  <div class="carousel-inner">

                                      <div class="carousel-item highlights active">
                                          <img src="./assets/img/booth/booth1.jpg" height="385px" class="d-block w-95" alt="booth #1">
                                          <div class="carousel-caption d-none d-md-block bg-white">
                                              <!-- <h5>1 slide label</h5> -->
                                              <p class="carousel-para">The 2019 convention showcased  a virtual reality booth, where attendees were able to participate in an immersive VR experience.</p>
                                              <p class="carousel-para">Other companies, including Abbott and DePaul themselves, also displayed their innovative work in their own interactive booths.</p>
                                          </div>
                                      </div>

                                  </div>
                                  <a class="carousel-control-prev image-rotater-left" href="#carouselCaptions4" role="button" data-slide="prev">
                                    <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                                    <img class="image-rotater-left" src="./assets/img/Arrow Button-blue.svg">
                                    <span class="sr-only">Previous</span>
                                  </a>
                                  <a class="carousel-control-next image-rotater-right" href="#carouselCaptions4" role="button" data-slide="next">
                                    <img class="image-rotater-right" src="./assets/img/Arrow Button-blue.svg">

                                    <span class="sr-only">Next</span>
                                  </a>
                              </div>
                          </div>

                          <div id="Sponsors" class="data-toggle" style="display: none;">
                            <div class=" text-center">
                              <div>
                                  <h4 class="mt-0 mb-2 text-light-grey font-weight-normal pt-0 resp-prev-spon">Previous ODI Sponsors</h4><br/>
                              </div>

                              <div class="row justify-content-center ">

                                  <div class="col-sm mb-4">
                                      <div><img src="./assets/img/Burwood_logo.png"/></div>
                                  </div>

                                  <div class="col-sm mb-4">
                                      <div><img src="./assets/img/Continental_logo.png"/></div>
                                  </div>
                              </div>
                              <div class="row justify-content-center ">
                                  <div class="col-sm mb-4">
                                      <div><img src="./assets/img/Morningstar_logo.png"/></div>
                                  </div>

                                  <div class="col-sm">
                                      <div><img src="./assets/img/Abbott_logo.png"/></div>
                                  </div>
                              </div>
                              <div class="row justify-content-center ">
                                  <div class="col-sm mb-4">
                                      <div><img src="./assets/img/Allstate_logo.png"/></div>
                                  </div>

                                  <div class="col-sm">
                                      <div><img src="./assets/img/Baxter_logo.png"/></div>
                                  </div>
                              </div>
                              <div class="row justify-content-center ">
                                  <div class="col-sm mb-4">
                                      <div><img src="./assets/img/Google_logo.png"/></div>
                                  </div>

                                  <div class="col-sm">
                                      <div><img src="./assets/img/Deloitte_logo.png"/></div>
                                  </div>
                              </div>

                            </div>

                          </div>

                          <div id="FeaturedSpeakers" class="data-toggle" style="display:none;">
                            <div>
                                <div>
                                    <div class="featuredSpeakers">
                                        <div class="row justify-content-center ">

                                          <div class="col-sm mb-4">
                                            <div>
                                              <img src="./assets/img/Dennis.png" height="100px" class=" w-45" alt="Featured Speakers #1">
                                              <p class="justify-content-center"><a href="https://www.linkedin.com/in/dennisboecker/" target="_blank">Dennis Boecker</a></p>
                                              <p class="justify-content-center">Global IoT innovation Lead bei Robert Bosch GmbH</p>
                                            </div>
                                          </div>

                                          <div class="col-sm mb-4">
                                              <div>
                                                <img src="./assets/img/JonCarmichael.png" height="100px" class=" w-45" alt="Featured Speakers #1">
                                                <p class="justify-content-center"><a href="https://www.linkedin.com/in/photographerjon/" target="_blank">Jon Carmichael</a></p>
                                                <p class="justify-content-center">Astrophotographer at Jon Carmichael Photography</p>
                                              </div>
                                          </div>
                                        </div>

                                        <div class="row justify-content-center ">
                                            <div class="col-sm mb-4">
                                              <div>
                                                <img src="./assets/img/Martin.png" height="100px" class="w-45" alt="Featured Speakers #1">
                                                <p class="justify-content-center"><a href="https://www.linkedin.com/in/martin-fj-oneill/" target="_blank">Martin O’Neill</a></p>
                                                <p class="justify-content-center">GE Gas Power - Head of Product Management</p>
                                              </div>
                                            </div>

                                            <div class="col-sm mb-4">
                                              <div>
                                                <img src="./assets/img/NeilGoodrich.png" height="100px" class="w-45" alt="Featured Speakers #1">
                                                <p class="justify-content-center"><a href="https://www.linkedin.com/in/neilgoodrich/" target="_blank">Neil Goodrich</a></p>
                                                <p class="justify-content-center">Chief Innovation Officer at M. Holland Company</p>
                                              </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!--Sponsorship-->
      <section class="page-section" id="sponsorship">
          <div class="container mt-3">
              <h1 class="text-left text-uppercase text-small letter-spacer2 font-weight-bold mt-0 mb-5"><img class="rectangleTitle" width="25px" src="./assets/img/Rectangle 4690.svg"/> 2020 Sponsorship</h1>
              <div class="row justify-content-center pt-4 mb-3">
                  <div class="col-md-6 text-left mb-5">
                      <p class="text-light-grey mt-5" style="line-height: 2em;">Our ODI Conference is organized and executed by a small group of students. We value the opportunity to exchange ideas and network, and our conference provides a unique space for professionals to do just that. We sincerely appreciate any sponsorship as it is integral to our ability to continue to hold this important event. We have several different tiers of sponsorship, including general, gold, silver and platinum sponsorships. Donations of any level are greatly appreciated by our team. We thank you for your generosity.</p>

                      <button type="button" class="btn btn-outline-blue btn-xl js-scroll-trigger text-uppercase" data-toggle="modal" data-target="#exampleModal">
                          Become a Sponsor
                      </button>

                        <!--Modal-->
                      <div class="modal modal-open" id="exampleModal" tabindex="-1" role="dialog">
                          <div class="modal-dialog modal-show" role="document">
                              <div class="modal-content">
                                  <div class="modal-header">

                                      <div> <img  class="modal-image" width="115px" src="./assets/img/Group 103.svg"/></div>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div class="modal-body justify-content-center">
                                      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdOlrY7RRVLqDCWNb-FVZxi2p3Hh2-u7Qz5R8MYbASm0nNBbA/viewform?embedded=true" width="100%" height="750" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="col-md-6 text-center">
                      <div>
                          <h4 class="mt-0 mb-2 text-light-grey font-weight-normal pt-0 resp-prev-spon">ODI 2020 Sponsors</h4>
                      </div>

                      <div class="row justify-content-center align-items-center">
                        <div class="col-12 col-sm-6 my-2 my-sm-0">
                          <img class="w-75" src="./assets/img/Abbott_Logo.png"/>
                        </div>
                        <div class="col-12 col-sm-6 my-2 my-sm-0">
                          <img class="w-75" src="./assets/img/KPMG_Logo.png"/>
                        </div>
                        <div class="col-12 col-sm-6 my-3 my-sm-0">
                          <img class="w-75" src="./assets/img/BOSCH_Logo.png"/>
                        </div>
                        <div class="col-12 col-sm-6 my-3 my-sm-0">
                          <img class="w-75" src="./assets/img/DePaul_Logo.png"/>
                        </div>
                        <div class="col-12 col-sm-6 my-4 my-sm-0">
                          <img class="w-75" src="./assets/img/Morningstar_Logo.png"/>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- Speakers -->
      <section class="page-section" id="speakers">
          <div class="container mt-3">
              <h1 class="text-left text-uppercase text-small letter-spacer2 font-weight-bold mb-5"><img class="rectangleTitle" width="25px" src="./assets/img/Rectangle 4690.svg"/> Speakers </h1>

              <div class="row pt-3">


                <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                  <a class="portfolio-box" href="https://www.linkedin.com/in/donscheibenreif/" target="_blank">
                      <img class="img-fluid" src="assets/img/DonScheibenreif.png" alt="Don Scheibenreif" width="202px" height="202px" />
                      <div class="portfolio-box-caption text-center">
                          <div class="project-name">Don Scheibenreif</div>
                          <div class="project-category text-black">Distinguished VP Analyst at Gartner </div>
                      </div>
                  </a>
                </div>

                <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                  <a class="portfolio-box" href="https://www.linkedin.com/in/aleksandar-velkoski/">
                      <img class="img-fluid" src="assets/img/AleksandarVelkoski.png" alt="Aleksandar Velkoski" width="202px" height="202px">
                      <div class="portfolio-box-caption text-center">
                          <div class="project-name">Aleksandar Velkoski</div>
                          <div class="project-category text-black">Director, Data Science at National Association of REALTORS®</div>
                      </div>
                  </a>
                </div>

                <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                  <a class="portfolio-box" href="https://www.linkedin.com/in/brenna-berman-5a55273/">
                      <img class="img-fluid" src="assets/img/BrennaBerman.png" alt="Brenna Berman" width="202px" height="202px">
                      <div class="portfolio-box-caption text-center">
                          <div class="project-name">Brenna Berman </div>
                          <div class="project-category text-black">CEO at City Tech</div>
                      </div>
                  </a>
                </div>

                <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                  <a class="portfolio-box" href="https://www.linkedin.com/in/terry-finch-6a79104/">
                      <img class="img-fluid" src="assets/img/TerryFinch.png" alt="Terry Finch" width="202px" height="202px">
                      <div class="portfolio-box-caption text-center">
                          <div class="project-name">Terry Finch </div>
                          <div class="project-category text-black">Divisional Vice President at Abbott</div>
                      </div>
                  </a>
                </div>

              </div>

              <div class="collapse" id="hiddenSpeakers">

                <div class="row pt-3">
                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                      <a class="portfolio-box" href="https://www.linkedin.com/in/romandumiak/" target="_blank">
                          <img class="img-fluid" src="assets/img/RomanDumiak.png" alt="Roman Dumiak" width="202px" height="202px" />
                          <div class="portfolio-box-caption text-center">
                              <div class="project-name">Roman Dumiak</div>
                              <div class="project-category text-black">Executive in Residence - DePaul ID Lab</div>
                          </div>
                      </a>
                    </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                        <a class="portfolio-box" href="https://www.linkedin.com/in/olayele-adelakun-8019266/" target="_blank">
                            <img class="img-fluid" src="assets/img/Dr.OlayeleAdelakun.png" alt="" width="202px" height="202px" />
                            <div class="portfolio-box-caption text-center">
                                <div class="project-name">Olayele Adelakun</div>
                                <div class="project-category text-black">Prof. of Information Systems and Director iD-Lab at DePaul University </div>
                            </div>
                        </a>
                    </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                        <a class="portfolio-box" href="https://www.linkedin.com/in/robnendorf/" target="_blank">
                            <img class="img-fluid" src="assets/img/RobertA.Nendorf.png" alt="Robert A. Nendorf" width="202px" height="202px" />
                            <div class="portfolio-box-caption text-center">
                                <div class="project-name">Robert A. Nendorf</div>
                                <div class="project-category text-black">Director of Data Science at Arity</div>
                            </div>
                        </a>
                    </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                        <a class="portfolio-box" href="https://www.linkedin.com/in/douglaney/" target="_blank">
                            <img class="img-fluid" src="assets/img/DougLaney.png" alt="Doug Laney" width="202px" height="202px" />
                            <div class="portfolio-box-caption text-center">
                                <div class="project-name">Doug Laney</div>
                                <div class="project-category text-black">Data & Analytics Innovation | Author of "Infonomics" at West Monroe </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="row pt-3">

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/idobiger/" target="_blank">
                        <img class="img-fluid" src="assets/img/IdoBiger.png" alt="Ido Biger" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Ido Biger</div>
                            <div class="project-category text-black">Chief Data Officer at EL AL Israel Airlines </div>
                        </div>
                    </a>
                </div>

                    <!-- <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                      <a class="portfolio-box" href="https://www.linkedin.com/in/shawncgriffin/" target="_blank">
                          <img class="img-fluid" src="assets/img/ShawnGriffin.png" alt="Shawn Griffin" width="202px" height="202px" />
                          <div class="portfolio-box-caption text-center">
                              <div class="project-name">Shawn Griffin</div>
                              <div class="project-category text-black">Senior Director at Blue Cross Blue Shield (HCSC)</div>
                          </div>
                      </a>
                    </div> -->
                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                      <a class="portfolio-box" href="https://www.linkedin.com/in/daviesweis/" target="_blank">
                          <img class="img-fluid" src="assets/img/DavieSweis.png" alt="Shobhit Jain" width="202px" height="202px" />
                          <div class="portfolio-box-caption text-center">
                              <div class="project-name">Davie Sweis</div>
                              <div class="project-category text-black">Vice President of Technology & Enabling of the Global Business Services at Bosch</div>
                          </div>
                      </a>
                  </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                        <a class="portfolio-box" href="https://www.linkedin.com/in/johnjleach/" target="_blank">
                            <img class="img-fluid" src="assets/img/JohnLeach.png" alt="John Leach" width="202px" height="202px" />
                            <div class="portfolio-box-caption text-center">
                                <div class="project-name">John Leach</div>
                                <div class="project-category text-black">VP Treasury Management Product Innovation Lead at PNC Bank </div>
                            </div>
                        </a>
                    </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                        <a class="portfolio-box" href="https://www.linkedin.com/in/dana-enger-a17b4869/" target="_blank">
                            <img class="img-fluid" src="assets/img/DanaEnger.png" alt="Dana Enger" width="202px" height="202px" />
                            <div class="portfolio-box-caption text-center">
                                <div class="project-name">Dana Enger</div>
                                <div class="project-category text-black"> FinTech Scouting Manager at State Farm</div>
                            </div>
                        </a>
                    </div>

                </div>

                <div class="row pt-3">

                <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                  <a class="portfolio-box" href="https://www.linkedin.com/in/kimbholmes1/" target="_blank">
                      <img class="img-fluid" src="assets/img/KimHolmes.png" alt="Kim Holmes" width="202px" height="202px" />
                      <div class="portfolio-box-caption text-center">
                          <div class="project-name">Kim Holmes</div>
                          <div class="project-category text-black">Director, Program Manager, Speaker, D&I Champion, Innovation Mentor at Discover</div>
                      </div>
                  </a>
                </div>

                <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                  <a class="portfolio-box" href="https://www.linkedin.com/in/lawrenceedwardjohnson/" target="_blank">
                      <img class="img-fluid" src="assets/img/LawrenceJohnson.png" alt="Lawrence Johnson" width="202px" height="202px">
                      <div class="portfolio-box-caption text-center">
                          <div class="project-name">Lawrence Johnson</div>
                          <div class="project-category text-black">SVP and Head of Fintech Engagement at Morningstar</div>
                      </div>
                  </a>
              </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                        <a class="portfolio-box" href="https://www.linkedin.com/in/katemigon/" target="_blank">
                            <img class="img-fluid" src="assets/img/KateMignon.png" alt="Kate Mignon" width="202px" height="202px" />
                            <div class="portfolio-box-caption text-center">
                                <div class="project-name">Kate Mignon</div>
                                <div class="project-category text-black">VP, Strategic Partnerships at Uptake </div>
                            </div>
                        </a>
                    </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                        <a class="portfolio-box" href="https://www.linkedin.com/in/kevinpatrickrice/" target="_blank">
                            <img class="img-fluid" src="assets/img/KevinRice.png" alt="Kevin Rice" width="202px" height="202px" />
                            <div class="portfolio-box-caption text-center">
                                <div class="project-name">Kevin Rice</div>
                                <div class="project-category text-black">Director of Engineering at Allstate</div>
                            </div>
                        </a>
                    </div>

                </div>

                <div class="row pt-3">

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/david-miller-a206097/" target="_blank">
                        <img class="img-fluid" src="assets/img/DavidMiller.png" alt="David Miller" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">David Miller</div>
                            <div class="project-category text-black">Dean at College of Computing and Digital Media, Depaul University </div>
                        </div>
                    </a>
                  </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                      <a class="portfolio-box" href="https://www.linkedin.com/in/rahulavasthy/" target="_blank">
                          <img class="img-fluid" src="assets/img/RahulAvasthy.png" alt="Rahul Avasthy" width="202px" height="202px" />
                          <div class="portfolio-box-caption text-center">
                              <div class="project-name">Rahul Avasthy</div>
                              <div class="project-category text-black">Lead - Digital Transformation at Abbott</div>
                          </div>
                      </a>
                    </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                        <a class="portfolio-box" href="https://www.linkedin.com/in/pedersen7777/" target="_blank">
                            <img class="img-fluid" src="assets/img/ErikPedersen.png" alt="Erik Pedersen" width="202px" height="202px" />
                            <div class="portfolio-box-caption text-center">
                                <div class="project-name">Erik Pedersen</div>
                                <div class="project-category text-black">Principal Product Designer - Hyatt Hotels Corporation </div>
                            </div>
                        </a>
                    </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                      <a class="portfolio-box" href="https://www.linkedin.com/in/jay-hieb-65648132/" target="_blank">
                          <img class="img-fluid" src="assets/img/JayHieb.png" alt="Jay Hieb" width="202px" height="202px" />
                          <div class="portfolio-box-caption text-center">
                              <div class="project-name">Jay Hieb</div>
                              <div class="project-category text-black">Innovation Executive at State Farm</div>
                          </div>
                      </a>
                    </div>

                </div>

                <div class="row pt-3">

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="#" target="_blank">
                        <img class="img-fluid" src="assets/img/JamesPacella.png" alt="James Pacella" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">James Pacella</div>
                            <div class="project-category text-black">VP Global IT at Baxter</div>
                        </div>
                    </a>
                  </div>

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/benpruess/" target="_blank">
                        <img class="img-fluid" src="assets/img/BenPruess.png" alt="Ben Pruess" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Ben Pruess</div>
                            <div class="project-category text-black">Enterprise Architect at Medline </div>
                        </div>
                    </a>
                  </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                        <a class="portfolio-box" href="https://www.linkedin.com/in/williejamesandersonii/" target="_blank">
                            <img class="img-fluid" src="assets/img/WillieAndersonII.png" alt="Willie Anderson II" width="202px" height="202px" />
                            <div class="portfolio-box-caption text-center">
                                <div class="project-name">Willie Anderson II</div>
                                <div class="project-category text-black">Sr. VP Distributed Infrastructure Services at Black Knight Financial Inc</div>
                            </div>
                        </a>
                    </div>

                    <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                        <a class="portfolio-box" href="https://www.linkedin.com/in/mohanputcha/" target="_blank">
                            <img class="img-fluid" src="assets/img/MohanPutcha.png" alt="Mohan Putcha" width="202px" height="202px" />
                            <div class="portfolio-box-caption text-center">
                                <div class="project-name">Mohan Putcha</div>
                                <div class="project-category text-black">VP Strategy & Architecture at AON</div>
                            </div>
                        </a>
                    </div>

                </div>

                <div class="row pt-3">

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/lauren-e-rosen/" target="_blank">
                        <img class="img-fluid" src="assets/img/LaurenRosen.png" alt="Lauren Rosen" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Lauren Rosen</div>
                            <div class="project-category text-black">Innovation Partner - Office of Innovation at Salesforce</div>
                        </div>
                    </a>
                  </div>

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/vivianszhang/" target="_blank">
                        <img class="img-fluid" src="assets/img/VivianZhang.png" alt="Vivian Zhang" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Vivian Zhang</div>
                            <div class="project-category text-black">Chief Data Scientist at NYC Data Science Academy and the co-founder of SupStat</div>
                        </div>
                    </a>
                  </div>

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/anthonytermini/" target="_blank">
                        <img class="img-fluid" src="assets/img/AnthonyTermini.png" alt="Anthony Termini" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Anthony Termini</div>
                            <div class="project-category text-black">SVP, Business Development - FinTech Alliances at Morningstar  </div>
                        </div>
                    </a>
                  </div>

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/kelly-coomer-8232374/" target="_blank">
                        <img class="img-fluid" src="assets/img/KellyCoomer.png" alt="Kelly Coomer" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Kelly Coomer</div>
                            <div class="project-category text-black">Chief Information Officer at Sammons Financial Group Member Companies  </div>
                        </div>
                    </a>
                  </div>

                </div>

                <div class="row pt-3">

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/johnyesko/" target="_blank">
                        <img class="img-fluid" src="assets/img/JohnYesko.png" alt="John Yesko" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">John Yesko</div>
                            <div class="project-category text-black">Head of User Experience & Service Design at Walgreens </div>
                        </div>
                    </a>
                  </div>

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                      <a class="portfolio-box" href="https://www.linkedin.com/in/jshobhit/" target="_blank">
                          <img class="img-fluid" src="assets/img/ShobitJain.png" alt="Shobhit Jain" width="202px" height="202px" />
                          <div class="portfolio-box-caption text-center">
                              <div class="project-name">Shobhit Jain</div>
                              <div class="project-category text-black">Sr. Director, Head of Product Innovation at Here Technologies </div>
                          </div>
                      </a>
                  </div>

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/nickionita/" target="_blank">
                        <img class="img-fluid" src="assets/img/NickIonita.png" alt="Shobhit Jain" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Nick Ionita</div>
                            <div class="project-category text-black">CEO & Co-Founder of Flux </div>
                        </div>
                    </a>
                  </div>

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/salmaghanem/" target="_blank">
                        <img class="img-fluid" src="assets/img/Salma.png" alt="Salma Ghanem" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Salma Ghanem</div>
                            <div class="project-category text-black">Dean College of Communication, DePaul University </div>
                        </div>
                    </a>
                  </div>

                </div>
                <div class="row pt-3">

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/enrique-/" target="_blank">
                        <img class="img-fluid" src="assets/img/EnriqueAceves.png" alt="Enrique Aceves" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Enrique Aceves</div>
                            <div class="project-category text-black">Vice President at Nuveen </div>
                        </div>
                    </a>
                  </div>

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/sivabalus/" target="_blank">
                        <img class="img-fluid" src="assets/img/SivaBalu.png" alt="Siva Balu" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Siva Balu</div>
                            <div class="project-category text-black">VP & CIO at YMCA of the USA </div>
                        </div>
                    </a>
                  </div>

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/aine-allen-b352474/" target="_blank">
                        <img class="img-fluid" src="assets/img/AineAllen.png" alt="Aine Allen" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Aine Allen</div>
                            <div class="project-category text-black">Divisional Vice President, Business & Technology Services </div>
                        </div>
                    </a>
                  </div>

                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/meriahlanagarrett/" target="_blank">
                        <img class="img-fluid" src="assets/img/MeriahGarrett.png" alt="Meriah Garrett" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Meriah Garrett</div>
                            <div class="project-category text-black">Chief Design Officer at USAA </div>
                        </div>
                    </a>
                  </div>

                </div>
                <div class="row pt-3 d-flex justify-content-center">
                  <div class="col-lg-3 col-sm-6 justify-content-center text-center resp-speakers">
                    <a class="portfolio-box" href="https://www.linkedin.com/in/makoto-nakayama-81960b2/" target="_blank">
                        <img class="img-fluid" src="assets/img/MakotoNakayama.png" alt="Makoto Nakayama" width="202px" height="202px" />
                        <div class="portfolio-box-caption text-center">
                            <div class="project-name">Makoto Nakayama</div>
                            <div class="project-category text-black">Associate Professor of College of Computing and Digital Media (CDM) at DePaul University </div>
                        </div>
                    </a>
                  </div>
                </div>
                </div>
              </div>
              <div class="justify-content-center align-items-center text-center d-block pt-5  mt-0 mb-0 ml-auto mr-auto" >
                  <button class="btn btn-outline-blue btn-custom js-scroll-trigger text-uppercase" id="btn-switch" type="button" data-toggle="collapse" data-target="#hiddenSpeakers" aria-expanded="false" aria-controls="hiddenSpeakers">
                      See more
                  </button>
              </div>
          </div>

      </section>

      <!--Location-->
      <section class="page-section" id="location">
          <div class="container mt-3">
              <h1 class="text-left text-uppercase text-small letter-spacer2 font-weight-bold mt-0 mb-5"><img class="rectangleTitle" width="25px" src="./assets/img/Rectangle 4690.svg"/> DePaul Center</h1>
              <div class="row justify-content-center">

                  <div class="col-md-6 text-center p-lg-1">
                      <div class="mt-4 pr-5 pl-5" id="contact-map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4394.791262214581!2d-87.62803343161124!3d41.87816709675311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca2e74efe3b%3A0xdacfcae5dae1895b!2sDePaul%20University%20-%20DePaul%20Center!5e0!3m2!1sen!2sus!4v1591226326880!5m2!1sen!2sus" width="100%" height="373" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                      </div>
                  </div>

                  <div class="col-md-6 text-left pt-0 pl-5 pr-5">
                      <p class="text-black mt-3" style="line-height: 2em;">During the uncertainty of the current Covid-19 situation, we ensure that ODI will proceed. In order to prioritize the health of both our attendees and our speakers, we have decided to move the majority of the conference into the digital realm. Through a hybrid of in-person speeches, as well as online video meetings, we will ensure that the conference maintains its original comfortable and personal feel.</p>
                      <p class="text-black mt-4" style="line-height: 2em;">With innovation as our key concept this year, we view this change as a welcomed challenge. We will innovate our format in order to adapt to the current state of the world. Though the format of ODI will be revolutionized, the content will remain equally as compelling and groundbreaking. </p>

                  </div>

              </div>
          </div>
      </section>

      <!--Schedule-->
      <section class="page-section" id="schedule">
          <div class="container mt-3">
              <h1 class="text-center text-uppercase text-small letter-spacer2 font-weight-bold mt-0 mb-5 pb-5"> Schedule</h1>

              <!-- Switching buttons and indicators -->
              <div class="container">
                <div class="row py-2">
                  <div class="col-6 d-flex justify-content-center">
                    <button id="btn-day1" type="button" class="btn btn-outline-blue px-4 py-2 color-dark-blue"> <div class="font-weight-bold"> Day 1 </div> Oct 15th, <div class="d-block d-md-inline"> 2020 </div> </button>
                  </div>
                  <div class="col-6 d-flex justify-content-center border-left-blue">
                    <button id="btn-day2" type="button" class="btn btn-outline-blue px-4 py-2 color-light-blue"> <div class="font-weight-bold"> Day 2 </div> Oct 16th, <div class="d-block d-md-inline"> 2020 </div> </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 d-flex justify-content-center">
                    <div id="sel-day1" class="hl"></div>
                  </div>
                  <div class="col-6 d-flex justify-content-center">
                    <div id="sel-day2" class="hl"></div>
                  </div>
                </div>
              </div>

              <!-- Day 1 -->
              <div id="table-day1">
                <div class="container table-schedule color-dark-blue">
                  <div class="row d-none d-md-flex table-header">
                    <div class="col-12 col-md-4 col-lg-3 col-xl-3">
                      Time
                    </div>
                    <div class="col-12 col-md-6 col-lg-7 col-xl-7 border-left-white">
                      Event Description
                    </div>
                    <div class="col-2 border-left-white">
                      Location
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 07:30 AM - 08:30 AM </div> 1 hour
                    </div>
                    <div class="col-12 col-md-6 col-lg-7 col-xl-7">
                      <div class="topic"> Set up </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 08:30 AM - 08:35 AM </div> 5 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> ODI Kickoff </div>
                      <div class="row speakers">
                        <div class="col-auto pr-1">
                          Speaker :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link roman-dumiak" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Roman Dumiak</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline">- iD-Lab DePaul University </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 08:35 AM - 08:45 AM </div> 10 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Welcome to DePaul and CDM </div>
                      <div class="row speakers">
                        <div class="col-auto pr-1">
                          Speaker :
                        </div>
                        <div class="col-8 col-md-9 col-lg-9 col-xl-9 px-md-0 pl-1 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link salma-ghanem" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Salma Ghanem</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - DePaul University </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 09:00 AM - 09:50 AM </div> 50 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Keynote - Digital Transformation in the New Normal </div>
                      <div class="row speakers">
                        <div class="col-auto pr-1">
                          Speaker :
                        </div>
                        <div>
                          <a tabindex="0" class="speaker-link davie-sweis" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Davie Sweis</a>
                          <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Bosch </div>
                        </div>
                        <div class="col-8 col-md-9 col-lg-9 col-xl-9 px-md-0 pl-1 speakers-list">

                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 09:50 AM - 10:00 AM </div> 10 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic font-weight-bold"> Coffee Break </div>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 10:00 AM - 10:50 AM </div> 50 minutes
                    </div>
                    <div class="col-8 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Keynote - ID Lab Innovation Strategy: Leading Innovation for your Company after Covid-19 </div>
                      <div class="row speakers">
                        <div class="col-auto">
                          Speaker :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link roman-dumiak" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Roman Dumiak</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - iD-Lab DePaul University </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link olayele-adelakun" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Olayele Adelakun</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - iD-Lab DePaul University </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-md-2 pr-0 font-weight-bold event-location-room">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 11:00 AM - 12:00 PM </div> 1 hour
                    </div>
                    <div class="col-8 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Panel Discussion - Data Science - Data & AI’s Impact Decision Making </div>
                      <div class="row speakers">
                        <div class="col-auto">
                          Panel Members :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link robert-nendorf" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Robert A. Nendorf</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Arity </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link doug-laney" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Doug Laney</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - West Monroe </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link ido-biger" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Ido Biger</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - EL AL Israel Airlines </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link vivian-zhang" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Vivian Zhang</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - SupStat </div>
                          </div>
                        </div>
                      </div>
                      <div class="row speakers pt-3">
                        <div class="col-auto">
                          Moderators :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link aleksander-velkoski" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Aleksander Velkoski</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - National Association of REALTORS® & DePaul iD-Lab</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-md-2 pr-0 font-weight-bold event-location-room">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 12:00 PM - 12:50 PM </div> 50 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic font-weight-bold"> Lunch Break </div>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 01:00 PM - 01:50 PM </div> 50 minutes
                    </div>
                    <div class="col-8 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Panel Discussion - Innovation in Financial Services </div>
                      <div class="row speakers">
                        <div class="col-auto">
                          Panel Members :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <!-- <div>
                            <a tabindex="0" class="speaker-link shawn-griffin" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Shawn Griffin</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Blue Cross Blue Shield (HCSC) </div>
                          </div> -->
                          <div>
                            <a tabindex="0" class="speaker-link john-leach" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">John Leach</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - PNC Bank </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link anthony-termini" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Anthony Termini</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - MorningStar </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link dana-eiger" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Dana Enger</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - State Farm </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link kim-holmes" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Kim Holmes</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Discover </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link enrique-aceves" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Enrique Aceves</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Nuveen </div>
                          </div>
                        </div>
                      </div>
                      <div class="row speakers pt-3">
                        <div class="col-auto">
                          Moderators :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link lawrence-johnson" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Lawrence Johnson</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Morningstar </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 01:50 PM - 02:00 PM </div> 10 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic font-weight-bold"> Break </div>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 02:00 PM - 02:50 PM </div> 50 minutes
                    </div>
                    <div class="col-8 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Panel Discussion - Innovation in Mobility </div>
                      <div class="row speakers">
                        <div class="col-auto">
                        Panel Members :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link kate-mignon" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Kate Mignon</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Uptake </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link kevin-rice" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Kevin Rice</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Arity </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link shobhit-jain" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Shobhit Jain</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Here Technologies </div>
                          </div>
                        </div>
                      </div>
                      <div class="row speakers pt-3">
                        <div class="col-auto">
                          Moderators :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                            <div>
                              <a tabindex="0" class="speaker-link brenna-berman" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Brenna Berman</a>
                              <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - City Tech </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 02:50 PM - 03:00 PM </div> 10 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic font-weight-bold"> Break </div>
                    </div>
                    <div class="col-2 font-weight-bold">
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 03:00 PM - 03:50 PM </div> 50 minutes
                    </div>
                    <div class="col-8 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Keynote- From ideation to commercialization </div>
                      <div class="row speakers">
                        <div class="col-auto">
                          Speaker :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link nick-ionita" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Nick Ionita</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Flex </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 04:00 PM - 04:15 PM </div> 15 minutes
                    </div>
                    <div class="col-8 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Closing Remarks </div>
                      <div class="row speakers">
                        <div class="col-auto">
                          Panel Members :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link david-miller" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">David Miller</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - iD-Lab DePaul University </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link roman-dumiak" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Roman Dumiak</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - iD-Lab DePaul University </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link olayele-adelakun" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Olayele Adelakun</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - iD-Lab DePaul University </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-dark color-light-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 04:15 PM - 06:00 PM </div> 2 hours
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic font-weight-bold"> Network Reception </div>
                    </div>
                    <div class="col-2 font-weight-bold">
                    </div>
                  </div>
                </div>
              </div>

              <!-- Day 2 -->
              <div id="table-day2">
                <div class="container table-schedule color-light-blue">
                  <div class="row d-none d-md-flex table-header">
                    <div class="col-12 col-md-4 col-lg-3 col-xl-3">
                      Time
                    </div>
                    <div class="col-12 col-md-6 col-lg-7 col-xl-7 border-left-white">
                      Event Description
                    </div>
                    <div class="col-2 border-left-white">
                      Location
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 07:30 AM - 08:30 AM </div> 1 hour
                    </div>
                    <div class="col-12 col-md-6 col-lg-7 col-xl-7">
                      <div class="topic"> Set up </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 08:30 AM - 08:35 AM </div> 5 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> ODI Kickoff </div>
                      <div class="row speakers">
                        <div class="col-auto pr-1">
                          Speakers :
                        </div>
                        <div class="col-8 col-md-9 col-lg-9 col-xl-9 px-md-0 pl-1 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link roman-dumiak" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Roman Dumiak</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - iD-Lab DePaul University </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link olayele-adelakun" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Olayele Adelakun</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - iD-Lab DePaul University </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 08:35 AM - 08:45 AM </div> 10 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Recap of Day 1 </div>
                      <div class="row speakers">
                        <div class="col-auto pr-1">
                          Speaker :
                        </div>
                        <div class="col-8 col-md-9 col-lg-9 col-xl-9 px-md-0 pl-1 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link roman-dumiak" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Roman Dumiak</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - iD-Lab DePaul University </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 08:45 AM - 08:55 AM </div> 10 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Innovation within the IS Degree Program in CDM </div>
                      <div class="row speakers">
                        <div class="col-auto pr-1">
                          Speaker :
                        </div>
                        <div class="col-8 col-md-9 col-lg-9 col-xl-9 px-md-0 pl-1 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link makoto-nakayama" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Makoto Nakayama</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Associate Professor of College of Computing and Digital Media (CDM) </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 09:00 AM - 09:40 AM </div> 40 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Keynote - Three Key Trends Shaping the Future of Customers </div>
                      <div class="row speakers">
                        <div class="col-auto pr-1">
                          Speaker :
                        </div>
                        <div class="col-8 col-md-9 col-lg-9 col-xl-9 px-md-0 pl-1 speakers-list">
                          <div> <a tabindex="0" class="speaker-link don-scheibenreif" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Don Scheibenreif</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Gartner </div> </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 09:40 AM - 09:50 AM </div> 10 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic font-weight-bold"> Coffee Break </div>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                      <div class="font-weight-bold"> 09:50 AM - 10:30 AM </div> 40 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Keynote - How COVID-19 accelerated digital innovation & transformation </div>
                      <div class="row speakers">
                        <div class="col-auto pr-1">
                          Speakers :
                        </div>
                        <div class="col-8 col-md-9 col-lg-9 col-xl-9 px-md-0 pl-1 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link aine-allen" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Aine Allen</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Abbott </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link terry-finch" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Terry Finch</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Abbott </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 10:30 AM - 10:40 AM </div> 10 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic font-weight-bold"> Break </div>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 10:40 AM - 11:30 PM </div> 50 minutes
                    </div>
                    <div class="col-8 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Panel Discussion - Innovating with CX/UX/UI </div>
                      <div class="row speakers">
                        <div class="col-auto">
                          Panel Members :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Joanne Glennon</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Allstate </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link erik-pedersen" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Erik Pedersen</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Hyatt Hotels </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link john-yesko" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">John Yesko</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Walgreens </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link meriah-garrett" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Meriah Garrett</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - USAA </div>
                          </div>
                        </div>
                      </div>
                      <div class="row speakers pt-3">
                        <div class="col-auto">
                          Moderators :
                        </div>
                        <div>
                          <a tabindex="0" class="speaker-link rahul-avasthy" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Rahul Avasthy</a>
                          <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Abbott </div>
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <!-- <div>
                            <a tabindex="0" class="speaker-link roman-dumiak" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Speaker</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - TBD </div>
                          </div> -->
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                      <div class="font-weight-bold"> 11:30 AM - 11:40 AM </div> 10 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic font-weight-bold"> Break </div>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 11:40 PM - 12:30 PM </div> 50 minutes
                    </div>
                    <div class="col-8 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Innovation Presentation: Corporate Innovation @ State Farm </div>
                      <div class="row speakers">
                        <div class="col-auto">
                          Panel Members :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div> <a tabindex="0" class="speaker-link jay-hieb" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Jay Hieb</a>
                              <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - State Farm </div> </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 12:30 PM - 01:30 PM </div> 10 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic font-weight-bold"> Lunch </div>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 01:30 PM - 02:20 PM </div> 50 minutes
                    </div>
                    <div class="col-8 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Panel Discussion - Innovation in Pharma / Healthcare </div>
                      <div class="row speakers">
                        <div class="col-auto">
                          Panel Members :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link james-pacella" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">James Pacella</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Baxter </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link terry-finch" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Terry Finch</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Abbott </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link ben-pruess" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Ben Pruess</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Medline </div>
                          </div>
                          <!-- <div>
                            <a tabindex="0" class="speaker-link michelle-crouthamel" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Michelle Crouthamel DBA</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Managing Director, AbbVie</div>
                          </div> -->
                        </div>
                      </div>
                      <div class="row speakers pt-3">
                        <div class="col-auto">
                          Moderators :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link dwayne-prosko" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Dwayne Prosko</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - KPMG</div> </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 font-weight-bold event-location">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 02:20 PM - 02:30 PM </div> 10 minutes
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic font-weight-bold"> Break </div>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 02:30 AM - 03:30 AM </div> 1 hour
                    </div>
                    <div class="col-8 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Panel Discussion - CIO/CEO Panel: When Change is a must to survive </div>
                      <div class="row speakers">
                        <div class="col-auto">
                          Panel Members :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div>
                            <a tabindex="0" class="speaker-link mohan-putcha" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Mohan Putcha</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - AON </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link willie-anderson" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Willie Anderson</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Black Knight Financial Inc </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link kelly-coomer" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Kelly Coomer</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Sammons Financial Group Member Companies </div>
                          </div>
                          <div>
                            <a tabindex="0" class="speaker-link siva-balu" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Siva Balu</a>
                            <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - YMCA </div>
                          </div>
                        </div>
                      </div>
                      <div class="row speakers pt-3">
                        <div class="col-auto">
                          Moderators :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div> <a tabindex="0" class="speaker-link lauren-rosen" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Lauren Rosen</a>
                              <div class="d-none d-md-inline d-lg-inline d-xl-inline"> - Salesforce </div> </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-md-2 pr-0 font-weight-bold event-location-room">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3">
                      <div class="font-weight-bold"> 03:30 PM - 04:00 PM </div> 30 minutes
                    </div>
                    <div class="col-8 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic pb-3"> Closing Remarks </div>
                      <div class="row speakers">
                        <div class="col-auto">
                          Panel Members :
                        </div>
                        <div class="col-12 col-md-9 col-lg-9 col-xl-9 px-md-0 speakers-list">
                          <div> <a tabindex="0" class="speaker-link roman-dumiak" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Roman Dumiak</a>
                              <div class="d-none d-md-inline d-lg-inline d-xl-inline">  </div>- iD-Lab DePaul University </div>
                          <div> <a tabindex="0" class="speaker-link olayele-adelakun" role="button" data-toggle="popover" data-trigger="focus" data-placement="right">Olayele Adelakun</a>
                              <div class="d-none d-md-inline d-lg-inline d-xl-inline">  </div>- iD-Lab DePaul University</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-md-2 pr-0 font-weight-bold event-location-room">
                      <a tabindex="0" class="virtual-link virtual-message" role="button" data-toggle="popover" data-trigger="focus" data-placement="left">Virtual</a>
                    </div>
                  </div>
                  <div class="row table-row-light color-dark-blue">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3 pb-3 pb-md-0">
                      <div class="font-weight-bold"> 04:00 PM - 06:00 PM </div> 2 hours
                    </div>
                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                      <div class="topic font-weight-bold"> Network Reception </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </section>

        <!-- Virtual link message -->
        <div id="virtual-message-box" class="text-center d-none">
          <div class="mx-3"> Register to receive the link to the conference </div>
        </div>

        <!-- Speakers Profiles -->
        <div id="roman-dumiak-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/RomanDumiak.png" alt="Roman Dumiak" width="170px" height="170px">
          <div class="font-weight-bold">Roman Dumiak</div>
          <div class="mx-3"> Executive in Residence - DePaul ID Lab </div>
          <div class="mt-4 mb-2">
            As the Executive-in-Residence, Roman Dumiak acts as the liaison between the DePaul faculty and corporate enterprises that are currently engaged with DePaul's iDLab.  Working to bridge the gap between the business and academic communities around innovation
          </div>
        </div>
        <div id="olayele-adelakun-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/Dr.OlayeleAdelakun.png" alt="Olayele Adelakun" width="170px" height="170px">
          <div class="font-weight-bold">Olayele Adelakun</div>
          <div class="mx-3"> Executive Director - DePaul Innovation Development Laboratory </div>
          <!-- <div class="mt-4 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate tempus lacus eget gravida.
          </div> -->
        </div>
        <div id="don-scheibenreif-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/don-scheibenreif-profile.png" alt="Don Scheibenreif" width="170px" height="170px">
          <div class="font-weight-bold">Don Scheibenreif</div>
          <div class="mx-3"> Distinguished VP Analyst at Gartner </div>
          <div class="mt-4 mb-2">
            Don Scheibenreif is a Distinguished Vice President, Analyst with Gartner&#39;s Customer Experience
            research group. He works with CIOs and IT leaders on how emerging trends and digital business
            will impact customer experience.
          </div>
        </div>
        <div id="rahul-avasthy-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/RahulAvasthy.png" alt="Don Scheibenreif" width="170px" height="170px">
          <div class="font-weight-bold">Rahul Avasthy</div>
          <div class="mx-3"> Lead - Digital Transformation </div>
          <div class="mt-4 mb-2">
            Rahul leads digital transformation and experience practice at Abbott, a global healthcare company that helps
            people live fully at all stages of life. He’s particularly interested in irreversible process transformation,
            reducing org-wide design/development waste, and breakthrough digital marketing
            innovations.Accomplishments include 20+ industry awards in Digital domain, Abbott Division&#39;s highest honor
            - President&#39;s Award 3 years in a row, recommendations from The Coca-Cola Company &amp; Police Special Task
            Force (STF) for his contributions and work and is acknowledged for creating many first in industry healthcare
            marketing initiatives.
          </div>
        </div>
        <div id="erik-pedersen-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/ErikPedersen.png" alt="Don Scheibenreif" width="170px" height="170px">
          <div class="font-weight-bold">Erik Pedersen</div>
          <div class="mx-3"> Principal Product Designer - Hyatt Hotels Corporation </div>
          <!-- <div class="mt-4 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate tempus lacus eget gravida.
          </div> -->
        </div>
        <div id="jay-hieb-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/JayHieb.png" alt="Don Scheibenreif" width="170px" height="170px">
          <div class="font-weight-bold">Jay Hieb</div>
          <div class="mx-3"> Innovation Executive - State Farm </div>
          <div class="mt-4 mb-2">
            He spent 20 years leading a variety of teams in our property & casualty line of business.  For the past several years, Jay has led the formation and growth of a startup within State Farm called Blue Owl – a company that offers usage-based-insurance
            through a product called Hi-Road in the state of Rhode Island.

          </div>
        </div>
        <div id="james-pacella-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/JamesPacella.png" alt="James Pacella" width="170px" height="170px">
          <div class="font-weight-bold">James Pacella</div>
          <div class="mx-3"> VP Global IT - Baxter </div>
          <div class="mt-4 mb-2">
            James Pacella is Baxter International’s Vice President of IT Strategy and Analytics. In that role, Mr. Pacella defines the IT strategic direction for the global organization
            to support technology innovations and the enablement of the business.
          </div>
        </div>
        <div id="terry-finch-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/TerryFinch.png" alt="Terry Finch<" width="170px" height="170px">
          <div class="font-weight-bold">Terry Finch</div>
          <div class="mx-3"> Divisional Vice President - Abbott </div>
          <div class="mt-4 mb-2">
            Terry is responsible for many of the digital technologies used throughout Abbott with a specific focus on
            new and differentiating capabilities in Big Data/Internet of things(IOT), Digital Commerce and Salesforce
            effectiveness. Terry earned his software engineering degree from the University of Portsmouth and was
            elected to the British Computer Society in 2005 as a Chartered Engineer.
          </div>
        </div>
        <div id="ben-pruess-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/BenPruess.png" alt="Ben Pruess" width="170px" height="170px">
          <div class="font-weight-bold">Ben Pruess</div>
          <div class="mx-3"> Enterprise Architect - Medline </div>
          <div class="mt-4 mb-2">
           Ben has spent the last 15 years delivering IT software solutions for Pharmacy and  Healthcare Products and Services companies. He has worked primarily in Data Warehouse, CRM, Supply Chain, B2B E-Commerce, and Organizational Change Management as an IT Business Analyst.  He is currently a Business Facing Enterprise Architect for Medline Industries, Inc; focused
            on the E-Commerce, Sales Innovation, and Managed Care domains.
          </div>
        </div>
        <!-- <div id="michelle-crouthamel-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/MichelleCrouthamel.png" alt="Michelle Crouthamel DBA" width="170px" height="170px">
          <div class="font-weight-bold">Michelle Crouthamel DBA</div>
          <div class="mx-3"> Managing Director - AbbVie </div>
          <div class="mt-4 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate tempus lacus eget gravida.
          </div>
        </div> -->
        <div id="dwayne-prosko-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/DwayneProsko.png" alt="Dwayne Prosko" width="170px" height="170px">
          <div class="font-weight-bold">Dwayne Prosko</div>
          <div class="mx-3"> Robotic Automation & Cognitive Computing Specialist Leader - KPMG </div>
          <!-- <div class="mt-4 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate tempus lacus eget gravida.
          </div> -->
        </div>
        <div id="mohan-putcha-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/MohanPutcha.png" alt="Mohan Putcha" width="170px" height="170px">
          <div class="font-weight-bold">Mohan Putcha</div>
          <div class="mx-3"> VP Strategy & Architecture - AON </div>
          <!-- <div class="mt-4 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate tempus lacus eget gravida.
          </div> -->
        </div>
        <div id="willie-anderson-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/WillieAndersonII.png" alt="Willie Anderson" width="170px" height="170px">
          <div class="font-weight-bold">Willie Anderson</div>
          <div class="mx-3"> Sr. VP Distributed Infrastructure Services - Black Knight Financial Inc </div>
          <!-- <div class="mt-4 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate tempus lacus eget gravida.
          </div> -->
        </div>
        <div id="kelly-coomer-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/KellyCoomer.png" alt="Kelly Coomer" width="170px" height="170px">
          <div class="font-weight-bold">Kelly Coomer</div>
          <div class="mx-3"> Chief Information Officer - Sammons Financial Group Member Companies </div>
          <div class="mt-4 mb-2">
            Kelly has set herself apart as a successful leader with a proven track record of facilitating large-
            scale consumer facing technology initiatives,” said Teri Ross, president, Sammons Financial
            Group’s Shared Services Division. “Her focus on organizational culture and values is as
            impressive as her accomplishments, which is foundational to our company’s success and was
            crucial in our search for a new chief information officer.” Coomer’s IT career spans 20 years of
            leading technology initiatives
          </div>
        </div>
        <div id="lauren-rosen-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/LaurenRosen.png" alt="Lauren Rosen" width="170px" height="170px">
          <div class="font-weight-bold">Lauren Rosen</div>
          <div class="mx-3"> Innovation Partner - Office of Innovation - Salesforce </div>
          <!-- <div class="mt-4 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate tempus lacus eget gravida.
          </div> -->
        </div>
        <div id="david-miller-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/DavidMiller.png" alt="David Miller" width="170px" height="170px">
          <div class="font-weight-bold">David Miller</div>
          <div class="mx-3"> Dean, College of Computing and Digital Media, DePaul University </div>
          <div class="mt-4 mb-2">
            David Miller joined the faculty of the Department of Computer Science at its founding in 1981. He served as
            Associate Dean for the School of Computer Science, Telecommunications and Information Systems (CTI) since
            the School&#39;s inception in 1995 and began serving as Dean of what is now the College of Computing and Digital
            Media​ in 2005. Miller served as DePaul’s Interim Provost for the 2014-2015 academic year. Miller received
            his doctorate in mathematics from the University of Chicago. He still satisfies his programming bug by
            contributing to open-source software development.​
          </div>
        </div>
        <div id="aleksander-velkoski-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/AleksandarVelkoski.png" alt="Aleksander Velkoski" width="170px" height="170px">
          <div class="font-weight-bold">Aleksander Velkoski</div>
          <div class="mx-3"> Director, Data Science at National Association of REALTORS® & Distinguished iD-Lab Faculty Member </div>
        </div>
        <div id="lawrence-johnson-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/LawrenceJohnson.png" alt="Lawrence Johnson" width="170px" height="170px">
          <div class="font-weight-bold">Lawrence Johnson</div>
          <div class="mx-3"> Morningstar </div>
          <div class="mt-4 mb-2">
            Lawrence leads Morningstar’s global financial technology outreach initiatives. He is working to strengthen the firm’s leadership role with world-class emerging growth companies and organizations fostering innovation in software, data management, business intelligence and user experience in the financial services sector. Lawrence is a member of the Fintech Advisory Board of the Fubon Center for Technology, Business, and Innovation - NYU
            Stern School of Business, and the Board of Directors of iD-Lab.​
          </div>
        </div>
        <div id="robert-nendorf-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/RobertA.Nendorf.png" alt="Robert A. Nendorf" width="170px" height="170px">
          <div class="font-weight-bold">Robert A. Nendorf</div>
          <div class="mx-3"> Arity </div>
          <div class="mt-4 mb-2">
            Robert Nendorf is the Director of Data Science within the Analytics Practice at Arity, a mobility data and analytics company founded by The Allstate Corporation. There he leads a team of data scientists, data analytics engineers, and analysts that work on cross-functional product teams to discover, develop, deploy, and manage analytics insights. He plays a key role in leading and building a world-class analytics organization at Arity and delivering solutions to
            Arity customers in the insurance, shared mobility, mobile app, and data services markets.
          </div>
        </div>
        <div id="doug-laney-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/DougLaney.png" alt="Doug Laney" width="170px" height="170px">
          <div class="font-weight-bold">Doug Laney</div>
          <div class="mx-3"> Data & Analytics Innovation | Author of "Infonomics", West Monroe </div>
          <div class="mt-4 mb-2">
            Doug Laney is a best-selling author and recognized authority on data and analytics strategy. He advises
            senior IT, business and data leaders on data monetization and valuation, data management and
            governance, alternative data, analytics best practices, and information innovation.
          </div>
        </div>
        <div id="ido-biger-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/ido-biger-profile.png" alt="Ido Biger" width="170px" height="170px">
          <div class="font-weight-bold">Ido Biger</div>
          <div class="mx-3"> Chief Data Officer, EL AL Israel Airlines </div>
          <div class="mt-4 mb-2">
            Ido Biger is a Data &amp; Analytics Leader with a proven ability to make large organizations become Data
            Driven.Held 2 successful Chief Data Officer Roles for 2 of the biggest brands in Israel, yes Television and EL AL
            Israel Airlines.Responsible for Leading Big Data Teams, BI Departments, Advanced Analytics Units (Data
            Science) and Data Literacy programs. A Data Geek with a business state of mind.
          </div>
        </div>
        <div id="vivian-zhang-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/VivianZhang.png" alt="Vivian Zhang" width="170px" height="170px">
          <div class="font-weight-bold">Vivian Zhang</div>
          <div class="mx-3"> NYC Data Science Academy and the co-founder of SupStat </div>
          <div class="mt-4 mb-2">
            Vivian Zhang is the founder of the NYC Data Science Academy and the co-founder of SupStat. In August
            2016, Forbes ranked her among the nine women leading the pack in data analytics.
          </div>
        </div>
        <div id="shawn-griffin-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/ShawnGriffin.png" alt="Shawn Griffin" width="170px" height="170px">
          <div class="font-weight-bold">Shawn Griffin</div>
          <div class="mx-3"> Blue Cross Blue Shield (HCSC) </div>
        </div>
        <div id="john-leach-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/JohnLeach.png" alt="John Leach" width="170px" height="170px">
          <div class="font-weight-bold">John Leach</div>
          <div class="mx-3"> VP Treasury Management Product Innovation Lead, PNC Bank </div>
          <div class="mt-4 mb-2">
            John Leach has almost two decades of experience developing innovation strategies for start-ups to Fortune 500 enterprises. John is a pioneer in the practice of innovation strategy and consulting having been with Doblin for over 12 years, helping to craft
            new products and services in a variety of industries and non-profits.
          </div>
        </div>
        <div id="anthony-termini-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/AnthonyTermini.png" alt="Anthony Termini" width="170px" height="170px">
          <div class="font-weight-bold">Anthony Termini</div>
          <div class="mx-3"> MorningStar </div>
          <div class="mt-4 mb-2">
            Anthony Termini leads the global framework for fintech partnerships Morningstar.
          </div>
        </div>
        <div id="dana-eiger-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/DanaEnger.png" alt="Dana Eiger" width="170px" height="170px">
          <div class="font-weight-bold">Dana Enger</div>
          <div class="mx-3"> State Farm </div>
          <div class="mt-4 mb-2">
            Dana has one of the best jobs in the company, currently serving as a Scouting Manager in Labs @ State
            Farm. In this role, she meets with entrepreneurs from across the globe to learn about their businesses,
            to evaluate alignment to State Farm’s innovation work, and to identify investment targets for State Farm
            Ventures.
          </div>
        </div>
        <div id="kim-holmes-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/KimHolmes.png" alt="Kim Holmes" width="170px" height="170px">
          <div class="font-weight-bold">Kim Holmes</div>
          <div class="mx-3"> Discover </div>
        </div>
        <div id="kate-mignon-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/KateMignon.png" alt="Kate Mignon" width="170px" height="170px">
          <div class="font-weight-bold">Kate Mignon</div>
          <div class="mx-3"> Uptake </div>
          <div class="mt-4 mb-2">
            Kate is the VP of Strategic Partnerships at Uptake, an Industrial AI software company headquartered in Chicago.  In her current role, she focuses on business growth through go-to-market partnerships for advanced analytics across industrial
            markets including transportation and logistics, energy, mining, and manufacturing.
          </div>
        </div>
        <div id="kevin-rice-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/KevinRice.png" alt="Kevin Rice" width="170px" height="170px">
          <div class="font-weight-bold">Kevin Rice</div>
          <div class="mx-3"> Arity </div>
        </div>
        <div id="shobhit-jain-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/ShobitJain.png" alt="Shobhit Jain" width="170px" height="170px">
          <div class="font-weight-bold">Shobhit Jain</div>
          <div class="mx-3"> Here Technologies </div>
           <div class="mt-4 mb-2">
            Shobhit Jain is the Head of Product Innovation at HERE Technologies. He leads a global team of highly
            passionate innovators and dreamers who engage customers and partners to identify market
            opportunities and next generation location-based solutions that bring long term value to HERE and its
            partners.
          </div>
        </div>
        <div id="brenna-berman-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/BrennaBerman.png" alt="Brenna Berman" width="170px" height="170px">
          <div class="font-weight-bold">Brenna Berman</div>
          <div class="mx-3"> City Tech </div>
          <div class="mt-4 mb-2">
            Brenna Berman is CEO of City Tech, an IoT urban infrastructure lab that transforms cities into testbeds for
            new ideas. Prior to joining City Tech, Brenna served in Chicago Mayor Rahm Emanuel’s administration, which
            she joined in 2011. She served as the Chief Information Officer for the City and Commissioner for the
            Department of Innovation &amp; Technology (DoIT) from 2012 to spring of 2017.
          </div>
        </div>
        <div id="john-yesko-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/JohnYesko.png" alt="Brenna Berman" width="170px" height="170px">
          <div class="font-weight-bold">John Yesko</div>
          <div class="mx-3"> Walgreens </div>
          <!-- <div class="mt-4 mb-2">
            Brenna Berman is CEO of City Tech, an IoT urban infrastructure lab that transforms cities into testbeds for
            new ideas. Prior to joining City Tech, Brenna served in Chicago Mayor Rahm Emanuel’s administration, which
            she joined in 2011. She served as the Chief Information Officer for the City and Commissioner for the
            Department of Innovation &amp; Technology (DoIT) from 2012 to spring of 2017.
          </div> -->
        </div>
        <div id="nick-ionita-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/NickIonita.png" alt="Nick Ionita" width="170px" height="170px">
          <div class="font-weight-bold">Nick Ionita</div>
          <div class="mx-3"> Flex </div>
          <div class="mt-4 mb-2">
            Nick Ionita is the CEO & Co-Founder of Flux, an internal mobility platform that
            helps employees grow by matching them to projects, rotations, and full-time jobs their company needs delivered. Nick has 18+ years experience in Product and Engineering roles, and has spent his last 12 years in San Francisco building, growing, and losing his hair at start-ups.  Prior to Flux, Nick was Chief Product Officer (CPO) turned CEO of Joyus (acquired by Stack Commerce), and SVP of Product Management at FreeWheel (acquired by Comcast).  Nick has an MBA from U.C. Berkeley, an MS in Information Systems and a BBA in Information Technology & Operations Management.

          </div>
        </div>
        <div id="davie-sweis-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/DavieSweis.png" alt="Shobhit Jain" width="170px" height="170px">
          <div class="font-weight-bold">Davie Sweis</div>
          <div class="mx-3"> Bosch </div>
           <div class="mt-4 mb-2">
            Davie Sweis is the Business Chief Digital Officer and Vice President of Technology & Enabling of the Global Business Services at Bosch.
            After having held various positions within the corporate sector of IT and prior to his latest role, Davie became the head of Bosch's global Digital Business unit in summer of 2013. This unit has allowed Bosch to continue being at the forefront of development and the IT landscape by advancing topics such as IoT, Mobility, Cloud and API Management to create solutions for a connected life. In 2017, he took over as the Head of Information Technology, responsible for representing as the global CIO in the Americas. In addition to his current role, he also serves as the champion for driving Digital Transformation within Bosch North America.

          </div>
        </div>
        <div id="salma-ghanem-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/Salma.png" alt="Salma Ghanem" width="170px" height="170px">
          <div class="font-weight-bold">Salma Ghanem</div>
          <div class="mx-3"> Dean College of Communication, DePaul University </div>
          <div class="mt-4 mb-2">
          </div>
        </div>

        <div id="enrique-aceves-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/EnriqueAceves.png" alt="Enrique Aceves" width="170px" height="170px">
          <div class="font-weight-bold">Enrique Aceves</div>
          <div class="mx-3"> Vice President, Nuveen </div>
          <div class="mt-4 mb-2">
          </div>
        </div>

        <div id="siva-balu-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/SivaBalu.png" alt="Siva Balu" width="170px" height="170px">
          <div class="font-weight-bold">Siva Balu</div>
          <div class="mx-3"> VP & CIO, YMCA of the USA </div>
          <div class="mt-4 mb-2">
          </div>
        </div>

        <div id="aine-allen-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/AineAllen.png" alt="Aine Allen" width="170px" height="170px">
          <div class="font-weight-bold">Aine Allen</div>
          <div class="mx-3"> Divisional Vice President, Business & Technology Services </div>
          <div class="mt-4 mb-2">
          </div>
        </div>

        <div id="meriah-garrett-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/MeriahGarrett.png" alt="Meriah Garrett" width="170px" height="170px">
          <div class="font-weight-bold">Meriah Garrett</div>
          <div class="mx-3"> Chief Design Officer at USAA </div>
          <div class="mt-4 mb-2">
          </div>
        </div>

        <div id="makoto-nakayama-profile" class="text-center p-3 d-none">
          <img class="pastSpeakers-img" src="assets/img/MakotoNakayama.png" alt="Makoto Nakayama" width="170px" height="170px">
          <div class="font-weight-bold">Makoto Nakayama</div>
          <div class="mx-3"> Associate Professor of College of Computing and Digital Media (CDM) at DePaul University </div>
          <div class="mt-4 mb-2">
          </div>
        </div>

        <!-- Footer-->
        <footer class="bg-dark py-5 footer">
            <div class="container pl-4 pr-4">
                <div class="row text-white text-center">

                    <div class="col-md-2 text-center mb-5 mr-5 footer-content">
                        <a class="footer-anchor" href="https://depaulidlab.com"><img class="footer-image-idlab" src="./assets/img/Group 112.svg" width="152px"/></a>
                        <img class="pt-3 footer-image" src="./assets/img/1280px-Depaul_U_Logo white.png" width="152px"/>
                    </div>


                    <div class="col-md-2 mb-5 mr-4 footer-div">
                       <p class="footer-text">Location</p>
                       <p>1 E. Jackson Blvd. Chicago, IL 60604</p>
                    </div>


                    <div class="col-md-2 mb-5 mr-5 footer-div">
                        <p class="footer-text">Contact</p>
                        <p class="footer-text">(312) 362-8000</p>
                        <p class="footer-text">idlab@depaul.edu</p>
                        <p class="footer-text">depaulilab@gmail.com</p>

                    </div>

                    <div class="col-md-2 mb-5 mr-4 footer-div">
                        <p class="text-center">Past Conferences</p>
                        <div class="row justify-content-center mb-2">
                            <div class="col-sm small">
                                <div><a class="text-white" href="https://odi2019.depaulidlab.com/" target="_blank">ODI 2019</a></div>
                            </div>

                            <div class="col-sm small">
                                <div><a class="text-white " href="https://odi2018.depaulidlab.com/" target="_blank">ODI 2018</a></div>
                            </div>
                        </div>
                        <div class="row justify-content-center mb-2">
                            <div class="col-sm small">
                                <div><a class="text-white" href="https://www.odi2017.depaulidlab.com/" target="_blank">ODI 2017</a></div>
                            </div>

                            <div class="col-sm small">
                                <div><a class="text-white" href="https://www.agile2016.depaulidlab.com/" target="_blank">ODI 2016</a></div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-2 ml-4 mb-5 footer-content">
                        <p >Connect with us!</p>
                        <div class="footer-icon ">
                            <a href="https://www.linkedin.com/company/depaul-innovation-lab/" target="_blank">
                                <i class="fab fa-linkedin icon-4x text-white"></i>
                            </a>
                        </div>
                        <div class="footer-icon-fb">
                            <a href="https://www.facebook.com/depaulidlab" target="_blank">
                                <i class="fab fa-facebook-f text-white"></i>
                            </a>
                        </div>
                        <div class="footer-icon-insta">
                            <a href="https://www.instagram.com/depaulidlab/" target="_blank">
                                <i class="fab fa-instagram icon-2x text-white"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div class="small text-center text-muted">©2020 DePaul iD Lab. All Rights Reserved. </div>
            </div>
        </footer>
        <!-- Bootstrap core JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        <!-- Third party plugin JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>

        <script>

            $(document).ready(function() {

              // Assign custom html content to the popover content
              $('.virtual-message').popover({
                html: true,
                content: document.getElementById("virtual-message-box")
              });
              $('.roman-dumiak').popover({
                html: true,
                content: document.getElementById("roman-dumiak-profile")
              });
              $('.olayele-adelakun').popover({
                html: true,
                content: document.getElementById("olayele-adelakun-profile")
              });
              $('.don-scheibenreif').popover({
                html: true,
                content: document.getElementById("don-scheibenreif-profile")
              });
              $('.rahul-avasthy').popover({
                html: true,
                content: document.getElementById("rahul-avasthy-profile")
              });
              $('.erik-pedersen').popover({
                html: true,
                content: document.getElementById("erik-pedersen-profile")
              });
              $('.jay-hieb').popover({
                html: true,
                content: document.getElementById("jay-hieb-profile")
              });
              $('.james-pacella').popover({
                html: true,
                content: document.getElementById("james-pacella-profile")
              });
              $('.terry-finch').popover({
                html: true,
                content: document.getElementById("terry-finch-profile")
              });
              $('.ben-pruess').popover({
                html: true,
                content: document.getElementById("ben-pruess-profile")
              });
              // $('.michelle-crouthamel').popover({
              //   html: true,
              //   content: document.getElementById("michelle-crouthamel-profile")
              // });
              $('.dwayne-prosko').popover({
                html: true,
                content: document.getElementById("dwayne-prosko-profile")
              });
              $('.mohan-putcha').popover({
                html: true,
                content: document.getElementById("mohan-putcha-profile")
              });
              $('.willie-anderson').popover({
                html: true,
                content: document.getElementById("willie-anderson-profile")
              });
              $('.kelly-coomer').popover({
                html: true,
                content: document.getElementById("kelly-coomer-profile")
              });
              $('.lauren-rosen').popover({
                html: true,
                content: document.getElementById("lauren-rosen-profile")
              });
              $('.david-miller').popover({
                html: true,
                content: document.getElementById("david-miller-profile")
              });
              $('.aleksander-velkoski').popover({
                html: true,
                content: document.getElementById("aleksander-velkoski-profile")
              });
              $('.lawrence-johnson').popover({
                html: true,
                content: document.getElementById("lawrence-johnson-profile")
              });
              $('.robert-nendorf').popover({
                html: true,
                content: document.getElementById("robert-nendorf-profile")
              });
              $('.doug-laney').popover({
                html: true,
                content: document.getElementById("doug-laney-profile")
              });
              $('.ido-biger').popover({
                html: true,
                content: document.getElementById("ido-biger-profile")
              });
              $('.vivian-zhang').popover({
                html: true,
                content: document.getElementById("vivian-zhang-profile")
              });
              $('.shawn-griffin').popover({
                html: true,
                content: document.getElementById("shawn-griffin-profile")
              });
              $('.john-leach').popover({
                html: true,
                content: document.getElementById("john-leach-profile")
              });
              $('.anthony-termini').popover({
                html: true,
                content: document.getElementById("anthony-termini-profile")
              });
              $('.dana-eiger').popover({
                html: true,
                content: document.getElementById("dana-eiger-profile")
              });
              $('.kim-holmes').popover({
                html: true,
                content: document.getElementById("kim-holmes-profile")
              });
              $('.kate-mignon').popover({
                html: true,
                content: document.getElementById("kate-mignon-profile")
              });
              $('.kevin-rice').popover({
                html: true,
                content: document.getElementById("kevin-rice-profile")
              });
              $('.shobhit-jain').popover({
                html: true,
                content: document.getElementById("shobhit-jain-profile")
              });
              $('.brenna-berman').popover({
                html: true,
                content: document.getElementById("brenna-berman-profile")
              });
              $('.john-yesko').popover({
                html: true,
                content: document.getElementById("john-yesko-profile")
              });
              $('.nick-ionita').popover({
                html: true,
                content: document.getElementById("nick-ionita-profile")
              });
              $('.davie-sweis').popover({
                html: true,
                content: document.getElementById("davie-sweis-profile")
              });
              $('.salma-ghanem').popover({
                html: true,
                content: document.getElementById("salma-ghanem-profile")
              });
              $('.enrique-aceves').popover({
                html: true,
                content: document.getElementById("enrique-aceves-profile")
              });
              $('.siva-balu').popover({
                html: true,
                content: document.getElementById("siva-balu-profile")
              });
              $('.aine-allen').popover({
                html: true,
                content: document.getElementById("aine-allen-profile")
              });
              $('.meriah-garrett').popover({
                html: true,
                content: document.getElementById("meriah-garrett-profile")
              });
              $('.makoto-nakayama').popover({
                html: true,
                content: document.getElementById("makoto-nakayama-profile")
              });

              // Show virtual link message on popover links click
              $('.virtual-message').on('show.bs.popover', function () {
                $('#virtual-message-box').removeClass('d-none');
              });

              // Show speaker profiles on popover links click
              $('.roman-dumiak').on('show.bs.popover', function () {
                $('#roman-dumiak-profile').removeClass('d-none');
              });
              $('.olayele-adelakun').on('show.bs.popover', function () {
                $('#olayele-adelakun-profile').removeClass('d-none');
              });
              $('.don-scheibenreif').on('show.bs.popover', function () {
                $('#don-scheibenreif-profile').removeClass('d-none');
              });
              $('.rahul-avasthy').on('show.bs.popover', function () {
                $('#rahul-avasthy-profile').removeClass('d-none');
              });
              $('.erik-pedersen').on('show.bs.popover', function () {
                $('#erik-pedersen-profile').removeClass('d-none');
              });
              $('.jay-hieb').on('show.bs.popover', function () {
                $('#jay-hieb-profile').removeClass('d-none');
              });
              $('.james-pacella').on('show.bs.popover', function () {
                $('#james-pacella-profile').removeClass('d-none');
              });
              $('.terry-finch').on('show.bs.popover', function () {
                $('#terry-finch-profile').removeClass('d-none');
              });
              $('.ben-pruess').on('show.bs.popover', function () {
                $('#ben-pruess-profile').removeClass('d-none');
              });
              // $('.michelle-crouthamel').on('show.bs.popover', function () {
              //   $('#michelle-crouthamel-profile').removeClass('d-none');
              // });
              $('.dwayne-prosko').on('show.bs.popover', function () {
                $('#dwayne-prosko-profile').removeClass('d-none');
              });
              $('.mohan-putcha').on('show.bs.popover', function () {
                $('#mohan-putcha-profile').removeClass('d-none');
              });
              $('.willie-anderson').on('show.bs.popover', function () {
                $('#willie-anderson-profile').removeClass('d-none');
              });
              $('.kelly-coomer').on('show.bs.popover', function () {
                $('#kelly-coomer-profile').removeClass('d-none');
              });
              $('.lauren-rosen').on('show.bs.popover', function () {
                $('#lauren-rosen-profile').removeClass('d-none');
              });
              $('.david-miller').on('show.bs.popover', function () {
                $('#david-miller-profile').removeClass('d-none');
              });
              $('.aleksander-velkoski').on('show.bs.popover', function () {
                $('#aleksander-velkoski-profile').removeClass('d-none');
              });
              $('.lawrence-johnson').on('show.bs.popover', function () {
                $('#lawrence-johnson-profile').removeClass('d-none');
              });
              $('.robert-nendorf').on('show.bs.popover', function () {
                $('#robert-nendorf-profile').removeClass('d-none');
              });
              $('.doug-laney').on('show.bs.popover', function () {
                $('#doug-laney-profile').removeClass('d-none');
              });
              $('.ido-biger').on('show.bs.popover', function () {
                $('#ido-biger-profile').removeClass('d-none');
              });
              $('.vivian-zhang').on('show.bs.popover', function () {
                $('#vivian-zhang-profile').removeClass('d-none');
              });
              $('.shawn-griffin').on('show.bs.popover', function () {
                $('#shawn-griffin-profile').removeClass('d-none');
              });
              $('.john-leach').on('show.bs.popover', function () {
                $('#john-leach-profile').removeClass('d-none');
              });
              $('.anthony-termini').on('show.bs.popover', function () {
                $('#anthony-termini-profile').removeClass('d-none');
              });
              $('.dana-eiger').on('show.bs.popover', function () {
                $('#dana-eiger-profile').removeClass('d-none');
              });
              $('.kim-holmes').on('show.bs.popover', function () {
                $('#kim-holmes-profile').removeClass('d-none');
              });
              $('.kate-mignon').on('show.bs.popover', function () {
                $('#kate-mignon-profile').removeClass('d-none');
              });
              $('.kevin-rice').on('show.bs.popover', function () {
                $('#kevin-rice-profile').removeClass('d-none');
              });
              $('.shobhit-jain').on('show.bs.popover', function () {
                $('#shobhit-jain-profile').removeClass('d-none');
              });
              $('.brenna-berman').on('show.bs.popover', function () {
                $('#brenna-berman-profile').removeClass('d-none');
              });
              $('.john-yesko').on('show.bs.popover', function () {
                $('#john-yesko-profile').removeClass('d-none');
              });
              $('.nick-ionita').on('show.bs.popover', function () {
                $('#nick-ionita-profile').removeClass('d-none');
              });
              $('.davie-sweis').on('show.bs.popover', function () {
                $('#davie-sweis-profile').removeClass('d-none');
              });
              $('.salma-ghanem').on('show.bs.popover', function () {
                $('#salma-ghanem-profile').removeClass('d-none');
              });
              $('.enrique-aceves').on('show.bs.popover', function () {
                $('#enrique-aceves-profile').removeClass('d-none');
              });
              $('.siva-balu').on('show.bs.popover', function () {
                $('#siva-balu-profile').removeClass('d-none');
              });
              $('.aine-allen').on('show.bs.popover', function () {
                $('#aine-allen-profile').removeClass('d-none');
              });
              $('.meriah-garrett').on('show.bs.popover', function () {
                $('#meriah-garrett-profile').removeClass('d-none');
              });
              $('.makoto-nakayama').on('show.bs.popover', function () {
                $('#makoto-nakayama-profile').removeClass('d-none');
              });

              // Hide popover box when moving focus
              $('.popover-dismiss').popover({
                trigger: 'focus'
              });

              // Hide day2 table and selection indicator
              $('#table-day2').hide();
              $('#sel-day2').hide();

              // Handling day1 switch button click event
              $('#btn-day1').click(function () {
                $('#table-day2').hide();
                $('#table-day1').fadeIn();

                $('#sel-day2').hide();
                $('#sel-day1').show();
              });

              // Handling day2 switch button click event
              $('#btn-day2').click(function () {
                $('#table-day1').hide();
                $('#table-day2').fadeIn();

                $('#sel-day1').hide();
                $('#sel-day2').show();
              });

              // Handling day1 button mouseover event
              $('#btn-day1').mouseover(function () {
                $('#sel-day1').show();
              });

              // Handling day1 button mouseout event
              $('#btn-day1').mouseout(function () {
                if ($('#table-day1').is(':hidden')) {
                  $('#sel-day1').hide();
                }
              });

              // Handling day2 button mouseover event
              $('#btn-day2').mouseover(function () {
                $('#sel-day2').show();
              });

              // Handling day2 button mouseout event
              $('#btn-day2').mouseout(function () {
                if ($('#table-day2').is(':hidden')) {
                  $('#sel-day2').hide();
                }
              });

            });

        </script>


    </body>
</html>
`;

const odiCss =`
@charset "UTF-8";
/*!
* Start Bootstrap - Creative v6.0.2 (https://startbootstrap.com/themes/creative)
* Copyright 2013-2020 Start Bootstrap
* Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
*/
/*!
 * Bootstrap v4.5.0 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #f4623a;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #f4623a;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  /* --font-family-sans-serif: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

.letter-spacer{
  letter-spacing: 0.8rem;
}

.letter-spacer2{
  letter-spacing: 0.5rem;
}

.logo-text{
  display: inline-flex;
  line-height: inherit;
  white-space: nowrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  padding-left: 0.2rem;
  font-size: 2.8rem;
  font-weight: 200;
  font-stretch: extra-condensed;
}

.sub-text{
  padding-left: 0.3em;
}

.pad-more{
  padding-left: 1.3em;
}
.hero-img-div{
  width: auto;
  float: left;
  padding-left: 1rem;
}

.hero-detail-div{
  width: auto;
  float:left;
  padding-left: 0.775rem;
}

.hero-detail-para{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.hero-arrow-div{
  clear: both;
  float: left;
  width: 100%;
  padding-top: 3%;
  justify-content: center;
}

.footer-icon, .footer-icon-fb {
  background: #001A2C;
  color:white;
  padding-right: 4px;
  padding-left: 8px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 18px;
  text-align: center;
  margin: 5px 4px;
  border-radius: 50%;
  border: 2px solid white;
  display: initial;
}

.footer-icon-insta{
  background: #001A2C;
  color:white;
  padding: 7px;
  font-size: 18px;
  text-align: center;
  margin: 5px 4px;
  border-radius: 50%;
  border: 2px solid white;
  display: initial;
}

body {
  margin: 0;
  /* font-family: "Merriweather", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}


ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}


small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: black;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  text-decoration: underline;
}

a:not([href]) {
  color: inherit;
  text-decoration: none;
}
a:not([href]):hover {
  color: inherit;
  text-decoration: none;
}


pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  -ms-overflow-style: scrollbar;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

img .about-logo{
  height: 3rem;
}


svg {
  overflow: hidden;
  vertical-align: middle;
}


caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type=radio],
input[type=checkbox] {
  box-sizing: border-box;
  padding: 0;
}

textarea {
  overflow: auto;
  resize: vertical;
}


[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}


[hidden] {
  display: none !important;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  /* font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 500;
  line-height: 1.2;
}

h1, .h1 {
  font-size: 2.5rem;
}

h2, .h2 {
  font-size: 2rem;
}

h3, .h3 {
  font-size: 1.75rem;
}

h4, .h4 {
  font-size: 1.5rem;
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}


small,
.small {
  font-size: 80%;
  font-weight: 400;
}


.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}


.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #6c757d;
}

code {
  font-size: 87.5%;
  color: #e83e8c;
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

pre {
  display: block;
  font-size: 87.5%;
  color: #212529;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (max-width: 768px) {
  .small-screen-button {
          text-align: center;
   }
}
.container-fluid, .container-xl, .container-lg, .container-md, .container-sm {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.no-gutters > .col,
.no-gutters > [class*=col-] {
  padding-right: 0;
  padding-left: 0;
}

.col-xl,
.col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg,
.col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md,
.col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm,
.col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col,
.col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
}

.row-cols-1 > * {
  flex: 0 0 100%;
  max-width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 50%;
  max-width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 25%;
  max-width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 20%;
  max-width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  flex: 0 0 8.3333333333%;
  max-width: 8.3333333333%;
}

.col-2 {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}

.col-5 {
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.3333333333%;
  max-width: 58.3333333333%;
}

.col-8 {
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  /* flex: 0 0 83.3333333333%; */
  flex: 1 0 83.3333333333%;
  max-width: 83.3333333333%;
}

.col-11 {
  flex: 0 0 91.6666666667%;
  max-width: 91.6666666667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}


@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
  }

  .row-cols-sm-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-sm-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-sm-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-sm-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-sm-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-sm-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-sm-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-sm-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-sm-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-sm-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-sm-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
  }

  .row-cols-md-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-md-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-md-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-md-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-md-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-md-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-md-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-md-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 992px) and (max-width: 1025px){
  .col-lg-10 {
    flex: 1 0 83.333333% !important;
    max-width: 88.333333% !important;
  }
}

@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
  }

  .row-cols-lg-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-lg-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-lg-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-lg-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-lg-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-lg-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-lg-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-lg-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-lg-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-lg-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-lg-10 {
    /* flex: 0 0 83.3333333333%; */
    flex: 1 0 83.3333333333%;
    /* max-width: 83.3333333333%; */
    max-width: 91.3333333333%;
  }

  .col-lg-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
  }

  .row-cols-xl-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-xl-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-xl-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-xl-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-xl-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-xl-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-xl-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-xl-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-xl-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-xl-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-xl-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

input[type=date].form-control,
input[type=time].form-control,
input[type=datetime-local].form-control,
input[type=month].form-control {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

textarea.form-control {
  height: auto;
}

.btn {
  display: inline-block;
  font-weight: 400;
  /* color: #212529; */
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  /* background-color: transparent; */
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  /* color: #212529; */
  text-decoration: none;
}
.btn:focus, .btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(244, 98, 58, 0.25);
}
.btn.disabled, .btn:disabled {
  opacity: 0.65;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #f4623a;
  border-color: #f4623a;
}
.btn-primary:hover {
  color: #fff;
  background-color: #f24516;
  border-color: #ee3e0d;
}
.btn-primary:focus, .btn-primary.focus {
  color: #fff;
  background-color: #f24516;
  border-color: #ee3e0d;
  box-shadow: 0 0 0 0.2rem rgba(246, 122, 88, 0.5);
}
.btn-primary.disabled, .btn-primary:disabled {
  color: #fff;
  background-color: #f4623a;
  border-color: #f4623a;
}
.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #ee3e0d;
  border-color: #e23a0d;
}
.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(246, 122, 88, 0.5);
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}
.btn-secondary:focus, .btn-secondary.focus {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}
.btn-secondary.disabled, .btn-secondary:disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #545b62;
  border-color: #4e555b;
}
.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}

.btn-outline-blue {
  color: #fff;
  background-color: #0077E0;
}
.btn-outline-blue:hover {
  color: #fff;
  background-color:#0077E0;
  border-color: rgb(0, 119, 224);
}
.btn-outline-blue:focus, .btn-outline-blue.focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 119, 244, 0.5);
}
.btn-outline-blue.disabled, .btn-outline-blue:disabled {
  color: #0077E0;
  background-color: transparent;
}
.btn-outline-blue:not(:disabled):not(.disabled):active, .btn-outline-blue:not(:disabled):not(.disabled).active, .show > .btn-outline-blue.dropdown-toggle {
  color: #fff;
  background-color: #0077E0;
  border-color: #0077E0;
}
.btn-outline-blue:not(:disabled):not(.disabled):active:focus, .btn-outline-blue:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-blue.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 119, 244, 0.5);
}

.btn-link {
  font-weight: 400;
  color: #f4623a;
  text-decoration: none;
}
.btn-link:hover {
  color: #d6370c;
  text-decoration: underline;
}
.btn-link:focus, .btn-link.focus {
  text-decoration: underline;
}
.btn-link:disabled, .btn-link.disabled {
  color: #6c757d;
  pointer-events: none;
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.btn-block {
  display: block;
  width: 100%;
}
.btn-block + .btn-block {
  margin-top: 0.5rem;
}

input[type=submit].btn-block,
input[type=reset].btn-block,
input[type=button].btn-block {
  width: 100%;
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover {
  z-index: 1;
}
.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) {
  margin-left: -1px;
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: -1px;
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-group-toggle > .btn,
.btn-group-toggle > .btn-group > .btn {
  margin-bottom: 0;
}
.btn-group-toggle > .btn input[type=radio],
.btn-group-toggle > .btn input[type=checkbox],
.btn-group-toggle > .btn-group > .btn input[type=radio],
.btn-group-toggle > .btn-group > .btn input[type=checkbox] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}
.nav-link:hover, .nav-link:focus {
  text-decoration: none;
}
.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}
.nav-tabs .nav-item {
  margin-bottom: -1px;
}
.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
}
.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #f4623a;
}

.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

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


.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
.close:hover {
  color: #000;
  text-decoration: none;
}
.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {
  opacity: 0.75;
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
}

a.close.disabled {
  pointer-events: none;
}


.modal-open {
  overflow: hidden;
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  display: flex;
  max-height: calc(100% - 1rem);
}
.modal-dialog-scrollable .modal-content {
  max-height: calc(100vh - 1rem);
  overflow: hidden;
}
.modal-dialog-scrollable .modal-header,
.modal-dialog-scrollable .modal-footer {
  flex-shrink: 0;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}
.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  content: "";
}
.modal-dialog-centered.modal-dialog-scrollable {
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  max-height: none;
}
.modal-dialog-centered.modal-dialog-scrollable::before {
  content: none;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-header .close {
  padding: 1rem 1rem;
  margin: -1rem -1rem -1rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-image{
  margin: 0 138%;
}

.modal-button{
  margin: 0 50%;
}

@media (max-width: 576px){
  .modal-button {

    margin: 0px 20%;
    margin-top: 15px;
  }
  .noRegCode{
    margin-right: 9em;
    font-size: 0.9em;

  }
}

@media (max-width: 320px){
  .noRegCode{
    margin-right: 2em;
  }
}

@media (min-width: 360px){
  .noRegCode{
    margin-right: 5em;
  }
}

@media (min-width: 411px){
  .noRegCode{
    margin-right: 8em;
  }
}

@media (min-width: 450px){
  .noRegCode{
    margin-right: 11em;
  }
}





@media (min-width: 768px){
  .modal-button {

    margin-left: 40%;
    margin-right: 40%;
    margin-top: 5 px;
  }
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.modal-footer > * {
  margin: 0.25rem;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    max-height: calc(100% - 3.5rem);
  }
  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }
  .modal-dialog-centered::before {
    height: calc(100vh - 3.5rem);
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
  }

  .modal-sm {
    max-width: 300px;
  }

  .modal-image{
    margin: 0 102%;
  }
}
@media (min-width: 992px) {
  .modal-lg,
.modal-xl {
    max-width: 800px;
  }

  .modal-image{
    margin: 0 145%;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
  .modal-image{
    margin: 0 145%;
  }
}


.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-para{
  padding-right: 2rem;
}

.carousel-item {
  position: relative;
  display: none;
  float:left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-left),
.active.carousel-item-right {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-right),
.active.carousel-item-left {
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 21%;
  /* bottom: 0; */
  z-index: 1;
  /* display: flex; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
.carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  /* color: #fff; */
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: -15%;
  /* left: 0; */
}

.carousel-control-next {
  right: -10%;
  /* right: 0; */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  /* width: 20px;
  height: 20px;
  background: no-repeat 50%/100% 100%; */
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #DEDEDE;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators li {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
  background-color: #0077E0;
}

.carousel-caption {
  /* position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center; */

  position: relative;
  left: 0;
  top: 0;
  right: 0;
  bottom: 20px;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #000;
  text-align: center;
  padding-bottom: 3rem;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
          animation: spinner-border 0.75s linear infinite;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: spinner-grow 0.75s linear infinite;
          animation: spinner-grow 0.75s linear infinite;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}



.bg-light {
  background-color: #f8f9fa !important;
}

a.bg-light:hover, a.bg-light:focus,
button.bg-light:hover,
button.bg-light:focus {
  background-color: #dae0e5 !important;
}

.bg-dark {
  background-color: #001A2C !important;
}

a.bg-dark:hover, a.bg-dark:focus,
button.bg-dark:hover,
button.bg-dark:focus {
  background-color: #1d2124 !important;
}

.bg-white {
  background-color: #fff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.bg-about{
  background-image: url("../assets/img/about-bg.svg");
  background-repeat: no-repeat;
  background-position: right;
}

.border {
  border: 1px solid #dee2e6 !important;
}

.border-top {
  border-top: 1px solid #dee2e6 !important;
}

.border-right {
  border-right: 1px solid #dee2e6 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.border-left {
  border-left: 1px solid #dee2e6 !important;
}

.border-0 {
  border: 0 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-right-0 {
  border-right: 0 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-left-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #f4623a !important;
}

.border-secondary {
  border-color: #6c757d !important;
}

.border-success {
  border-color: #28a745 !important;
}

.border-info {
  border-color: #17a2b8 !important;
}

.border-warning {
  border-color: #ffc107 !important;
}

.border-danger {
  border-color: #dc3545 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.border-dark {
  border-color: #343a40 !important;
}

.border-white {
  border-color: #fff !important;
}

.rounded-sm {
  border-radius: 0.2rem !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-right {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-left {
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-lg {
  border-radius: 0.3rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}



.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

@media (min-width: 576px) {
  .d-sm-none {
    display: none !important;
  }

  .d-sm-inline {
    display: inline !important;
  }

  .d-sm-inline-block {
    display: inline-block !important;
  }

  .d-sm-block {
    display: block !important;
  }

  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }

  .d-md-inline {
    display: inline !important;
  }

  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }


  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }

  .d-lg-inline {
    display: inline !important;
  }

  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }


  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }

  .d-xl-inline {
    display: inline !important;
  }

  .d-xl-inline-block {
    display: inline-block !important;
  }

  .d-xl-block {
    display: block !important;
  }

  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }
}
@media print {
  .d-print-none {
    display: none !important;
  }

  .d-print-inline {
    display: inline !important;
  }

  .d-print-inline-block {
    display: inline-block !important;
  }

  .d-print-block {
    display: block !important;
  }

  .d-print-flex {
    display: flex !important;
  }

  .d-print-inline-flex {
    display: inline-flex !important;
  }
}
.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}
.embed-responsive::before {
  display: block;
  content: "";
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.8571428571%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}




@media (min-width: 576px) {
  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-sm-start {
    justify-content: flex-start !important;
  }

  .justify-content-sm-end {
    justify-content: flex-end !important;
  }

  .justify-content-sm-center {
    justify-content: center !important;
  }

  .justify-content-sm-between {
    justify-content: space-between !important;
  }

  .justify-content-sm-around {
    justify-content: space-around !important;
  }

  .align-items-sm-start {
    align-items: flex-start !important;
  }

  .align-items-sm-end {
    align-items: flex-end !important;
  }

  .align-items-sm-center {
    align-items: center !important;
  }

  .align-items-sm-baseline {
    align-items: baseline !important;
  }

  .align-items-sm-stretch {
    align-items: stretch !important;
  }

  .align-content-sm-start {
    align-content: flex-start !important;
  }

  .align-content-sm-end {
    align-content: flex-end !important;
  }

  .align-content-sm-center {
    align-content: center !important;
  }

  .align-content-sm-between {
    align-content: space-between !important;
  }

  .align-content-sm-around {
    align-content: space-around !important;
  }

  .align-content-sm-stretch {
    align-content: stretch !important;
  }

  .align-self-sm-auto {
    align-self: auto !important;
  }

  .align-self-sm-start {
    align-self: flex-start !important;
  }

  .align-self-sm-end {
    align-self: flex-end !important;
  }

  .align-self-sm-center {
    align-self: center !important;
  }

  .align-self-sm-baseline {
    align-self: baseline !important;
  }

  .align-self-sm-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 768px) {
  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-md-start {
    justify-content: flex-start !important;
  }

  .justify-content-md-end {
    justify-content: flex-end !important;
  }

  .justify-content-md-center {
    justify-content: center !important;
  }

  .justify-content-md-between {
    justify-content: space-between !important;
  }

  .justify-content-md-around {
    justify-content: space-around !important;
  }

  .align-items-md-start {
    align-items: flex-start !important;
  }

  .align-items-md-end {
    align-items: flex-end !important;
  }

  .align-items-md-center {
    align-items: center !important;
  }

  .align-items-md-baseline {
    align-items: baseline !important;
  }

  .align-items-md-stretch {
    align-items: stretch !important;
  }

  .align-content-md-start {
    align-content: flex-start !important;
  }

  .align-content-md-end {
    align-content: flex-end !important;
  }

  .align-content-md-center {
    align-content: center !important;
  }

  .align-content-md-between {
    align-content: space-between !important;
  }

  .align-content-md-around {
    align-content: space-around !important;
  }

  .align-content-md-stretch {
    align-content: stretch !important;
  }

  .align-self-md-auto {
    align-self: auto !important;
  }

  .align-self-md-start {
    align-self: flex-start !important;
  }

  .align-self-md-end {
    align-self: flex-end !important;
  }

  .align-self-md-center {
    align-self: center !important;
  }

  .align-self-md-baseline {
    align-self: baseline !important;
  }

  .align-self-md-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 992px) {
  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }

  .justify-content-lg-between {
    justify-content: space-between !important;
  }

  .justify-content-lg-around {
    justify-content: space-around !important;
  }

  .align-items-lg-start {
    align-items: flex-start !important;
  }

  .align-items-lg-end {
    align-items: flex-end !important;
  }

  .align-items-lg-center {
    align-items: center !important;
  }

  .align-items-lg-baseline {
    align-items: baseline !important;
  }

  .align-items-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-between {
    align-content: space-between !important;
  }

  .align-content-lg-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 1200px) {
  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-xl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xl-center {
    justify-content: center !important;
  }

  .justify-content-xl-between {
    justify-content: space-between !important;
  }

  .justify-content-xl-around {
    justify-content: space-around !important;
  }

  .align-items-xl-start {
    align-items: flex-start !important;
  }

  .align-items-xl-end {
    align-items: flex-end !important;
  }

  .align-items-xl-center {
    align-items: center !important;
  }

  .align-items-xl-baseline {
    align-items: baseline !important;
  }

  .align-items-xl-stretch {
    align-items: stretch !important;
  }

  .align-content-xl-start {
    align-content: flex-start !important;
  }

  .align-content-xl-end {
    align-content: flex-end !important;
  }

  .align-content-xl-center {
    align-content: center !important;
  }

  .align-content-xl-between {
    align-content: space-between !important;
  }

  .align-content-xl-around {
    align-content: space-around !important;
  }

  .align-content-xl-stretch {
    align-content: stretch !important;
  }

  .align-self-xl-auto {
    align-self: auto !important;
  }

  .align-self-xl-start {
    align-self: flex-start !important;
  }

  .align-self-xl-end {
    align-self: flex-end !important;
  }

  .align-self-xl-center {
    align-self: center !important;
  }

  .align-self-xl-baseline {
    align-self: baseline !important;
  }

  .align-self-xl-stretch {
    align-self: stretch !important;
  }
}
.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.float-none {
  float: none !important;
}

@media (min-width: 576px) {
  .float-sm-left {
    float: left !important;
  }

  .float-sm-right {
    float: right !important;
  }

  .float-sm-none {
    float: none !important;
  }
}
@media (min-width: 768px) {
  .float-md-left {
    float: left !important;
  }

  .float-md-right {
    float: right !important;
  }

  .float-md-none {
    float: none !important;
  }
}
@media (min-width: 992px) {
  .float-lg-left {
    float: left !important;
  }

  .float-lg-right {
    float: right !important;
  }

  .float-lg-none {
    float: none !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-left {
    float: left !important;
  }

  .float-xl-right {
    float: right !important;
  }

  .float-xl-none {
    float: none !important;
  }
}
.user-select-all {
  -webkit-user-select: all !important;
     -moz-user-select: all !important;
      -ms-user-select: all !important;
          user-select: all !important;
}

.user-select-auto {
  -webkit-user-select: auto !important;
     -moz-user-select: auto !important;
      -ms-user-select: auto !important;
          user-select: auto !important;
}

.user-select-none {
  -webkit-user-select: none !important;
     -moz-user-select: none !important;
      -ms-user-select: none !important;
          user-select: none !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-95 {
  width: 95% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.h-15 {
  height: 15% !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.mh-100 {
  max-height: 100% !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.vw-100 {
  width: 100vw !important;
}

.vh-100 {
  height: 100vh !important;
}

.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}
.pt-6,
.py-6{
  padding-top: 4rem !important;
}

.pt-7,
.py-7{
  padding-top: 5rem !important;
}

.pt-8,
.py-8{
  padding-top: 10rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}

.pl-6,
.px-6 {
  padding-left: 3.575rem !important;
}


.m-n1 {
  margin: -0.25rem !important;
}

.mt-n1,
.my-n1 {
  margin-top: -0.25rem !important;
}

.mr-n1,
.mx-n1 {
  margin-right: -0.25rem !important;
}

.mb-n1,
.my-n1 {
  margin-bottom: -0.25rem !important;
}

.ml-n1,
.mx-n1 {
  margin-left: -0.25rem !important;
}

.m-n2 {
  margin: -0.5rem !important;
}

.mt-n2,
.my-n2 {
  margin-top: -0.5rem !important;
}

.mr-n2,
.mx-n2 {
  margin-right: -0.5rem !important;
}

.mb-n2,
.my-n2 {
  margin-bottom: -0.5rem !important;
}

.ml-n2,
.mx-n2 {
  margin-left: -0.5rem !important;
}

.m-n3 {
  margin: -1rem !important;
}

.mt-n3,
.my-n3 {
  margin-top: -1rem !important;
}

.mr-n3,
.mx-n3 {
  margin-right: -1rem !important;
}

.mb-n3,
.my-n3 {
  margin-bottom: -1rem !important;
}

.ml-n3,
.mx-n3 {
  margin-left: -1rem !important;
}

.m-n4 {
  margin: -1.5rem !important;
}

.mt-n4,
.my-n4 {
  margin-top: -1.5rem !important;
}

.mr-n4,
.mx-n4 {
  margin-right: -1.5rem !important;
}

.mb-n4,
.my-n4 {
  margin-bottom: -1.5rem !important;
}

.ml-n4,
.mx-n4 {
  margin-left: -1.5rem !important;
}

.m-n5 {
  margin: -3rem !important;
}

.mt-n5,
.my-n5 {
  margin-top: -3rem !important;
}

.mr-n5,
.mx-n5 {
  margin-right: -3rem !important;
}

.mb-n5,
.my-n5 {
  margin-bottom: -3rem !important;
}

.ml-n5,
.mx-n5 {
  margin-left: -3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto,
.my-auto {
  margin-top: auto !important;
}

.mr-auto,
.mx-auto {
  margin-right: auto !important;
}

.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}

.ml-auto,
.mx-auto {
  margin-left: auto !important;
}

@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }

  .mt-sm-0,
.my-sm-0 {
    margin-top: 0 !important;
  }

  .mr-sm-0,
.mx-sm-0 {
    margin-right: 0 !important;
  }

  .mb-sm-0,
.my-sm-0 {
    margin-bottom: 0 !important;
  }

  .ml-sm-0,
.mx-sm-0 {
    margin-left: 0 !important;
  }

  .m-sm-1 {
    margin: 0.25rem !important;
  }

  .mt-sm-1,
.my-sm-1 {
    margin-top: 0.25rem !important;
  }

  .mr-sm-1,
.mx-sm-1 {
    margin-right: 0.25rem !important;
  }

  .mb-sm-1,
.my-sm-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-sm-1,
.mx-sm-1 {
    margin-left: 0.25rem !important;
  }

  .m-sm-2 {
    margin: 0.5rem !important;
  }

  .mt-sm-2,
.my-sm-2 {
    margin-top: 0.5rem !important;
  }

  .mr-sm-2,
.mx-sm-2 {
    margin-right: 0.5rem !important;
  }

  .mb-sm-2,
.my-sm-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-sm-2,
.mx-sm-2 {
    margin-left: 0.5rem !important;
  }

  .m-sm-3 {
    margin: 1rem !important;
  }

  .mt-sm-3,
.my-sm-3 {
    margin-top: 1rem !important;
  }

  .mr-sm-3,
.mx-sm-3 {
    margin-right: 1rem !important;
  }

  .mb-sm-3,
.my-sm-3 {
    margin-bottom: 1rem !important;
  }

  .ml-sm-3,
.mx-sm-3 {
    margin-left: 1rem !important;
  }

  .m-sm-4 {
    margin: 1.5rem !important;
  }

  .mt-sm-4,
.my-sm-4 {
    margin-top: 1.5rem !important;
  }

  .mr-sm-4,
.mx-sm-4 {
    margin-right: 1.5rem !important;
  }

  .mb-sm-4,
.my-sm-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-sm-4,
.mx-sm-4 {
    margin-left: 1.5rem !important;
  }

  .m-sm-5 {
    margin: 3rem !important;
  }

  .mt-sm-5,
.my-sm-5 {
    margin-top: 3rem !important;
  }

  .mr-sm-5,
.mx-sm-5 {
    margin-right: 3rem !important;
  }

  .mb-sm-5,
.my-sm-5 {
    margin-bottom: 3rem !important;
  }

  .ml-sm-5,
.mx-sm-5 {
    margin-left: 3rem !important;
  }

  .p-sm-0 {
    padding: 0 !important;
  }

  .pt-sm-0,
.py-sm-0 {
    padding-top: 0 !important;
  }

  .pr-sm-0,
.px-sm-0 {
    padding-right: 0 !important;
  }

  .pb-sm-0,
.py-sm-0 {
    padding-bottom: 0 !important;
  }

  .pl-sm-0,
.px-sm-0 {
    padding-left: 0 !important;
  }

  .p-sm-1 {
    padding: 0.25rem !important;
  }

  .pt-sm-1,
.py-sm-1 {
    padding-top: 0.25rem !important;
  }

  .pr-sm-1,
.px-sm-1 {
    padding-right: 0.25rem !important;
  }

  .pb-sm-1,
.py-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-sm-1,
.px-sm-1 {
    padding-left: 0.25rem !important;
  }

  .p-sm-2 {
    padding: 0.5rem !important;
  }

  .pt-sm-2,
.py-sm-2 {
    padding-top: 0.5rem !important;
  }

  .pr-sm-2,
.px-sm-2 {
    padding-right: 0.5rem !important;
  }

  .pb-sm-2,
.py-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-sm-2,
.px-sm-2 {
    padding-left: 0.5rem !important;
  }

  .p-sm-3 {
    padding: 1rem !important;
  }

  .pt-sm-3,
.py-sm-3 {
    padding-top: 1rem !important;
  }

  .pr-sm-3,
.px-sm-3 {
    padding-right: 1rem !important;
  }

  .pb-sm-3,
.py-sm-3 {
    padding-bottom: 1rem !important;
  }

  .pl-sm-3,
.px-sm-3 {
    padding-left: 1rem !important;
  }

  .p-sm-4 {
    padding: 1.5rem !important;
  }

  .pt-sm-4,
.py-sm-4 {
    padding-top: 1.5rem !important;
  }

  .pr-sm-4,
.px-sm-4 {
    padding-right: 1.5rem !important;
  }

  .pb-sm-4,
.py-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-sm-4,
.px-sm-4 {
    padding-left: 1.5rem !important;
  }

  .p-sm-5 {
    padding: 3rem !important;
  }

  .pt-sm-5,
.py-sm-5 {
    padding-top: 3rem !important;
  }

  .pr-sm-5,
.px-sm-5 {
    padding-right: 3rem !important;
  }

  .pb-sm-5,
.py-sm-5 {
    padding-bottom: 3rem !important;
  }

  .pl-sm-5,
.px-sm-5 {
    padding-left: 3rem !important;
  }

  .m-sm-n1 {
    margin: -0.25rem !important;
  }

  .mt-sm-n1,
.my-sm-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-sm-n1,
.mx-sm-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-sm-n1,
.my-sm-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-sm-n1,
.mx-sm-n1 {
    margin-left: -0.25rem !important;
  }

  .m-sm-n2 {
    margin: -0.5rem !important;
  }

  .mt-sm-n2,
.my-sm-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-sm-n2,
.mx-sm-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-sm-n2,
.my-sm-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-sm-n2,
.mx-sm-n2 {
    margin-left: -0.5rem !important;
  }

  .m-sm-n3 {
    margin: -1rem !important;
  }

  .mt-sm-n3,
.my-sm-n3 {
    margin-top: -1rem !important;
  }

  .mr-sm-n3,
.mx-sm-n3 {
    margin-right: -1rem !important;
  }

  .mb-sm-n3,
.my-sm-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-sm-n3,
.mx-sm-n3 {
    margin-left: -1rem !important;
  }

  .m-sm-n4 {
    margin: -1.5rem !important;
  }

  .mt-sm-n4,
.my-sm-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-sm-n4,
.mx-sm-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-sm-n4,
.my-sm-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-sm-n4,
.mx-sm-n4 {
    margin-left: -1.5rem !important;
  }

  .m-sm-n5 {
    margin: -3rem !important;
  }

  .mt-sm-n5,
.my-sm-n5 {
    margin-top: -3rem !important;
  }

  .mr-sm-n5,
.mx-sm-n5 {
    margin-right: -3rem !important;
  }

  .mb-sm-n5,
.my-sm-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-sm-n5,
.mx-sm-n5 {
    margin-left: -3rem !important;
  }

  .m-sm-auto {
    margin: auto !important;
  }

  .mt-sm-auto,
.my-sm-auto {
    margin-top: auto !important;
  }

  .mr-sm-auto,
.mx-sm-auto {
    margin-right: auto !important;
  }

  .mb-sm-auto,
.my-sm-auto {
    margin-bottom: auto !important;
  }

  .ml-sm-auto,
.mx-sm-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 !important;
  }

  .mt-md-0,
.my-md-0 {
    margin-top: 0 !important;
  }

  .mr-md-0,
.mx-md-0 {
    margin-right: 0 !important;
  }

  .mb-md-0,
.my-md-0 {
    margin-bottom: 0 !important;
  }

  .ml-md-0,
.mx-md-0 {
    margin-left: 0 !important;
  }

  .m-md-1 {
    margin: 0.25rem !important;
  }

  .mt-md-1,
.my-md-1 {
    margin-top: 0.25rem !important;
  }

  .mr-md-1,
.mx-md-1 {
    margin-right: 0.25rem !important;
  }

  .mb-md-1,
.my-md-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-md-1,
.mx-md-1 {
    margin-left: 0.25rem !important;
  }

  .m-md-2 {
    margin: 0.5rem !important;
  }

  .mt-md-2,
.my-md-2 {
    margin-top: 0.5rem !important;
  }

  .mr-md-2,
.mx-md-2 {
    margin-right: 0.5rem !important;
  }

  .mb-md-2,
.my-md-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-md-2,
.mx-md-2 {
    margin-left: 0.5rem !important;
  }

  .m-md-3 {
    margin: 1rem !important;
  }

  .mt-md-3,
.my-md-3 {
    margin-top: 1rem !important;
  }

  .mr-md-3,
.mx-md-3 {
    margin-right: 1rem !important;
  }

  .mb-md-3,
.my-md-3 {
    margin-bottom: 1rem !important;
  }

  .ml-md-3,
.mx-md-3 {
    margin-left: 1rem !important;
  }

  .m-md-4 {
    margin: 1.5rem !important;
  }

  .mt-md-4,
.my-md-4 {
    margin-top: 1.5rem !important;
  }

  .mr-md-4,
.mx-md-4 {
    margin-right: 1.5rem !important;
  }

  .mb-md-4,
.my-md-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-md-4,
.mx-md-4 {
    margin-left: 1.5rem !important;
  }

  .m-md-5 {
    margin: 3rem !important;
  }

  .mt-md-5,
.my-md-5 {
    margin-top: 3rem !important;
  }

  .mr-md-5,
.mx-md-5 {
    margin-right: 3rem !important;
  }

  .mb-md-5,
.my-md-5 {
    margin-bottom: 3rem !important;
  }

  .ml-md-5,
.mx-md-5 {
    margin-left: 3rem !important;
  }

  .p-md-0 {
    padding: 0 !important;
  }

  .pt-md-0,
.py-md-0 {
    padding-top: 0 !important;
  }

  .pr-md-0,
.px-md-0 {
    padding-right: 0 !important;
  }

  .pb-md-0,
.py-md-0 {
    padding-bottom: 0 !important;
  }

  .pl-md-0,
.px-md-0 {
    padding-left: 0 !important;
  }

  .p-md-1 {
    padding: 0.25rem !important;
  }

  .pt-md-1,
.py-md-1 {
    padding-top: 0.25rem !important;
  }

  .pr-md-1,
.px-md-1 {
    padding-right: 0.25rem !important;
  }

  .pb-md-1,
.py-md-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-md-1,
.px-md-1 {
    padding-left: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }

  .pt-md-2,
.py-md-2 {
    padding-top: 0.5rem !important;
  }

  .pr-md-2,
.px-md-2 {
    padding-right: 0.5rem !important;
  }

  .pb-md-2,
.py-md-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-md-2,
.px-md-2 {
    padding-left: 0.5rem !important;
  }

  .p-md-3 {
    padding: 1rem !important;
  }

  .pt-md-3,
.py-md-3 {
    padding-top: 1rem !important;
  }

  .pr-md-3,
.px-md-3 {
    padding-right: 1rem !important;
  }

  .pb-md-3,
.py-md-3 {
    padding-bottom: 1rem !important;
  }

  .pl-md-3,
.px-md-3 {
    padding-left: 1rem !important;
  }

  .p-md-4 {
    padding: 1.5rem !important;
  }

  .pt-md-4,
.py-md-4 {
    padding-top: 1.5rem !important;
  }

  .pr-md-4,
.px-md-4 {
    padding-right: 1.5rem !important;
  }

  .pb-md-4,
.py-md-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-md-4,
.px-md-4 {
    padding-left: 1.5rem !important;
  }

  .p-md-5 {
    padding: 3rem !important;
  }

  .pt-md-5,
.py-md-5 {
    padding-top: 3rem !important;
  }

  .pr-md-5,
.px-md-5 {
    padding-right: 3rem !important;
  }

  .pb-md-5,
.py-md-5 {
    padding-bottom: 3rem !important;
  }

  .pl-md-5,
.px-md-5 {
    padding-left: 3rem !important;
  }

  .m-md-n1 {
    margin: -0.25rem !important;
  }

  .mt-md-n1,
.my-md-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-md-n1,
.mx-md-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-md-n1,
.my-md-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-md-n1,
.mx-md-n1 {
    margin-left: -0.25rem !important;
  }

  .m-md-n2 {
    margin: -0.5rem !important;
  }

  .mt-md-n2,
.my-md-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-md-n2,
.mx-md-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-md-n2,
.my-md-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-md-n2,
.mx-md-n2 {
    margin-left: -0.5rem !important;
  }

  .m-md-n3 {
    margin: -1rem !important;
  }

  .mt-md-n3,
.my-md-n3 {
    margin-top: -1rem !important;
  }

  .mr-md-n3,
.mx-md-n3 {
    margin-right: -1rem !important;
  }

  .mb-md-n3,
.my-md-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-md-n3,
.mx-md-n3 {
    margin-left: -1rem !important;
  }

  .m-md-n4 {
    margin: -1.5rem !important;
  }

  .mt-md-n4,
.my-md-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-md-n4,
.mx-md-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-md-n4,
.my-md-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-md-n4,
.mx-md-n4 {
    margin-left: -1.5rem !important;
  }

  .m-md-n5 {
    margin: -3rem !important;
  }

  .mt-md-n5,
.my-md-n5 {
    margin-top: -3rem !important;
  }

  .mr-md-n5,
.mx-md-n5 {
    margin-right: -3rem !important;
  }

  .mb-md-n5,
.my-md-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-md-n5,
.mx-md-n5 {
    margin-left: -3rem !important;
  }

  .m-md-auto {
    margin: auto !important;
  }

  .mt-md-auto,
.my-md-auto {
    margin-top: auto !important;
  }

  .mr-md-auto,
.mx-md-auto {
    margin-right: auto !important;
  }

  .mb-md-auto,
.my-md-auto {
    margin-bottom: auto !important;
  }

  .ml-md-auto,
.mx-md-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }

  .mt-lg-0,
.my-lg-0 {
    margin-top: 0 !important;
  }

  .mr-lg-0,
.mx-lg-0 {
    margin-right: 0 !important;
  }

  .mb-lg-0,
.my-lg-0 {
    margin-bottom: 0 !important;
  }

  .ml-lg-0,
.mx-lg-0 {
    margin-left: 0 !important;
  }

  .m-lg-1 {
    margin: 0.25rem !important;
  }

  .mt-lg-1,
.my-lg-1 {
    margin-top: 0.25rem !important;
  }

  .mr-lg-1,
.mx-lg-1 {
    margin-right: 0.25rem !important;
  }

  .mb-lg-1,
.my-lg-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-lg-1,
.mx-lg-1 {
    margin-left: 0.25rem !important;
  }

  .m-lg-2 {
    margin: 0.5rem !important;
  }

  .mt-lg-2,
.my-lg-2 {
    margin-top: 0.5rem !important;
  }

  .mr-lg-2,
.mx-lg-2 {
    margin-right: 0.5rem !important;
  }

  .mb-lg-2,
.my-lg-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-lg-2,
.mx-lg-2 {
    margin-left: 0.5rem !important;
  }

  .m-lg-3 {
    margin: 1rem !important;
  }

  .mt-lg-3,
.my-lg-3 {
    margin-top: 1rem !important;
  }

  .mr-lg-3,
.mx-lg-3 {
    margin-right: 1rem !important;
  }

  .mb-lg-3,
.my-lg-3 {
    margin-bottom: 1rem !important;
  }

  .ml-lg-3,
.mx-lg-3 {
    margin-left: 1rem !important;
  }

  .m-lg-4 {
    margin: 1.5rem !important;
  }

  .mt-lg-4,
.my-lg-4 {
    margin-top: 1.5rem !important;
  }

  .mr-lg-4,
.mx-lg-4 {
    margin-right: 1.5rem !important;
  }

  .mb-lg-4,
.my-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-lg-4,
.mx-lg-4 {
    margin-left: 1.5rem !important;
  }

  .m-lg-5 {
    margin: 3rem !important;
  }

  .mt-lg-5,
.my-lg-5 {
    margin-top: 3rem !important;
  }

  .mr-lg-5,
.mx-lg-5 {
    margin-right: 3rem !important;
  }

  .mb-lg-5,
.my-lg-5 {
    margin-bottom: 3rem !important;
  }

  .ml-lg-5,
.mx-lg-5 {
    margin-left: 3rem !important;
  }

  .p-lg-0 {
    padding: 0 !important;
  }

  .pt-lg-0,
.py-lg-0 {
    padding-top: 0 !important;
  }

  .pr-lg-0,
.px-lg-0 {
    padding-right: 0 !important;
  }

  .pb-lg-0,
.py-lg-0 {
    padding-bottom: 0 !important;
  }

  .pl-lg-0,
.px-lg-0 {
    padding-left: 0 !important;
  }

  .p-lg-1 {
    padding: 0.25rem !important;
  }

  .pt-lg-1,
.py-lg-1 {
    padding-top: 0.25rem !important;
  }

  .pr-lg-1,
.px-lg-1 {
    padding-right: 0.25rem !important;
  }

  .pb-lg-1,
.py-lg-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-lg-1,
.px-lg-1 {
    padding-left: 0.25rem !important;
  }

  .p-lg-2 {
    padding: 0.5rem !important;
  }

  .pt-lg-2,
.py-lg-2 {
    padding-top: 0.5rem !important;
  }

  .pr-lg-2,
.px-lg-2 {
    padding-right: 0.5rem !important;
  }

  .pb-lg-2,
.py-lg-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-lg-2,
.px-lg-2 {
    padding-left: 0.5rem !important;
  }

  .p-lg-3 {
    padding: 1rem !important;
  }

  .pt-lg-3,
.py-lg-3 {
    padding-top: 1rem !important;
  }

  .pr-lg-3,
.px-lg-3 {
    padding-right: 1rem !important;
  }

  .pb-lg-3,
.py-lg-3 {
    padding-bottom: 1rem !important;
  }

  .pl-lg-3,
.px-lg-3 {
    padding-left: 1rem !important;
  }

  .p-lg-4 {
    padding: 1.5rem !important;
  }

  .pt-lg-4,
.py-lg-4 {
    padding-top: 1.5rem !important;
  }

  .pr-lg-4,
.px-lg-4 {
    padding-right: 1.5rem !important;
  }

  .pb-lg-4,
.py-lg-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-lg-4,
.px-lg-4 {
    padding-left: 1.5rem !important;
  }

  .p-lg-5 {
    padding: 3rem !important;
  }

  .pt-lg-5,
.py-lg-5 {
    padding-top: 3rem !important;
  }

  .pr-lg-5,
.px-lg-5 {
    padding-right: 3rem !important;
  }

  .pb-lg-5,
.py-lg-5 {
    padding-bottom: 3rem !important;
  }

  .pl-lg-5,
.px-lg-5 {
    padding-left: 3rem !important;
  }

  .m-lg-n1 {
    margin: -0.25rem !important;
  }

  .mt-lg-n1,
.my-lg-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-lg-n1,
.mx-lg-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-lg-n1,
.my-lg-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-lg-n1,
.mx-lg-n1 {
    margin-left: -0.25rem !important;
  }

  .m-lg-n2 {
    margin: -0.5rem !important;
  }

  .mt-lg-n2,
.my-lg-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-lg-n2,
.mx-lg-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-lg-n2,
.my-lg-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-lg-n2,
.mx-lg-n2 {
    margin-left: -0.5rem !important;
  }

  .m-lg-n3 {
    margin: -1rem !important;
  }

  .mt-lg-n3,
.my-lg-n3 {
    margin-top: -1rem !important;
  }

  .mr-lg-n3,
.mx-lg-n3 {
    margin-right: -1rem !important;
  }

  .mb-lg-n3,
.my-lg-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-lg-n3,
.mx-lg-n3 {
    margin-left: -1rem !important;
  }

  .m-lg-n4 {
    margin: -1.5rem !important;
  }

  .mt-lg-n4,
.my-lg-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-lg-n4,
.mx-lg-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-lg-n4,
.my-lg-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-lg-n4,
.mx-lg-n4 {
    margin-left: -1.5rem !important;
  }

  .m-lg-n5 {
    margin: -3rem !important;
  }

  .mt-lg-n5,
.my-lg-n5 {
    margin-top: -3rem !important;
  }

  .mr-lg-n5,
.mx-lg-n5 {
    margin-right: -3rem !important;
  }

  .mb-lg-n5,
.my-lg-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-lg-n5,
.mx-lg-n5 {
    margin-left: -3rem !important;
  }

  .m-lg-auto {
    margin: auto !important;
  }

  .mt-lg-auto,
.my-lg-auto {
    margin-top: auto !important;
  }

  .mr-lg-auto,
.mx-lg-auto {
    margin-right: auto !important;
  }

  .mb-lg-auto,
.my-lg-auto {
    margin-bottom: auto !important;
  }

  .ml-lg-auto,
.mx-lg-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }

  .mt-xl-0,
.my-xl-0 {
    margin-top: 0 !important;
  }

  .mr-xl-0,
.mx-xl-0 {
    margin-right: 0 !important;
  }

  .mb-xl-0,
.my-xl-0 {
    margin-bottom: 0 !important;
  }

  .ml-xl-0,
.mx-xl-0 {
    margin-left: 0 !important;
  }

  .m-xl-1 {
    margin: 0.25rem !important;
  }

  .mt-xl-1,
.my-xl-1 {
    margin-top: 0.25rem !important;
  }

  .mr-xl-1,
.mx-xl-1 {
    margin-right: 0.25rem !important;
  }

  .mb-xl-1,
.my-xl-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-xl-1,
.mx-xl-1 {
    margin-left: 0.25rem !important;
  }

  .m-xl-2 {
    margin: 0.5rem !important;
  }

  .mt-xl-2,
.my-xl-2 {
    margin-top: 0.5rem !important;
  }

  .mr-xl-2,
.mx-xl-2 {
    margin-right: 0.5rem !important;
  }

  .mb-xl-2,
.my-xl-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-xl-2,
.mx-xl-2 {
    margin-left: 0.5rem !important;
  }

  .m-xl-3 {
    margin: 1rem !important;
  }

  .mt-xl-3,
.my-xl-3 {
    margin-top: 1rem !important;
  }

  .mr-xl-3,
.mx-xl-3 {
    margin-right: 1rem !important;
  }

  .mb-xl-3,
.my-xl-3 {
    margin-bottom: 1rem !important;
  }

  .ml-xl-3,
.mx-xl-3 {
    margin-left: 1rem !important;
  }

  .m-xl-4 {
    margin: 1.5rem !important;
  }

  .mt-xl-4,
.my-xl-4 {
    margin-top: 1.5rem !important;
  }

  .mr-xl-4,
.mx-xl-4 {
    margin-right: 1.5rem !important;
  }

  .mb-xl-4,
.my-xl-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-xl-4,
.mx-xl-4 {
    margin-left: 1.5rem !important;
  }

  .m-xl-5 {
    margin: 3rem !important;
  }

  .mt-xl-5,
.my-xl-5 {
    margin-top: 3rem !important;
  }

  .mr-xl-5,
.mx-xl-5 {
    margin-right: 3rem !important;
  }

  .mb-xl-5,
.my-xl-5 {
    margin-bottom: 3rem !important;
  }

  .ml-xl-5,
.mx-xl-5 {
    margin-left: 3rem !important;
  }

  .p-xl-0 {
    padding: 0 !important;
  }

  .pt-xl-0,
.py-xl-0 {
    padding-top: 0 !important;
  }

  .pr-xl-0,
.px-xl-0 {
    padding-right: 0 !important;
  }

  .pb-xl-0,
.py-xl-0 {
    padding-bottom: 0 !important;
  }

  .pl-xl-0,
.px-xl-0 {
    padding-left: 0 !important;
  }

  .p-xl-1 {
    padding: 0.25rem !important;
  }

  .pt-xl-1,
.py-xl-1 {
    padding-top: 0.25rem !important;
  }

  .pr-xl-1,
.px-xl-1 {
    padding-right: 0.25rem !important;
  }

  .pb-xl-1,
.py-xl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-xl-1,
.px-xl-1 {
    padding-left: 0.25rem !important;
  }

  .p-xl-2 {
    padding: 0.5rem !important;
  }

  .pt-xl-2,
.py-xl-2 {
    padding-top: 0.5rem !important;
  }

  .pr-xl-2,
.px-xl-2 {
    padding-right: 0.5rem !important;
  }

  .pb-xl-2,
.py-xl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-xl-2,
.px-xl-2 {
    padding-left: 0.5rem !important;
  }

  .p-xl-3 {
    padding: 1rem !important;
  }

  .pt-xl-3,
.py-xl-3 {
    padding-top: 1rem !important;
  }

  .pr-xl-3,
.px-xl-3 {
    padding-right: 1rem !important;
  }

  .pb-xl-3,
.py-xl-3 {
    padding-bottom: 1rem !important;
  }

  .pl-xl-3,
.px-xl-3 {
    padding-left: 1rem !important;
  }

  .p-xl-4 {
    padding: 1.5rem !important;
  }

  .pt-xl-4,
.py-xl-4 {
    padding-top: 1.5rem !important;
  }

  .pr-xl-4,
.px-xl-4 {
    padding-right: 1.5rem !important;
  }

  .pb-xl-4,
.py-xl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-xl-4,
.px-xl-4 {
    padding-left: 1.5rem !important;
  }

  .p-xl-5 {
    padding: 3rem !important;
  }

  .pt-xl-5,
.py-xl-5 {
    padding-top: 3rem !important;
  }

  .pr-xl-5,
.px-xl-5 {
    padding-right: 3rem !important;
  }

  .pb-xl-5,
.py-xl-5 {
    padding-bottom: 3rem !important;
  }

  .pl-xl-5,
.px-xl-5 {
    padding-left: 3rem !important;
  }

  .m-xl-n1 {
    margin: -0.25rem !important;
  }

  .mt-xl-n1,
.my-xl-n1 {
    margin-top: -0.25rem !important;
  }

  .mr-xl-n1,
.mx-xl-n1 {
    margin-right: -0.25rem !important;
  }

  .mb-xl-n1,
.my-xl-n1 {
    margin-bottom: -0.25rem !important;
  }

  .ml-xl-n1,
.mx-xl-n1 {
    margin-left: -0.25rem !important;
  }

  .m-xl-n2 {
    margin: -0.5rem !important;
  }

  .mt-xl-n2,
.my-xl-n2 {
    margin-top: -0.5rem !important;
  }

  .mr-xl-n2,
.mx-xl-n2 {
    margin-right: -0.5rem !important;
  }

  .mb-xl-n2,
.my-xl-n2 {
    margin-bottom: -0.5rem !important;
  }

  .ml-xl-n2,
.mx-xl-n2 {
    margin-left: -0.5rem !important;
  }

  .m-xl-n3 {
    margin: -1rem !important;
  }

  .mt-xl-n3,
.my-xl-n3 {
    margin-top: -1rem !important;
  }

  .mr-xl-n3,
.mx-xl-n3 {
    margin-right: -1rem !important;
  }

  .mb-xl-n3,
.my-xl-n3 {
    margin-bottom: -1rem !important;
  }

  .ml-xl-n3,
.mx-xl-n3 {
    margin-left: -1rem !important;
  }

  .m-xl-n4 {
    margin: -1.5rem !important;
  }

  .mt-xl-n4,
.my-xl-n4 {
    margin-top: -1.5rem !important;
  }

  .mr-xl-n4,
.mx-xl-n4 {
    margin-right: -1.5rem !important;
  }

  .mb-xl-n4,
.my-xl-n4 {
    margin-bottom: -1.5rem !important;
  }

  .ml-xl-n4,
.mx-xl-n4 {
    margin-left: -1.5rem !important;
  }

  .m-xl-n5 {
    margin: -3rem !important;
  }

  .mt-xl-n5,
.my-xl-n5 {
    margin-top: -3rem !important;
  }

  .mr-xl-n5,
.mx-xl-n5 {
    margin-right: -3rem !important;
  }

  .mb-xl-n5,
.my-xl-n5 {
    margin-bottom: -3rem !important;
  }

  .ml-xl-n5,
.mx-xl-n5 {
    margin-left: -3rem !important;
  }

  .m-xl-auto {
    margin: auto !important;
  }

  .mt-xl-auto,
.my-xl-auto {
    margin-top: auto !important;
  }

  .mr-xl-auto,
.mx-xl-auto {
    margin-right: auto !important;
  }

  .mb-xl-auto,
.my-xl-auto {
    margin-bottom: auto !important;
  }

  .ml-xl-auto,
.mx-xl-auto {
    margin-left: auto !important;
  }
}
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0, 0, 0, 0);
}

.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
}

.text-justify {
  text-align: justify !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 576px) {
  .text-sm-left {
    text-align: left !important;
  }

  .text-sm-right {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .text-md-left {
    text-align: left !important;
  }

  .text-md-right {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important;
  }

  .text-lg-right {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .text-xl-left {
    text-align: left !important;
  }

  .text-xl-right {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }
}
.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-lighter {
  font-weight: lighter !important;
}

.font-weight-normal {
  font-weight: 400 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.font-weight-bolder {
  font-weight: bolder !important;
}

.font-italic {
  font-style: italic !important;
}

.text-white {
  color: #fff !important;
}
.text-black {
  color: #000 !important;
}

.text-primary {
  color: #f4623a !important;
}

a.text-primary:hover, a.text-primary:focus {
  color: #d6370c !important;
}

.text-light {
  color: #f8f9fa !important;
}

a.text-light:hover, a.text-light:focus {
  color: #cbd3da !important;
}

a.text-dark:hover, a.text-dark:focus {
  color: #121416 !important;
}

.text-body {
  color: #212529 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-light-grey {
  color: #6C6C6C;
}

.text-light-grey2 {
  color: #A0A0A0;
}

.text-idlab-blue {
  color: #0077E0;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-break {
  word-wrap: break-word !important;
}

.text-reset {
  color: inherit !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media (max-width: 768px){
  .modal-image {
    margin: 0 133%;
  }
}

@media (max-width: 576px) {
  .text-small {
    font-size: 1.5rem !important;
  }
  .text-light-grey {
    color: #000000;
  }
  .pt-0{
    padding-top: 1rem !important;
  }

  .pt-4{
    padding-top: 0rem !important;
  }
  .mb-5{
    margin-bottom: 0rem !important;
  }
  .rectangleTitle{
    display: none;
  }

  .small-image{
    height: 2.5rem;
  }
  .pt-5{
    padding-top: 0rem !important;
  }
  .small-margin{
    margin-bottom: 3rem !important;
  }
  .mt-5 {
    margin-top: 1rem !important;
  }
  .pt-8, .py-8 {
    padding-top: 1rem !important;
  }


  .btn-xl {
    padding: 1.0rem 1.25rem;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    float: none !important;
    border-radius: 0rem;
    margin-top: 1.575rem;
    margin: 0 auto !important;
  }

  .text-left button{
    display: flex;
    align-items: center !important;
    justify-content: center !important;
  }
  .footer-anchor{
    display: inherit;
  }
  .footer-content{
    margin-bottom: 3rem !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .footer-image{
    margin-top: 1rem !important;
    margin-left: 1rem !important;
    padding-top: 1rem !important;
  }
  .footer-image-idlab{
    margin-left: 1rem !important;
  }
  .footer-text{
    margin-bottom: 0rem !important;
  }
  .footer-div{
    margin-bottom: 1rem !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .footer{
    justify-content: center !important;
    text-align: center !important;
  }
  .navbar-logo {
    display: none !important;
  }
  .header-text{
    margin-top: 1rem !important;
    margin-bottom: 2rem !important;
    font-size: 1.0rem !important;
    padding-left: 1.2rem !important;
    letter-spacing: 0.2rem !important;
    padding-top: 0rem !important;
    text-align: left !important;
  }
  .header-text2{
    margin-top: 1rem !important;
    margin-bottom: 2rem !important;
    font-size: 1.8rem !important;
    padding-left: 1.2rem !important;
    letter-spacing: 0.3rem !important;
  }
  .header-button{
    margin-top: 9rem !important;
    float: none !important;
    justify-content: center !important;
    text-align: center !important;
  }

  .hero-img-div img{
    height: 60px !important;
  }
  .hero-arrow-div {
    width: 100%;
    padding-top: 3rem;
    justify-content: center;
  }
  .navbar-toggler-right{
    margin-left: 18rem !important;
  }
  .highlights img{
    height: 245px !important;
    width: 345px !important;
  }
  .carousel-control-prev, .carousel-control-next {
    display: none;
  }
  .resp-anchor{
    float: left !important;
    margin-right: 1.3rem !important;
  }
  .resp-anchor-last{
    float: left !important;
    margin-right: 0rem !important;
  }
  .resp-anchor-first{
    float: left !important;
    margin-right: 1.3rem !important;
    margin-left: 0.3rem !important;
  }
  .resp-anchor h3, .resp-anchor-last h3,.resp-anchor-first h3{
    font-size: 1.15rem !important;
    /* margin-right: 1rem !important; */
  }
  .resp-padding{
    padding-left: 0.975rem !important;
    padding-right: 0.975rem !important;
  }
  .resp-speakers{
    margin-top: 1em !important;
    margin-bottom: 1em !important;
  }
  .resp-row {
    display: flex !important;
    flex-wrap: wrap !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .carousel-indicators {
    position: absolute !important;
    top: 16rem !important;
  }

  .resp-prev-spon{
    padding-top: 2.5rem !important;
  }
  .modal-image {
    margin: 0px 90%;
  }

}

@media (max-width: 375px){
  .resp-padding {
      padding-left: 0.575rem !important;
      padding-right: 0.575rem !important;
  }
  .resp-anchor {
    float: left !important;
    margin-right: 0.8rem !important;
  }
  .resp-anchor-last{
    float: left !important;
    margin-right: 0rem !important;
  }
  .resp-anchor-first{
    float: left !important;
    margin-right: 0.8rem !important;
    margin-left: 0.3rem !important;
  }
}

@media (max-width:411px){
  .resp-button{
    float: left !important;
  }
}

@media (max-width: 1025px){
 .header-text{
   padding-left: 0.7rem !important;
   text-align: left;
 }
 .header-text2{
  padding-left: 1rem !important;
  }
}

@media (max-width:320px){
  .modal-image {
    margin: 0 66%;
  }
}

@media (min-width: 577px) and (max-width:768px){
  .modal-image {
    margin: 0 133% !important;
  }

}

@media (max-width: 360px){
  .resp-padding {
      padding-left: 0.575rem !important;
      padding-right: 0.575rem !important;
  }
  .resp-anchor {
    float: left !important;
    margin-right: 0.5rem !important;
  }
  .resp-anchor-last{
    float: left !important;
    margin-right: 0rem !important;
  }
  .resp-anchor-first{
    float: left !important;
    margin-right: 0.5rem !important;
    margin-left: 0.3rem !important;
  }
}

@media (min-width: 985px) and (max-width: 1110px) {
  .highlights img{
    height: 300px !important;
  }
}

@media (min-width: 813px) and (max-width:980px) {
  .highlights img{
    height: 265px !important;
  }
}


@media print {
  *,
*::before,
*::after {
    text-shadow: none !important;
    box-shadow: none !important;
  }

  a:not(.btn) {
    text-decoration: underline;
  }

  abbr[title]::after {
    content: " (" attr(title) ")";
  }

  pre {
    white-space: pre-wrap !important;
  }

  pre,
blockquote {
    border: 1px solid #adb5bd;
    page-break-inside: avoid;
  }

  thead {
    display: table-header-group;
  }

  tr,
img {
    page-break-inside: avoid;
  }

  p,
h2,
h3 {
    orphans: 3;
    widows: 3;
  }

  h2,
h3 {
    page-break-after: avoid;
  }

  @page {
    size: a3;
  }
  body {
    min-width: 992px !important;
  }

  .container {
    min-width: 992px !important;
  }

  .navbar {
    display: none;
  }
}

body,
html {
  width: 100%;
  height: 100%;
}

.btn {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.btn-xl {
  padding: 1.0rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 0rem;
  clear: both;
  float: left;
  margin-top: 1.575rem;
}

.btn-custom {
  padding: 1.0rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 0rem;
  clear: both;
  margin-top: 1.575rem;
}

.page-section {
  padding: 4rem 0;
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

header.masthead {
  padding-top: 10rem;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(to bottom, rgba(0, 26, 44, 0.8) 0%, rgba(0, 26, 44, 0.8) 100%), url("../assets/img/img_5599_32251013438_o-min.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}
header.masthead h1 {
  font-size: 2.25rem;
}
@media (min-width: 992px) {
  header.masthead {
    height: 100vh;
    min-height: 40rem;
    padding-top: 4.5rem;
    padding-bottom: 0;
  }
  header.masthead p {
    font-size: 1.5rem;
  }
  header.masthead h1 {
    font-size: 2.4rem;
  }
}
@media (min-width: 1200px) {
  header.masthead h1 {
    font-size: 3.5rem;
  }
}

#portfolio .container-fluid, #portfolio .container-sm, #portfolio .container-md, #portfolio .container-lg, #portfolio .container-xl {
  max-width: 1920px;
}
#portfolio .container-fluid .portfolio-box, #portfolio .container-sm .portfolio-box, #portfolio .container-md .portfolio-box, #portfolio .container-lg .portfolio-box, #portfolio .container-xl .portfolio-box {
  position: relative;
  display: block;
}
#portfolio .container-fluid .portfolio-box .portfolio-box-caption, #portfolio .container-sm .portfolio-box .portfolio-box-caption, #portfolio .container-md .portfolio-box .portfolio-box-caption, #portfolio .container-lg .portfolio-box .portfolio-box-caption, #portfolio .container-xl .portfolio-box .portfolio-box-caption {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  opacity: 0;
  color: #fff;
  background: rgba(244, 98, 58, 0.9);
  transition: opacity 0.25s ease;
  text-align: center;
}
#portfolio .container-fluid .portfolio-box .portfolio-box-caption .project-category, #portfolio .container-sm .portfolio-box .portfolio-box-caption .project-category, #portfolio .container-md .portfolio-box .portfolio-box-caption .project-category, #portfolio .container-lg .portfolio-box .portfolio-box-caption .project-category, #portfolio .container-xl .portfolio-box .portfolio-box-caption .project-category {
  font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
}
#portfolio .container-fluid .portfolio-box .portfolio-box-caption .project-name, #portfolio .container-sm .portfolio-box .portfolio-box-caption .project-name, #portfolio .container-md .portfolio-box .portfolio-box-caption .project-name, #portfolio .container-lg .portfolio-box .portfolio-box-caption .project-name, #portfolio .container-xl .portfolio-box .portfolio-box-caption .project-name {
  font-size: 1.2rem;
}
#portfolio .container-fluid .portfolio-box:hover .portfolio-box-caption, #portfolio .container-sm .portfolio-box:hover .portfolio-box-caption, #portfolio .container-md .portfolio-box:hover .portfolio-box-caption, #portfolio .container-lg .portfolio-box:hover .portfolio-box-caption, #portfolio .container-xl .portfolio-box:hover .portfolio-box-caption {
  opacity: 1;
}

.text-white-75 {
  color: rgba(255, 255, 255, 0.75);
}

.lh {
  line-height: 4.0rem;
}

.image-rotater-left img{
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg); /* Firefox */
  -ms-transform: rotate(90deg); /* Internet Explorer */
  -o-transform: rotate(90deg);
}

.image-rotater-right img{
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
}


.highlights-links a h3:hover, .highlights-links a h3:focus,
.highlights-links a h3:hover,
.highlights-links a h3:focus {
  text-decoration: underline;
  text-decoration-color: #0077E0;
  text-underline-position: under;
}


/* -------------------------------------------------- Custom Styles -------------------------------------------------- */
.table-schedule {
    color: #fff;
    padding: 15px 15px;
    border-radius: 15px;
    margin-top: 45px;
}

.color-light-blue {
    background-color: #174E77;
}

.color-dark-blue {
    background-color: #011A2C;
}

.table-header {
  padding: 10px 15px;
}

.table-row-dark {
  padding: 15px;
  border-top: 5px solid #011A2C;
  border-bottom: 5px solid #011A2C;
}

.table-row-light {
  padding: 15px;
  border-top: 5px solid #174E77;
  border-bottom: 5px solid #174E77;
}

.virtual-link {
  text-decoration: underline !important;
}

.speaker-link {
  color: white;
  text-decoration: underline !important;
  border-color: inherit;
}

.border-left-white {
  border-left: 1.5px solid white !important;
}

.border-left-blue {
  border-left: 1.5px solid #0077E0 !important;
}

.hl {
  border-bottom: 3px solid #0077E0;
  width: 15%;
}

/* Hide popover arrow */
.popover .arrow {
    display: none;
}

#error-message {
  font-size: 1.0em;
}

/* Mobile screen view configurations */
@media (max-width: 576px) {
  .hl {
    border-bottom: 5px solid #0077E0;
    width: 50%;
  }

  .table-row {
    position: relative;
  }

  .event-location {
    position: absolute;
    top: 15px;
    right: 65px;
  }

  .event-location-room {
    position: absolute;
    top: 15px;
    right: 5px;
  }
}

@media (min-width: 992px){
  .noRegCode {
    margin-right: 6em;
    font-size: 0.9em;
  }
  .regSubmit{
    display: flex;
    justify-content: center;
  }
}

@media (max-width:768px){
  #error-message {
    font-size: 0.9em;
  }

}
`;

const odiJs=`
/*!
    * Start Bootstrap - Creative v6.0.2 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */

  //  function registration() {
  //    alert("hello world");
  //  }

  function check(form) {
    const api_key = "keyPerKCGLdhIH8g8"; // API KEY
    const baseID = "appBa58conr80osIb";  // BASE ID

    // Specify the URL to call.
    const url = "https://api.airtable.com/v0/" + baseID
    + "/" + encodeURIComponent("RegistrationCodes")
    + "?" + "api_key=" + api_key;

    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });

    if(form.inputCode.value == "abc")
    {
      document.getElementById("error-message").style.display = "none";

      $('#codeModal').modal('hide');
      $('#registrationModal').modal('show');

    }
    else
    {
      document.getElementById("error-message").style.display = "block";
    }
    form.reset();


  }

    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          // scrollTop: (target.offset().top - 72)
          scrollTop: (target.offset().top - 0)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  // $('#portfolio').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0, 1]
  //   },
  //   image: {
  //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
  //   }
  // });

  $('#hiddenSpeakers').on('hidden.bs.collapse', function () {
    $('#btn-switch').text('See more')
  });

  $('#hiddenSpeakers').on('show.bs.collapse', function () {
    $('#btn-switch').text('See less')
  });


  $('.data-toggler').click(function(){
		$('.data-toggle').hide();
		$($(this).attr('data-id')).show();
	});


  // $('.nav-menu').superfish({
  //       animation: {
  //         opacity: 'show'
  //       },
  //       speed: 400
  // });

  // $('.registration').click(function() {
  //   alert("hi amber!");
  // });

  // $('.regCodeSubmit').click(function() {
  //  if($(inputcode.value)== "abc"){
  //     // $($(this).attr('data-id')).show();
  //     alert();
  //  }
  //  else{
  //    alert("please try again!");
  //  }
  // });

})(jQuery); // End of use strict

`;

const ikpInfo=`
`;

const ikpHtml=`

<!DOCTYPE html>
<html lang="en-US" class="no-js">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="https://ikp.depaulidlab.com/xmlrpc.php">
<!--[if lt IE 9]>
	<script src="https://ikp.depaulidlab.com/wp-content/themes/alchem/js/html5.js"></script>
	<![endif]-->
<!-- Optimized by SG Optimizer plugin version - 5.6.8 -->
	<!-- This site is optimized with the Yoast SEO plugin v15.2 - https://yoast.com/wordpress/plugins/seo/ -->
	<title>Home - Knowledge Portal</title>
	<meta name="description" content="Welcome to DePaul iD Lab Innovation Knowledge Portal. Watch videos describing past projects that we have worked on from top leaders in Chicago." />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="https://ikp.depaulidlab.com/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Home - Knowledge Portal" />
	<meta property="og:description" content="Welcome to DePaul iD Lab Innovation Knowledge Portal. Watch videos describing past projects that we have worked on from top leaders in Chicago." />
	<meta property="og:url" content="https://ikp.depaulidlab.com/" />
	<meta property="og:site_name" content="Knowledge Portal" />
	<meta property="article:modified_time" content="2020-11-23T18:55:25+00:00" />
	<meta property="og:image" content="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/IMG_2418-scaled.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:label1" value="Written by">
	<meta name="twitter:data1" value="admin">
	<meta name="twitter:label2" value="Est. reading time">
	<meta name="twitter:data2" value="1 minute">
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://ikp.depaulidlab.com/#website","url":"https://ikp.depaulidlab.com/","name":"Knowledge Portal","description":"","potentialAction":[{"@type":"SearchAction","target":"https://ikp.depaulidlab.com/?s={search_term_string}","query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"ImageObject","@id":"https://ikp.depaulidlab.com/#primaryimage","inLanguage":"en-US","url":"https://ikp.depaulidlab.com/wp-content/uploads/2020/04/IMG_2418-scaled.jpg","width":2560,"height":1707},{"@type":"WebPage","@id":"https://ikp.depaulidlab.com/#webpage","url":"https://ikp.depaulidlab.com/","name":"Home - Knowledge Portal","isPartOf":{"@id":"https://ikp.depaulidlab.com/#website"},"primaryImageOfPage":{"@id":"https://ikp.depaulidlab.com/#primaryimage"},"datePublished":"2019-02-19T08:18:57+00:00","dateModified":"2020-11-23T18:55:25+00:00","description":"Welcome to DePaul iD Lab Innovation Knowledge Portal. Watch videos describing past projects that we have worked on from top leaders in Chicago.","inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://ikp.depaulidlab.com/"]}]}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link href='https://fonts.gstatic.com' crossorigin rel='preconnect' />
<link rel="alternate" type="application/rss+xml" title="Knowledge Portal &raquo; Feed" href="https://ikp.depaulidlab.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Knowledge Portal &raquo; Comments Feed" href="https://ikp.depaulidlab.com/comments/feed/" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/ikp.depaulidlab.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.5.3"}};
			!function(e,a,t){var r,n,o,i,p=a.createElement("canvas"),s=p.getContext&&p.getContext("2d");function c(e,t){var a=String.fromCharCode;s.clearRect(0,0,p.width,p.height),s.fillText(a.apply(this,e),0,0);var r=p.toDataURL();return s.clearRect(0,0,p.width,p.height),s.fillText(a.apply(this,t),0,0),r===p.toDataURL()}function l(e){if(!s||!s.fillText)return!1;switch(s.textBaseline="top",s.font="600 32px Arial",e){case"flag":return!c([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])&&(!c([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!c([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]));case"emoji":return!c([55357,56424,8205,55356,57212],[55357,56424,8203,55356,57212])}return!1}function d(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(i=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},o=0;o<i.length;o++)t.supports[i[o]]=l(i[o]),t.supports.everything=t.supports.everything&&t.supports[i[o]],"flag"!==i[o]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[i[o]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(r=t.source||{}).concatemoji?d(r.concatemoji):r.wpemoji&&r.twemoji&&(d(r.twemoji),d(r.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='seedprod-global-admin-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/coming-soon/public/css/global-admin.css?ver=6.0.8.3' type='text/css' media='all' />
<link rel='stylesheet' id='dashicons-css'  href='https://ikp.depaulidlab.com/wp-includes/css/dashicons.min.css?ver=5.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='admin-bar-css'  href='https://ikp.depaulidlab.com/wp-includes/css/admin-bar.min.css?ver=5.5.3' type='text/css' media='all' />
<style id='admin-bar-inline-css' type='text/css'>
#wp-admin-bar-fl-builder-frontend-edit-link .ab-icon:before { content: "\f116" !important; top: 2px; margin-right: 3px; }
</style>
<link rel='stylesheet' id='jquery.prettyphoto-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/wp-video-lightbox/css/prettyPhoto.css?ver=5.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='video-lightbox-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/wp-video-lightbox/wp-video-lightbox.css?ver=5.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='wp-block-library-css'  href='https://ikp.depaulidlab.com/wp-includes/css/dist/block-library/style.min.css?ver=5.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='amo-team-showcase-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/amo-team-showcase/public/css/amo-team-showcase-public.css?ver=1.1.4' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-5-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/bb-plugin/fonts/fontawesome/css/all.min.css?ver=2.2.3' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/bb-plugin/fonts/fontawesome/css/v4-shims.min.css?ver=2.2.3' type='text/css' media='all' />
<link rel='stylesheet' id='fl-builder-layout-11-css'  href='https://ikp.depaulidlab.com/wp-content/uploads/bb-plugin/cache/11-layout.css?ver=c06689bb8303d50f8d9ca9b1e1d741a0' type='text/css' media='all' />
<link rel='stylesheet' id='bootstrap-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/bootstrap/css/bootstrap.min.css?ver=3.3.4' type='text/css' media='' />
<link rel='stylesheet' id='prettyPhoto-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/css/prettyPhoto.css?ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='classycountdown-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/jquery-countdown/jquery.classycountdown.css?ver=1.1.0' type='text/css' media='' />
<link rel='stylesheet' id='twentytwenty-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/css/twentytwenty.css?ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='audioplayer-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/css/audioplayer.css?ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='weather-icons-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/weathericons/css/weather-icons.min.css?ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='animate-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/css/animate.css?ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='magee-shortcode-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/css/shortcode.css?ver=1.6.0' type='text/css' media='' />
<link rel='stylesheet' id='team_manager-normalize-css-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/css/normalize.css?ver=5.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='team_manager-awesome-css-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/css/font-awesome.css?ver=5.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='team_manager-featherlight-css-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/css/featherlight.css?ver=5.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='team_manager-style1-css-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/css/style1.css?ver=5.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='fancybox-0-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/lightbox/static/fancybox/jquery.fancybox-1.3.4.css?ver=3.3.20' type='text/css' media='all' />
<link rel='stylesheet' id='wpforms-admin-bar-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/wpforms-lite/assets/css/admin-bar.min.css?ver=1.6.3.1' type='text/css' media='all' />
<link rel='stylesheet' id='alchem-bootstrap-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/bootstrap/css/bootstrap.css?ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='alchem-font-awesome-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/font-awesome/css/font-awesome.min.css?ver=4.3.0' type='text/css' media='' />
<link rel='stylesheet' id='alchem-animate-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/animate.css?ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='alchem-prettyPhoto-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/prettyPhoto.css?ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='owl.carousel-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/owl-carousel/assets/owl.carousel.css?ver=2.2.0' type='text/css' media='' />
<link rel='stylesheet' id='alchem-custom-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/custom.css?ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='alchem-customize-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/customize.css?ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='alchem-shortcode-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/shortcode.css?ver=1.8.25' type='text/css' media='' />
<link rel='stylesheet' id='alchem-woocommerce-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/woo.css?ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='alchem-style-css'  href='https://ikp.depaulidlab.com/wp-content/themes/depaulidlab/style.css?ver=5.5.3' type='text/css' media='all' />
<style id='alchem-style-inline-css' type='text/css'>
body{ font-size:14px}#menu-main > li > a > span{ font-size:14px}#menu-main li li a span{ font-size:14px}.breadcrumb-nav span,.breadcrumb-nav a{ font-size:14px}.widget-area .widget-title{ font-size:16px}.footer-widget-area .widget-title{ font-size:16px}h1{ font-size:36px}h2{ font-size:30px}h3{ font-size:24px}h4{ font-size:20px}h5{ font-size:18px}h6{ font-size:16px}.site-tagline{ font-size:14px}.entry-meta li,.entry-meta li a,.entry-meta span{ font-size:14px}.page-title h1{ font-size:30px}.page-title h3{ font-size:14px}.post-pagination li a{ font-size:14px}.fxd-header {
		background-color: rgba(245,245,245,0.7);
		}@media (min-width: 1200px){
			.container {
			  width: 1170pxpx;
			  }
			}
.top-bar{background-color:#eee;}.site-name,.site-tagline{display: none;}footer .footer-info-area{background-color:#21568f}.fxd-header .site-nav > ul > li a{color:#21568f;}.page-title-bar h1,.page-title-bar a,.page-title-bar span{color:#ffffff !important;}#menu-main > li > a {color:#000000;}#menu-main > li > a:hover{color:#406da1;}@media (min-width: 920px) {
							  .main-header .site-nav > ul > li > a {
								padding-top: 0px;
							  }
							  }@media (min-width: 920px) {
							  .main-header .site-nav > ul > li > a{
								  padding-bottom:0px;
								  } 
								  }.fxd-header{background-color: rgba(245,245,245,0.7);}
.fxd-header .site-nav > ul > li > a {font-size:14px;}
.site-nav li ul{width:150 px}@media screen and (min-width: 919px){
		.main-header .site-nav > ul > li > a{line-height:70px;}

		.site-nav > ul > li a{ border-bottom:2px solid transparent; }

		}@media screen and (max-width: 919px){
	.site-nav-toggle {
		display: block;
	}
	.site-nav {
		display: none;
		width: 100%;
		margin-top: 0;
		background-color: #fff;
	}
	.site-nav > ul > li {
		float: none;
		overflow: hidden;
	}
	.site-nav > ul > li + li {
		margin-left: 0;
	}
	.site-nav > ul > li a {
		line-height: 50px;
	}
	.site-nav > ul > li i {
	line-height: 50px;
    } 
	.site-nav li > ul {
		position: static;
		margin-left: 20px;
		z-index: 999;
		width: auto;
		background-color: transparent;
	}
	.site-nav li ul li > a {
		color: #555;
	}
	.site-nav li ul li:hover > a {
		color: #19cbcf;
	}
	.search-form {
		display: none;
		margin: 25px 0 15px;
	}
	header {
		min-height: 65px;
	}
	.site-logo {
		height: 50px;
	}
	.site-name {
		margin: 0;
		font-size: 24px;
		font-weight: normal;
	}
}.page-title-bar{
background-image: url(https://ikp.depaulidlab.com/wp-content/themes/alchem/images/bg-1.jpg);
background-repeat:no;}
.page-title-bar{
		padding-top:210px;
		padding-bottom:160px;
		}@media (min-width: 992px) {
			 .left-aside .col-main,
		.right-aside .col-main {
			width: 75%;
			 }
.left-aside .col-main {
			left: 25%; 
		}
.left-aside .col-aside-left {
			right: 75%; 
		}
.left-aside .col-aside-left,
		.right-aside .col-aside-right {
			width: 25%;
		   }

		 }@media (min-width: 992px) {
			.both-aside .col-main {
		width: 60%;
	    }
.both-aside .col-aside-left {
			width: 20%;
		}
.both-aside .col-aside-left {
			right: 60%;
		}
.both-aside .col-aside-right {
			width: 20%;
		}
.both-aside .col-main {
			left: 20%; 
		}
.both-aside .col-aside-right {
			width: 20%;
		}

			}.footer-widget-area{

	                           padding-top:60px;

							   padding-bottom:40px;

							   }.footer-info-area{

	                           padding-top:;

							   padding-bottom:;

							   }.footer-sns i {
		color:#8ba6c4
		}.footer-sns a {
		border-radius: 10px;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
		}.carousel-caption p{font-size:14px;}.carousel-caption p{text-align:left;}#alchem-home-sections .alchem-home-section-0{
				background-color:;
				background-image:url(https://demo.mageewp.com/alchem/wp-content/uploads/sites/21/2015/08/banner-1.jpg);
				padding-top:0;
				padding-bottom:0;
				}
#alchem-home-sections .alchem-home-section-0,.alchem-home-section-0 p,.alchem-home-section-0 span,.alchem-home-section-0 h1,.alchem-home-section-0 h2,.alchem-home-section-0 div,.alchem-home-section-0 li,.alchem-home-section-0 i{
				color:#ffffff;
				}
#alchem-home-sections .alchem-home-section-0 a.magee-btn-normal{ color:#ffffff;border-color: #ffffff;}#alchem-home-sections .alchem-home-section-0 .owl-theme .owl-dots .owl-dot.active, #alchem-home-sections .alchem-home-section-0 .owl-theme .owl-dots .owl-dot:hover{background-color:#ffffff;}#alchem-home-sections .alchem-home-section-0 .owl-theme .owl-dots .owl-dot{border: 2px solid #ffffff;}#alchem-home-sections .alchem-home-section-1{
				background-color:#f5f5f5;
				background-image:url();
				padding-top:20px;
				padding-bottom:20px;
				}
#alchem-home-sections .alchem-home-section-1,.alchem-home-section-1 p,.alchem-home-section-1 span,.alchem-home-section-1 h1,.alchem-home-section-1 h2,.alchem-home-section-1 div,.alchem-home-section-1 li,.alchem-home-section-1 i{
				color:;
				}
#alchem-home-sections .alchem-home-section-1 a.magee-btn-normal{ color:;border-color: ;}#alchem-home-sections .alchem-home-section-1 .owl-theme .owl-dots .owl-dot.active, #alchem-home-sections .alchem-home-section-1 .owl-theme .owl-dots .owl-dot:hover{background-color:;}#alchem-home-sections .alchem-home-section-1 .owl-theme .owl-dots .owl-dot{border: 2px solid ;}#alchem-home-sections .alchem-home-section-2{
				background-color:;
				background-image:url();
				padding-top:50px;
				padding-bottom:50px;
				}
#alchem-home-sections .alchem-home-section-2,.alchem-home-section-2 p,.alchem-home-section-2 span,.alchem-home-section-2 h1,.alchem-home-section-2 h2,.alchem-home-section-2 div,.alchem-home-section-2 li,.alchem-home-section-2 i{
				color:;
				}
#alchem-home-sections .alchem-home-section-2 a.magee-btn-normal{ color:;border-color: ;}#alchem-home-sections .alchem-home-section-2 .owl-theme .owl-dots .owl-dot.active, #alchem-home-sections .alchem-home-section-2 .owl-theme .owl-dots .owl-dot:hover{background-color:;}#alchem-home-sections .alchem-home-section-2 .owl-theme .owl-dots .owl-dot{border: 2px solid ;}#alchem-home-sections .alchem-home-section-3{
				background-color:#f3f3f4;
				background-image:url();
				padding-top:50px;
				padding-bottom:50px;
				}
#alchem-home-sections .alchem-home-section-3,.alchem-home-section-3 p,.alchem-home-section-3 span,.alchem-home-section-3 h1,.alchem-home-section-3 h2,.alchem-home-section-3 div,.alchem-home-section-3 li,.alchem-home-section-3 i{
				color:;
				}
#alchem-home-sections .alchem-home-section-3 a.magee-btn-normal{ color:;border-color: ;}#alchem-home-sections .alchem-home-section-3 .owl-theme .owl-dots .owl-dot.active, #alchem-home-sections .alchem-home-section-3 .owl-theme .owl-dots .owl-dot:hover{background-color:;}#alchem-home-sections .alchem-home-section-3 .owl-theme .owl-dots .owl-dot{border: 2px solid ;}#alchem-home-sections .alchem-home-section-4{
				background-color:;
				background-image:url();
				padding-top:60px;
				padding-bottom:50px;
				}
#alchem-home-sections .alchem-home-section-4,.alchem-home-section-4 p,.alchem-home-section-4 span,.alchem-home-section-4 h1,.alchem-home-section-4 h2,.alchem-home-section-4 div,.alchem-home-section-4 li,.alchem-home-section-4 i{
				color:;
				}
#alchem-home-sections .alchem-home-section-4 a.magee-btn-normal{ color:;border-color: ;}#alchem-home-sections .alchem-home-section-4 .owl-theme .owl-dots .owl-dot.active, #alchem-home-sections .alchem-home-section-4 .owl-theme .owl-dots .owl-dot:hover{background-color:;}#alchem-home-sections .alchem-home-section-4 .owl-theme .owl-dots .owl-dot{border: 2px solid ;}#alchem-home-sections .alchem-home-section-5{
				background-color:;
				background-image:url(https://demo.mageewp.com/alchem/wp-content/uploads/sites/23/2015/12/bg-02-1.jpg);
				padding-top:60px;
				padding-bottom:50px;
				}
#alchem-home-sections .alchem-home-section-5,.alchem-home-section-5 p,.alchem-home-section-5 span,.alchem-home-section-5 h1,.alchem-home-section-5 h2,.alchem-home-section-5 div,.alchem-home-section-5 li,.alchem-home-section-5 i{
				color:;
				}
#alchem-home-sections .alchem-home-section-5 a.magee-btn-normal{ color:;border-color: ;}#alchem-home-sections .alchem-home-section-5 .owl-theme .owl-dots .owl-dot.active, #alchem-home-sections .alchem-home-section-5 .owl-theme .owl-dots .owl-dot:hover{background-color:;}#alchem-home-sections .alchem-home-section-5 .owl-theme .owl-dots .owl-dot{border: 2px solid ;}#alchem-home-sections .alchem-home-section-6{
				background-color:;
				background-image:url();
				padding-top:50px;
				padding-bottom:50px;
				}
#alchem-home-sections .alchem-home-section-6,.alchem-home-section-6 p,.alchem-home-section-6 span,.alchem-home-section-6 h1,.alchem-home-section-6 h2,.alchem-home-section-6 div,.alchem-home-section-6 li,.alchem-home-section-6 i{
				color:;
				}
#alchem-home-sections .alchem-home-section-6 a.magee-btn-normal{ color:;border-color: ;}#alchem-home-sections .alchem-home-section-6 .owl-theme .owl-dots .owl-dot.active, #alchem-home-sections .alchem-home-section-6 .owl-theme .owl-dots .owl-dot:hover{background-color:;}#alchem-home-sections .alchem-home-section-6 .owl-theme .owl-dots .owl-dot{border: 2px solid ;}#alchem-home-sections .alchem-home-section-7{
				background-color:;
				background-image:url(https://demo.mageewp.com/alchem/wp-content/uploads/sites/23/2015/12/bg-003-2.jpg);
				padding-top:50px;
				padding-bottom:50px;
				}
#alchem-home-sections .alchem-home-section-7,.alchem-home-section-7 p,.alchem-home-section-7 span,.alchem-home-section-7 h1,.alchem-home-section-7 h2,.alchem-home-section-7 div,.alchem-home-section-7 li,.alchem-home-section-7 i{
				color:;
				}
#alchem-home-sections .alchem-home-section-7 a.magee-btn-normal{ color:;border-color: ;}#alchem-home-sections .alchem-home-section-7 .owl-theme .owl-dots .owl-dot.active, #alchem-home-sections .alchem-home-section-7 .owl-theme .owl-dots .owl-dot:hover{background-color:;}#alchem-home-sections .alchem-home-section-7 .owl-theme .owl-dots .owl-dot{border: 2px solid ;}#alchem-home-sections .alchem-home-section-8{
				background-color:;
				background-image:url();
				padding-top:50px;
				padding-bottom:50px;
				}
#alchem-home-sections .alchem-home-section-8,.alchem-home-section-8 p,.alchem-home-section-8 span,.alchem-home-section-8 h1,.alchem-home-section-8 h2,.alchem-home-section-8 div,.alchem-home-section-8 li,.alchem-home-section-8 i{
				color:;
				}
#alchem-home-sections .alchem-home-section-8 a.magee-btn-normal{ color:;border-color: ;}#alchem-home-sections .alchem-home-section-8 .owl-theme .owl-dots .owl-dot.active, #alchem-home-sections .alchem-home-section-8 .owl-theme .owl-dots .owl-dot:hover{background-color:;}#alchem-home-sections .alchem-home-section-8 .owl-theme .owl-dots .owl-dot{border: 2px solid ;}#alchem-home-sections .alchem-home-section-9{
				background-color:#eeeeee;
				background-image:url();
				padding-top:20px;
				padding-bottom:30px;
				}
#alchem-home-sections .alchem-home-section-9,.alchem-home-section-9 p,.alchem-home-section-9 span,.alchem-home-section-9 h1,.alchem-home-section-9 h2,.alchem-home-section-9 div,.alchem-home-section-9 li,.alchem-home-section-9 i{
				color:;
				}
#alchem-home-sections .alchem-home-section-9 a.magee-btn-normal{ color:;border-color: ;}#alchem-home-sections .alchem-home-section-9 .owl-theme .owl-dots .owl-dot.active, #alchem-home-sections .alchem-home-section-9 .owl-theme .owl-dots .owl-dot:hover{background-color:;}#alchem-home-sections .alchem-home-section-9 .owl-theme .owl-dots .owl-dot{border: 2px solid ;}#alchem-home-sections .alchem-home-section-10{
				background-color:;
				background-image:url(https://demo.mageewp.com/alchem/wp-content/uploads/sites/23/2015/12/bg-03-1.jpg);
				padding-top:50px;
				padding-bottom:50px;
				}
#alchem-home-sections .alchem-home-section-10,.alchem-home-section-10 p,.alchem-home-section-10 span,.alchem-home-section-10 h1,.alchem-home-section-10 h2,.alchem-home-section-10 div,.alchem-home-section-10 li,.alchem-home-section-10 i{
				color:#ffffff;
				}
#alchem-home-sections .alchem-home-section-10 a.magee-btn-normal{ color:#ffffff;border-color: #ffffff;}#alchem-home-sections .alchem-home-section-10 .owl-theme .owl-dots .owl-dot.active, #alchem-home-sections .alchem-home-section-10 .owl-theme .owl-dots .owl-dot:hover{background-color:#ffffff;}#alchem-home-sections .alchem-home-section-10 .owl-theme .owl-dots .owl-dot{border: 2px solid #ffffff;}#custom {
				}
</style>
<link rel='stylesheet' id='alchem-bigvideo-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/YTPlayer/css/jquery.mb.YTPlayer.min.css?ver=5.5.3' type='text/css' media='1' />
<link rel='stylesheet' id='chld_thm_cfg_separate-css'  href='https://ikp.depaulidlab.com/wp-content/themes/depaulidlab/ctc-style.css?ver=5.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='alchem-Open-Sans-css'  href='//fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C700&#038;ver=5.5.3' type='text/css' media='' />
<link rel='stylesheet' id='alchem-schemesss'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/scheme.less?ver=1.8.25' type='text/less' media='' />
<link rel='stylesheet' id='tablepress-default-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/tablepress/css/default.min.css?ver=1.12' type='text/css' media='all' />
<link rel='stylesheet' id='yoast-seo-adminbar-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/wordpress-seo/css/dist/adminbar-1520.css' type='text/css' media='all' />
<link rel='stylesheet' id='fl-builder-google-fonts-71de1c8eb603fed5ea2412bca4f6de45-css'  href='https://fonts.googleapis.com/css?family=Roboto%3A300%2C400%2C700&#038;ver=5.5.3' type='text/css' media='all' />
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp' id='jquery-core-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/wp-video-lightbox/js/jquery.prettyPhoto.min.js?ver=3.1.6' id='jquery.prettyphoto-js'></script>
<script type='text/javascript' id='video-lightbox-js-extra'>
/* <![CDATA[ */
var vlpp_vars = {"prettyPhoto_rel":"wp-video-lightbox","animation_speed":"fast","slideshow":"5000","autoplay_slideshow":"false","opacity":"0.80","show_title":"true","allow_resize":"true","allow_expand":"true","default_width":"1500","default_height":"1650","counter_separator_label":"\/","theme":"dark_rounded","horizontal_padding":"20","hideflash":"true","wmode":"opaque","autoplay":"true","modal":"false","deeplinking":"false","overlay_gallery":"true","overlay_gallery_max":"30","keyboard_shortcuts":"true","ie6_fallback":"true"};
/* ]]> */
</script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/wp-video-lightbox/js/video-lightbox.js?ver=3.1.6' id='video-lightbox-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/js/jquery.waypoints.js?ver=2.0.5' id='waypoints-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/jquery-countdown/jquery.countdown.min.js?ver=2.0.4' id='countdown-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/jquery-easy-pie-chart/jquery.easypiechart.min.js?ver=2.1.7' id='easy-pie-chart-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/js/jquery.prettyPhoto.js?ver=3.1.6' id='jquery.prettyPhoto-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/jquery-countdown/jquery.knob.js?ver=1.2.11' id='jquery.knob-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/jquery-countdown/jquery.throttle.js?ver=5.5.3' id='jquery.throttle-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/jquery-countdown/jquery.classycountdown.min.js?ver=1.1.0' id='jquery.classycountdown-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/js/jquery.event.move.js?ver=1.3.6' id='jquery.event.move-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/js/jquery.twentytwenty.js?ver=5.5.3' id='jquery.twentytwenty-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/js/audioplayer.js?ver=5.5.3' id='jquery-audioplayer-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/js/chart.min.js?ver=2.1.4' id='chart.min-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/js/modernizr.custom.js?ver=1.0' id='team_manager-modernizer-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/js/classie.js?ver=1.0' id='team_manager-classie-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/js/featherlight.js?ver=1.0' id='team_manager-featherlight-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/js/main.js?ver=1.0' id='team_manager-main-js'></script>
<script type='text/javascript' id='photocrati_ajax-js-extra'>
/* <![CDATA[ */
var photocrati_ajax = {"url":"https:\/\/ikp.depaulidlab.com\/index.php?photocrati_ajax=1","wp_home_url":"https:\/\/ikp.depaulidlab.com","wp_site_url":"https:\/\/ikp.depaulidlab.com","wp_root_url":"https:\/\/ikp.depaulidlab.com","wp_plugins_url":"https:\/\/ikp.depaulidlab.com\/wp-content\/plugins","wp_content_url":"https:\/\/ikp.depaulidlab.com\/wp-content","wp_includes_url":"https:\/\/ikp.depaulidlab.com\/wp-includes\/","ngg_param_slug":"nggallery"};
/* ]]> */
</script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/ajax/static/ajax.min.js?ver=3.3.20' id='photocrati_ajax-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/less.min.js?ver=2.5.1' id='alchem-less-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/respond.min.js?ver=2.0.0' id='alchem-respond-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/jquery.nav.js?ver=3.0.0' id='alchem-nav-js'></script>
<link rel="https://api.w.org/" href="https://ikp.depaulidlab.com/wp-json/" /><link rel="alternate" type="application/json" href="https://ikp.depaulidlab.com/wp-json/wp/v2/pages/11" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://ikp.depaulidlab.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://ikp.depaulidlab.com/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 5.5.3" />
<link rel='shortlink' href='https://ikp.depaulidlab.com/' />
<link rel="alternate" type="application/json+oembed" href="https://ikp.depaulidlab.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fikp.depaulidlab.com%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://ikp.depaulidlab.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fikp.depaulidlab.com%2F&#038;format=xml" />
		 <script>
		   "use strict";
		   var amoTeamVars                      = {};
		   amoTeamVars.teamSC                   = [];
		   amoTeamVars.memberSC                 = [];
		   amoTeamVars[ 'panel-alt-scroll' ]    = 0;
		   amoTeamVars[ 'thumbs-clear-events' ] = 1;
		 </script><script>
            WP_VIDEO_LIGHTBOX_VERSION="1.9.1";
            WP_VID_LIGHTBOX_URL="https://ikp.depaulidlab.com/wp-content/plugins/wp-video-lightbox";
                        function wpvl_paramReplace(name, string, value) {
                // Find the param with regex
                // Grab the first character in the returned string (should be ? or &)
                // Replace our href string with our new value, passing on the name and delimeter

                var re = new RegExp("[\?&]" + name + "=([^&#]*)");
                var matches = re.exec(string);
                var newString;

                if (matches === null) {
                    // if there are no params, append the parameter
                    newString = string + '?' + name + '=' + value;
                } else {
                    var delimeter = matches[0].charAt(0);
                    newString = string.replace(re, delimeter + name + "=" + value);
                }
                return newString;
            }
            </script><!-- <meta name="NextGEN" version="3.3.20" /> -->
<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style><style type="text/css" media="print">#wpadminbar { display:none; }</style>
	<style type="text/css" media="screen">
	html { margin-top: 32px !important; }
	* html body { margin-top: 32px !important; }
	@media screen and ( max-width: 782px ) {
		html { margin-top: 46px !important; }
		* html body { margin-top: 46px !important; }
	}
</style>
			<style type="text/css" id="wp-custom-css">
			#menu-main > li > a:hover {
    border-bottom: none !important;
}
		</style>
		<style id="tt-easy-google-font-styles" type="text/css">p { }
h1 { }
h2 { }
h3 { }
h4 { }
h5 { }
h6 { }
</style><link rel='stylesheet' id='fl-builder-google-fonts-2b06e332f63dc1d09750d8beea40eaa6-css'  href='//fonts.googleapis.com/css?family=Roboto%3A300%2C400%2C700&#038;ver=5.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='mediaelement-css'  href='https://ikp.depaulidlab.com/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css?ver=4.2.13-9993131' type='text/css' media='all' />
<link rel='stylesheet' id='wp-mediaelement-css'  href='https://ikp.depaulidlab.com/wp-includes/js/mediaelement/wp-mediaelement.min.css?ver=5.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='elfsight-youtube-gallery-custom-css'  href='https://ikp.depaulidlab.com/wp-content/uploads/elfsight-youtube-gallery/elfsight-youtube-gallery-custom.css?ver=3.2.0' type='text/css' media='all' />
</head>
<body class="home page-template-default page page-id-11 logged-in admin-bar no-customize-support fl-builder has-slider">
<div class="wrapper ">
<div class="top-wrap">
      <header class="header-style-1 header-wrap  logo-left">
                    
                         
            <div class="main-header ">
                <div class="container-fluid">
                    <div class="logo-box alchem_header_style alchem_default_logo">
                  <a href="https://ikp.depaulidlab.com/">
                                            <img class="site-logo normal_logo" alt="Knowledge Portal" src="https://ikp.depaulidlab.com/wp-content/uploads/2020/06/Primary-Logo-Small.png" />
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
                    <nav class="site-nav" role="navigation">
                    <ul id="menu-main" class="main-nav"><li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item menu-item-20"><a href="https://ikp.depaulidlab.com/" aria-current="page"><span class="menu-item-label">Home</span></a></li>
<li id="menu-item-19" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="https://ikp.depaulidlab.com/videos/"><span class="menu-item-label">Videos</span></a></li>
<li id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><a href="https://ikp.depaulidlab.com/aboutus/"><span class="menu-item-label">Contact Us</span></a></li>
<li id="menu-item-144" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-144"><a href="https://depaulidlab.com/"><span class="menu-item-label"><DePauliDLab id> DePaul iD Lab</DePauliDLab></span></a></li>
</ul>                    </nav>
                </div>
            </div>
                                   <!-- sticky header -->
           <div class="fxd-header logo-left">
                <div class="container-fluid">
                    <div class="logo-box text-left alchem_header_style alchem_default_logo">
                        <a href="https://ikp.depaulidlab.com/">
                    
                                            <img class="site-logo normal_logo" alt="Knowledge Portal" src="https://ikp.depaulidlab.com/wp-content/uploads/2019/03/KP-LOGO2_website.png" />
                                          
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
                    <nav class="site-nav" role="navigation">
                        <ul id="menu-main" class="main-nav"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item menu-item-20"><a href="https://ikp.depaulidlab.com/" aria-current="page"><span class="menu-item-label">Home</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="https://ikp.depaulidlab.com/videos/"><span class="menu-item-label">Videos</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><a href="https://ikp.depaulidlab.com/aboutus/"><span class="menu-item-label">Contact Us</span></a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-144"><a href="https://depaulidlab.com/"><span class="menu-item-label"><DePauliDLab id> DePaul iD Lab</DePauliDLab></span></a></li>
</ul>                    </nav>
                </div>
            </div>
                                     
            <div class="clear"></div>
        </header>  </div>
<div id="post-11" class="post-11 page type-page status-publish hentry">
   
 <div class="post-wrap">
            <div class="container">
                <div class="page-inner row no-aside">
                        <div class="col-main">
             
			<div class="entry-content">
  <div class="fl-builder-content fl-builder-content-11 fl-builder-content-primary" data-post-id="11"><div class="fl-row fl-row-full-width fl-row-bg-photo fl-node-5e960343743f2 fl-row-custom-height fl-row-align-top fl-row-bg-overlay" data-node="5e960343743f2">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-full-width fl-node-content">
		
<div class="fl-col-group fl-node-5e960343743e9" data-node="5e960343743e9">
			<div class="fl-col fl-node-5e960343743ed" data-node="5e960343743ed">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5ed5e8dc0f1e2" data-node="5ed5e8dc0f1e2">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h3 style="text-align: center;"><strong>iD Lab</strong></h3>
<h3 style="text-align: center;"><strong>I</strong>nnovation <strong>K</strong>nowledge <strong>P</strong>ortal</h3>
</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div class="fl-row fl-row-full-width fl-row-bg-color fl-node-5e95dbfc66dfa" data-node="5e95dbfc66dfa">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5e95dbfc66de9" data-node="5e95dbfc66de9">
			<div class="fl-col fl-node-5e95dbfc66ded" data-node="5e95dbfc66ded">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-video fl-node-5e95dbfc66df9" data-node="5e95dbfc66df9">
	<div class="fl-module-content fl-node-content">
		<div class="fl-video fl-wp-video" itemscope itemtype="https://schema.org/VideoObject">
	<meta itemprop="url" content="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/Innovation-Knowledge-Portal-Introduction.mp4" /><meta itemprop="thumbnail" content="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-14-at-11.05.08-AM.png" /><div style="width: 100px;" class="wp-video"><!--[if lt IE 9]><script>document.createElement('video');</script><![endif]-->
<video class="wp-video-shortcode" id="video-11-1" width="100" height="100" poster="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-14-at-11.05.08-AM.png" preload="metadata" controls="controls"><source type="video/mp4" src="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/Innovation-Knowledge-Portal-Introduction.mp4?_=1" /><a href="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/Innovation-Knowledge-Portal-Introduction.mp4">https://ikp.depaulidlab.com/wp-content/uploads/2020/04/Innovation-Knowledge-Portal-Introduction.mp4</a></video></div></div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5e95dc3839607 fl-col-small" data-node="5e95dc3839607">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5e960935c38f5" data-node="5e960935c38f5">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h2 style="text-align: left;">Vision</h2>
</div>
	</div>
</div>
<div class="fl-module fl-module-rich-text fl-node-5e95dbfc66df5" data-node="5e95dbfc66df5">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<p style="text-align: left;">Extending from Dr. Olayele Adelakun’s vision of establishing a place<br />
where organizations can partner with universities to forward their innovation agenda, the Innovation Knowledge Portal is a hub for education and discussion around innovation for everyone from students to professionals in the C-Suite.</p>
<p style="text-align: left;">Interested in becoming a contributor or connecting with the DePaul<br />
Innovation Development Lab?</p>
<p style="text-align: center;">
</div>
	</div>
</div>
<div class="fl-module fl-module-button fl-node-5e95dbfc66df7" data-node="5e95dbfc66df7">
	<div class="fl-module-content fl-node-content">
		<div class="fl-button-wrap fl-button-width-auto fl-button-center">
			<a href="https://depaulidlab.com/" target="_blank" class="fl-button" role="button" rel="noopener" >
							<span class="fl-button-text">Connect</span>
					</a>
</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div class="fl-row fl-row-fixed-width fl-row-bg-none fl-node-5e95ca7016cec" data-node="5e95ca7016cec">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5e95ca7016e1a" data-node="5e95ca7016e1a">
			<div class="fl-col fl-node-5e95ca7016e20 fl-col-small" data-node="5e95ca7016e20">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-callout fl-node-5e95ca7016e22" data-node="5e95ca7016e22">
	<div class="fl-module-content fl-node-content">
		<div class="fl-callout fl-callout-center fl-callout-has-photo fl-callout-photo-above-title">
		<div class="fl-callout-content">
		<div class="fl-callout-photo"><div class="fl-photo fl-photo-align-" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-jpg">
				<img loading="lazy" class="fl-photo-img wp-image-898 size-full" src="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/IMG_2418-scaled.jpg" alt="IMG_2418" itemprop="image" height="1707" width="2560" title="IMG_2418" srcset="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/IMG_2418-scaled.jpg 2560w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/IMG_2418-300x200.jpg 300w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/IMG_2418-1024x683.jpg 1024w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/IMG_2418-768x512.jpg 768w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/IMG_2418-1536x1024.jpg 1536w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/IMG_2418-2048x1365.jpg 2048w" sizes="(max-width: 2560px) 100vw, 2560px" />
					</div>
	</div>
</div><h3 class="fl-callout-title"><span class="fl-callout-title-text"></span></h3>		<div class="fl-callout-text-wrap">
			<div class="fl-callout-text"><h3><strong>Hear</strong> from our Experts</h3>
<p>Learn from leaders in innovation from a variety of industries.</p>
</div>		</div>
	</div>
	</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5e95ca7016e24 fl-col-small" data-node="5e95ca7016e24">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-callout fl-node-5e95ca7016e25" data-node="5e95ca7016e25">
	<div class="fl-module-content fl-node-content">
		<div class="fl-callout fl-callout-center fl-callout-has-photo fl-callout-photo-above-title">
		<div class="fl-callout-content">
		<div class="fl-callout-photo"><div class="fl-photo fl-photo-align-" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-jpg">
				<img loading="lazy" class="fl-photo-img wp-image-896 size-full" src="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC08264-scaled.jpg" alt="DSC08264" itemprop="image" height="1707" width="2560" title="DSC08264" srcset="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC08264-scaled.jpg 2560w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC08264-300x200.jpg 300w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC08264-1024x683.jpg 1024w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC08264-768x512.jpg 768w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC08264-1536x1024.jpg 1536w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC08264-2048x1365.jpg 2048w" sizes="(max-width: 2560px) 100vw, 2560px" />
					</div>
	</div>
</div><h3 class="fl-callout-title"><span class="fl-callout-title-text"></span></h3>		<div class="fl-callout-text-wrap">
			<div class="fl-callout-text"><h3><strong>Explore</strong> Topics on Innovation</h3>
<p>Discover new ways to innovate through engaging content.</p>
</div>		</div>
	</div>
	</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5e95ca7016e27 fl-col-small" data-node="5e95ca7016e27">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-callout fl-node-5e95ca7016e28" data-node="5e95ca7016e28">
	<div class="fl-module-content fl-node-content">
		<div class="fl-callout fl-callout-center fl-callout-has-photo fl-callout-photo-above-title">
		<div class="fl-callout-content">
		<div class="fl-callout-photo"><div class="fl-photo fl-photo-align-" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-jpg">
				<img loading="lazy" class="fl-photo-img wp-image-893 size-full" src="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC06624-scaled.jpg" alt="DSC06624" itemprop="image" height="1707" width="2560" title="DSC06624" srcset="https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC06624-scaled.jpg 2560w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC06624-300x200.jpg 300w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC06624-1024x683.jpg 1024w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC06624-768x512.jpg 768w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC06624-1536x1024.jpg 1536w, https://ikp.depaulidlab.com/wp-content/uploads/2020/04/DSC06624-2048x1365.jpg 2048w" sizes="(max-width: 2560px) 100vw, 2560px" />
					</div>
	</div>
</div><h3 class="fl-callout-title"><span class="fl-callout-title-text"></span></h3>		<div class="fl-callout-text-wrap">
			<div class="fl-callout-text"><h3><strong>Our vision:</strong> Innovation first</h3>
<p>Content is designed for individuals at all stages of their careers, from students to professionals in the C-Suite.</p>
</div>		</div>
	</div>
	</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div class="fl-row fl-row-fixed-width fl-row-bg-none fl-node-5cab53c5b5d63" data-node="5cab53c5b5d63">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5cab53c5bb54d" data-node="5cab53c5bb54d">
			<div class="fl-col fl-node-5cab53c5bb61d" data-node="5cab53c5bb61d">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-heading fl-node-5cab53cb05259" data-node="5cab53cb05259">
	<div class="fl-module-content fl-node-content">
		<h4 class="fl-heading">
		<span class="fl-heading-text">Featured Videos</span>
	</h4>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div class="fl-row fl-row-full-width fl-row-bg-none fl-node-5c774a673443f" data-node="5c774a673443f">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-full-width fl-node-content">
		
<div class="fl-col-group fl-node-5c774a673aa61" data-node="5c774a673aa61">
			<div class="fl-col fl-node-5c774a673ab17" data-node="5c774a673ab17">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5c774a95b613f" data-node="5c774a95b613f">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<p>
            <div 
                class="elfsight-widget-youtube-gallery elfsight-widget" 
                data-elfsight-youtube-gallery-options="%7B%22channel%22%3A%22https%3A%5C%2F%5C%2Fwww.youtube.com%5C%2Fchannel%5C%2FUCDKo_4erdVcPCqMgH6Q4fjg%22%2C%22sourceGroups%22%3A%5B%7B%22name%22%3A%22Playlist%202%22%2C%22sources%22%3A%5B%22https%3A%5C%2F%5C%2Fwww.youtube.com%5C%2Fplaylist%3Flist%3DPLeloadL1OOn6Wv8Liv4exStEIjlAi4y2e%22%5D%7D%5D%2C%22headerVisible%22%3Afalse%2C%22headerLayout%22%3A%22accent%22%2C%22headerInfo%22%3A%5B%5D%2C%22headerChannelName%22%3Anull%2C%22headerChannelDescription%22%3Anull%2C%22headerChannelLogo%22%3Anull%2C%22headerChannelBanner%22%3Anull%2C%22contentColumns%22%3A3%2C%22contentRows%22%3A1%2C%22contentGutter%22%3A20%2C%22contentResponsive%22%3A%5B%7B%22minWidth%22%3A375%2C%22columns%22%3A%221%22%2C%22rows%22%3A1%2C%22gutter%22%3A%220%22%7D%2C%7B%22minWidth%22%3A768%2C%22columns%22%3A2%2C%22rows%22%3A1%2C%22gutter%22%3A%2220%22%7D%5D%2C%22width%22%3A%22auto%22%2C%22videoLayout%22%3A%22classic%22%2C%22videoInfo%22%3A%5B%22duration%22%2C%22title%22%2C%22date%22%2C%22playIcon%22%5D%2C%22videoPlayMode%22%3A%22popup%22%2C%22popupInfo%22%3A%5B%22title%22%2C%22channelLogo%22%2C%22channelName%22%2C%22viewsCounter%22%2C%22likesCounter%22%2C%22dislikesCounter%22%2C%22likesRatio%22%2C%22share%22%2C%22date%22%2C%22description%22%2C%22descriptionMoreButton%22%5D%2C%22popupAutoplay%22%3Atrue%2C%22contentDirection%22%3A%22horizontal%22%2C%22contentArrowsControl%22%3Atrue%2C%22contentScrollControl%22%3Afalse%2C%22contentDragControl%22%3Atrue%2C%22contentPaginationControl%22%3Afalse%2C%22contentScrollbar%22%3Atrue%2C%22contentSearch%22%3Afalse%2C%22contentDivider1%22%3Anull%2C%22contentTransitionSpeed%22%3A600%2C%22contentTransitionEffect%22%3A%22coverflow%22%2C%22contentFreeMode%22%3Afalse%2C%22contentDivider2%22%3Anull%2C%22contentAuto%22%3A0%2C%22contentAutoPauseOnHover%22%3Afalse%2C%22colorScheme%22%3A%22custom%22%2C%22colorHeaderBg%22%3A%22rgb%28139%2C%20166%2C%20196%29%22%2C%22colorHeaderBannerOverlay%22%3A%22rgba%28255%2C%20255%2C%20255%2C%200.92%29%22%2C%22colorHeaderChannelName%22%3A%22rgb%28255%2C%20255%2C%20255%29%22%2C%22colorHeaderChannelNameHover%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorHeaderChannelDescription%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorHeaderAnchor%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorHeaderAnchorHover%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorHeaderCounters%22%3A%22rgba%2817%2C%2017%2C%2017%2C%200.7%29%22%2C%22colorGroupsBg%22%3A%22rgb%28237%2C%20226%2C%20226%29%22%2C%22colorGroupsLink%22%3A%22rgb%2817%2C%2017%2C%2017%2C%200.5%29%22%2C%22colorGroupsLinkHover%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorGroupsLinkActive%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorGroupsHighlightHover%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorGroupsHighlightActive%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorVideoBg%22%3A%22rgb%28255%2C%20255%2C%20255%29%22%2C%22colorVideoOverlay%22%3A%22rgba%2833%2C%2086%2C%20143%2C%200.82%29%22%2C%22colorVideoPlayIcon%22%3A%22rgba%28255%2C%20255%2C%20255%2C%200.4%29%22%2C%22colorVideoPlayIconHover%22%3A%22rgba%28255%2C%20255%2C%20255%2C%200.8%29%22%2C%22colorVideoDuration%22%3A%22rgb%28255%2C%20255%2C%20255%29%22%2C%22colorVideoDurationBg%22%3A%22rgba%2834%2C%2034%2C%2034%2C%200.81%29%22%2C%22colorVideoTitle%22%3A%22rgb%2813%2C%2013%2C%2013%29%22%2C%22colorVideoTitleHover%22%3A%22rgb%2833%2C%2086%2C%20143%29%22%2C%22colorVideoDate%22%3A%22rgb%2813%2C%2013%2C%2013%29%22%2C%22colorVideoDescription%22%3A%22rgb%28255%2C%20255%2C%20255%29%22%2C%22colorVideoAnchor%22%3A%22rgb%2826%2C%20137%2C%20222%29%22%2C%22colorVideoAnchorHover%22%3A%22rgb%2847%2C%20165%2C%20255%29%22%2C%22colorVideoCounters%22%3A%22rgba%2817%2C%2017%2C%2017%2C%200.7%29%22%2C%22colorPopupBg%22%3A%22rgb%28139%2C%20166%2C%20196%29%22%2C%22colorPopupAnchor%22%3A%22rgb%2826%2C%20137%2C%20222%29%22%2C%22colorPopupAnchorHover%22%3A%22rgb%2847%2C%20165%2C%20255%29%22%2C%22colorPopupOverlay%22%3A%22rgba%280%2C%200%2C%200%2C%200.7%29%22%2C%22colorPopupTitle%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorPopupChannelName%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorPopupChannelNameHover%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorPopupViewsCounter%22%3A%22rgba%2817%2C%2017%2C%2017%2C%200.7%29%22%2C%22colorPopupLikesRatio%22%3A%22rgb%2847%2C%20165%2C%20255%29%22%2C%22colorPopupDislikesRatio%22%3A%22rgb%28207%2C%20207%2C%20207%29%22%2C%22colorPopupLikesCounter%22%3A%22rgba%2817%2C%2017%2C%2017%2C%200.5%29%22%2C%22colorPopupDislikesCounter%22%3A%22rgba%2817%2C%2017%2C%2017%2C%200.5%29%22%2C%22colorPopupShare%22%3A%22rgba%2817%2C%2017%2C%2017%2C%200.5%29%22%2C%22colorPopupDate%22%3A%22rgba%2817%2C%2017%2C%2017%2C%200.7%29%22%2C%22colorPopupDescription%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorPopupDescriptionMoreButton%22%3A%22rgba%2817%2C%2017%2C%2017%2C%200.5%29%22%2C%22colorPopupDescriptionMoreButtonHover%22%3A%22rgba%2817%2C%2017%2C%2017%2C%200.7%29%22%2C%22colorPopupCommentsUsername%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorPopupCommentsUsernameHover%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorPopupCommentsPassedTime%22%3A%22rgba%2817%2C%2017%2C%2017%2C%200.7%29%22%2C%22colorPopupCommentsLikes%22%3A%22rgba%2817%2C%2017%2C%2017%2C%200.5%29%22%2C%22colorPopupCommentsText%22%3A%22rgb%2817%2C%2017%2C%2017%29%22%2C%22colorPopupControls%22%3A%22rgb%28160%2C%20160%2C%20160%29%22%2C%22colorPopupControlsHover%22%3A%22rgb%28220%2C%20220%2C%20220%29%22%2C%22colorPopupControlsMobile%22%3A%22rgb%28220%2C%20220%2C%20220%29%22%2C%22colorPopupControlsMobileBg%22%3A%22rgba%28255%2C%20255%2C%20255%2C%200%29%22%2C%22colorContentBg%22%3A%22rgb%28255%2C%20255%2C%20255%29%22%2C%22colorContentArrows%22%3A%22rgb%280%2C%200%2C%200%29%22%2C%22colorContentArrowsHover%22%3A%22rgb%280%2C%200%2C%200%29%22%2C%22colorContentArrowsBg%22%3A%22rgba%28255%2C%20255%2C%20255%2C%200.8%29%22%2C%22colorContentArrowsBgHover%22%3A%22rgba%28255%2C%20255%2C%20255%2C%201%29%22%2C%22colorContentScrollbarBg%22%3A%22rgb%28204%2C%20204%2C%20204%29%22%2C%22colorContentScrollbarSliderBg%22%3A%22rgba%280%2C%200%2C%200%2C%200.4%29%22%2C%22lang%22%3A%22en%22%2C%22adsClient%22%3Anull%2C%22adsSlotsContent%22%3Anull%2C%22adsSlotsPopup%22%3Anull%2C%22noCookies%22%3Atrue%2C%22cacheTime%22%3A3600%2C%22key%22%3A%22AIzaSyAv2W8UfDlFaD5iHWM__GOclpPGIhVgcg8%22%7D" 
                data-elfsight-youtube-gallery-version="3.2.0">
            </div>
            </p>
</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div class="fl-row fl-row-full-width fl-row-bg-color fl-node-5c929431dce09" data-node="5c929431dce09">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5c929431e2c57" data-node="5c929431e2c57">
			<div class="fl-col fl-node-5c929431e2d48" data-node="5c929431e2d48">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-button fl-node-5ea8e2baad477" data-node="5ea8e2baad477">
	<div class="fl-module-content fl-node-content">
		<div class="fl-button-wrap fl-button-width-custom fl-button-center">
			<a href="https://ikp.depaulidlab.com/?page_id=13" target="_self" class="fl-button" role="button">
							<span class="fl-button-text">More Videos</span>
					</a>
</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
</div>    
  <div class="comments-area text-left">
      </div>
</div>
<!-- .entry-content -->

		                        </div>
                                                        </div>
                </div>
            </div>
      </div>
 <!--Footer-->
         <footer class="">
                    
            <div class="footer-info-area">
                <div class="contact-info">
                        <h2>Contact Info</h2>
                    <ul>
                        <li>243 S WABASH AVE, CHICAGO, IL 60604, 7TH FLOOR</li>
                        <li>(312) 362-1309</li>
                        <li>depaulilab@gmail.com</li>
                    </ul>
                </div>
              <div class="depaul-cdm">
                    <img src="/wp-content/uploads/2019/03/depaul-logo-1.png" width="200" height="40"/>
                </div>
                <div class="container text-center alchem_footer_social_icon_1"> 
                 <ul class="footer-sns"><li><a target="_blank" rel="" href="https://www.linkedin.com/company/depaul-innovation-lab/" data-placement="top" data-toggle="tooltip" title="LinkedIn"><i class="fa fa-linkedin"></i></a></li><li><a target="_blank" rel="" href="mailto:depaulilab@gmail.com?subject=Email%20from%20iD-Lab%20Website" data-placement="top" data-toggle="tooltip" title="Email"><i class="fa fa-envelope"></i></a></li></ul>                    <div class="clearfix"></div>
                    
                    <div class="site-info" style="display:none;">
                    Powered by <a href="http://wordpress.org/" target="_blank">WordPress</a>. Designed by <a href="http://www.mageewp.com/" target="_blank">Magee Themes</a>.                    </div>
                    
                </div>
                <div class="copyright">Copyright © 2019 iD-Lab. All Rights Reserved.</div>
            </div>          
        </footer>
    </div>  
    <!-- ngg_resource_manager_marker --><script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/hoverintent-js.min.js?ver=2.2.1' id='hoverintent-js-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/admin-bar.min.js?ver=5.5.3' id='admin-bar-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/bb-plugin/js/jquery.fitvids.min.js?ver=1.2' id='jquery-fitvids-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/uploads/bb-plugin/cache/11-layout.js?ver=c06689bb8303d50f8d9ca9b1e1d741a0' id='fl-builder-layout-11-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/bootstrap/js/bootstrap.min.js?ver=3.3.4' id='bootstrap-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/dist/vendor/moment.min.js?ver=2.26.0' id='moment-js'></script>
<script type='text/javascript' id='moment-js-after'>
moment.updateLocale( 'en_US', {"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"week":{"dow":1},"longDateFormat":{"LT":"g:i a","LTS":null,"L":null,"LL":"F j, Y","LLL":"F j, Y g:i a","LLLL":null}} );
</script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/js/magee-shortcodes.js?ver=1.6.0' id='magee-main-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/js/magee-modal.js?ver=1.6.0' id='magee-modal-js'></script>
<script type='text/javascript' id='ngg_common-js-extra'>
/* <![CDATA[ */

var nextgen_lightbox_settings = {"static_path":"https:\/\/ikp.depaulidlab.com\/wp-content\/plugins\/nextgen-gallery\/products\/photocrati_nextgen\/modules\/lightbox\/static\/{placeholder}","context":"all_images"};
/* ]]> */
</script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/nextgen_gallery_display/static/common.js?ver=3.3.20' id='ngg_common-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/lightbox/static/lightbox_context.js?ver=3.3.20' id='ngg_lightbox_context-js'></script>
<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js?ver=3.3.20' id='fancybox-0-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/lightbox/static/fancybox/jquery.easing-1.3.pack.js?ver=3.3.20' id='fancybox-1-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/lightbox/static/fancybox/jquery.fancybox-1.3.4.pack.js?ver=3.3.20' id='fancybox-2-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/lightbox/static/fancybox/nextgen_fancybox_init.js?ver=3.3.20' id='fancybox-3-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/YTPlayer/jquery.mb.YTPlayer.js?ver=5.5.3' id='alchem-bigvideo-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/jquery.prettyPhoto.js' id='alchem-prettyPhoto-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/jquery.parallax.js' id='alchem-parallax-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/owl-carousel/owl.carousel.min.js' id='owl.carousel-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/jquery-masonry/jquery.masonry.min.js' id='alchem-masonry-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/jquery.easing.min.js' id='alchem-easing-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/depaulidlab/js/jquery.waypoints.js?ver=2.0.5' id='magee-waypoints-js'></script>
<script type='text/javascript' id='alchem-main-js-extra'>
/* <![CDATA[ */
var alchem_params = {"ajaxurl":"https:\/\/ikp.depaulidlab.com\/wp-admin\/admin-ajax.php","themeurl":"https:\/\/ikp.depaulidlab.com\/wp-content\/themes\/alchem","responsive":"yes","site_width":"1170px","sticky_header":"yes","show_search_icon":"yes","slider_autoplay":"yes","slideshow_speed":"3000","portfolio_grid_pagination_type":"pagination","blog_pagination_type":"pagination","global_color":"#21568f","admin_ajax_nonce":"b26bfae900","admin_ajax":"https:\/\/ikp.depaulidlab.com\/wp-admin\/admin-ajax.php","isMobile":"0","footer_sticky":"0"};
/* ]]> */
</script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/main.js' id='alchem-main-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/jquery.infinitescroll.js' id='alchem-infinitescroll-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/wp-embed.min.js?ver=5.5.3' id='wp-embed-js'></script>
<script type='text/javascript' id='mediaelement-core-js-before'>
var mejsL10n = {"language":"en","strings":{"mejs.download-file":"Download File","mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/","mejs.fullscreen":"Fullscreen","mejs.play":"Play","mejs.pause":"Pause","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.","mejs.live-broadcast":"Live Broadcast","mejs.volume-help-text":"Use Up\/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.captions-subtitles":"Captions\/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}};
</script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/mediaelement/mediaelement-and-player.min.js?ver=4.2.13-9993131' id='mediaelement-core-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/mediaelement/mediaelement-migrate.min.js?ver=5.5.3' id='mediaelement-migrate-js'></script>
<script type='text/javascript' id='mediaelement-js-extra'>
/* <![CDATA[ */
var _wpmejsSettings = {"pluginPath":"\/wp-includes\/js\/mediaelement\/","classPrefix":"mejs-","stretching":"responsive"};
/* ]]> */
</script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/mediaelement/wp-mediaelement.min.js?ver=5.5.3' id='wp-mediaelement-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/mediaelement/renderers/vimeo.min.js?ver=4.2.13-9993131' id='mediaelement-vimeo-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/elfsight-youtube-gallery-cc/assets/elfsight-youtube-gallery.js?ver=3.2.0' id='elfsight-youtube-gallery-js'></script>
	<script type="text/javascript">
		(function() {
			var request, b = document.body, c = 'className', cs = 'customize-support', rcs = new RegExp('(^|\\s+)(no-)?'+cs+'(\\s+|$)');

				request = true;
	
			b[c] = b[c].replace( rcs, ' ' );
			// The customizer requires postMessage and CORS (if the site is cross domain).
			b[c] += ( window.postMessage && request ? ' ' : ' no-' ) + cs;
		}());
	</script>
			<div id="wpadminbar" class="nojq nojs">
							<a class="screen-reader-shortcut" href="#wp-toolbar" tabindex="1">Skip to toolbar</a>
						<div class="quicklinks" id="wp-toolbar" role="navigation" aria-label="Toolbar">
				<ul id='wp-admin-bar-root-default' class="ab-top-menu"><li id='wp-admin-bar-wp-logo' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://ikp.depaulidlab.com/wp-admin/about.php'><span class="ab-icon"></span><span class="screen-reader-text">About WordPress</span></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-wp-logo-default' class="ab-submenu"><li id='wp-admin-bar-about'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/about.php'>About WordPress</a></li></ul><ul id='wp-admin-bar-wp-logo-external' class="ab-sub-secondary ab-submenu"><li id='wp-admin-bar-wporg'><a class='ab-item' href='https://wordpress.org/'>WordPress.org</a></li><li id='wp-admin-bar-documentation'><a class='ab-item' href='https://codex.wordpress.org/'>Documentation</a></li><li id='wp-admin-bar-support-forums'><a class='ab-item' href='https://wordpress.org/support/'>Support</a></li><li id='wp-admin-bar-feedback'><a class='ab-item' href='https://wordpress.org/support/forum/requests-and-feedback'>Feedback</a></li></ul></div></li><li id='wp-admin-bar-site-name' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://ikp.depaulidlab.com/wp-admin/'>Knowledge Portal</a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-site-name-default' class="ab-submenu"><li id='wp-admin-bar-dashboard'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/'>Dashboard</a></li></ul><ul id='wp-admin-bar-appearance' class="ab-submenu"><li id='wp-admin-bar-themes'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/themes.php'>Themes</a></li><li id='wp-admin-bar-widgets'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/widgets.php'>Widgets</a></li><li id='wp-admin-bar-menus'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/nav-menus.php'>Menus</a></li><li id='wp-admin-bar-background' class="hide-if-customize"><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/themes.php?page=custom-background'>Background</a></li><li id='wp-admin-bar-header' class="hide-if-customize"><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/themes.php?page=custom-header'>Header</a></li></ul></div></li><li id='wp-admin-bar-customize' class="hide-if-no-customize"><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/customize.php?url=https%3A%2F%2Fikp.depaulidlab.com%2F'>Customize</a></li><li id='wp-admin-bar-updates'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/update-core.php' title='9 Plugin Updates, 4 Theme Updates'><span class="ab-icon"></span><span class="ab-label">13</span><span class="screen-reader-text">9 Plugin Updates, 4 Theme Updates</span></a></li><li id='wp-admin-bar-comments'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/edit-comments.php'><span class="ab-icon"></span><span class="ab-label awaiting-mod pending-count count-0" aria-hidden="true">0</span><span class="screen-reader-text comments-in-moderation-text">0 Comments in moderation</span></a></li><li id='wp-admin-bar-new-content' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://ikp.depaulidlab.com/wp-admin/post-new.php'><span class="ab-icon"></span><span class="ab-label">New</span></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-new-content-default' class="ab-submenu"><li id='wp-admin-bar-new-post'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/post-new.php'>Post</a></li><li id='wp-admin-bar-new-media'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/media-new.php'>Media</a></li><li id='wp-admin-bar-new-page'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/post-new.php?post_type=page'>Page</a></li><li id='wp-admin-bar-new-amo-team'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/post-new.php?post_type=amo-team'>Team Member</a></li><li id='wp-admin-bar-new-fl-builder-template'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/post-new.php?post_type=fl-builder-template'>Template</a></li><li id='wp-admin-bar-new-magee_slider'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/post-new.php?post_type=magee_slider'>Magee Slider</a></li><li id='wp-admin-bar-new-modula-gallery'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/post-new.php?post_type=modula-gallery'>Modula</a></li><li id='wp-admin-bar-new-team_mf'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/post-new.php?post_type=team_mf'>Team Manager</a></li><li id='wp-admin-bar-new-team_mf_team'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/post-new.php?post_type=team_mf_team'>Shortcode</a></li><li id='wp-admin-bar-new-user'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/user-new.php'>User</a></li><li id='wp-admin-bar-new_content_smart_slider'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=smart-slider3#createslider'>Slider [Smart Slider 3]</a></li><li id='wp-admin-bar-wpforms'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpforms-builder'>WPForms</a></li></ul></div></li><li id='wp-admin-bar-edit'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/post.php?post=11&#038;action=edit'>Edit Page</a></li><li id='wp-admin-bar-smart_slider_3' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=smart-slider3'>Smart Slider</a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-smart_slider_3-default' class="ab-submenu"><li id='wp-admin-bar-smart_slider_3_dashboard'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=smart-slider3'>Dashboard</a></li><li id='wp-admin-bar-smart_slider_3_create_slider'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=smart-slider3#createslider'>Create slider</a></li><li id='wp-admin-bar-smart_slider_3_edit' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=smart-slider3'><span class="wp-admin-bar-arrow" aria-hidden="true"></span>Edit slider</a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-smart_slider_3_edit-default' class="ab-submenu"><li id='wp-admin-bar-smart_slider_3_slider_4'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=smart-slider3&#038;nextendcontroller=slider&#038;nextendaction=edit&#038;sliderid=4&#038;groupID=0'>#4 - Demo Slider - Free Full-width</a></li><li id='wp-admin-bar-smart_slider_3_slider_3'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=smart-slider3&#038;nextendcontroller=slider&#038;nextendaction=edit&#038;sliderid=3&#038;groupID=0'>#3 - Slider</a></li><li id='wp-admin-bar-smart_slider_3_slider_2'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=smart-slider3&#038;nextendcontroller=slider&#038;nextendaction=edit&#038;sliderid=2&#038;groupID=0'>#2 - Slider</a></li><li id='wp-admin-bar-smart_slider_3_slider_1'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=smart-slider3&#038;nextendcontroller=slider&#038;nextendaction=edit&#038;sliderid=1&#038;groupID=0'>#1 - Sample Slider</a></li></ul></div></li></ul></div></li><li id='wp-admin-bar-wpseo-menu' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpseo_dashboard'><div id="yoast-ab-icon" class="ab-item yoast-logo svg"><span class="screen-reader-text">SEO</span></div><div class="wpseo-score-icon adminbar-seo-score na"><span class="adminbar-seo-score-text screen-reader-text">SEO score: Not available</span></div></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-wpseo-menu-default' class="ab-submenu"><li id='wp-admin-bar-wpseo-configuration-wizard'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpseo_configurator'>Configuration Wizard</a></li><li id='wp-admin-bar-wpseo-kwresearch' class="menupop"><div class="ab-item ab-empty-item" tabindex="0" aria-haspopup="true"><span class="wp-admin-bar-arrow" aria-hidden="true"></span>Keyword Research</div><div class="ab-sub-wrapper"><ul id='wp-admin-bar-wpseo-kwresearch-default' class="ab-submenu"><li id='wp-admin-bar-wpseo-kwresearchtraining'><a class='ab-item' href='https://yoa.st/wp-admin-bar?php_version=7.3&#038;platform=wordpress&#038;platform_version=5.5.3&#038;software=free&#038;software_version=15.2&#038;days_active=30plus&#038;user_language=en_US' target='_blank'>Keyword research training</a></li><li id='wp-admin-bar-wpseo-adwordsexternal'><a class='ab-item' href='https://yoa.st/keywordplanner' target='_blank'>Google Ads</a></li><li id='wp-admin-bar-wpseo-googleinsights'><a class='ab-item' href='https://yoa.st/google-trends' target='_blank'>Google Trends</a></li></ul></div></li><li id='wp-admin-bar-wpseo-analysis' class="menupop"><div class="ab-item ab-empty-item" tabindex="0" aria-haspopup="true"><span class="wp-admin-bar-arrow" aria-hidden="true"></span>Analyze this page</div><div class="ab-sub-wrapper"><ul id='wp-admin-bar-wpseo-analysis-default' class="ab-submenu"><li id='wp-admin-bar-wpseo-inlinks'><a class='ab-item' href='https://search.google.com/search-console/links/drilldown?resource_id=https%3A%2F%2Fikp.depaulidlab.com&#038;type=EXTERNAL&#038;target=https%3A%2F%2Fikp.depaulidlab.com%2F&#038;domain=' target='_blank'>Check links to this URL</a></li><li id='wp-admin-bar-wpseo-kwdensity'><a class='ab-item' href='http://www.zippy.co.uk/keyworddensity/index.php?url=https%3A%2F%2Fikp.depaulidlab.com%2F&#038;keyword=' target='_blank'>Check Keyphrase Density</a></li><li id='wp-admin-bar-wpseo-cache'><a class='ab-item' href='//webcache.googleusercontent.com/search?strip=1&#038;q=cache:https%3A%2F%2Fikp.depaulidlab.com%2F' target='_blank'>Check Google Cache</a></li><li id='wp-admin-bar-wpseo-structureddata'><a class='ab-item' href='https://search.google.com/test/rich-results?url=https%3A%2F%2Fikp.depaulidlab.com%2F' target='_blank'>Google Rich Results Test</a></li><li id='wp-admin-bar-wpseo-facebookdebug'><a class='ab-item' href='//developers.facebook.com/tools/debug/?q=https%3A%2F%2Fikp.depaulidlab.com%2F' target='_blank'>Facebook Debugger</a></li><li id='wp-admin-bar-wpseo-pinterestvalidator'><a class='ab-item' href='https://developers.pinterest.com/tools/url-debugger/?link=https%3A%2F%2Fikp.depaulidlab.com%2F' target='_blank'>Pinterest Rich Pins Validator</a></li><li id='wp-admin-bar-wpseo-htmlvalidation'><a class='ab-item' href='//validator.w3.org/check?uri=https%3A%2F%2Fikp.depaulidlab.com%2F' target='_blank'>HTML Validator</a></li><li id='wp-admin-bar-wpseo-cssvalidation'><a class='ab-item' href='//jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fikp.depaulidlab.com%2F' target='_blank'>CSS Validator</a></li><li id='wp-admin-bar-wpseo-pagespeed'><a class='ab-item' href='//developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fikp.depaulidlab.com%2F' target='_blank'>Google Page Speed Test</a></li><li id='wp-admin-bar-wpseo-google-mobile-friendly'><a class='ab-item' href='https://www.google.com/webmasters/tools/mobile-friendly/?url=https%3A%2F%2Fikp.depaulidlab.com%2F' target='_blank'>Mobile-Friendly Test</a></li></ul></div></li><li id='wp-admin-bar-wpseo-settings' class="menupop"><div class="ab-item ab-empty-item" tabindex="0" aria-haspopup="true"><span class="wp-admin-bar-arrow" aria-hidden="true"></span>SEO Settings</div><div class="ab-sub-wrapper"><ul id='wp-admin-bar-wpseo-settings-default' class="ab-submenu"><li id='wp-admin-bar-wpseo-general'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpseo_dashboard'>General</a></li><li id='wp-admin-bar-wpseo-titles'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpseo_titles'>Search Appearance</a></li><li id='wp-admin-bar-wpseo-social'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpseo_social'>Social</a></li><li id='wp-admin-bar-wpseo-tools'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpseo_tools'>Tools</a></li><li id='wp-admin-bar-wpseo-licenses'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpseo_licenses'>Premium</a></li></ul></div></li></ul></div></li><li id='wp-admin-bar-fl-builder-frontend-edit-link'><a class='ab-item' href='https://ikp.depaulidlab.com/?fl_builder'><span class="ab-icon"></span>Beaver Builder <span class="fl-builder-admin-bar-status-dot" style="color:#6bc373; font-size:18px; line-height:1;">&bull;</span></a></li><li id='wp-admin-bar-wpforms-menu' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpforms-overview'>WPForms <div class="wpforms-menu-notification-counter"><span>4</span></div></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-wpforms-menu-default' class="ab-submenu"><li id='wp-admin-bar-wpforms-notifications'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpforms-overview'>Notifications <div class="wpforms-menu-notification-indicator"></div></a></li><li id='wp-admin-bar-wpforms-forms'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpforms-overview'>All Forms</a></li><li id='wp-admin-bar-wpforms-add-new'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin.php?page=wpforms-builder'>Add New</a></li><li id='wp-admin-bar-wpforms-community'><a class='ab-item' href='https://www.facebook.com/groups/wpformsvip/' target='_blank' rel='noopener noreferrer'>Community</a></li><li id='wp-admin-bar-wpforms-support'><a class='ab-item' href='https://wpforms.com/docs/' target='_blank' rel='noopener noreferrer'>Support</a></li></ul></div></li><li id='wp-admin-bar-SG_CachePress_Supercacher_Purge' class="sg-cachepress-admin-bar-purge"><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/admin-ajax.php?action=admin_bar_purge_cache&#038;_wpnonce=ee6bccf401'>Purge SG Cache</a></li></ul><ul id='wp-admin-bar-top-secondary' class="ab-top-secondary ab-top-menu"><li id='wp-admin-bar-search' class="admin-bar-search"><div class="ab-item ab-empty-item" tabindex="-1"><form action="https://ikp.depaulidlab.com/" method="get" id="adminbarsearch"><input class="adminbar-input" name="s" id="adminbar-search" type="text" value="" maxlength="150" /><label for="adminbar-search" class="screen-reader-text">Search</label><input type="submit" class="adminbar-button" value="Search"/></form></div></li><li id='wp-admin-bar-my-account' class="menupop with-avatar"><a class='ab-item' aria-haspopup="true" href='https://ikp.depaulidlab.com/wp-admin/profile.php'>Howdy, <span class="display-name">Rakip</span><img alt='' src='https://secure.gravatar.com/avatar/b9a815283494af31dd6c8b4a9660b02d?s=26&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/b9a815283494af31dd6c8b4a9660b02d?s=52&#038;d=mm&#038;r=g 2x' class='avatar avatar-26 photo' height='26' width='26' loading='lazy'/></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-user-actions' class="ab-submenu"><li id='wp-admin-bar-user-info'><a class='ab-item' tabindex="-1" href='https://ikp.depaulidlab.com/wp-admin/profile.php'><img alt='' src='https://secure.gravatar.com/avatar/b9a815283494af31dd6c8b4a9660b02d?s=64&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/b9a815283494af31dd6c8b4a9660b02d?s=128&#038;d=mm&#038;r=g 2x' class='avatar avatar-64 photo' height='64' width='64' loading='lazy'/><span class='display-name'>Rakip</span><span class='username'>rakip</span></a></li><li id='wp-admin-bar-edit-profile'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-admin/profile.php'>Edit Profile</a></li><li id='wp-admin-bar-logout'><a class='ab-item' href='https://ikp.depaulidlab.com/wp-login.php?action=logout&#038;_wpnonce=255fa7de04'>Log Out</a></li></ul></div></li></ul>			</div>
						<a class="screen-reader-shortcut" href="https://ikp.depaulidlab.com/wp-login.php?action=logout&#038;_wpnonce=255fa7de04">Log Out</a>
					</div>

		</body>
</html>
`;

const ikpCss=`
CSS is contained in the HTML section.
`;

const ikpJs=`
JavaScript is contained in the HTML section.
`;

export const homePage=[idLabInfo,idLabHtml,idLabCss,idLabJs,odiInfo,odiHtml,odiCss,odiJs,ikpInfo,ikpHtml,ikpCss,ikpJs];