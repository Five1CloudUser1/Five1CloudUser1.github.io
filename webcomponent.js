!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(2));(()=>{const e=document.createElement("template");e.innerHTML="\n    <div id='sac-app-redesign_container'></div>\n    ";class t extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._shadowRoot.appendChild(e.content.cloneNode(!0)),this.initComponents()}initComponents(){new l.default({target:this._shadowRoot.getElementById("sac-app-redesign_container")})}}customElements.define("sac-app-redesign",t)})()},,function(e,t,n){"use strict";function o(){}n.r(t);function l(e){return e()}function r(){return Object.create(null)}function a(e){e.forEach(l)}function u(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}new Set;function i(e,t){e.appendChild(t)}function s(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function m(){return p(" ")}function h(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function g(e,t){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t)return void(o.selected=!0)}}function v(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}let _;function y(e){_=e}const b=[],$=[],F=[],k=[],x=Promise.resolve();let w=!1;function C(){w||(w=!0,x.then(M))}function E(e){F.push(e)}const S=new Set;function M(){do{for(;b.length;){const e=b.shift();y(e),O(e.$$)}for(;$.length;)$.pop()();for(let e=0;e<F.length;e+=1){const t=F[e];S.has(t)||(S.add(t),t())}F.length=0}while(b.length);for(;k.length;)k.pop()();w=!1,S.clear()}function O(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const j=new Set;function D(e,t){e&&e.i&&(j.delete(e),e.i(t))}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let P;function T(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function B(e,t,n,c,i,s,d=[-1]){const f=_;y(e);const p=t.props||{},m=e.$$={fragment:null,ctx:null,props:s,update:o,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:d};let h=!1;var g;m.ctx=n?n(e,p,(t,n,...o)=>{const l=o.length?o[0]:n;return m.ctx&&i(m.ctx[t],m.ctx[t]=l)&&(m.bound[t]&&m.bound[t](l),h&&function(e,t){-1===e.$$.dirty[0]&&(b.push(e),C(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n}):[],m.update(),h=!0,a(m.before_update),m.fragment=!!c&&c(m.ctx),t.target&&(t.hydrate?m.fragment&&m.fragment.l((g=t.target,Array.from(g.childNodes))):m.fragment&&m.fragment.c(),t.intro&&D(e.$$.fragment),function(e,t,n){const{fragment:o,on_mount:r,on_destroy:c,after_update:i}=e.$$;o&&o.m(t,n),E(()=>{const t=r.map(l).filter(u);c?c.push(...t):a(t),e.$$.on_mount=[]}),i.forEach(E)}(e,t.target,t.anchor),M()),y(f)}"function"==typeof HTMLElement&&(P=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){T(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class L{$destroy(){T(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function H(e,t,n){const o=e.slice();return o[6]=t[n],o}function N(e){let t,n,l,r=e[6].name+"";return{c(){t=f("option"),n=p(r),t.__value=l=e[6].value,t.value=t.__value},m(e,o){s(e,t,o),i(t,n)},p:o,d(e){e&&d(t)}}}function q(e){let t,n,l,r,u,c,p,v,_,y,b,$,F,k,x,w,C,S=e[2],M=[];for(let t=0;t<S.length;t+=1)M[t]=N(H(e,S,t));return{c(){t=f("h2"),t.textContent="Platzhalter gegen automatische Dropdowns!",n=m(),l=f("select"),r=f("option"),r.textContent="row 1 / col. 1",u=f("option"),u.textContent="row 1 / col. 2",c=f("option"),c.textContent="row 2 / col. 1",p=f("option"),p.textContent="row 2 / col. 2",v=f("option"),v.textContent="upper row",_=f("option"),_.textContent="lower row",y=f("option"),y.textContent="left column",b=f("option"),b.textContent="right column",$=f("option"),$.textContent="complete chart",F=m(),k=f("select");for(let e=0;e<M.length;e+=1)M[e].c();x=m(),w=f("button"),w.textContent="Hervorheben",r.__value="1",r.value=r.__value,u.__value="2",u.value=u.__value,c.__value="3",c.value=c.__value,p.__value="4",p.value=p.__value,v.__value="5",v.value=v.__value,_.__value="6",_.value=_.__value,y.__value="7",y.value=y.__value,b.__value="8",b.value=b.__value,$.__value="9",$.value=$.__value,void 0===e[1]&&E(()=>e[4].call(l)),void 0===e[0]&&E(()=>e[5].call(k))},m(o,a){s(o,t,a),s(o,n,a),s(o,l,a),i(l,r),i(l,u),i(l,c),i(l,p),i(l,v),i(l,_),i(l,y),i(l,b),i(l,$),g(l,e[1]),s(o,F,a),s(o,k,a);for(let e=0;e<M.length;e+=1)M[e].m(k,null);g(k,e[0]),s(o,x,a),s(o,w,a),C=[h(l,"change",e[4]),h(k,"change",e[5]),h(w,"click",e[3])]},p(e,[t]){if(2&t&&g(l,e[1]),4&t){let n;for(S=e[2],n=0;n<S.length;n+=1){const o=H(e,S,n);M[n]?M[n].p(o,t):(M[n]=N(o),M[n].c(),M[n].m(k,null))}for(;n<M.length;n+=1)M[n].d(1);M.length=S.length}1&t&&g(k,e[0])},i:o,o:o,d(e){e&&d(t),e&&d(n),e&&d(l),e&&d(F),e&&d(k),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(M,e),e&&d(x),e&&d(w),a(C)}}}function R(e,t,n){let o="FFF",l=[{value:"#000",name:"black"},{value:"#303030",name:"dark grey"},{value:"#808080",name:"grey"},{value:"#303030",name:"dark grey"},{value:"#D3D3D3",name:"light grey"},{value:"#FFF",name:"white"},{value:"#FF0",name:"yellow"},{value:"#F0E68C",name:"khaki"},{value:"#BDB76B",name:"dark khaki"},{value:"#FFA500",name:"orange"},{value:"#FF4500",name:"orange red"},{value:"#F00",name:"red"},{value:"#B22222",name:"fire brick"},{value:"#F08080",name:"light coral"},{value:"#9400D3",name:"dark violet"},{value:"#00F",name:"blue"},{value:"#1E90FF",name:"dodger blue"},{value:"#00FF7F",name:"spring green"},{value:"#32CD32",name:"lime green"},{value:"#008000",name:"green"}],r="1";return[o,r,l,function(){let e=0,t=0;n(1,r=parseInt(r));const o=document.getElementsByTagName("tr");r<=4?(e=function(e){let t=0;return e<=2?t=2:3!==e&&4!==e||(t=3),t}(r),t=function(e){let t=0;return 1===e||3===e?t=1:2!==e&&4!==e||(t=2),t}(r),o[e].cells[t].style.background="#F00"):5===r?(o[2].cells[1].style.background="#F00",o[2].cells[2].style.background="#F00"):6===r?(o[3].cells[1].style.background="#F00",o[3].cells[2].style.background="#F00"):7===r?(o[2].cells[1].style.background="#F00",o[3].cells[1].style.background="#F00"):8===r?(o[2].cells[2].style.background="#F00",o[3].cells[2].style.background="#F00"):(o[2].cells[1].style.background="#F00",o[2].cells[2].style.background="#F00",o[3].cells[1].style.background="#F00",o[3].cells[2].style.background="#F00")},function(){r=v(this),n(1,r)},function(){o=v(this),n(0,o),n(2,l)}]}t.default=class extends L{constructor(e){super(),B(this,e,R,q,c,{})}}}]);