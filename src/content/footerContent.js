/* id Lab Footer */
const idLabFooterHtml = `
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
      Footer
      ============================-->
      <footer id="footer">
        <div class="container-fluid">
          <div class="row flex-row-reverse">
            <div id="footer-social" class="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-4">
				<!-- currently hardcoded values for sizes for now -->
				<a id="footer-linkedin" target="_blank" href="https://www.linkedin.com/company/depaul-innovation-lab/">
				<img src="/depaulidlab/www/wp-content/themes/idlabtheme/img/LI-In-Bug.png" style="width:30px;height:25px;">
				
				<a id="footer-facebook" target="_blank" href="https://www.facebook.com/depaulidlab">
				<img src="/depaulidlab/www/wp-content/themes/idlabtheme/img/f_logo_RGB-Blue_58.png" style="width:30px;height:30px;">
				
				<a id="footer-instagram" target="_blank" href="https://www.instagram.com/depaulidlab/">
				<img src="/depaulidlab/www/wp-content/themes/idlabtheme/img/glyph-logo_May2016.png" style="width:30px;height:30px;">
				<!-- <a id="footer-linkedin" href="https://www.linkedin.com/company/depaul-innovation-lab/">LinkedIn</a> -->
                <!-- <a id="footer-facebook" target="_blank" href="https://www.facebook.com/depaulidlab">Facebook</a> -->
                <!-- <a id="footer-instagram" target="_blank" href="https://www.instagram.com/depaulidlab/">Instagram</a> -->
            </div>
          </div>
          <br />
          <div class="row">
            <div id="footer-left" class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 d-flex flex-column justify-content-center pl-0">
              <a href="../">Home</a>
              <a href="../what-we-do">What we do</a>
              <a href="../our-team">Meet our team</a>
              <a href="../get-in-touch">Contact Us</a>
            </div>
            <div id="footer-middle" class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-6">
              <img src="/depaulidlab/www/wp-content/themes/idlabtheme/img/logo_iDLab.svg">
              <div id="footer-text" class="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-8">
                The idlab focuses on becoming the leading technology innovation lab across the nation and around the world through partnerships with companies and bringing their innovative ideas to life.
              </div>
            </div>
            <div id="footer-right" class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 d-flex flex-column justify-content-end">
              <div id="footer-address">243 S WABASH AVE, CHICAGO, IL 60604, 9TH FLOOR</div>
              <div id="footer-phone">(312) 362-1309</div>
              <div id="footer-email">depaulilab@gmail.com</div>
            </div>
          </div>
        </div>

        <br />
        <div class="container">
          <div class="credits">
                        &copy;2019 DePaul iD Lab. All Rights Reserved.<br>
            Developed by <a href="http://www.estefanytorres.com/">Estefany Torres</a> and Mahmoud Shehabeldin
          </div>
        </div>
      </footer><!-- #footer -->
	  
</body>	  
</html> 
`;
const idLabFooterCss = `
 /*----------------------------------------------------------------------------------------------------------------------
--------------------------------------------------- FOOTER -------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/

/* ------- LEADERSHIP SECTION ------- */
#business {
  background: #6FC5FF;
  padding: 0 50px
}
.business-container {
  padding: 0 20px !important;
  position: relative;
}
.business-box {
  padding: 45px 50px;
  margin: 47px 0;
  background: white;
  box-shadow: 0 0 15px rgba(33,33,33,.3);
}
.business-title {
  width: 90%;
}
.business-text {
  margin-top: 5%;
}
.btn-business {
  color: white;
  background-color: #1E222C;
  margin-top: 5%;
  padding-left: 25px !important;
  padding-right: 45px !important;
  padding: 2.5% 0;
  position: relative;
  color: white !important;
}
.btn-business span {
  position: absolute;
}

@media (max-width: 992px) {
  #business {
    padding: 0 10px
  }
  #business-left {
    margin-bottom: 0;
  }
}


/* ------- FOOTER ------- */
#footer {
  background: #1E222C;
  padding: 30px 5%;
  color: #fff;
  font-size: 14px;
}
#footer-social a {
  font-family: 'D-DIN Regular', serif;
  font-size: 10px;
  letter-spacing: .7px;
  line-height: 11px;
  color: white;
  margin: 0 8px;
}
#footer-left {
  border-right: 1px solid rgba(255, 255, 255, .32);
}
#footer-left a {
  font-family: 'D-DIN Regular', serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 15px;
  color: white;
  width: 100%;
  float: left;
  margin: 7px 0;
}
#footer-middle {
  padding: 5px 23px;
}
#footer-middle img {
  width: 51px;
  height: 51px;
}
#footer-text {
  font-family: 'D-DIN Regular', serif;
  font-size: 10px;
  letter-spacing: .7px;
  line-height: 18px;
  color: white;
  padding: 2% 0;
}
#footer-right {
  font-family: 'D-DIN Regular', serif;
  font-size: 9px;
  letter-spacing: .7px;
  line-height: 18px;
  padding-top: 75px;
  padding-left: 23px;
}
#footer .copyright {
  text-align: center;
}
#footer .credits {
  font-family: 'D-DIN Regular', serif;
  font-size: 9px;
  letter-spacing: .7px;
  line-height: 13px;
  padding-top: 10px;
  text-align: center;
  color: #ccc;
}

@media (max-width: 576px) {
  #footer-social {
    padding: 0;
  }
  #footer-social a {
    margin: 0 8px 0 0;
  }
  #footer-left {
    padding: 2% 3%;
    border-right: none;
  }
  #footer-middle {
    padding: 2% 0;
  }
  #footer-right {
    padding-top: 0;
    padding-left: 0;
  }
}
@media (max-width: 768px) and (min-width: 576px) {
  #footer-left {
    padding: 2%;
  }
  #footer-left a {
    margin-left: 0;
  }
  #footer-middle {
    padding-left: 23px;
  }
}
 `;
const idLabFooterJs = 'No JavaScript';



/* ODI Footer */
const odiFooterHtml=`
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
        
`;

const odiFooterCss=`
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

const odiFooterJs=`
No JavaScript
`;


/* Knowledge Portal */

const ikpFooterHtml=`
 <!--Footer-->
 <?php 
 $display_footer_widgets    = alchem_option('display_footer_widgets'); 
 $footer_columns            = alchem_option('footer_columns'); 
// $copyright_text            = alchem_option('copyright_text',''); 
 $tooltip_position          = alchem_option('footer_social_tooltip_position','top'); 
 $footer_special_effects    = alchem_option('footer_special_effects');
 $footer_class =  $footer_special_effects == 'footer_sticky'? 'fxd-footer':'';
 ?>
        <footer class="<?php echo $footer_class;?>">
        <?php if( $display_footer_widgets == 'yes' ):?>
            <div class="footer-widget-area">
                <div class="container alchem_display_footer_widgets">
                    <div class="row">
                    <?php 

					for( $i=1;$i<=$footer_columns; $i++ ){
					?>
                    <div class="col-md-<?php echo 12/$footer_columns; ?>">
                    <?php
							if(is_active_sidebar("footer_widget_".$i)){
	                           dynamic_sidebar("footer_widget_".$i);
                               }
							?>
                    </div>
                    
                    <?php }?>
                    </div>
                </div>
            </div>
            <?php endif; ?>
            
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
                 <?php echo alchem_get_social('footer','footer-sns', $tooltip_position);?>
                    <div class="clearfix"></div>
                    <?php 
					 wp_nav_menu(array('theme_location'=>'footer_menu','depth'=>1,'fallback_cb' =>false,'menu_class'=>'footer-links','link_before' => '', 'link_after' => '','items_wrap'=> '<ul id="%1$s" class="%2$s">%3$s</ul>'));
					?>

                    <div class="site-info" style="display:none;">
                    <?php printf(__('Powered by <a href="%s" target="_blank">WordPress</a>. Designed by <a href="%s" target="_blank">Magee Themes</a>.','alchem'),esc_url('http://wordpress.org/'),esc_url('http://www.mageewp.com/'));?>
                    </div>
                    
                </div>
                <div class="copyright">Copyright © 2019 iD-Lab. All Rights Reserved.</div>
            </div>          
        </footer>
    </div>  
    <?php wp_footer(); ?>
</body>
</html>
`;

const ikpFooterCss=`
CSS comes from the Wordpress theme and the page builder.
`;

const ikpFooterJs=`
No JavaScript
`;







export const idLabFooter=[idLabFooterHtml,idLabFooterCss,idLabFooterJs,odiFooterHtml,odiFooterCss,odiFooterJs];