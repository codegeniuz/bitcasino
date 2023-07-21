/*!
 * modernizr v3.3.1
 * Build https://modernizr.com/download?-backgroundsize-borderimage-borderradius-boxshadow-cssanimations-csstransforms-csstransforms3d-csstransitions-fontface-generatedcontent-inlinesvg-opacity-rgba-textshadow-touchevents-domprefixes-mq-prefixes-setclasses-shiv-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(e,t,n){var r=[],o=[],a={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){o.push({name:e,fn:t,options:n})},addAsyncTest:function(e){o.push({name:null,fn:e})}},i=function(){};i.prototype=a,i=new i;var s=a._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];function c(e,t){return typeof e===t}a._prefixes=s;var l=t.documentElement,d="svg"===l.nodeName.toLowerCase();d||function(e,t){var n,r,o=e.html5||{},a=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,s="_html5shiv",c=0,l={};function d(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function u(e){var t=l[e[s]];return t||(t={},c++,e[s]=c,l[c]=t),t}function f(e,n,o){return n||(n=t),r?n.createElement(e):(o||(o=u(n)),!(s=o.cache[e]?o.cache[e].cloneNode():i.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e)).canHaveChildren||a.test(e)||s.tagUrn?s:o.frag.appendChild(s));var s}function p(e){e||(e=t);var o=u(e);return!m.shivCSS||n||o.hasCSS||(o.hasCSS=!!function(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),r||function(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return m.shivMethods?f(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,(function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'}))+");return n}")(m,t.frag)}(e,o),e}!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,r=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){n=!0,r=!0}}();var m={elements:o.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==o.shivCSS,supportsUnknownElements:r,shivMethods:!1!==o.shivMethods,type:"default",shivDocument:p,createElement:f,createDocumentFragment:function(e,n){if(e||(e=t),r)return e.createDocumentFragment();for(var o=(n=n||u(e)).frag.cloneNode(),a=0,i=d(),s=i.length;a<s;a++)o.createElement(i[a]);return o},addElements:function(e,t){var n=m.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),m.elements=n+" "+e,p(t)}};e.html5=m,p(t),"object"==typeof module&&module.exports&&(module.exports=m)}(void 0!==e?e:this,t);var u="Moz O ms Webkit",f=a._config.usePrefixes?u.toLowerCase().split(" "):[];function p(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):d?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}a._domPrefixes=f,
/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
i.addTest("opacity",(function(){var e=p("a").style;return e.cssText=s.join("opacity:.55;"),/^0.55$/.test(e.opacity)})),
/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "https://css-tricks.com/rgba-browser-support/"
  }]
}
!*/
i.addTest("rgba",(function(){var e=p("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1})),
/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
i.addTest("inlinesvg",(function(){var e=p("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}));
/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/
var m="CSS"in e&&"supports"in e.CSS,h="supportsCSS"in e;function g(e,n,r,o){var a,i,s,c,u="modernizr",f=p("div"),m=function(){var e=t.body;return e||((e=p(d?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(s=p("div")).id=o?o[r]:u+(r+1),f.appendChild(s);return(a=p("style")).type="text/css",a.id="s"+u,(m.fake?m:f).appendChild(a),m.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=u,m.fake&&(m.style.background="",m.style.overflow="hidden",c=l.style.overflow,l.style.overflow="hidden",l.appendChild(m)),i=n(f,e),m.fake?(m.parentNode.removeChild(m),l.style.overflow=c,l.offsetHeight):f.parentNode.removeChild(f),!!i}i.addTest("supports",m||h);var v,y=(v=e.matchMedia||e.msMatchMedia)?function(e){var t=v(e);return t&&t.matches||!1}:function(t){var n=!1;return g("@media "+t+" { #modernizr { position: absolute; } }",(function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position})),n};a.mq=y;var b,x,C,S,w,T=a.testStyles=g;
/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/i.addTest("touchevents",(function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",s.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(r,(function(e){n=9===e.offsetTop}))}return n})),(b=navigator.userAgent,x=b.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),C=b.match(/w(eb)?osbrowser/gi),S=b.match(/windows phone/gi)&&b.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,w=x<533&&b.match(/android/gi),C||w||S)?i.addTest("fontface",!1):T('@font-face {font-family:"font";src:url("https://")}',(function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",s=/src/i.test(a)&&0===a.indexOf(n.split(" ")[0]);i.addTest("fontface",s)})),
/*!
{
  "name": "CSS Generated Content",
  "property": "generatedcontent",
  "tags": ["css"],
  "warnings": ["Android won't return correct height for anything below 7px #738"],
  "notes": [{
    "name": "W3C CSS Selectors Level 3 spec",
    "href": "https://www.w3.org/TR/css3-selectors/#gen-content"
  },{
    "name": "MDN article on :before",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  },{
    "name": "MDN article on :after",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  }]
}
!*/
T('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',(function(e){i.addTest("generatedcontent",e.offsetHeight>=7)}));var E=a._config.usePrefixes?u.split(" "):[];function z(e,t){return function(){return e.apply(t,arguments)}}a._cssomPrefixes=E;var k={elem:p("modernizr")};i._q.push((function(){delete k.elem}));var _={style:k.elem.style};function N(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function j(t,r,o,a){if(a=!c(a,"undefined")&&a,!c(o,"undefined")){var i=function(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(N(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+N(t[o])+":"+r+")");return g("@supports ("+(a=a.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"==getComputedStyle(e,null).position}))}return n}(t,o);if(!c(i,"undefined"))return i}for(var s,l,d,u,f,m=["modernizr","tspan","samp"];!_.style&&m.length;)s=!0,_.modElem=p(m.shift()),_.style=_.modElem.style;function h(){s&&(delete _.style,delete _.modElem)}for(d=t.length,l=0;l<d;l++)if(u=t[l],f=_.style[u],~(""+u).indexOf("-")&&(u=u.replace(/([a-z])-([a-z])/g,(function(e,t,n){return t+n.toUpperCase()})).replace(/^-/,"")),_.style[u]!==n){if(a||c(o,"undefined"))return h(),"pfx"!=r||u;try{_.style[u]=o}catch(e){}if(_.style[u]!=f)return h(),"pfx"!=r||u}return h(),!1}i._q.unshift((function(){delete _.style}));var P=a.testProp=function(e,t,r){return j([e],n,t,r)};
/*!
{
  "name": "CSS textshadow",
  "property": "textshadow",
  "caniuse": "css-textshadow",
  "tags": ["css"],
  "knownBugs": ["FF3.0 will false positive on this test"]
}
!*/function F(e,t,n,r,o){var a=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+E.join(a+" ")+a).split(" ");return c(t,"string")||c(t,"undefined")?j(i,t,r,o):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:c(r=t[e[o]],"function")?z(r,n||t):r;return!1}(i=(e+" "+f.join(a+" ")+a).split(" "),t,n)}function M(e,t,r){return F(e,n,n,t,r)}i.addTest("textshadow",P("textShadow","1px 1px")),a.testAllProps=F,a.testAllProps=M,
/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
i.addTest("cssanimations",M("animationName","a",!0)),
/*!
{
  "name": "Background Size",
  "property": "backgroundsize",
  "tags": ["css"],
  "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
  "notes": [{
    "name": "Related Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/396"
  }]
}
!*/
i.addTest("backgroundsize",M("backgroundSize","100%",!0)),
/*!
{
  "name": "Border Image",
  "property": "borderimage",
  "caniuse": "border-image",
  "polyfills": ["css3pie"],
   "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
  "tags": ["css"]
}
!*/
i.addTest("borderimage",M("borderImage","url() 1",!0)),
/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
i.addTest("borderradius",M("borderRadius","0px",!0)),
/*!
{
  "name": "Box Shadow",
  "property": "boxshadow",
  "caniuse": "css-boxshadow",
  "tags": ["css"],
  "knownBugs": [
    "WebOS false positives on this test.",
    "The Kindle Silk browser false positives"
  ]
}
!*/
i.addTest("boxshadow",M("boxShadow","1px 1px",!0)),
/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/
i.addTest("csstransforms",(function(){return-1===navigator.userAgent.indexOf("Android 2.")&&M("transform","scale(1)",!0)})),
/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/
i.addTest("csstransforms3d",(function(){var e=!!M("perspective","1px",!0),t=i._config.usePrefixes;if(e&&(!t||"webkitPerspective"in l.style)){var n;i.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),T("#modernizr{width:0;height:0}"+(n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),(function(t){e=7===t.offsetWidth&&18===t.offsetHeight}))}return e})),
/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
i.addTest("csstransitions",M("transition","all",!0)),function(){var e,t,n,a,s,l;for(var d in o)if(o.hasOwnProperty(d)){if(e=[],(t=o[d]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=c(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(l=e[s].split(".")).length?i[l[0]]=a:(!i[l[0]]||i[l[0]]instanceof Boolean||(i[l[0]]=new Boolean(i[l[0]])),i[l[0]][l[1]]=a),r.push((a?"":"no-")+l.join("-"))}}(),function(e){var t=l.className,n=i._config.classPrefix||"";if(d&&(t=t.baseVal),i._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}i._config.enableClasses&&(t+=" "+n+e.join(" "+n),d?l.className.baseVal=t:l.className=t)}(r),delete a.addTest,delete a.addAsyncTest;for(var R=0;R<i._q.length;R++)i._q[R]();e.Modernizr=i}(window,document);