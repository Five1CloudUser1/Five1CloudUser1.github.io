!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(2));(()=>{const e=document.createElement("template");e.innerHTML="\n    <div id='sac-app-redesign_container'></div>\n    ";class t extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._shadowRoot.appendChild(e.content.cloneNode(!0)),this.initComponents()}initComponents(){new l.default({target:this._shadowRoot.getElementById("sac-app-redesign_container")})}}customElements.define("sac-app-redesign",t)})()},,function(e,t,n){"use strict";function o(){}n.r(t);function l(e){return e()}function r(){return Object.create(null)}function a(e){e.forEach(l)}function c(e){return"function"==typeof e}function u(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}new Set;function i(e,t){e.appendChild(t)}function s(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function h(){return p(" ")}function v(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.data!==t&&(e.data=t)}function g(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}function y(e,t){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t)return void(o.selected=!0)}}function b(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}let C;function x(e){C=e}const $=[],F=[],k=[],w=[],E=Promise.resolve();let S=!1;function O(){S||(S=!0,E.then(j))}function M(e){k.push(e)}const B=new Set;function j(){do{for(;$.length;){const e=$.shift();x(e),T(e.$$)}for(;F.length;)F.pop()();for(let e=0;e<k.length;e+=1){const t=k[e];B.has(t)||(B.add(t),t())}k.length=0}while($.length);for(;w.length;)w.pop()();S=!1,B.clear()}function T(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const P=new Set;function D(e,t){e&&e.i&&(P.delete(e),e.i(t))}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let L;function N(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function A(e,t,n,u,i,s,d=[-1]){const f=C;x(e);const p=t.props||{},h=e.$$={fragment:null,ctx:null,props:s,update:o,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:d};let v=!1;var _;h.ctx=n?n(e,p,(t,n,...o)=>{const l=o.length?o[0]:n;return h.ctx&&i(h.ctx[t],h.ctx[t]=l)&&(h.bound[t]&&h.bound[t](l),v&&function(e,t){-1===e.$$.dirty[0]&&($.push(e),O(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n}):[],h.update(),v=!0,a(h.before_update),h.fragment=!!u&&u(h.ctx),t.target&&(t.hydrate?h.fragment&&h.fragment.l((_=t.target,Array.from(_.childNodes))):h.fragment&&h.fragment.c(),t.intro&&D(e.$$.fragment),function(e,t,n){const{fragment:o,on_mount:r,on_destroy:u,after_update:i}=e.$$;o&&o.m(t,n),M(()=>{const t=r.map(l).filter(c);u?u.push(...t):a(t),e.$$.on_mount=[]}),i.forEach(M)}(e,t.target,t.anchor),j()),x(f)}"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){N(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class H{$destroy(){N(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function q(e,t,n){const o=e.slice();return o[13]=t[n],o}function I(e){let t,n,l,r=e[13].name+"";return{c(){t=f("option"),n=p(r),t.__value=l=e[13].value,t.value=t.__value,g(t,"background",e[13].value),g(t,"color",e[13].dropColor)},m(e,o){s(e,t,o),i(t,n)},p:o,d(e){e&&d(t)}}}function R(e){let t,n,l,r,c,u,g,b,C,x,$,F,k,w,E,S,O,B,j,T,P,D,L,N,A,H,R,U,X,Y,z,G,J,K,Q,V,W,Z,ee=e[3].x+"",te=e[3].y+"",ne=e[4],oe=[];for(let t=0;t<ne.length;t+=1)oe[t]=I(q(e,ne,t));return{c(){t=f("div"),n=p("Clicked at "),l=p(ee),r=p(" x "),c=p(te),u=p(".\n\n"),g=f("select"),b=f("option"),b.textContent="row 1 / col. 1",C=f("option"),C.textContent="row 1 / col. 2",x=f("option"),x.textContent="row 2 / col. 1",$=f("option"),$.textContent="row 2 / col. 2",F=f("option"),F.textContent="upper row",k=f("option"),k.textContent="lower row",w=f("option"),w.textContent="left column",E=f("option"),E.textContent="right column",S=f("option"),S.textContent="complete chart",O=h(),B=f("select");for(let e=0;e<oe.length;e+=1)oe[e].c();j=h(),T=f("div"),P=f("p"),P.textContent="Modify color of",D=h(),L=f("label"),N=f("input"),H=p("\n\tbackground"),R=h(),U=f("label"),X=f("input"),z=p("\n\ttext"),G=h(),J=f("button"),J.textContent="Highlight",K=h(),Q=f("button"),Q.textContent="I",V=h(),W=f("button"),W.textContent="B",b.__value="1",b.value=b.__value,C.__value="2",C.value=C.__value,x.__value="3",x.value=x.__value,$.__value="4",$.value=$.__value,F.__value="5",F.value=F.__value,k.__value="6",k.value=k.__value,w.__value="7",w.value=w.__value,E.__value="8",E.value=E.__value,S.__value="9",S.value=S.__value,void 0===e[1]&&M(()=>e[8].call(g)),void 0===e[0]&&M(()=>e[9].call(B)),_(N,"type","radio"),_(N,"name","scopeSelect"),N.__value=A=0,N.value=N.__value,N.checked="checked",e[11][0].push(N),_(X,"type","radio"),_(X,"name","scopeSelect"),X.__value=Y=1,X.value=X.__value,e[11][0].push(X)},m(o,a){s(o,t,a),i(t,n),i(t,l),i(t,r),i(t,c),i(t,u),i(t,g),i(g,b),i(g,C),i(g,x),i(g,$),i(g,F),i(g,k),i(g,w),i(g,E),i(g,S),y(g,e[1]),i(t,O),i(t,B);for(let e=0;e<oe.length;e+=1)oe[e].m(B,null);y(B,e[0]),i(t,j),i(t,T),i(T,P),i(T,D),i(T,L),i(L,N),N.checked=N.__value===e[2],i(L,H),i(T,R),i(T,U),i(U,X),X.checked=X.__value===e[2],i(U,z),i(t,G),i(t,J),i(t,K),i(t,Q),i(t,V),i(t,W),Z=[v(g,"change",e[8]),v(B,"change",e[9]),v(N,"change",e[10]),v(X,"change",e[12]),v(J,"click",e[5](1)),v(Q,"click",e[5](2)),v(W,"click",e[5](3)),v(t,"click",e[6])]},p(e,[t]){if(8&t&&ee!==(ee=e[3].x+"")&&m(l,ee),8&t&&te!==(te=e[3].y+"")&&m(c,te),2&t&&y(g,e[1]),16&t){let n;for(ne=e[4],n=0;n<ne.length;n+=1){const o=q(e,ne,n);oe[n]?oe[n].p(o,t):(oe[n]=I(o),oe[n].c(),oe[n].m(B,null))}for(;n<oe.length;n+=1)oe[n].d(1);oe.length=ne.length}1&t&&y(B,e[0]),4&t&&(N.checked=N.__value===e[2]),4&t&&(X.checked=X.__value===e[2])},i:o,o:o,d(n){n&&d(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(oe,n),e[11][0].splice(e[11][0].indexOf(N),1),e[11][0].splice(e[11][0].indexOf(X),1),a(Z)}}}function U(e,t,n){let o="FFF",l=[{value:"#FFF",name:"white",dropColor:"#000"},{value:"#D3D3D3",name:"light grey",dropColor:"#000"},{value:"#808080",name:"grey",dropColor:"#000"},{value:"#303030",name:"dark grey",dropColor:"#FFF"},{value:"#000",name:"black",dropColor:"#FFF"},{value:"#FF0",name:"yellow",dropColor:"#000"},{value:"#F0E68C",name:"khaki",dropColor:"#000"},{value:"#BDB76B",name:"dark khaki",dropColor:"#000"},{value:"#FFA500",name:"orange",dropColor:"#000"},{value:"#FF4500",name:"orange red",dropColor:"#000"},{value:"#F00",name:"red",dropColor:"#000"},{value:"#B22222",name:"fire brick",dropColor:"#FFF"},{value:"#F08080",name:"light coral",dropColor:"#000"},{value:"#9400D3",name:"dark violet",dropColor:"#000"},{value:"#00F",name:"blue",dropColor:"#FFF"},{value:"#1E90FF",name:"dodger blue",dropColor:"#000"},{value:"#00FF7F",name:"spring green",dropColor:"#000"},{value:"#32CD32",name:"lime green",dropColor:"#000"},{value:"#008000",name:"green",dropColor:"#000"}],r="1",a=1;function c(e,t){1===t?0==a?e.style.background=o:e.style.color=o:2===t?e.style.fontStyle="italic":3===t&&(e.style.fontStyle="bold")}let u={x:0,y:0};function i(e){n(3,u.x=e.clientX,u),n(3,u.y=e.clientY,u),function(e){const t=document.getElementsByClassName("sapEpmUiControlCrosstabTableInner")[0];for(let o=0;o<t.rows.length;o++)for(let l=0;l<t.rows[o].cells.length;l++)if(null!=e.target.closest("tr")&&e.target.closest("tr").dataset.row==o&&null!=e.target.closest("td")&&e.target.closest("td").dataset.col==l){var n=t.rows[o].cells[l].style.background;n="#B0E0E6"!=n?"#B0E0E6":"#FFF"}}(e)}document.addEventListener("click",i);return[o,r,a,u,l,function(e){return function(){let t=0,o=0;n(1,r=parseInt(r));const l=document.getElementsByTagName("tr");r<=4?(t=function(e){let t=0;return e<=2?t=2:3!==e&&4!==e||(t=3),t}(r),o=function(e){let t=0;return 1===e||3===e?t=1:2!==e&&4!==e||(t=2),t}(r),c(l[t].cells[o],e)):5===r?(c(l[2].cells[1],e),c(l[2].cells[2],e)):6===r?(c(l[3].cells[1],e),c(l[3].cells[2],e)):7===r?(c(l[2].cells[1],e),c(l[3].cells[1],e)):8===r?(c(l[2].cells[2],e),c(l[3].cells[2],e)):(c(l[2].cells[1],e),c(l[2].cells[2],e),c(l[3].cells[1],e),c(l[3].cells[2],e))}},i,c,function(){r=b(this),n(1,r)},function(){o=b(this),n(0,o),n(4,l)},function(){a=this.__value,n(2,a)},[[]],function(){a=this.__value,n(2,a)}]}t.default=class extends H{constructor(e){super(),A(this,e,U,R,u,{})}}}]);