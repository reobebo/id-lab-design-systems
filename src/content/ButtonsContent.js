/* ID Lab Content */
const idLabButtonHtml=`
<a id="business-left-btn" href="../contact-us" class="btn btn-business no-radius btn-arrow txt-box-btn">Get Involved<span class="la la-arrow-right left-sapce"></span></a>
`;
const idLabButtonCss=`
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
.txt-box-btn {
    font-family: 'D-DIN Regular', serif;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 13px;
}
.btn-arrow {
    position: relative;
    font-weight: bold;
}
`;


/* ODI Content */
const odiButtonHtml=`
<button type="button" class="btn btn-outline-blue btn-xl js-scroll-trigger text-uppercase" data-toggle="modal" data-target="#exampleModal">
Become a Sponsor
</button>
`;

const odiButtonCss=`
.text-uppercase {
    text-transform: uppercase !important;
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
`;



/* Knowledge Portal */
const ikpButtonHtml=`
<a href="https://depaulidlab.com/" target="_blank" class="fl-button" role="button" rel="noopener"><span class="fl-button-text">Connect</span></a>
`;

const ikpButtonCss=`

.fl-builder-content .fl-node-5e95dbfc66df7 a.fl-button, .fl-builder-content .fl-node-5e95dbfc66df7 a.fl-button:visited {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    text-align: center;
    border: 1px solid #006bd4;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
.fl-builder-content .fl-node-5e95dbfc66df7 a.fl-button, .fl-builder-content .fl-node-5e95dbfc66df7 a.fl-button:visited, .fl-builder-content .fl-node-5e95dbfc66df7 a.fl-button *, .fl-builder-content .fl-node-5e95dbfc66df7 a.fl-button:visited * {
    color: #ffffff;
}
.fl-builder-content .fl-node-5e95dbfc66df7 a.fl-button, .fl-builder-content .fl-node-5e95dbfc66df7 a.fl-button:hover, .fl-builder-content .fl-node-5e95dbfc66df7 a.fl-button:visited {
    background: #0077E0;
}
.fl-builder-content a.fl-button, .fl-builder-content a.fl-button:visited {
    background: #fafafa;
    border: 1px solid #ccc;
    color: #333;
}
.fl-builder-content a.fl-button, .fl-builder-content a.fl-button:visited {
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    display: inline-block;
    font-size: 16px;
    font-weight: normal;
    line-height: 18px;
    padding: 12px 24px;
    text-decoration: none;
    text-shadow: none;
}
`;


export const buttons=[idLabButtonHtml,idLabButtonCss,odiButtonHtml,odiButtonCss,ikpButtonHtml,ikpButtonCss];