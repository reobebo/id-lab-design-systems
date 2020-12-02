const idLabInfo=`
    This is the Contact Us page for the ID Lab Website.
`;
const idLabHtml=`
<?php
/**
* Template Name: Contact-Us
**/


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>DePaul iD-Lab - Contact Us</title>
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
  <link href="../wp-content/themes/idlabtheme/lib/font-awesome-new/css/fontawesome.min.css" rel="stylesheet">
  <link href="../wp-content/themes/idlabtheme/lib/font-awesome-new/css/brands.css" rel="stylesheet">
  <link href="../wp-content/themes/idlabtheme/lib/font-awesome-new/css/solid.css" rel="stylesheet">

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
        <a href="#hero"><img src="../wp-content/themes/idlabtheme/img/logo_iDLab.svg" alt="" title="" /></img></a>
        <!-- Uncomment below if you prefer to use a text logo -->
        <!--<h1><a href="#hero">Regna</a></h1>-->
      </div>

      <nav id="nav-menu-container" class="ml-auto">
        <ul class="nav-menu">
          <li><a href="../">Home</a></li>
          <li><a href="../what-we-do">What We Do</a></li>
          <li><a href="../our-team">Meet Our Team</a></li>
          <li class="menu-active"><a href="../new-contact-us">Contact Us</a></li>
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
    <section id="contact-address">
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
          <div id="address-title" class="row text-center">
            <div class="txt-normal"> Let's </div>
            <div class="txt-bold">Work Together</div>
          </div>
        </div>
        <div class="row">
          <div id="address-details" class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 txt-rg">
            <div id="address-text">
              <div>Want to see where the magic happens?</div>
              <div>Want to learn more about our business, or to discuss inquiries?</div>
              <div>Want to meet us in person?</div>
            </div>
            <div>Please feel free to contact us!</div>
            <div id="contact-items-list">
              <div class="row contact-item align-items-center">
                <div class="contact-image col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center pl-0">
                  <div class="contact-icon fas fa-envelope"></div>
                </div>
                <div class="contact-info col-9 col-sm-10 col-md-10 col-lg-10 col-xl-10 px-0">
                  <div class="contact-header">
                    Email
                  </div>
                  <div class="contact-detail">
                    <a href="mailto:depaulilab@gmail.com">depaulilab@gmail.com</a>
                  </div>
                </div>
              </div>
              <div class="row contact-item align-items-center">
                <div class="contact-image col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center pl-0">
                    <div class="contact-icon fas fa-phone-alt"></div>
                </div>
                <div class="contact-info col-9 col-sm-10 col-md-10 col-lg-10 col-xl-10 px-0">
                  <div class="contact-header">
                    Phone
                  </div>
                  <div class="contact-detail">
                    (312) 362-1309
                  </div>
                </div>
              </div>
              <div class="row contact-item align-items-center">
                <div class="contact-image col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center pl-0">
                    <div class="contact-icon fas fa-map-marked-alt"></div>
                </div>
                <div class="contact-info col-9 col-sm-10 col-md-10 col-lg-10 col-xl-10 px-0">
                  <div class="contact-header">
                    Location
                  </div>
                  <div class="contact-detail">
                    243 S Wabash Ave, Chicago, IL 60604, 9th Floor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="contact-map-box" class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 px-0">
            <div id="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11882.678821280233!2d-87.6255867!3d41.8784523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x401371e1c22aca86!2sDePaul%20University%20-%20College%20of%20Computing%20and%20Digital%20Media%20(CDM)!5e0!3m2!1sen!2sus!4v1570220989388!5m2!1sen!2sus"  frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
          </div>
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

    <!-- Contact Form JavaScript File -->
    <!--<script src="../wp-content/themes/idlabtheme/contactform/contactform.js"></script>-->

    <!-- Template Main Javascript File -->
    <script src="../wp-content/themes/idlabtheme/js/main.js"></script>

  </body>
  </html>

`;

const idLabCss=`
/*----------------------------------------------------------------------------------------------------------------------
# Get in touch Page
----------------------------------------------------------------------------------------------------------------------*/

/* ------- INTRO SECTION ------- */
#intro-contact {
  min-height: 100vh;
  width: 100%;
  padding: calc(75px + 10%) 20% 10%;
  background: rgba(216, 216, 216, .16);
}
.contact-text {
  padding: 35px 0;
}

@media (max-width: 992px ) {
  #intro-contact {
    padding: calc(75px + 10%) 2em 10%;
  }
}

/* ------- CONTACT FORM SECTION ------- */
#contact-form {
  font-family: 'D-DIN DIN-Bold', serif;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 13px;
  padding: 5%;
}
#contact-form input {
  font-family: 'D-DIN DIN-Bold', serif;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 13px;
}
#contact-title {
  margin-bottom: 15px;
}
.form-control {
  height: 40px;
  border: 2px solid black;
}
.multi-line {
  height: auto;
}
#btn-send {
  font-family: 'D-DIN DIN-Bold', serif;
  font-size: 14px;
  letter-spacing: 3px;
  line-height: 15px;
  color: white !important;
  padding: 20px;
}


/* ------- VISIT SECTION ------- */
#visit-details {
  padding: 5%;
  background: #D8D8D8;
}
#visit-details .txt-rg {
  width: 75%;
}

@media (max-width: 992px ) {
  #visit-details {
    padding: 2em;
  }
  #visit-details .txt-rg {
    width: 100%;
  }
}

/* ------- CONTACT ADDRESS SECTION ------- */
#contact-items-list {
  padding-top: 5%;
}

.contact-item {
  padding: 3% 0;
}

.contact-icon {
  font-size: 2.5em;
}

.contact-header {
  font-weight: bold;
}

#contact-address {
  height: 100%;
  width: 100%;
  padding: 5% 7%;
  background: rgba(156, 156, 156, 0.16);
  background-image: url("../idlabtheme/img/contactIBackground.png");
  background-repeat: no-repeat;
  background-size: contain;
}

#contact-map-box {
  padding: 5%;
}

#contact-map {
  overflow: hidden;
  padding-bottom: 373px;
  position: relative;
  height: 373px;
  height: 0;
  border-radius: 16px;
}

#contact-map iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

#address-details {
  padding: 2em;
  background: white;
  border-radius: 16px;
}

#address-title {
  font-family: 'D-DIN Regular', sans-serif;
  font-style: normal;
  font-size: 62px;
  line-height: 84px;
  color: black;
  padding: 75px 0;
  white-space: pre;
}

#address-text {
  margin: 0 0 45px 0;
}

#address-line {
  font-family: 'D-DIN Regular', serif;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 24px;
  color: black;
  margin: 25px 0;
}

#address-divider {
  border-bottom: 1px solid #FF8C00;
}

.address-icon {
  background: black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 25px 0 25px 15px;
}

.address-icon i {
  color: white;
}

@media (min-width: 992px) {
  #contact-map {
    margin-left: 12%;
  }
}

@media (max-width: 768px) {
  #address-title {
    font-size: 42px;
    line-height: 50px;
    padding: 95px 0 25px 0;
  }
}

@media (max-width: 576px) {
  #address-title {
    font-size: 32px;
    line-height: 50px;
    padding: 95px 0 25px 0;
  }

  #address-title div {
    width: 100%;
  }

  #address-details {
    border-radius: 8px !important;
  }

  #contact-map {
    border-radius: 8px !important;
    margin: 8% 0 !important;
  }
}

`;

const idLabJs=`
JavaScript is contained in the HTML section.
`;

export const contactUs=[idLabInfo,idLabHtml,idLabCss,idLabJs];