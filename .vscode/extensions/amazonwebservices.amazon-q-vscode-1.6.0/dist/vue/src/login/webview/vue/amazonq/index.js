(()=>{var ie={1022:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>I});var i=o(9601),a=o.n(i),p=o(2609),E=o.n(p),m=E()(a());m.push([e.id,`
.selectable-item {
    margin-bottom: 10px;
    margin-top: 10px;
    cursor: pointer;
}
.logoIcon {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: flex-start;
    height: auto;
}
.hint {
    color: #c6c6c6;
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 10px;
    font-weight: 500;
}
.vscode-light .hint {
    color: #3d3a3a;
}
.vscode-dark .hint {
    color: #c6c6c6;
}
.auth-container {
    display: flex;
    flex-direction: column;
    /* Stretches our overall container to the whole screen */
    height: 100%;
    width: 260px;
    /* Centers all content in to middle of page since the height is the whole screen*/
    justify-content: center;
}
.header {
    font-size: 12px;
    font-weight: bold;
}
.header.vscode-dark {
    color: white;
}
.header.vscode-light {
    color: black;
}
.title {
    margin-bottom: 3px;
    margin-top: 3px;
    font-size: 11px;
    font-weight: 500;
}
.title.vscode-dark {
    color: white;
}
.title.vscode-light {
    color: black;
}
.subHeader {
    font-size: 10px;
}
.continue-button {
    background-color: var(--vscode-button-background);
    color: white;
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    margin-bottom: 3px;
    margin-top: 3px;
    cursor: pointer;
}
.back-button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--vscode-button-foreground);
    height: 13px;
    display: flex;
    align-items: center;
    padding-left: 0;
}
.back-button svg {
    margin-left: 0px;
}
.continue-button:disabled {
    background-color: var(--vscode-input-background);
    color: #6f6f6f;
    cursor: not-allowed;
}
.urlInput {
    background-color: var(--vscode-input-background);
    width: 244px;
    height: 28px;
    box-sizing: border-box;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: 13px;
    font-weight: 400;
}
body.vscode-light .urlInput {
    color: black;
}
body.vscode-dark .urlInput {
    color: #cccccc;
}
.iamInput {
    background-color: var(--vscode-input-background);
    width: 244px;
    height: 28px;
    box-sizing: border-box;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: 13px;
    font-weight: 400;
}
body.vscode-light .iamInput {
    color: black;
}
body.vscode-dark .iamInput {
    color: #cccccc;
}
.regionSelect {
    background-color: var(--vscode-input-background);
    width: 244px;
    margin-bottom: 5px;
    margin-top: 2px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: 13px;
    font-weight: 400;
}
body.vscode-light .regionSelect {
    color: black;
}
body.vscode-dark .regionSelect {
    color: #cccccc;
}
.start-url-error {
    color: #ff0000;
    font-size: 8px;
}
#logo {
    fill: var(--vscode-button-foreground);
}
body.vscode-dark #logo-text {
    fill: white;
}
body.vscode-light #logo-text {
    fill: #232f3e; /* squid ink */
}
.bottomMargin {
    margin-bottom: 12px;
}
.topMargin {
    margin-top: 12px;
}
.help-link,
.help-link__icon {
    align-items: center;
    display: flex;
}
.help-link,
.help-link__label {
    font-size: 10px;
    font-weight: 400;
    margin: 4px 0 0;
    text-decoration: none;
}
.help-link__icon {
    border-radius: 50%;
    border: 1px solid var(--vscode-textLink-foreground);
    font-size: 8px;
    height: 10px;
    justify-content: center;
    width: 10px;
}
.help-link__label {
    margin: 0;
    padding: 0 0 0 2px;
}
`,""]);const I=m},8639:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>I});var i=o(9601),a=o.n(i),p=o(2609),E=o.n(p),m=E()(a());m.push([e.id,`
#reauthenticate-container {
    display: flex;
    flex-direction: column;
    /* All items are centered vertically */
    justify-content: center;
    /* The full height of the screen */
    height: 100%;
    width: 100%;
}

/* Immediate children */
#reauthenticate-container > * {
    margin-bottom: 2rem;
}
#content-container {
    display: flex;
    flex-direction: column;
    /* All items are centered vertically */
    justify-content: space-between;
    /** The overall height of the container, then spacing is automatic between child elements */
    height: 7rem;
}
#content-container > * {
    display: flex;
    flex-direction: column;
    align-items: center;
}
#icon-container {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}
#text-container {
    display: flex;
    flex-direction: column;
}
#button-container {
    display: flex;
    flex-direction: column;
}
button#reauthenticate {
    cursor: pointer;
    background-color: var(--vscode-button-background);
    color: white;
    border-radius: 3px;
    border: none;
    padding: 0.3rem;
    width: 80%;
    user-select: none;
}
button#signout {
    cursor: pointer;
    color: var(--vscode-textLink-foreground);
    border: none;
    background: none;
    user-select: none;
}
button#cancel {
    background-color: var(--vscode-button-background);
    color: white;
    border-radius: 3px;
    border: none;
    padding: 0.3rem;
    width: 80%;
    font-weight: bold;
    margin-top: 15px;
    cursor: pointer;
}
#title {
    font-weight: bold;
}
#call-to-action {
    font-weight: normal;
}
#error-message {
    text-align: center;
}
`,""]);const I=m},2342:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>I});var i=o(9601),a=o.n(i),p=o(2609),E=o.n(p),m=E()(a());m.push([e.id,`
.body {
    /* The container takes up the entire height of the screen */
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* All items are centered horizontally */
    align-items: center;
}
`,""]);const I=m},8274:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>I});var i=o(9601),a=o.n(i),p=o(2609),E=o.n(p),m=E()(a());m.push([e.id,`
.item-container-base[data-v-a59a9812] {
    display: flex;
    border-width: 1px;
    border-style: solid;
    border-color: #625f5f;
    user-select: none;
    /* Some items do not have itemText, so we need a consistent height for all items */
    height: 50px;
}
.hovering[data-v-a59a9812] {
    border-color: #0e639c;
}
.selected[data-v-a59a9812] {
    border-color: #3675f4;
}
.title[data-v-a59a9812] {
    font-size: 12px;
    font-weight: bold;
}
.text[data-v-a59a9812] {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    justify-content: center;
}
.text.vscode-dark[data-v-a59a9812] {
    color: white;
}
.text.vscode-light[data-v-a59a9812] {
    color: black;
}
.icon[data-v-a59a9812] {
    padding-left: 8px;
    padding-right: 11px;
    display: flex;
    align-items: center;
}
.vscode-dark .icon .svg-path[data-v-a59a9812] {
    fill: white;
}
.vscode-light .icon .svg-path[data-v-a59a9812] {
    fill: black;
}
`,""]);const I=m},2609:e=>{"use strict";e.exports=function(l){var o=[];return o.toString=function(){return this.map(function(a){var p="",E=typeof a[5]<"u";return a[4]&&(p+="@supports (".concat(a[4],") {")),a[2]&&(p+="@media ".concat(a[2]," {")),E&&(p+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),p+=l(a),E&&(p+="}"),a[2]&&(p+="}"),a[4]&&(p+="}"),p}).join("")},o.i=function(a,p,E,m,I){typeof a=="string"&&(a=[[null,a,void 0]]);var R={};if(E)for(var D=0;D<this.length;D++){var A=this[D][0];A!=null&&(R[A]=!0)}for(var M=0;M<a.length;M++){var g=[].concat(a[M]);E&&R[g[0]]||(typeof I<"u"&&(typeof g[5]>"u"||(g[1]="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {").concat(g[1],"}")),g[5]=I),p&&(g[2]&&(g[1]="@media ".concat(g[2]," {").concat(g[1],"}")),g[2]=p),m&&(g[4]?(g[1]="@supports (".concat(g[4],") {").concat(g[1],"}"),g[4]=m):g[4]="".concat(m)),o.push(g))}},o}},9601:e=>{"use strict";e.exports=function(l){return l[1]}},4407:(e,l)=>{"use strict";var o;o={value:!0},l.Z=(i,a)=>{const p=i.__vccOpts||i;for(const[E,m]of a)p[E]=m;return p}},5548:(e,l,o)=>{var i=o(1022);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var a=o(4940).Z,p=a("7e540680",i,!1,{})},8098:(e,l,o)=>{var i=o(8639);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var a=o(4940).Z,p=a("4981bc69",i,!1,{})},3299:(e,l,o)=>{var i=o(2342);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var a=o(4940).Z,p=a("327640c6",i,!1,{})},8108:(e,l,o)=>{var i=o(8274);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var a=o(4940).Z,p=a("12756608",i,!1,{})},4940:(e,l,o)=>{"use strict";o.d(l,{Z:()=>z});function i(r,h){for(var _=[],u={},c=0;c<h.length;c++){var N=h[c],C=N[0],O=N[1],L=N[2],x=N[3],k={id:r+":"+c,css:O,media:L,sourceMap:x};u[C]?u[C].parts.push(k):_.push(u[C]={id:C,parts:[k]})}return _}var a=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p={},E=a&&(document.head||document.getElementsByTagName("head")[0]),m=null,I=0,R=!1,D=function(){},A=null,M="data-vue-ssr-id",g=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function z(r,h,_,u){R=_,A=u||{};var c=i(r,h);return H(c),function(C){for(var O=[],L=0;L<c.length;L++){var x=c[L],k=p[x.id];k.refs--,O.push(k)}C?(c=i(r,C),H(c)):c=[];for(var L=0;L<O.length;L++){var k=O[L];if(k.refs===0){for(var F=0;F<k.parts.length;F++)k.parts[F]();delete p[k.id]}}}}function H(r){for(var h=0;h<r.length;h++){var _=r[h],u=p[_.id];if(u){u.refs++;for(var c=0;c<u.parts.length;c++)u.parts[c](_.parts[c]);for(;c<_.parts.length;c++)u.parts.push($(_.parts[c]));u.parts.length>_.parts.length&&(u.parts.length=_.parts.length)}else{for(var N=[],c=0;c<_.parts.length;c++)N.push($(_.parts[c]));p[_.id]={id:_.id,refs:1,parts:N}}}}function Z(){var r=document.createElement("style");return r.type="text/css",E.appendChild(r),r}function $(r){var h,_,u=document.querySelector("style["+M+'~="'+r.id+'"]');if(u){if(R)return D;u.parentNode.removeChild(u)}if(g){var c=I++;u=m||(m=Z()),h=G.bind(null,u,c,!1),_=G.bind(null,u,c,!0)}else u=Z(),h=ee.bind(null,u),_=function(){u.parentNode.removeChild(u)};return h(r),function(C){if(C){if(C.css===r.css&&C.media===r.media&&C.sourceMap===r.sourceMap)return;h(r=C)}else _()}}var X=function(){var r=[];return function(h,_){return r[h]=_,r.filter(Boolean).join(`
`)}}();function G(r,h,_,u){var c=_?"":u.css;if(r.styleSheet)r.styleSheet.cssText=X(h,c);else{var N=document.createTextNode(c),C=r.childNodes;C[h]&&r.removeChild(C[h]),C.length?r.insertBefore(N,C[h]):r.appendChild(N)}}function ee(r,h){var _=h.css,u=h.media,c=h.sourceMap;if(u&&r.setAttribute("media",u),A.ssrId&&r.setAttribute(M,h.id),c&&(_+=`
/*# sourceURL=`+c.sources[0]+" */",_+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),r.styleSheet)r.styleSheet.cssText=_;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(_))}}}},J={};function b(e){var l=J[e];if(l!==void 0)return l.exports;var o=J[e]={id:e,exports:{}};return ie[e](o,o.exports,b),o.exports}b.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return b.d(l,{a:l}),l},b.d=(e,l)=>{for(var o in l)b.o(l,o)&&!b.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:l[o]})},b.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),b.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var K={};(()=>{"use strict";b.r(K);const e=Vue,l={class:"body",style:{height:"100vh"}};function o(t,n,f,S,T,w){const v=(0,e.resolveComponent)("Login"),s=(0,e.resolveComponent)("Reauthenticate");return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createCommentVNode)(" Body "),(0,e.createElementVNode)("div",l,[(0,e.createCommentVNode)(" Functionality "),t.authFlowState==="LOGIN"?((0,e.openBlock)(),(0,e.createBlock)(v,{key:0,app:t.app},null,8,["app"])):t.authFlowState==="REAUTHNEEDED"||t.authFlowState==="REAUTHENTICATING"?((0,e.openBlock)(),(0,e.createBlock)(s,{app:t.app,state:t.authFlowState,key:t.refreshKey},null,8,["app","state"])):(0,e.createCommentVNode)("v-if",!0)])],2112)}const i={class:"logoIcon bottomMargin"},a={key:0,width:"71",height:"71",viewBox:"0 0 71 71",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E=[(0,e.createStaticVNode)('<g clip-path="url(#clip0_331_37336)"><path d="M30.1307 1.46438L8.83068 13.7563C5.45818 15.7087 3.37256 19.3031 3.37256 23.2081V47.8067C3.37256 51.6969 5.45818 55.306 8.83068 57.2585L30.1307 69.5504C33.5032 71.5029 37.6596 71.5029 41.0321 69.5504L62.3321 57.2585C65.7046 55.306 67.7903 51.7117 67.7903 47.8067V23.2081C67.7903 19.3179 65.7046 15.7087 62.3321 13.7563L41.0321 1.46438C37.6596 -0.488125 33.5032 -0.488125 30.1307 1.46438Z" fill="url(#paint0_linear_331_37336)"></path><path d="M54.1966 21.6843L38.2364 12.469C37.5116 12.0401 36.5354 11.833 35.5739 11.833C34.6124 11.833 33.651 12.0401 32.9114 12.469L16.9512 21.6843C15.4868 22.5274 14.2887 24.5982 14.2887 26.2845V44.7149C14.2887 46.4011 15.4868 48.472 16.9512 49.3151L32.9114 58.5303C33.6362 58.9593 34.6124 59.1663 35.5739 59.1663C36.5354 59.1663 37.4968 58.9593 38.2364 58.5303L54.1966 49.3151C55.661 48.472 56.8591 46.4011 56.8591 44.7149V26.2845C56.8591 24.5982 55.661 22.5274 54.1966 21.6843ZM36.0029 54.7141C36.0029 54.7141 35.7958 54.7584 35.5887 54.7584C35.3816 54.7584 35.2337 54.7288 35.1745 54.7141L19.1699 45.4693C19.0072 45.3213 18.8002 44.9515 18.7558 44.7445V26.2549C18.8002 26.0478 19.022 25.678 19.1699 25.5301L35.1745 16.2853C35.1745 16.2853 35.3816 16.2409 35.5887 16.2409C35.7958 16.2409 35.9437 16.2705 36.0029 16.2853L52.0075 25.5301C52.1702 25.678 52.3772 26.0478 52.4216 26.2549V42.6588L40.0262 35.4997V33.5472C40.0262 33.1626 39.8191 32.8224 39.4937 32.6301L36.1212 30.6776C35.9585 30.5888 35.7662 30.5297 35.5887 30.5297C35.4112 30.5297 35.2189 30.574 35.0562 30.6776L31.6837 32.6301C31.3583 32.8224 31.1512 33.1774 31.1512 33.5472V37.4374C31.1512 37.822 31.3583 38.1622 31.6837 38.3545L35.0562 40.307C35.2189 40.3957 35.4112 40.4549 35.5887 40.4549C35.7662 40.4549 35.9585 40.4105 36.1212 40.307L37.8074 39.3307L50.2029 46.4899L36.0029 54.6845V54.7141Z" fill="white"></path></g><defs><linearGradient id="paint0_linear_331_37336" x1="64.1515" y1="-5.31021" x2="10.5465" y2="71.2515" gradientUnits="userSpaceOnUse"><stop stop-color="#A7F8FF"></stop><stop offset="0.03" stop-color="#9DF1FF"></stop><stop offset="0.08" stop-color="#84E1FF"></stop><stop offset="0.15" stop-color="#5AC7FF"></stop><stop offset="0.22" stop-color="#21A2FF"></stop><stop offset="0.26" stop-color="#008DFF"></stop><stop offset="0.66" stop-color="#7F33FF"></stop><stop offset="0.99" stop-color="#39127D"></stop></linearGradient><clipPath id="clip0_331_37336"><rect width="71" height="71" fill="white"></rect></clipPath></defs>',2)],m={key:1,width:"100",height:"80",viewBox:"0 0 54 40",fill:"none",id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"},A=[(0,e.createElementVNode)("path",{id:"logo-text",d:"M14.09,10.85a4.7,4.7,0,0,0,.19,1.48,7.73,7.73,0,0,0,.54,1.19.77.77,0,0,1,.12.38.64.64,0,0,1-.32.49l-1,.7a.83.83,0,0,1-.44.15.69.69,0,0,1-.49-.23,3.8,3.8,0,0,1-.6-.77q-.25-.42-.51-1a6.14,6.14,0,0,1-4.89,2.3,4.54,4.54,0,0,1-3.32-1.19,4.27,4.27,0,0,1-1.22-3.2A4.28,4.28,0,0,1,3.61,7.75,6.06,6.06,0,0,1,7.69,6.46a12.47,12.47,0,0,1,1.76.13q.92.13,1.91.36V5.73a3.65,3.65,0,0,0-.79-2.66A3.81,3.81,0,0,0,7.86,2.3a7.71,7.71,0,0,0-1.79.22,12.78,12.78,0,0,0-1.79.57,4.55,4.55,0,0,1-.58.22l-.26,0q-.35,0-.35-.52V2a1.09,1.09,0,0,1,.12-.58,1.2,1.2,0,0,1,.47-.35A10.88,10.88,0,0,1,5.77.32,10.19,10.19,0,0,1,8.36,0a6,6,0,0,1,4.35,1.35,5.49,5.49,0,0,1,1.38,4.09ZM7.34,13.38a5.36,5.36,0,0,0,1.72-.31A3.63,3.63,0,0,0,10.63,12,2.62,2.62,0,0,0,11.19,11a5.63,5.63,0,0,0,.16-1.44v-.7a14.35,14.35,0,0,0-1.53-.28,12.37,12.37,0,0,0-1.56-.1,3.84,3.84,0,0,0-2.47.67A2.34,2.34,0,0,0,5,11a2.35,2.35,0,0,0,.61,1.76A2.4,2.4,0,0,0,7.34,13.38Zm13.35,1.8a1,1,0,0,1-.64-.16,1.3,1.3,0,0,1-.35-.65L15.81,1.51a3,3,0,0,1-.15-.67.36.36,0,0,1,.41-.41H17.7a1,1,0,0,1,.65.16,1.4,1.4,0,0,1,.33.65l2.79,11,2.59-11A1.17,1.17,0,0,1,24.39.6a1.1,1.1,0,0,1,.67-.16H26.4a1.1,1.1,0,0,1,.67.16,1.17,1.17,0,0,1,.32.65L30,12.39,32.88,1.25A1.39,1.39,0,0,1,33.22.6a1,1,0,0,1,.65-.16h1.54a.36.36,0,0,1,.41.41,1.36,1.36,0,0,1,0,.26,3.64,3.64,0,0,1-.12.41l-4,12.86a1.3,1.3,0,0,1-.35.65,1,1,0,0,1-.64.16H29.25a1,1,0,0,1-.67-.17,1.26,1.26,0,0,1-.32-.67L25.67,3.64,23.11,14.34a1.26,1.26,0,0,1-.32.67,1,1,0,0,1-.67.17Zm21.36.44a11.28,11.28,0,0,1-2.56-.29,7.44,7.44,0,0,1-1.92-.67,1,1,0,0,1-.61-.93v-.84q0-.52.38-.52a.9.9,0,0,1,.31.06l.42.17a8.77,8.77,0,0,0,1.83.58,9.78,9.78,0,0,0,2,.2,4.48,4.48,0,0,0,2.43-.55,1.76,1.76,0,0,0,.86-1.57,1.61,1.61,0,0,0-.45-1.16A4.29,4.29,0,0,0,43,9.22l-2.41-.76A5.15,5.15,0,0,1,38,6.78a3.94,3.94,0,0,1-.83-2.41,3.7,3.7,0,0,1,.45-1.85,4.47,4.47,0,0,1,1.19-1.37A5.27,5.27,0,0,1,40.51.29,7.4,7.4,0,0,1,42.6,0a8.87,8.87,0,0,1,1.12.07q.57.07,1.08.19t.95.26a4.27,4.27,0,0,1,.7.29,1.59,1.59,0,0,1,.49.41.94.94,0,0,1,.15.55v.79q0,.52-.38.52a1.76,1.76,0,0,1-.64-.2,7.74,7.74,0,0,0-3.2-.64,4.37,4.37,0,0,0-2.21.47,1.6,1.6,0,0,0-.79,1.48,1.58,1.58,0,0,0,.49,1.18,4.94,4.94,0,0,0,1.83.92L44.55,7a5.08,5.08,0,0,1,2.57,1.6A3.76,3.76,0,0,1,47.9,11a4.21,4.21,0,0,1-.44,1.93,4.4,4.4,0,0,1-1.21,1.47,5.43,5.43,0,0,1-1.85.93A8.25,8.25,0,0,1,42.05,15.62Z"},null,-1),(0,e.createElementVNode)("path",{fill:"#FF9900",class:"cls-1",d:"M45.19,23.81C39.72,27.85,31.78,30,25,30A36.64,36.64,0,0,1,.22,20.57c-.51-.46-.06-1.09.56-.74A49.78,49.78,0,0,0,25.53,26.4,49.23,49.23,0,0,0,44.4,22.53C45.32,22.14,46.1,23.14,45.19,23.81Z"},null,-1),(0,e.createElementVNode)("path",{fill:"#FF9900",class:"cls-1",d:"M47.47,21.21c-.7-.9-4.63-.42-6.39-.21-.53.06-.62-.4-.14-.74,3.13-2.2,8.27-1.57,8.86-.83s-.16,5.89-3.09,8.35c-.45.38-.88.18-.68-.32C46.69,25.8,48.17,22.11,47.47,21.21Z"},null,-1)],g=[(0,e.createElementVNode)("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,e.createElementVNode)("path",{d:"M4.98667 0.0933332L5.73333 0.786666L1.57333 4.94667H12.0267V5.96H1.57333L5.73333 10.0667L4.98667 10.8133L0.0266666 5.8V5.10667L4.98667 0.0933332Z",fill:"#21A2FF"})],-1)],z={class:"auth-container-section"},H={key:0,class:"existing-logins"},Z=(0,e.createElementVNode)("div",{class:"header bottomMargin"},"Connect with an existing account:",-1),$=(0,e.createElementVNode)("div",{class:"header"},"Or, choose a sign-in option:",-1),X={key:1,class:"header bottomMargin"},G=["disabled"],r=[(0,e.createElementVNode)("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,e.createElementVNode)("path",{d:"M4.98667 0.0933332L5.73333 0.786666L1.57333 4.94667H12.0267V5.96H1.57333L5.73333 10.0667L4.98667 10.8133L0.0266666 5.8V5.10667L4.98667 0.0933332Z",fill:"#21A2FF"})],-1)],h={class:"auth-container-section"},_={class:"header bottomMargin"},u=(0,e.createElementVNode)("br",null,null,-1),C=[(0,e.createElementVNode)("span",{class:"help-link__icon"},"?",-1),(0,e.createElementVNode)("span",{class:"help-link__label"},"Need help signing in?",-1)],O={key:0,class:"code-catalyst-login"},L=(0,e.createElementVNode)("div",{style:{"margin-bottom":"4px"}},null,-1),x={class:"subHeader"},k=(0,e.createElementVNode)("div",{class:"title topMargin"},"Start URL",-1),F=(0,e.createElementVNode)("div",{class:"hint"},"Provided by your admin or help desk",-1),se={class:"start-url-error"},ae=(0,e.createElementVNode)("div",{class:"title topMargin"},"Region",-1),re=(0,e.createElementVNode)("div",{class:"hint"},"AWS Region that hosts identity directory",-1),le=["value"],de=["disabled"],ce={key:2,class:"auth-container-section"},pe={key:0,class:"header bottomMargin"},ue={key:1,class:"header bottomMargin"},_e=[(0,e.createElementVNode)("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,e.createElementVNode)("path",{d:"M4.98667 0.0933332L5.73333 0.786666L1.57333 4.94667H12.0267V5.96H1.57333L5.73333 10.0667L4.98667 10.8133L0.0266666 5.8V5.10667L4.98667 0.0933332Z",fill:"#21A2FF"})],-1)],he=(0,e.createElementVNode)("div",{class:"header"},"IAM Credentials:",-1),ge=(0,e.createElementVNode)("div",{class:"hint"},"Credentials will be added to the appropriate ~/.aws/ files",-1),me=(0,e.createElementVNode)("div",{class:"title topMargin"},"Profile Name",-1),ve=(0,e.createElementVNode)("div",{class:"hint"},"The identifier for these credentials",-1),fe=(0,e.createElementVNode)("div",{class:"title"},"Access Key",-1),Ce=(0,e.createElementVNode)("div",{class:"title"},"Secret Key",-1),Ee=["disabled"];function ye(t,n,f,S,T,w){const v=(0,e.resolveComponent)("SelectableItem");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)([[t.disabled?"disabled-form":""],"auth-container"]),onClick:n[20]||(n[20]=(...s)=>t.handleDocumentClick&&t.handleDocumentClick(...s))},[(0,e.createElementVNode)("div",i,[(0,e.createCommentVNode)(" Icon "),t.app==="AMAZONQ"&&t.stage!=="CONNECTED"?((0,e.openBlock)(),(0,e.createElementBlock)("svg",a,E)):(0,e.createCommentVNode)("v-if",!0),t.app==="TOOLKIT"&&t.stage!=="CONNECTED"?((0,e.openBlock)(),(0,e.createElementBlock)("svg",m,A)):(0,e.createCommentVNode)("v-if",!0)]),t.stage==="START"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:0},[t.app==="TOOLKIT"?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:0,class:"back-button bottomMargin",onClick:n[0]||(n[0]=(...s)=>t.handleBackButtonClick&&t.handleBackButtonClick(...s))},g)):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("div",z,[t.existingLogins.length>0?((0,e.openBlock)(),(0,e.createElementBlock)("div",H,[Z,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.existingLogins,(s,V)=>((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:V},[(0,e.createVNode)(v,{onToggle:t.toggleItemSelection,isSelected:t.selectedLoginOption===t.LoginOption.EXISTING_LOGINS+V,itemId:t.LoginOption.EXISTING_LOGINS+V,itemText:s.text,itemTitle:s.title,itemType:s.type,class:"selectable-item bottomMargin"},null,8,["onToggle","isSelected","itemId","itemText","itemTitle","itemType"])]))),128)),$])):(0,e.createCommentVNode)("v-if",!0),t.existingLogins.length==0?((0,e.openBlock)(),(0,e.createElementBlock)("div",X,"Choose a sign-in option:")):(0,e.createCommentVNode)("v-if",!0),t.app==="AMAZONQ"?((0,e.openBlock)(),(0,e.createBlock)(v,{key:2,onToggle:t.toggleItemSelection,isSelected:t.selectedLoginOption===t.LoginOption.BUILDER_ID,itemId:t.LoginOption.BUILDER_ID,itemText:"No AWS account required",itemTitle:"Use For Free",itemType:t.LoginOption.BUILDER_ID,class:"selectable-item bottomMargin"},null,8,["onToggle","isSelected","itemId","itemType"])):(0,e.createCommentVNode)("v-if",!0),t.app==="AMAZONQ"?((0,e.openBlock)(),(0,e.createBlock)(v,{key:3,onToggle:t.toggleItemSelection,isSelected:t.selectedLoginOption===t.LoginOption.ENTERPRISE_SSO,itemId:t.LoginOption.ENTERPRISE_SSO,itemText:"",itemTitle:"Use with Pro license",itemType:t.LoginOption.ENTERPRISE_SSO,class:"selectable-item bottomMargin"},null,8,["onToggle","isSelected","itemId","itemType"])):(0,e.createCommentVNode)("v-if",!0),t.app==="TOOLKIT"?((0,e.openBlock)(),(0,e.createBlock)(v,{key:4,onToggle:t.toggleItemSelection,isSelected:t.selectedLoginOption===t.LoginOption.ENTERPRISE_SSO,itemId:t.LoginOption.ENTERPRISE_SSO,itemText:"Sign in to AWS with single sign-on",itemTitle:"Workforce",itemType:t.LoginOption.ENTERPRISE_SSO,class:"selectable-item bottomMargin"},null,8,["onToggle","isSelected","itemId","itemType"])):(0,e.createCommentVNode)("v-if",!0),t.app==="TOOLKIT"?((0,e.openBlock)(),(0,e.createBlock)(v,{key:5,onToggle:t.toggleItemSelection,isSelected:t.selectedLoginOption===t.LoginOption.IAM_CREDENTIAL,itemId:t.LoginOption.IAM_CREDENTIAL,itemText:"Store keys for use with AWS CLI tools",itemTitle:"IAM Credentials",itemType:t.LoginOption.IAM_CREDENTIAL,class:"selectable-item bottomMargin"},null,8,["onToggle","isSelected","itemId","itemType"])):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("button",{class:"continue-button",disabled:t.selectedLoginOption===0,onClick:n[1]||(n[1]=s=>t.handleContinueClick())}," Continue ",8,G)])],64)):(0,e.createCommentVNode)("v-if",!0),t.stage==="SSO_FORM"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:1},[(0,e.createElementVNode)("button",{class:"back-button bottomMargin",onClick:n[2]||(n[2]=(...s)=>t.handleBackButtonClick&&t.handleBackButtonClick(...s))},r),(0,e.createElementVNode)("div",h,[(0,e.createElementVNode)("div",_,[(0,e.createTextVNode)(" Sign in with AWS IAM Identity Center:"),u,t.app==="AMAZONQ"?((0,e.openBlock)(),(0,e.createElementBlock)("a",{key:0,class:"help-link",href:"https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/q-in-IDE-setup.html#q-in-IDE-setup-pro-auth",onClick:n[3]||(n[3]=(...s)=>t.handleHelpLinkClick&&t.handleHelpLinkClick(...s))},C)):(0,e.createCommentVNode)("v-if",!0)]),t.app==="TOOLKIT"?((0,e.openBlock)(),(0,e.createElementBlock)("div",O,[L,(0,e.createElementVNode)("div",x,[(0,e.createTextVNode)(" Using CodeCatalyst with AWS Builder ID? "),(0,e.createElementVNode)("a",{href:"#",onClick:n[4]||(n[4]=s=>t.handleCodeCatalystSignin())},"Skip to sign-in")])])):(0,e.createCommentVNode)("v-if",!0),k,F,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"urlInput",type:"text",id:"startUrl",name:"startUrl",onInput:n[5]||(n[5]=(...s)=>t.handleUrlInput&&t.handleUrlInput(...s)),"onUpdate:modelValue":n[6]||(n[6]=s=>t.startUrl=s),onKeydown:n[7]||(n[7]=(0,e.withKeys)(s=>t.handleContinueClick(),["enter"]))},null,544),[[e.vModelText,t.startUrl]]),(0,e.createElementVNode)("h4",se,(0,e.toDisplayString)(t.startUrlError),1),ae,re,(0,e.withDirectives)((0,e.createElementVNode)("select",{class:"regionSelect",id:"regions",name:"regions","onUpdate:modelValue":n[8]||(n[8]=s=>t.selectedRegion=s),onChange:n[9]||(n[9]=s=>t.handleRegionInput(s))},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.regions,s=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{key:s.id,value:s.id},(0,e.toDisplayString)(`${s.name} (${s.id})`),9,le))),128))],544),[[e.vModelSelect,t.selectedRegion]]),(0,e.createElementVNode)("button",{class:"continue-button topMargin",disabled:t.shouldDisableSsoContinue(),onClick:n[10]||(n[10]=s=>t.handleContinueClick())}," Continue ",8,de)])],64)):(0,e.createCommentVNode)("v-if",!0),t.stage==="AUTHENTICATING"?((0,e.openBlock)(),(0,e.createElementBlock)("div",ce,[t.app==="TOOLKIT"&&t.profileName.length>0?((0,e.openBlock)(),(0,e.createElementBlock)("div",pe," Connecting to IAM... ")):((0,e.openBlock)(),(0,e.createElementBlock)("div",ue,"Authenticating in browser...")),(0,e.createElementVNode)("button",{class:"continue-button",onClick:n[11]||(n[11]=s=>t.handleCancelButton()),style:{color:"#6f6f6f","background-color":"var(--vscode-input-background)"}}," Cancel ")])):(0,e.createCommentVNode)("v-if",!0),t.stage==="CONNECTED"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:3},[],64)):(0,e.createCommentVNode)("v-if",!0),t.stage==="AWS_PROFILE"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:4},[(0,e.createElementVNode)("button",{class:"back-button bottomMargin",onClick:n[12]||(n[12]=(...s)=>t.handleBackButtonClick&&t.handleBackButtonClick(...s))},_e),he,ge,me,ve,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"iamInput bottomMargin",type:"text",id:"profileName",name:"profileName","onUpdate:modelValue":n[13]||(n[13]=s=>t.profileName=s),onKeydown:n[14]||(n[14]=(0,e.withKeys)(s=>t.handleContinueClick(),["enter"]))},null,544),[[e.vModelText,t.profileName]]),fe,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"iamInput bottomMargin",type:"text",id:"accessKey",name:"accessKey","onUpdate:modelValue":n[15]||(n[15]=s=>t.accessKey=s),onKeydown:n[16]||(n[16]=(0,e.withKeys)(s=>t.handleContinueClick(),["enter"]))},null,544),[[e.vModelText,t.accessKey]]),Ce,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"iamInput bottomMargin",type:"text",id:"secretKey",name:"secretKey","onUpdate:modelValue":n[17]||(n[17]=s=>t.secretKey=s),onKeydown:n[18]||(n[18]=(0,e.withKeys)(s=>t.handleContinueClick(),["enter"]))},null,544),[[e.vModelText,t.secretKey]]),(0,e.createElementVNode)("button",{class:"continue-button",disabled:t.shouldDisableIamContinue(),onClick:n[19]||(n[19]=s=>t.handleContinueClick())}," Continue ",8,Ee)],64)):(0,e.createCommentVNode)("v-if",!0)],2)}const j=t=>((0,e.pushScopeId)("data-v-a59a9812"),t=t(),(0,e.popScopeId)(),t),be={class:"icon"},Ie={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Se=[j(()=>(0,e.createElementVNode)("path",{class:"svg-path","fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 2C6.68228 2 5.61 3.07228 5.61 4.39C5.61 5.70772 6.68228 6.78 8 6.78C9.31771 6.78 10.39 5.70772 10.39 4.39C10.39 3.07228 9.31772 2 8 2ZM3.61 4.39C3.61 1.96772 5.57771 0 8 0C10.4223 0 12.39 1.96771 12.39 4.39C12.39 5.66447 11.8453 6.81311 10.9762 7.61551C11.1666 7.71116 11.3535 7.81608 11.5368 7.93001C13.5215 9.15787 15 11.3598 15 14V15H1V14C1 11.147 2.63919 8.7213 4.99701 7.59061C4.14356 6.78943 3.61 5.65134 3.61 4.39ZM10.482 9.62922C9.71501 9.15233 8.88729 8.90797 8.00229 8.91L8 8.91C5.59623 8.91 3.5507 10.634 3.09474 13H12.8975C12.601 11.5742 11.6867 10.3744 10.484 9.63047L10.482 9.62922Z"},null,-1))],Te={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne=[j(()=>(0,e.createElementVNode)("path",{class:"svg-path","fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3C3.44772 3 3 3.44772 3 4C3 4.55229 3.44772 5 4 5C4.55228 5 5 4.55229 5 4C5 3.44772 4.55228 3 4 3ZM1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4C7 5.65676 5.65701 6.99984 4.00029 7C6.21244 7.00016 8 8.78781 8 11C8 8.78772 9.78771 7 12 7C14.2123 7 16 8.78772 16 11V14C16 14.5523 15.5523 15 15 15H9C8.44771 15 8 14.5523 8 14C8 14.5523 7.55228 15 7 15H1C0.447715 15 0 14.5523 0 14V11C0 8.78772 1.78801 7 4.00029 7C2.34344 7 1 5.65685 1 4ZM12 7C10.3431 7 9 5.65685 9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4C15 5.65685 13.6569 7 12 7ZM11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4C13 4.55229 12.5523 5 12 5C11.4477 5 11 4.55229 11 4ZM10 11C10 9.89228 10.8923 9 12 9C13.1077 9 14 9.89228 14 11V13H10V11ZM2 11C2 9.89228 2.89228 9 4 9C5.10772 9 6 9.89228 6 11V13H2V11Z"},null,-1))],ke={key:2,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Le=[j(()=>(0,e.createElementVNode)("path",{class:"svg-path","fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.0042 11C10.0042 11.009 10.002 11.0325 9.99974 11.0548L9.99979 11.0502L10 11L10 10.9993L9.99997 11L9.995 11.1L9.99652 11.0855L9.99974 11.0548C9.978 13.1703 8.62586 15.046 6.62064 15.7331C4.59789 16.4261 2.3583 15.7562 1.0483 14.0663C-0.261694 12.3764 -0.352147 10.0406 0.823246 8.25441C1.89701 6.62271 3.81005 5.77972 5.71121 6.05367L12.3412 0.24769C12.5235 0.0880192 12.7576 0 13 0H15C15.5523 0 16 0.447715 16 1V6C16 6.55228 15.5523 7 15 7H14V8C14 8.55229 13.5523 9 13 9H12V10C12 10.5523 11.5523 11 11 11H10.0042ZM13.376 2L6.65881 7.88231C6.41017 8.10005 6.07001 8.18087 5.75 8.09825C4.50783 7.77752 3.19918 8.28216 2.49395 9.35384C1.78871 10.4255 1.84298 11.827 2.62898 12.841C3.41498 13.8549 4.75873 14.2569 5.97239 13.841C7.18604 13.4252 8.00096 12.2837 8 11.0007L8.00502 10.9C8.03175 10.634 8.03175 10.366 8.00502 10.1C7.94583 9.51115 8.40818 9 9 9H10V8C10 7.44772 10.4477 7 11 7H12V6C12 5.44772 12.4477 5 13 5H14V2H13.376ZM6 10H4V12H6V10Z"},null,-1))],we={class:"text"},Ae={class:"title"},Me={key:0,class:"p"};function Oe(t,n,f,S,T,w){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)(["item-container-base",{selected:t.isSelected,hovering:t.isHovering}]),tabindex:"0",onClick:n[0]||(n[0]=(...v)=>t.toggleSelection&&t.toggleSelection(...v)),onKeydown:n[1]||(n[1]=(0,e.withKeys)((...v)=>t.toggleSelection&&t.toggleSelection(...v),["enter"])),onMouseover:n[2]||(n[2]=v=>t.isHovering=!0),onMouseout:n[3]||(n[3]=v=>t.isHovering=!1)},[(0,e.createElementVNode)("div",be,[t.itemType===t.LoginOption.BUILDER_ID?((0,e.openBlock)(),(0,e.createElementBlock)("svg",Ie,Se)):(0,e.createCommentVNode)("v-if",!0),t.itemType===t.LoginOption.ENTERPRISE_SSO?((0,e.openBlock)(),(0,e.createElementBlock)("svg",Te,Ne)):(0,e.createCommentVNode)("v-if",!0),t.itemType===t.LoginOption.IAM_CREDENTIAL?((0,e.openBlock)(),(0,e.createElementBlock)("svg",ke,Le)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",we,[(0,e.createElementVNode)("div",Ae,(0,e.toDisplayString)(t.itemTitle),1),t.itemText?((0,e.openBlock)(),(0,e.createElementBlock)("div",Me,(0,e.toDisplayString)(t.itemText),1)):(0,e.createCommentVNode)("v-if",!0)])],34)}const ct={TOOLKIT:"TOOLKIT",AMAZONQ:"AMAZONQ"},pt={LOGIN:"LOGIN",REAUTHNEEDED:"REAUTHNEEDED",REAUTHENTICATING:"REAUTHENTICATING"};var y=(t=>(t[t.NONE=0]="NONE",t[t.BUILDER_ID=1]="BUILDER_ID",t[t.ENTERPRISE_SSO=2]="ENTERPRISE_SSO",t[t.IAM_CREDENTIAL=3]="IAM_CREDENTIAL",t[t.EXISTING_LOGINS=4]="EXISTING_LOGINS",t))(y||{});const ut="userCancelled",Be=(0,e.defineComponent)({name:"SelectableItem",components:{},props:{itemId:Number,itemText:String,itemTitle:String,itemType:Number,isSelected:Boolean,isHovering:Boolean},data(){return{itemId:this.itemId,itemTitle:this.itemTitle,itemText:this.itemText,isSelected:this.isSelected,isHovering:!1,LoginOption:y}},async created(){},methods:{toggleSelection(){this.$emit("toggle",this.itemId)}}});var _t=b(8108),W=b(4407);const Ve=(0,W.Z)(Be,[["render",Oe],["__scopeId","data-v-a59a9812"]]);class U{static registerGlobalCommands(){const n=new Event("remount");window.addEventListener("message",f=>{const{command:S}=f.data;S==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(T=>this.removeListener(T)),window.dispatchEvent(n))})}static addListener(n){this.messageListeners.add(n),window.addEventListener("message",n)}static removeListener(n){this.messageListeners.delete(n),window.removeEventListener("message",n)}static sendRequest(n,f,S){const T=JSON.parse(JSON.stringify(S)),w=new Promise((v,s)=>{const V=it=>{const P=it.data;if(n===P.id)if(this.removeListener(V),window.clearTimeout(ot),P.error===!0){const st=JSON.parse(P.data);s(new Error(st.message))}else P.event?(typeof S[0]!="function"&&s(new Error(`Expected frontend event handler to be a function: ${f}`)),v(this.registerEventHandler(f,S[0]))):v(P.data)},ot=setTimeout(()=>{this.removeListener(V),s(new Error(`Timed out while waiting for response: id: ${n}, command: ${f}`))},3e5);this.addListener(V)});return vscode.postMessage({id:n,command:f,data:T}),w}static registerEventHandler(n,f){const S=T=>{const w=T.data;if(w.command===n){if(!w.event)throw new Error(`Expected backend handler to be an event emitter: ${n}`);f(w.data)}};return this.addListener(S),{dispose:()=>this.removeListener(S)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(n,f)=>{if(typeof f!="string"){console.warn(`Tried to index webview client with non-string property: ${String(f)}`);return}if(f==="init"){const T=vscode.getState()??{};if(T.__once)return()=>Promise.resolve();vscode.setState(Object.assign(T,{__once:!0}))}const S=(this.counter++).toString();return(...T)=>this.sendRequest(S,f,T)}})}}U.counter=0,U.initialized=!1,U.messageListeners=new Set;const d=U.create();function Re(t){return/^(https?:\/\/(.+)\.awsapps\.com\/start|https?:\/\/identitycenter\.amazonaws\.com\/ssoins-[\da-zA-Z]{16})$/.test(t)}function te(t){return t==="https://view.awsapps.com/start"}function De(t){switch(t){case y.BUILDER_ID:return"awsId";case y.ENTERPRISE_SSO:return"iamIdentityCenter";case y.IAM_CREDENTIAL:return"sharedCredentials";default:return}}const Ue={[y.BUILDER_ID]:"auth_builderIdOption",[y.ENTERPRISE_SSO]:"auth_idcOption",[y.IAM_CREDENTIAL]:"auth_credentialsOption",[y.EXISTING_LOGINS]:"auth_existingAuthOption"};function xe(t){return Ue[t]}const Fe=(0,e.defineComponent)({name:"Login",components:{SelectableItem:Ve},props:{disabled:{type:Boolean,default:!1},app:{type:String,default:"",required:!0}},data(){return{existingLogins:[],selectedLoginOption:y.NONE,stage:"START",regions:[],startUrlError:"",selectedRegion:"us-east-1",startUrl:"",app:this.app,LoginOption:y,profileName:"",accessKey:"",secretKey:""}},async created(){this.startUrl=await this.getDefaultStartUrl(),await this.emitUpdate("created")},mounted(){this.fetchRegions(),this.updateExistingConnections(),d.resetStoredMetricMetadata()},methods:{toggleItemSelection(t){this.selectedLoginOption=t,d.storeMetricMetadata({credentialSourceId:De(t)});const n=xe(t);n!==void 0&&d.emitUiClick(n)},handleDocumentClick(t){t.target.closest(".selectable-item")||(this.selectedLoginOption=0)},async handleBackButtonClick(){this.stage==="START"?(d.emitUiClick("auth_toolkitCloseButton"),d.quitLoginScreen()):(await d.storeMetricMetadata({isReAuth:!1,result:"Cancelled"}),d.emitAuthMetric(),d.emitUiClick("auth_backButton"),this.stage="START")},async handleContinueClick(){if(this.stage==="START")if(this.selectedLoginOption===y.BUILDER_ID){this.stage="AUTHENTICATING";const t=await d.startBuilderIdSetup(this.app);t?(this.stage="START",d.errorNotification(t)):this.stage="CONNECTED"}else if(this.selectedLoginOption===y.ENTERPRISE_SSO)this.stage="SSO_FORM",this.$nextTick(()=>document.getElementById("startUrl").focus()),await d.storeMetricMetadata({region:this.selectedRegion});else if(this.selectedLoginOption>=y.EXISTING_LOGINS){this.stage="AUTHENTICATING";const t=this.existingLogins[this.selectedLoginOption-y.EXISTING_LOGINS],n=await d.useConnection(t.connectionId,!1);n?(this.stage="START",d.errorNotification(n)):this.stage="CONNECTED"}else this.selectedLoginOption===y.IAM_CREDENTIAL&&(this.stage="AWS_PROFILE",this.$nextTick(()=>document.getElementById("profileName").focus()));else if(this.stage==="SSO_FORM"){if(this.shouldDisableSsoContinue())return;this.stage="AUTHENTICATING";const t=this.existingLogins.find(f=>f.startUrl===this.startUrl);let n;t!==void 0?n=await d.useConnection(t.connectionId,!1):n=await d.startEnterpriseSetup(this.startUrl,this.selectedRegion,this.app),n?(this.stage="START",d.errorNotification(n)):this.stage="CONNECTED"}else if(this.stage==="AWS_PROFILE"){if(this.shouldDisableIamContinue())return;this.stage="AUTHENTICATING";const t=await d.startIamCredentialSetup(this.profileName,this.accessKey,this.secretKey);t?(this.stage="START",d.errorNotification(t)):this.stage="CONNECTED"}d.emitUiClick("auth_continueButton")},async handleCodeCatalystSignin(){d.emitUiClick("auth_codeCatalystSignIn"),this.stage="AUTHENTICATING";const t=await d.startBuilderIdSetup(this.app);t?(this.stage="START",d.errorNotification(t)):this.stage="CONNECTED"},handleUrlInput(){this.startUrl&&!Re(this.startUrl)?this.startUrlError="URLs must start with http:// or https://. Example: https://d-xxxxxxxxxx.awsapps.com/start":this.startUrl&&this.existingLogins.some(t=>t.startUrl===this.startUrl&&t.region!==this.selectedRegion)?this.startUrlError="A connection for this start URL already exists. Sign out before creating a new one.":(this.startUrlError="",d.storeMetricMetadata({credentialStartUrl:this.startUrl}))},handleRegionInput(t){this.handleUrlInput(),d.storeMetricMetadata({region:t.target.value}),d.emitUiClick("auth_regionSelection")},async handleCancelButton(){d.cancelAuthFlow(),await d.storeMetricMetadata({isReAuth:!1,result:"Cancelled"}),d.emitAuthMetric(),d.emitUiClick("auth_cancelButton"),this.stage="START"},async fetchRegions(){const t=await d.getRegions();this.regions=t},async emitUpdate(t){},async updateExistingConnections(){const t=await d.fetchConnections();if(t?.forEach((n,f)=>{this.existingLogins.push({id:y.EXISTING_LOGINS+f,text:this.app==="TOOLKIT"?"Used by Amazon Q":"Used by AWS Toolkit",title:te(n.startUrl)?"AWS Builder ID":`IAM Identity Center ${n.startUrl}`,connectionId:n.id,type:te(n.startUrl)?y.BUILDER_ID:y.ENTERPRISE_SSO,startUrl:n.startUrl,region:n.ssoRegion})}),t&&t.length>0){const n=await d.findUsableConnection(t);n&&await d.useConnection(n.id,!0)}this.$forceUpdate()},async getDefaultStartUrl(){return await d.getDefaultStartUrl()},handleHelpLinkClick(){d.emitUiClick("auth_helpLink")},shouldDisableSsoContinue(){return this.startUrl.length==0||this.startUrlError.length>0||!this.selectedRegion},shouldDisableIamContinue(){return this.profileName.length<=0||this.accessKey.length<=0||this.secretKey.length<=0}}});var gt=b(5548);const Pe=(0,W.Z)(Fe,[["render",ye]]),Ke={id:"reauthenticate-container"},He={id:"icon-container"},Ze={key:0,width:"71",height:"71",viewBox:"0 0 71 71",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$e=[(0,e.createStaticVNode)('<g clip-path="url(#clip0_331_37336)"><path d="M30.1307 1.46438L8.83068 13.7563C5.45818 15.7087 3.37256 19.3031 3.37256 23.2081V47.8067C3.37256 51.6969 5.45818 55.306 8.83068 57.2585L30.1307 69.5504C33.5032 71.5029 37.6596 71.5029 41.0321 69.5504L62.3321 57.2585C65.7046 55.306 67.7903 51.7117 67.7903 47.8067V23.2081C67.7903 19.3179 65.7046 15.7087 62.3321 13.7563L41.0321 1.46438C37.6596 -0.488125 33.5032 -0.488125 30.1307 1.46438Z" fill="url(#paint0_linear_331_37336)"></path><path d="M54.1966 21.6843L38.2364 12.469C37.5116 12.0401 36.5354 11.833 35.5739 11.833C34.6124 11.833 33.651 12.0401 32.9114 12.469L16.9512 21.6843C15.4868 22.5274 14.2887 24.5982 14.2887 26.2845V44.7149C14.2887 46.4011 15.4868 48.472 16.9512 49.3151L32.9114 58.5303C33.6362 58.9593 34.6124 59.1663 35.5739 59.1663C36.5354 59.1663 37.4968 58.9593 38.2364 58.5303L54.1966 49.3151C55.661 48.472 56.8591 46.4011 56.8591 44.7149V26.2845C56.8591 24.5982 55.661 22.5274 54.1966 21.6843ZM36.0029 54.7141C36.0029 54.7141 35.7958 54.7584 35.5887 54.7584C35.3816 54.7584 35.2337 54.7288 35.1745 54.7141L19.1699 45.4693C19.0072 45.3213 18.8002 44.9515 18.7558 44.7445V26.2549C18.8002 26.0478 19.022 25.678 19.1699 25.5301L35.1745 16.2853C35.1745 16.2853 35.3816 16.2409 35.5887 16.2409C35.7958 16.2409 35.9437 16.2705 36.0029 16.2853L52.0075 25.5301C52.1702 25.678 52.3772 26.0478 52.4216 26.2549V42.6588L40.0262 35.4997V33.5472C40.0262 33.1626 39.8191 32.8224 39.4937 32.6301L36.1212 30.6776C35.9585 30.5888 35.7662 30.5297 35.5887 30.5297C35.4112 30.5297 35.2189 30.574 35.0562 30.6776L31.6837 32.6301C31.3583 32.8224 31.1512 33.1774 31.1512 33.5472V37.4374C31.1512 37.822 31.3583 38.1622 31.6837 38.3545L35.0562 40.307C35.2189 40.3957 35.4112 40.4549 35.5887 40.4549C35.7662 40.4549 35.9585 40.4105 36.1212 40.307L37.8074 39.3307L50.2029 46.4899L36.0029 54.6845V54.7141Z" fill="white"></path></g><defs><linearGradient id="paint0_linear_331_37336" x1="64.1515" y1="-5.31021" x2="10.5465" y2="71.2515" gradientUnits="userSpaceOnUse"><stop stop-color="#A7F8FF"></stop><stop offset="0.03" stop-color="#9DF1FF"></stop><stop offset="0.08" stop-color="#84E1FF"></stop><stop offset="0.15" stop-color="#5AC7FF"></stop><stop offset="0.22" stop-color="#21A2FF"></stop><stop offset="0.26" stop-color="#008DFF"></stop><stop offset="0.66" stop-color="#7F33FF"></stop><stop offset="0.99" stop-color="#39127D"></stop></linearGradient><clipPath id="clip0_331_37336"><rect width="71" height="71" fill="white"></rect></clipPath></defs>',2)],Ge={id:"content-container"},We={id:"title"},ze=(0,e.createElementVNode)("div",{id:"call-to-action"},"Please re-authenticate to continue",-1),Xe={key:0,id:"error-message",style:{color:"red"}},je={key:1},Qe=(0,e.createElementVNode)("div",null,"Re-authentication in progress",-1);function Je(t,n,f,S,T,w){return(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("div",Ke,[(0,e.createCommentVNode)(" Icon "),(0,e.createElementVNode)("div",He,[t.app==="AMAZONQ"?((0,e.openBlock)(),(0,e.createElementBlock)("svg",Ze,$e)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",Ge,[t.state==="REAUTHNEEDED"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:0},[(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("div",We,"Connection to "+(0,e.toDisplayString)(t.name)+" Expired",1),ze]),(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("button",{id:"reauthenticate",onClick:n[0]||(n[0]=(...v)=>t.reauthenticate&&t.reauthenticate(...v))},"Re-authenticate"),t.errorMessage?((0,e.openBlock)(),(0,e.createElementBlock)("div",Xe,(0,e.toDisplayString)(t.errorMessage),1)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("button",{id:"signout",onClick:n[1]||(n[1]=(...v)=>t.signout&&t.signout(...v))},"Sign Out")],64)):t.state==="REAUTHENTICATING"?((0,e.openBlock)(),(0,e.createElementBlock)("div",je,[Qe,(0,e.createElementVNode)("button",{id:"cancel",style:{color:"#6f6f6f","background-color":"var(--vscode-input-background)"},onClick:n[2]||(n[2]=(...v)=>t.cancel&&t.cancel(...v))}," Cancel ")])):(0,e.createCommentVNode)("v-if",!0)])],512)),[[e.vShow,t.doShow]])}const B=U.create(),Ye={AMAZONQ:"Amazon Q",TOOLKIT:"Toolkit"},qe=(0,e.defineComponent)({name:"Reauthenticate",data(){return{name:"",errorMessage:"",doShow:!1}},props:{app:{type:String,required:!0},state:{type:String,required:!0}},async created(){this.name=Ye[this.app];const t=await B.getReauthError();this.errorMessage=t?t.text:"",this.doShow=!0},methods:{async reauthenticate(){B.emitUiClick("auth_reauthenticate"),await B.reauthenticateConnection()},async signout(){B.emitUiClick("auth_signout"),await B.signout()},async cancel(){B.emitUiClick("auth_reauthCancelButton"),await B.cancelAuthFlow()}}});var ft=b(8098);const et=(0,W.Z)(qe,[["render",Je]]),Q=U.create(),tt=(0,e.defineComponent)({name:"auth",components:{Login:Pe,Reauthenticate:et},data(){return{authFlowState:"",refreshKey:0}},props:{app:{type:String,required:!0}},async created(){Q.onActiveConnectionModified(()=>{this.refreshAuthState()}),await this.refreshAuthState()},methods:{async refreshAuthState(){await Q.refreshAuthState(),this.authFlowState=await Q.getAuthState(),this.refreshKey+=1}}});var Et=b(3299);const nt=(0,W.Z)(tt,[["render",o]]);const ne=()=>(0,e.createApp)(nt,{app:"AMAZONQ"}),oe=ne();oe.mount("#vue-app"),window.addEventListener("remount",()=>{oe.unmount(),ne().mount("#vue-app")})})();var Y=this;for(var q in K)Y[q]=K[q];K.__esModule&&Object.defineProperty(Y,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 *
 * This module is run within the webview, and will mount the Vue app.
 */
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
