/* ID Lab Content */

const idLabInfo = `
This is the What We Do Page, which goes over what the ID Lab does and it's mission.
`;


const idLabHtml=`

/**
 * Template Name: What-We-Do
 **/
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>DePaul iD-Lab - What We Do</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicons -->
    <link href="../wp-content/themes/idlabtheme/img/logo_iDLab_png.png" rel="icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Poppins:300,400,500,700|Playfair+Display" rel="stylesheet">

    <!-- Bootstrap CSS File -->
    <link href="../wp-content/themes/idlabtheme/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Libraries CSS Files -->
    <link href="../wp-content/themes/idlabtheme/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="../wp-content/themes/idlabtheme/lib/line-awesome/css/line-awesome.min.css" rel="stylesheet">
    <link href="../wp-content/themes/idlabtheme/lib/animate/animate.min.css" rel="stylesheet">
    <link href="../wp-content/themes/idlabtheme/lib/d-din/d-din.css" rel="stylesheet">

    <!-- Main Stylesheet File -->
    <link href="../wp-content/themes/idlabtheme/style.css" rel="stylesheet">
  </head>

  <body>

    <!--==========================
    Header
    ============================-->
    <header id="header">
      <div class="container-fluid d-flex align-items-center">

        <div id="logo" class="pull-left">
          <a href="#hero"><img src="../wp-content/themes/idlabtheme/img/logo_iDLab.svg" alt="" title="" /></a>
          <!-- Uncomment below if you prefer to use a text logo -->
          <!--<h1><a href="#hero">Regna</a></h1>-->
        </div>

        <nav id="nav-menu-container" class="ml-auto">
          <ul class="nav-menu">
            <li><a href="../">Home</a></li>
            <li class="menu-active"><a href="../what-we-do">What We Do</a></li>
            <li><a href="../Our-Team">Meet Our Team</a></li>
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

    <!--==========================
    Main
    ============================-->
    <main id="main">

      <section id="introduction">
        <div class="container-fluid">

          <div id="activity-heading">
            <div id="activity-heading-title" class="text-center txt-x1">
              We are a center of excellence that meets the needs and expectations of our customers.
            </div>
            <div id="activity-heading-text" class="text-center txt-rg">
              We add value to your business through top development, design and analytics, and we deliver user-centered
              solutions at a quick turnaround that create meaningful customer experiences.
            </div>
          </div>

          <div id="activity-list" class="row justify-content-center">
            <div class="activity-box col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5">
              <div class="activity-item px-0 mx-2 h-100" style="box-shadow:none; border: 2px solid lightgray;">
                <img class="w-100 pb-3" src="../wp-content/themes/idlabtheme/img/data-analytics.jpg">
                <div class="activity-title px-3">Data Analytics</div>
                <div class="activity-text px-3 pb-3">
                  We inspect, clean, transform and model your data to discover and provide you with valuable
                  information to use for business decision-making within your organization.
                </div>
              </div>
            </div>
            <div class="activity-box col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5">
              <div class="activity-item px-0 mx-2 h-100" style="box-shadow:none; border: 2px solid lightgray;">
                <img class="w-100 pb-3" src="../wp-content/themes/idlabtheme/img/experience-design.jpg">
                <div class="activity-title px-3">Experience Design</div>
                <div class="activity-text px-3 pb-3">
                  We design your innovative product, process, or service by creating functional user-friendly
                  interfaces that provide an excellent experience.
                </div>
              </div>
            </div>
            <div class="activity-box col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5">
              <div class="activity-item px-0 mx-2 h-100" style="box-shadow:none; border: 2px solid lightgray;">
                <img class="w-100 pb-3" src="../wp-content/themes/idlabtheme/img/software-development.jpg">
                <div class="activity-title px-3">Software Development</div>
                <div class="activity-text px-3 pb-3">
                  We design, program, code and test your business need, or idea development to ensure it meets excellent quality standards for your organization.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="intro-video">
        <div class="container-fluid">
          <div class="row">
            <div id="intro-play" class="video-wrapper col-12">
<!--              <video src="video/sample_video.mp4" poster="img/video-poster.jpg"></video>-->
              <iframe src="https://www.youtube.com/embed/-15_sHxo9aI?autoplay=0&rel=0&controls=0&disablekb=1&loop=1&modestbranding=1&start=4&showinfo=0" 					frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="agile-method">
        <div class="container-fluid">
          <div class="row">
            <div id="agile" class="w-100">
              <div id="agile-text" class="box-shadow d-flex flex-column justify-content-center col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-5">
                <div id="agile-title" class="txt-lg">
                  Solutions molded by Agile thinking
                </div>
                <div id="agile-description" class="txt-rg">
                  A method that values individuals, interactions and progress. We collaborate closely with our customers so that
                  we can respond to change in real time from direct feedback and deliver changes at a fast pace.
                  We use  University research resources such as the usability lab and 3D printing to deliver the best results to you.
                </div>
              </div>
              <div class="ml-auto px-0 h-100 col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-9">
                <img id="agile-image" src="../wp-content/themes/idlabtheme/img/agile-thinking.jpg">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies">

        <div id="case-studies-title" class="row flex-row align-items-center">
          <div class="txt-lg">Case studies</div>
          <div class="divider">
            <div class="inner"></div>
          </div>
        </div>
          <div class="row case-study case-study-left">
<!--            <img src="img/case-studies/bosch.jpg" class="case-study-image col-xs-12 col-sm-12 col-md-10d col-lg-8 col-xl-6">-->
<!--            <div class="case-study-left-text case-study-text box-shadow col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-5">-->
            <img src="../wp-content/themes/idlabtheme/img/case-studies/bosch.jpg" class="case-study-image">
            <div class="case-study-left-text case-study-text box-shadow">
              <div class="case-study-description txt-lg">Solving product profitability challenges for Bosch</div>
              <div class="case-study-description txt-rg">
                  We analyzed and designed a unique, usable map-based interface to enhance visualizations for quick processing of data on several geographic levels, and a fully functional MVP desktop application with interactive dashboards for sales, forecasts and reporting.
              </div>
              <a target="_blank" href="https://medium.com/@depaulilab/solving-product-profitability-challenges-for-bosch-40d16265ca8b" class="btn btn-read-more no-border txt-btn">Read more</a>
              <img src="../wp-content/themes/idlabtheme/img/clients/bosch.png" alt="Bosch" class="case-study-logo">
            </div>
          </div>
          <div class="row case-study case-study-right justify-content-end">
<!--            <img src="img/case-studies/digitalmint.jpg" class="case-study-image col-xs-12 col-sm-12 col-md-10d col-lg-8 col-xl-6">-->
<!--            <div class="case-study-right-text case-study-text box-shadow col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-5">            -->
              <img src="../wp-content/themes/idlabtheme/img/case-studies/digitalmint.jpg" class="case-study-image">
            <div class="case-study-right-text case-study-text box-shadow">
              <div class="case-study-description txt-lg">Solving the Cryptocurrency trading bottleneck for DigitalMint</div>
              <div class="case-study-description txt-rg">
                  We designed a usable interface with the objective to appeal to both existing and potential new crypto currency users, and we developed a responsive web application that provides existing customers the ability to view market trends and manage their account effectively.
              </div>
              <a target="_blank" href="https://medium.com/@depaulilab/solving-the-cryptocurrency-trading-bottleneck-for-digitalmint-9a4ce0deb840" class="btn btn-read-more no-border txt-btn">Read more</a>
              <img src="../wp-content/themes/idlabtheme/img/clients/digitalmint.png" alt="Bosch" class="case-study-logo">
            </div>
          </div>
          <div class="row case-study case-study-left">
<!--            <img src="img/case-studies/allstate.jpg" class="case-study-image col-xs-12 col-sm-12 col-md-10d col-lg-8 col-xl-6">-->
<!--            <div class="case-study-left-text case-study-text box-shadow col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-5">-->
            <img src="../wp-content/themes/idlabtheme/img/case-studies/allstate.jpg" class="case-study-image">
            <div class="case-study-left-text case-study-text box-shadow">
              <div class="case-study-description txt-lg">Solving Allstate’s Insurance Liability problem for rideshare drivers</div>
              <div class="case-study-description txt-rg">
                  We developed an iOS prototype to collect mobile sensor data and digital fingerprints to analyze data, and identified when rideshare drivers are engaging in personal driving versus rideshare driving.
              </div>
              <a target="_blank" href="https://medium.com/@depaulilab/solving-allstates-insurance-liability-problem-for-rideshare-drivers-fdc0dc45e857" class="btn btn-read-more no-border txt-btn">Read more</a>
              <img src="../wp-content/themes/idlabtheme/img/clients/allstate.png" alt="Bosch" class="case-study-logo">
            </div>
          </div>
      </section>

    </main>

    <!--==========================
    Footer include
    ============================-->
	<?php include('footer.php'); ?>

    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

    <!-- JavaScript Libraries -->
    <script src="../wp-content/themes/idlabtheme/lib/jquery/jquery.min.js"></script>
    <script src="../wp-content/themes/idlabtheme/lib/jquery/jquery-migrate.min.js"></script>
    <script src="../wp-content/themes/idlabtheme/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../wp-content/themes/idlabtheme/lib/easing/easing.min.js"></script>
    <script src="../wp-content/themes/idlabtheme/lib/wow/wow.min.js"></script>
    <script src="../wp-content/themes/idlabtheme/lib/waypoints/waypoints.min.js"></script>
    <script src="../wp-content/themes/idlabtheme/lib/counterup/counterup.min.js"></script>
    <script src="../wp-content/themes/idlabtheme/lib/superfish/hoverIntent.js"></script>
    <script src="../wp-content/themes/idlabtheme/lib/superfish/superfish.min.js"></script>

    <!-- Contact Form JavaScript File -->
    <script src="../wp-content/themes/idlabtheme/contactform/contactform.js"></script>

    <!-- Template Main Javascript File -->
    <script src="../wp-content/themes/idlabtheme/js/main.js"></script>

    <!-- Page custom Javascript -->
    <script type="text/javascript">
    jQuery(document).ready(function ($) {
      var videoPlayButton,
      videoWrapper = document.getElementsByClassName('video-wrapper')[0],
      video = document.getElementsByTagName('video')[0],
      videoMethods = {
        renderVideoPlayButton: function() {
          if (videoWrapper.contains(video)) {
            this.formatVideoPlayButton()
            video.classList.add('has-media-controls-hidden')
            videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
            videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
          }
        },

        formatVideoPlayButton: function() {
          videoWrapper.insertAdjacentHTML('beforeend', '\
          <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
          <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
          <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
          </svg>\
          ')
        },

        hideVideoPlayButton: function() {
          video.play()
          videoPlayButton.classList.add('is-hidden')
          video.classList.remove('has-media-controls-hidden')
          video.setAttribute('controls', 'controls')
        }
      }
      videoMethods.renderVideoPlayButton();
    });
    </script>

  </body>
</html>
`;


const idLabCss=`
/*----------------------------------------------------------------------------------------------------------------------
# What we do Page
----------------------------------------------------------------------------------------------------------------------*/

/* ------- INTRODUCTION SECTION ------- */
#introduction {
  height: 100%;
  width: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  background: rgba(216, 216, 216, .16);
}
#activity-heading {
  min-height: 100vh;
  padding: calc(75px + 10%) 2em 10%;
}
#activity-heading-title {
  width: 100%;
  max-width: 700px;
  height: 100%;
  padding: 0;
  margin: 0 auto 1em;
  font-family: 'D-DIN DIN-Bold', serif;
  font-size: 50px;
  letter-spacing: 3px;
  line-height: 50px;
  color: black;
}
#activity-heading-text {
  width: 80%;
  max-width: 500px;
  height: 100%;
  padding: 0;
  margin: 0 auto;
}
#activity-list {
  padding: 0 8%;
}
.activity-item {
  box-shadow: none;
  border: 2px solid lightgray;
}
.activity-title {
  font-family: 'D-DIN DIN-Bold', serif;
  font-size: 22px;
  letter-spacing: 1.5px;
  line-height: 40px;
  color: black;
}
.activity-text {
  font-family: 'D-DIN Regular', serif;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 19px;
  color: black;
}
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}
.video-wrapper iframe {
  position: absolute;
  top:0;
  left: 5%;
  width: 90%;
  height: 70%;
}
/*.video-wrapper > video {*/
/*  width: 100%;*/
/*  vertical-align: middle;*/
/*  object-fit: cover;*/
/*}*/
/*.video-wrapper > video.has-media-controls-hidden::-webkit-media-controls {*/
/*  display: none;*/
/*}*/
.video-overlay-play-button {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px calc(50% - 50px);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  opacity: 0.95;
  cursor: pointer;
  background-image: linear-gradient(transparent, #000);
  transition: opacity 150ms;
}
.video-overlay-play-button:hover {
  opacity: 1;
}
.video-overlay-play-button.is-hidden {
  display: none;
}

@media (min-width: 768px) {
  #activity-heading {
    padding: calc(75px + 10%) 10% 10%;
  }
  #activity-heading-title {
    width: 70%;
  }
  #activity-heading-text {
    width: 50%;
  }
}
@media (max-width: 1140px) {
  #activity-list {
    padding: 0 15px;
  }
}

/* ------- AGILE SECTION ------- */
#agile {
  padding: 3% 0;
  width: 100%;
  position: relative;
}
#agile-image {
  width: 100%;
  z-index: 10;
}
#agile-text {
  position: absolute;
  top: 23%;
  left: 5%;
  background: #fff;
  z-index: 11;
  padding: 6%;
  color: black;
}
#agile-description {
  padding-top: 5%;
  line-height: 26px;
}

@media (max-width: 768px) {
  #agile-image {
    width: 100%;
    height: auto;
  }
  #agile-text {
    top: auto;
    left: auto;
    width: 100%;
    height: auto !important;
    position: static;
    box-shadow: none;
  }
}

/* ------- CASE STUDIES SECTION ------- */
#case-studies {
  padding: 2em;
  background: rgba(216, 216, 216, .3);
}
#case-studies-title {
  margin: .5em;
  font-family: 'D-DIN DIN-Bold', serif;
  font-size: 26px;
  letter-spacing: 2px;
  line-height: 28px;
  color: black;
}
.case-study {
  margin: 2em 0;
}
.case-study-image {
  width: 100% !important;
  height: 20%;
}
.case-study-text {
  padding: 2em;
}
.case-study-description {
  margin-bottom: 1em;
}
.case-study-logo {
  height: 30px;
  float: right;
}
.btn-read-more, .btn-read-more:hover {
  margin: 3% 0 0;
  font-weight: bold;
  padding: 0 !important;
  color: #0091FF !important;
}
.box-shadow {
  box-shadow: 0 0 20px rgba(33,33,33,.2);
}
@media (min-width: 992px) {
  #case-studies-title {
    padding-left: 8%;
    margin-bottom: 2em;
  }
  .case-study {
    margin: 0 0 -100px;
    padding: 0 2em;
  }
  .case-study-image {
    width: 80%;
    max-width: 700px;
    height: auto;
    z-index: 1;
  }
  .case-study-left .case-study-image {
    margin-left: calc((80% - 700px)/4);
  }
  .case-study-right .case-study-image {
    margin-right: calc((80% - 700px)/4);
  }
  .case-study-text {
    padding: 5%;
    width: 50%;
    max-width: 600px;
    position: relative;
    top: -200px;
    background: #fff;
    z-index: 2;
    margin: 0 calc((80% - 700px)/4);
  }
  .case-study-left-text {
    left: 30%;
  }
  .case-study-right-text {
    right: 30%;
  }
}
`;

const idLabJs=`
 JavaScript was written in the html file.
`;

export const whatWeDo=[idLabInfo,idLabHtml,idLabCss,idLabJs];