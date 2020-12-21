/* Content for the ContactUsDesign.js file */

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

const ikpInfo=`
The code provided is what was found in the WordPress site.  Since this is code copied from the Page Builder the code is not accurate.
`;

const ikpCode=`

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
<!-- Optimized by SG Optimizer plugin version - 5.7.11 -->
	<!-- This site is optimized with the Yoast SEO plugin v15.4 - https://yoast.com/wordpress/plugins/seo/ -->
	<title>About Us - Knowledge Portal</title>
	<meta name="description" content="Read more about DePaul iD Lab Innovation Knowledge Portal. Learn more about the companies we have worked with and the projects accomplished." />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="https://ikp.depaulidlab.com/aboutus/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="About Us - Knowledge Portal" />
	<meta property="og:description" content="Read more about DePaul iD Lab Innovation Knowledge Portal. Learn more about the companies we have worked with and the projects accomplished." />
	<meta property="og:url" content="https://ikp.depaulidlab.com/aboutus/" />
	<meta property="og:site_name" content="Knowledge Portal" />
	<meta property="article:modified_time" content="2020-06-08T02:13:33+00:00" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:label1" content="Written by">
	<meta name="twitter:data1" content="admin">
	<meta name="twitter:label2" content="Est. reading time">
	<meta name="twitter:data2" content="0 minutes">
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://ikp.depaulidlab.com/#website","url":"https://ikp.depaulidlab.com/","name":"Knowledge Portal","description":"","potentialAction":[{"@type":"SearchAction","target":"https://ikp.depaulidlab.com/?s={search_term_string}","query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"WebPage","@id":"https://ikp.depaulidlab.com/aboutus/#webpage","url":"https://ikp.depaulidlab.com/aboutus/","name":"About Us - Knowledge Portal","isPartOf":{"@id":"https://ikp.depaulidlab.com/#website"},"datePublished":"2019-02-19T08:19:28+00:00","dateModified":"2020-06-08T02:13:33+00:00","description":"Read more about DePaul iD Lab Innovation Knowledge Portal. Learn more about the companies we have worked with and the projects accomplished.","inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://ikp.depaulidlab.com/aboutus/"]}]}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link href='https://fonts.gstatic.com' crossorigin rel='preconnect' />
<link rel="alternate" type="application/rss+xml" title="Knowledge Portal &raquo; Feed" href="https://ikp.depaulidlab.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Knowledge Portal &raquo; Comments Feed" href="https://ikp.depaulidlab.com/comments/feed/" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/ikp.depaulidlab.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.6"}};
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
	<link rel='stylesheet' id='jquery.prettyphoto-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/wp-video-lightbox/css/prettyPhoto.css?ver=5.6' type='text/css' media='all' />
<link rel='stylesheet' id='video-lightbox-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/wp-video-lightbox/wp-video-lightbox.css?ver=5.6' type='text/css' media='all' />
<link rel='stylesheet' id='wp-block-library-css'  href='https://ikp.depaulidlab.com/wp-includes/css/dist/block-library/style.min.css?ver=5.6' type='text/css' media='all' />
<link rel='stylesheet' id='amo-team-showcase-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/amo-team-showcase/public/css/amo-team-showcase-public.css?ver=1.1.4' type='text/css' media='all' />
<link rel='stylesheet' id='fl-builder-layout-15-css'  href='https://ikp.depaulidlab.com/wp-content/uploads/bb-plugin/cache/15-layout.css?ver=0eca21ec2812deb2e8097bb8750d9bc9' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-5-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/bb-plugin/fonts/fontawesome/css/all.min.css?ver=2.2.3' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/bb-plugin/fonts/fontawesome/css/v4-shims.min.css?ver=2.2.3' type='text/css' media='all' />
<link rel='stylesheet' id='bootstrap-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/bootstrap/css/bootstrap.min.css?ver=3.3.4' type='text/css' media='' />
<link rel='stylesheet' id='prettyPhoto-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/css/prettyPhoto.css?ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='classycountdown-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/jquery-countdown/jquery.classycountdown.css?ver=1.1.0' type='text/css' media='' />
<link rel='stylesheet' id='twentytwenty-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/css/twentytwenty.css?ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='audioplayer-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/css/audioplayer.css?ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='weather-icons-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/weathericons/css/weather-icons.min.css?ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='animate-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/css/animate.css?ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='magee-shortcode-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/css/shortcode.css?ver=1.6.0' type='text/css' media='' />
<link rel='stylesheet' id='team_manager-normalize-css-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/css/normalize.css?ver=5.6' type='text/css' media='all' />
<link rel='stylesheet' id='team_manager-awesome-css-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/css/font-awesome.css?ver=5.6' type='text/css' media='all' />
<link rel='stylesheet' id='team_manager-featherlight-css-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/css/featherlight.css?ver=5.6' type='text/css' media='all' />
<link rel='stylesheet' id='team_manager-style1-css-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/team-showcase/css/style1.css?ver=5.6' type='text/css' media='all' />
<link rel='stylesheet' id='fancybox-0-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/lightbox/static/fancybox/jquery.fancybox-1.3.4.css?ver=3.4.7' type='text/css' media='all' />
<link rel='stylesheet' id='wpforms-full-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/wpforms-lite/assets/css/wpforms-full.min.css?ver=1.6.3.1' type='text/css' media='all' />
<link rel='stylesheet' id='alchem-bootstrap-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/bootstrap/css/bootstrap.css?ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='alchem-font-awesome-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/font-awesome/css/font-awesome.min.css?ver=4.3.0' type='text/css' media='' />
<link rel='stylesheet' id='alchem-animate-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/animate.css?ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='alchem-prettyPhoto-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/prettyPhoto.css?ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='owl.carousel-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/owl-carousel/assets/owl.carousel.css?ver=2.2.0' type='text/css' media='' />
<link rel='stylesheet' id='alchem-custom-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/custom.css?ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='alchem-customize-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/customize.css?ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='alchem-shortcode-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/shortcode.css?ver=1.8.25' type='text/css' media='' />
<link rel='stylesheet' id='alchem-woocommerce-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/woo.css?ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='alchem-style-css'  href='https://ikp.depaulidlab.com/wp-content/themes/depaulidlab/style.css?ver=5.6' type='text/css' media='all' />
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
<link rel='stylesheet' id='alchem-bigvideo-css'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/YTPlayer/css/jquery.mb.YTPlayer.min.css?ver=5.6' type='text/css' media='1' />
<link rel='stylesheet' id='chld_thm_cfg_separate-css'  href='https://ikp.depaulidlab.com/wp-content/themes/depaulidlab/ctc-style.css?ver=5.6' type='text/css' media='all' />
<link rel='stylesheet' id='alchem-Open-Sans-css'  href='//fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C700&#038;ver=5.6' type='text/css' media='' />
<link rel='stylesheet' id='alchem-schemesss'  href='https://ikp.depaulidlab.com/wp-content/themes/alchem/css/scheme.less?ver=1.8.25' type='text/less' media='' />
<link rel='stylesheet' id='tablepress-default-css'  href='https://ikp.depaulidlab.com/wp-content/plugins/tablepress/css/default.min.css?ver=1.12' type='text/css' media='all' />
<link rel='stylesheet' id='fl-builder-google-fonts-a9e8199f16808a35e5f3e34c5bbd6f10-css'  href='https://fonts.googleapis.com/css?family=Roboto%3A300&#038;ver=5.6' type='text/css' media='all' />
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/jquery/jquery.min.js?ver=3.5.1' id='jquery-core-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
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
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/jquery-countdown/jquery.throttle.js?ver=5.6' id='jquery.throttle-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/jquery-countdown/jquery.classycountdown.min.js?ver=1.1.0' id='jquery.classycountdown-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/js/jquery.event.move.js?ver=1.3.6' id='jquery.event.move-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/js/jquery.twentytwenty.js?ver=5.6' id='jquery.twentytwenty-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/magee-shortcodes/assets/js/audioplayer.js?ver=5.6' id='jquery-audioplayer-js'></script>
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
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/ajax/static/ajax.min.js?ver=3.4.7' id='photocrati_ajax-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/less.min.js?ver=2.5.1' id='alchem-less-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/respond.min.js?ver=2.0.0' id='alchem-respond-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/jquery.nav.js?ver=3.0.0' id='alchem-nav-js'></script>
<link rel="https://api.w.org/" href="https://ikp.depaulidlab.com/wp-json/" /><link rel="alternate" type="application/json" href="https://ikp.depaulidlab.com/wp-json/wp/v2/pages/15" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://ikp.depaulidlab.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://ikp.depaulidlab.com/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 5.6" />
<link rel='shortlink' href='https://ikp.depaulidlab.com/?p=15' />
<link rel="alternate" type="application/json+oembed" href="https://ikp.depaulidlab.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fikp.depaulidlab.com%2Faboutus%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://ikp.depaulidlab.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fikp.depaulidlab.com%2Faboutus%2F&#038;format=xml" />
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
            </script><!-- <meta name="NextGEN" version="3.4.7" /> -->
<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>		<style type="text/css" id="wp-custom-css">
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
</style><link rel='stylesheet' id='fl-builder-google-fonts-49eb69510701e9c503d96f60c10168a0-css'  href='//fonts.googleapis.com/css?family=Roboto%3A300&#038;ver=5.6' type='text/css' media='all' />
<link rel='stylesheet' id='elfsight-youtube-gallery-custom-css'  href='https://ikp.depaulidlab.com/wp-content/uploads/elfsight-youtube-gallery/elfsight-youtube-gallery-custom.css?ver=3.2.0' type='text/css' media='all' />
</head>
<body class="page-template-default page page-id-15 fl-builder">
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
                    <ul id="menu-main" class="main-nav"><li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-20"><a href="https://ikp.depaulidlab.com/"><span class="menu-item-label">Home</span></a></li>
<li id="menu-item-19" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="https://ikp.depaulidlab.com/videos/"><span class="menu-item-label">Videos</span></a></li>
<li id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-15 current_page_item menu-item-18"><a href="https://ikp.depaulidlab.com/aboutus/" aria-current="page"><span class="menu-item-label">Contact Us</span></a></li>
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
                        <ul id="menu-main" class="main-nav"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-20"><a href="https://ikp.depaulidlab.com/"><span class="menu-item-label">Home</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="https://ikp.depaulidlab.com/videos/"><span class="menu-item-label">Videos</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-15 current_page_item menu-item-18"><a href="https://ikp.depaulidlab.com/aboutus/" aria-current="page"><span class="menu-item-label">Contact Us</span></a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-144"><a href="https://depaulidlab.com/"><span class="menu-item-label"><DePauliDLab id> DePaul iD Lab</DePauliDLab></span></a></li>
</ul>                    </nav>
                </div>
            </div>
                                     
            <div class="clear"></div>
        </header>  </div>
<div id="post-15" class="post-15 page type-page status-publish hentry">
   
 <div class="post-wrap">
            <div class="container">
                <div class="page-inner row no-aside">
                        <div class="col-main">
             
			<div class="entry-content">
  <div class="fl-builder-content fl-builder-content-15 fl-builder-content-primary fl-builder-global-templates-locked" data-post-id="15"><div class="fl-row fl-row-full-width fl-row-bg-photo fl-node-5c7f541ff20c6 fl-row-custom-height fl-row-align-top fl-row-bg-overlay" data-node="5c7f541ff20c6">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-full-width fl-node-content">
		
<div class="fl-col-group fl-node-5c7f5451bfd96" data-node="5c7f5451bfd96">
			<div class="fl-col fl-node-5c7f5451bfeda" data-node="5c7f5451bfeda">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-heading fl-node-5c70c00143b20" data-node="5c70c00143b20">
	<div class="fl-module-content fl-node-content">
		<h3 class="fl-heading">
		<span class="fl-heading-text">Contact Us</span>
	</h3>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div class="fl-row fl-row-full-width fl-row-bg-color fl-node-5c6cfac4b0691" data-node="5c6cfac4b0691">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5c6cfac4b26ff" data-node="5c6cfac4b26ff">
			<div class="fl-col fl-node-5c6cfac4b27cb" data-node="5c6cfac4b27cb">
	<div class="fl-col-content fl-node-content">
	<div id="contactform" class="fl-module fl-module-rich-text fl-node-5c6cfac4b3872" data-node="5c6cfac4b3872">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<p>&nbsp;</p>
<p>
<style type="text/css">



	body #wpforms-34 .wpforms-head-container .wpforms-title {
	font-weight: bold;text-align:left ;color:#ffffff ;	}

	body #wpforms-34 .wpforms-head-container .wpforms-description {
		color:#ffffff ;		display:block;
	}


	body #wpforms-34 .wpforms-submit-container .wpforms-submit, body #wpforms-34 .wpforms-field-pagebreak button.wpforms-page-button {
		font-weight: bold;color:#f5f5f5 ;background-color:#21568f ;		border-width: 0px;	}
	body #wpforms-34 .wpforms-submit-container .wpforms-submit:hover, body #wpforms-34 .wpforms-field-pagebreak button.wpforms-page-button:hover {
	background-color:#406da1;	color:#8ba6c4;	}
	body #wpforms-34 .wpforms-submit-container,body #wpforms-34 .wpforms-field-pagebreak .wpforms-pagebreak-left{
		}


	body #wpforms-34 .wpforms-form .wpforms-field input[type=text],
	body #wpforms-34 .wpforms-form .wpforms-field input[type=email],
	body #wpforms-34 .wpforms-form .wpforms-field input[type=tel],
	body #wpforms-34 .wpforms-form .wpforms-field input[type=url],
	body #wpforms-34 .wpforms-form .wpforms-field input[type=password],
	body #wpforms-34 .wpforms-form .wpforms-field input[type=number]
	{
		background-color:#f5f5f5 ;color:#000000 ;border-color:#21568f ;border-style:solid ;		border-width: 1px;	}
	body #wpforms-34 .wpforms-form .wpforms-field .wpforms-field-row
	{
			}
	

	body #wpforms-34 .wpforms-form .wpforms-field textarea {
		background-color:#f5f5f5 ;color:#000000 ;border-color:#21568f ;			border-width: 1px;		
	}

 
	body #wpforms-34 .wpforms-form .wpforms-field select {

		background-color:#406da1 ;color:#ffffff ;border-color:#8ba6c4 ;		border-width: 1px;	}

 
	body #wpforms-34 .wpforms-form .wpforms-field-checkbox li label {
			}
 
	body #wpforms-34 .wpforms-form .wpforms-field .wpforms-field-description {

		color:#0d0d0d ;	}
 
	body #wpforms-34 .wpforms-form .wpforms-field label.wpforms-field-label {
		font-weight: bold;color:#0d0d0d ;	}

 
	body #wpforms-confirmation-34  {
		color:#ffffff ;border-color:#21568f ;				border-width: 1px;	}
 
	body #wpforms-34 label.wpforms-error {
		background-color:#21568f ;				border-width: 1px;	}
/* Styling for Tablets */
@media only screen and (max-width: 800px) and (min-width:481px) {
	



}

@media only screen and (max-width: 480px){
	



}
/*Option to add custom CSS */




		</style>
		<div class="wpforms-container wpforms-container-full wpf-center" id="wpforms-34"><form id="wpforms-form-34" class="wpforms-validate wpforms-form" data-formid="34" method="post" enctype="multipart/form-data" action="/aboutus/" data-token="1fe62b7c25bc4c35a0efe085e54bc41f"><noscript class="wpforms-error-noscript">Please enable JavaScript in your browser to complete this form.</noscript><div class="wpforms-field-container"><div id="wpforms-34-field_0-container" class="wpforms-field wpforms-field-name wpf-center" data-field-id="0"><label class="wpforms-field-label" for="wpforms-34-field_0">Name <span class="wpforms-required-label">*</span></label><input type="text" id="wpforms-34-field_0" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][0]" required></div><div id="wpforms-34-field_1-container" class="wpforms-field wpforms-field-email wpf-center" data-field-id="1"><label class="wpforms-field-label" for="wpforms-34-field_1">Email <span class="wpforms-required-label">*</span></label><input type="email" id="wpforms-34-field_1" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][1]" required></div><div id="wpforms-34-field_4-container" class="wpforms-field wpforms-field-select wpf-center" data-field-id="4"><label class="wpforms-field-label" for="wpforms-34-field_4">How did you hear about the Innovation Knowledge Portal? <span class="wpforms-required-label">*</span></label><select id="wpforms-34-field_4" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][4]" required="required"><option value="DePaul iD-Lab Website" >DePaul iD-Lab Website</option><option value="DePaul iD-Lab Event" >DePaul iD-Lab Event</option><option value="LinkedIn" >LinkedIn</option><option value="Email" >Email</option><option value="Referral from Colleague" >Referral from Colleague</option><option value="Other"  selected='selected'>Other</option></select></div><div id="wpforms-34-field_2-container" class="wpforms-field wpforms-field-textarea wpf-center" data-field-id="2"><label class="wpforms-field-label" for="wpforms-34-field_2">Comment or Message <span class="wpforms-required-label">*</span></label><textarea id="wpforms-34-field_2" class="wpforms-field-medium wpforms-field-required" name="wpforms[fields][2]" required></textarea></div></div><div class="wpforms-field wpforms-field-hp"><label for="wpforms-34-field-hp" class="wpforms-field-label">Name</label><input type="text" name="wpforms[hp]" id="wpforms-34-field-hp" class="wpforms-field-medium"></div><div class="wpforms-submit-container" ><input type="hidden" name="wpforms[id]" value="34"><input type="hidden" name="wpforms[author]" value="6"><input type="hidden" name="wpforms[post_id]" value="15"><button type="submit" name="wpforms[submit]" class="wpforms-submit " id="wpforms-submit-34" value="wpforms-submit" aria-live="assertive" data-alt-text="Sending..." data-submit-text="Submit">Submit</button></div></form></div>  <!-- .wpforms-container --></p>
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
    <!-- ngg_resource_manager_marker --><script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/uploads/bb-plugin/cache/15-layout.js?ver=0eca21ec2812deb2e8097bb8750d9bc9' id='fl-builder-layout-15-js'></script>
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
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/nextgen_gallery_display/static/common.js?ver=3.4.7' id='ngg_common-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/lightbox/static/lightbox_context.js?ver=3.4.7' id='ngg_lightbox_context-js'></script>
<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js?ver=3.4.7' id='fancybox-0-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/lightbox/static/fancybox/jquery.easing-1.3.pack.js?ver=3.4.7' id='fancybox-1-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/lightbox/static/fancybox/jquery.fancybox-1.3.4.pack.js?ver=3.4.7' id='fancybox-2-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/lightbox/static/fancybox/nextgen_fancybox_init.js?ver=3.4.7' id='fancybox-3-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/YTPlayer/jquery.mb.YTPlayer.js?ver=5.6' id='alchem-bigvideo-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/jquery.prettyPhoto.js' id='alchem-prettyPhoto-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/jquery.parallax.js' id='alchem-parallax-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/owl-carousel/owl.carousel.min.js' id='owl.carousel-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/plugins/jquery-masonry/jquery.masonry.min.js' id='alchem-masonry-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/jquery.easing.min.js' id='alchem-easing-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/depaulidlab/js/jquery.waypoints.js?ver=2.0.5' id='magee-waypoints-js'></script>
<script type='text/javascript' id='alchem-main-js-extra'>
/* <![CDATA[ */
var alchem_params = {"ajaxurl":"https:\/\/ikp.depaulidlab.com\/wp-admin\/admin-ajax.php","themeurl":"https:\/\/ikp.depaulidlab.com\/wp-content\/themes\/alchem","responsive":"yes","site_width":"1170px","sticky_header":"yes","show_search_icon":"yes","slider_autoplay":"yes","slideshow_speed":"3000","portfolio_grid_pagination_type":"pagination","blog_pagination_type":"pagination","global_color":"#21568f","admin_ajax_nonce":"4448a31006","admin_ajax":"https:\/\/ikp.depaulidlab.com\/wp-admin\/admin-ajax.php","isMobile":"0","footer_sticky":"0"};
/* ]]> */
</script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/main.js' id='alchem-main-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/themes/alchem/js/jquery.infinitescroll.js' id='alchem-infinitescroll-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-includes/js/wp-embed.min.js?ver=5.6' id='wp-embed-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/elfsight-youtube-gallery-cc/assets/elfsight-youtube-gallery.js?ver=3.2.0' id='elfsight-youtube-gallery-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/wpforms-lite/assets/js/jquery.validate.min.js?ver=1.19.0' id='wpforms-validation-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/wpforms-lite/assets/js/mailcheck.min.js?ver=1.1.2' id='wpforms-mailcheck-js'></script>
<script type='text/javascript' src='https://ikp.depaulidlab.com/wp-content/plugins/wpforms-lite/assets/js/wpforms.js?ver=1.6.3.1' id='wpforms-js'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var wpforms_settings = {"val_required":"This field is required.","val_url":"Please enter a valid URL.","val_email":"Please enter a valid email address.","val_email_suggestion":"Did you mean {suggestion}?","val_email_suggestion_title":"Click to accept this suggestion.","val_email_restricted":"This email address is not allowed.","val_number":"Please enter a valid number.","val_confirm":"Field values do not match.","val_fileextension":"File type is not allowed.","val_filesize":"File exceeds max size allowed. File was not uploaded.","val_time12h":"Please enter time in 12-hour AM\/PM format (eg 8:45 AM).","val_time24h":"Please enter time in 24-hour format (eg 22:45).","val_requiredpayment":"Payment is required.","val_creditcard":"Please enter a valid credit card number.","val_post_max_size":"The total size of the selected files {totalSize} Mb exceeds the allowed limit {maxSize} Mb.","val_checklimit":"You have exceeded the number of allowed selections: {#}.","val_limit_characters":"{count} of {limit} max characters.","val_limit_words":"{count} of {limit} max words.","val_recaptcha_fail_msg":"Google reCAPTCHA verification failed, please try again later.","val_empty_blanks":"Please fill out all blanks.","post_max_size":"134217728","uuid_cookie":"","locale":"en","wpforms_plugin_url":"https:\/\/ikp.depaulidlab.com\/wp-content\/plugins\/wpforms-lite\/","gdpr":"","ajaxurl":"https:\/\/ikp.depaulidlab.com\/wp-admin\/admin-ajax.php","mailcheck_enabled":"1","mailcheck_domains":[],"mailcheck_toplevel_domains":["dev"]}
/* ]]> */
</script>
</body>
</html>
`;



export const contactUs=[idLabInfo,idLabHtml,idLabCss,idLabJs,ikpInfo,ikpCode];