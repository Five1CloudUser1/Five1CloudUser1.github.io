!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=o(n(2));(()=>{const t=document.createElement("template");t.innerHTML="\n    <div id='sac-app-redesign_container'></div>\n    ";class e extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._shadowRoot.appendChild(t.content.cloneNode(!0)),this.initComponents()}initComponents(){new r.default({target:this._shadowRoot.getElementById("sac-app-redesign_container")})}}customElements.define("sac-app-redesign",e)})()},,function(t,e,n){"use strict";function o(){}n.r(e);function r(t){return t()}function u(){return Object.create(null)}function l(t){t.forEach(r)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function _(){return p(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let v;function g(t){v=t}const y=[],$=[],b=[],x=[],w=Promise.resolve();let C=!1;function S(){C||(C=!0,w.then(M))}function E(t){b.push(t)}const k=new Set;function M(){do{for(;y.length;){const t=y.shift();g(t),O(t.$$)}for(;$.length;)$.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];k.has(e)||(k.add(e),e())}b.length=0}while(y.length);for(;x.length;)x.pop()();C=!1,k.clear()}function O(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const j=new Set;function T(t,e){t&&t.i&&(j.delete(t),t.i(e))}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let P;function L(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e,n,c,i,s,d=[-1]){const f=v;g(t);const p=e.props||{},_=t.$$={fragment:null,ctx:null,props:s,update:o,not_equal:i,bound:u(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:u(),dirty:d};let h=!1;var m;_.ctx=n?n(t,p,(e,n,...o)=>{const r=o.length?o[0]:n;return _.ctx&&i(_.ctx[e],_.ctx[e]=r)&&(_.bound[e]&&_.bound[e](r),h&&function(t,e){-1===t.$$.dirty[0]&&(y.push(t),S(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],_.update(),h=!0,l(_.before_update),_.fragment=!!c&&c(_.ctx),e.target&&(e.hydrate?_.fragment&&_.fragment.l((m=e.target,Array.from(m.childNodes))):_.fragment&&_.fragment.c(),e.intro&&T(t.$$.fragment),function(t,e,n){const{fragment:o,on_mount:u,on_destroy:c,after_update:i}=t.$$;o&&o.m(e,n),E(()=>{const e=u.map(r).filter(a);c?c.push(...e):l(e),t.$$.on_mount=[]}),i.forEach(E)}(t,e.target,e.anchor),M()),g(f)}"function"==typeof HTMLElement&&(P=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){L(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class H{$destroy(){L(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function N(t){let e,n,r,u,a,c,p,v,g,y,$,b,x,w,C;return{c(){e=f("h2"),e.textContent="Platzhalter gegen automatische Dropdowns!",n=_(),r=f("select"),u=f("option"),u.textContent="Z. 1 / Sp. 1",a=f("option"),a.textContent="Z. 1 / Sp. 2",c=f("option"),c.textContent="Z. 2 / Sp. 1",p=f("option"),p.textContent="Z. 2 / Sp. 2",v=f("option"),v.textContent="obere Zeile",g=f("option"),g.textContent="untere Zeile",y=f("option"),y.textContent="linke Spalte",$=f("option"),$.textContent="rechte Spalte",b=f("option"),b.textContent="gesamte Tabelle",x=_(),w=f("button"),w.textContent="Hervorheben",u.__value="1",u.value=u.__value,a.__value="2",a.value=a.__value,c.__value="3",c.value=c.__value,p.__value="4",p.value=p.__value,v.__value="5",v.value=v.__value,g.__value="6",g.value=g.__value,y.__value="7",y.value=y.__value,$.__value="8",$.value=$.__value,b.__value="9",b.value=b.__value,void 0===t[0]&&E(()=>t[4].call(r))},m(o,l){s(o,e,l),s(o,n,l),s(o,r,l),i(r,u),i(r,a),i(r,c),i(r,p),i(r,v),i(r,g),i(r,y),i(r,$),i(r,b),m(r,t[0]),s(o,x,l),s(o,w,l),C=[h(r,"change",t[4]),h(w,"click",t[1])]},p(t,[e]){1&e&&m(r,t[0])},i:o,o:o,d(t){t&&d(e),t&&d(n),t&&d(r),t&&d(x),t&&d(w),l(C)}}}function q(t,e,n){let o=0;let r="1";return[r,function(){let t=0,e=0;n(0,r=parseInt(r));const o=document.getElementsByTagName("tr");r<=4&&(t=function(t){let e=0;return 1===t?e=2:2===t?e=2:3===t?e=3:4===t&&(e=3),e}(r),e=function(t){let e=0;return 1===t?e=1:2===t?e=2:3===t?e=1:4===t&&(e=2),e}(r),o[t].cells[e].style.background="#F00")},o,function(){o+=1},function(){r=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,r)}]}e.default=class extends H{constructor(t){super(),Z(this,t,q,N,c,{})}}}]);