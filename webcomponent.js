!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(2));(()=>{const e=document.createElement("template");e.innerHTML="\n    <div id='sac-app-redesign_container'></div>\n    ";class t extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._shadowRoot.appendChild(e.content.cloneNode(!0)),this.initComponents()}initComponents(){new l.default({target:this._shadowRoot.getElementById("sac-app-redesign_container")})}}customElements.define("sac-app-redesign",t)})()},,function(e,t,n){"use strict";function o(){}n.r(t);function l(e){return e()}function r(){return Object.create(null)}function u(e){e.forEach(l)}function c(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}new Set;function s(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function _(){return p(" ")}function h(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function m(e,t){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t)return void(o.selected=!0)}}let g;function y(e){g=e}const v=[],b=[],$=[],x=[],k=Promise.resolve();let w=!1;function C(){w||(w=!0,k.then(F))}function S(e){$.push(e)}const E=new Set;function F(){do{for(;v.length;){const e=v.shift();y(e),M(e.$$)}for(;b.length;)b.pop()();for(let e=0;e<$.length;e+=1){const t=$[e];E.has(t)||(E.add(t),t())}$.length=0}while(v.length);for(;x.length;)x.pop()();w=!1,E.clear()}function M(e){if(null!==e.fragment){e.update(),u(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const O=new Set;function j(e,t){e&&e.i&&(O.delete(e),e.i(t))}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let T;function P(e,t){const n=e.$$;null!==n.fragment&&(u(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function L(e,t,n,a,s,i,d=[-1]){const f=g;y(e);const p=t.props||{},_=e.$$={fragment:null,ctx:null,props:i,update:o,not_equal:s,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:d};let h=!1;var m;_.ctx=n?n(e,p,(t,n,...o)=>{const l=o.length?o[0]:n;return _.ctx&&s(_.ctx[t],_.ctx[t]=l)&&(_.bound[t]&&_.bound[t](l),h&&function(e,t){-1===e.$$.dirty[0]&&(v.push(e),C(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n}):[],_.update(),h=!0,u(_.before_update),_.fragment=!!a&&a(_.ctx),t.target&&(t.hydrate?_.fragment&&_.fragment.l((m=t.target,Array.from(m.childNodes))):_.fragment&&_.fragment.c(),t.intro&&j(e.$$.fragment),function(e,t,n){const{fragment:o,on_mount:r,on_destroy:a,after_update:s}=e.$$;o&&o.m(t,n),S(()=>{const t=r.map(l).filter(c);a?a.push(...t):u(t),e.$$.on_mount=[]}),s.forEach(S)}(e,t.target,t.anchor),F()),y(f)}"function"==typeof HTMLElement&&(T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){P(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class Z{$destroy(){P(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function H(e){let t,n,l,r,c,a,p,g,y,v,b,$,x,k,w;return{c(){t=f("h2"),t.textContent="Platzhalter gegen automatische Dropdowns!",n=_(),l=f("select"),r=f("option"),r.textContent="Z. 1 / Sp. 1",c=f("option"),c.textContent="Z. 1 / Sp. 2",a=f("option"),a.textContent="Z. 2 / Sp. 1",p=f("option"),p.textContent="Z. 2 / Sp. 2",g=f("option"),g.textContent="obere Zeile",y=f("option"),y.textContent="untere Zeile",v=f("option"),v.textContent="linke Spalte",b=f("option"),b.textContent="rechte Spalte",$=f("option"),$.textContent="gesamte Tabelle",x=_(),k=f("button"),k.textContent="Hervorheben",r.__value="1",r.value=r.__value,c.__value="2",c.value=c.__value,a.__value="3",a.value=a.__value,p.__value="4",p.value=p.__value,g.__value="5",g.value=g.__value,y.__value="6",y.value=y.__value,v.__value="7",v.value=v.__value,b.__value="8",b.value=b.__value,$.__value="9",$.value=$.__value,void 0===e[0]&&S(()=>e[4].call(l))},m(o,u){i(o,t,u),i(o,n,u),i(o,l,u),s(l,r),s(l,c),s(l,a),s(l,p),s(l,g),s(l,y),s(l,v),s(l,b),s(l,$),m(l,e[0]),i(o,x,u),i(o,k,u),w=[h(l,"change",e[4]),h(k,"click",e[1])]},p(e,[t]){1&t&&m(l,e[0])},i:o,o:o,d(e){e&&d(t),e&&d(n),e&&d(l),e&&d(x),e&&d(k),u(w)}}}function N(e,t,n){let o=0;let l="1";return[l,function(){let e=0,t=0;n(0,l=parseInt(l));const o=document.getElementsByTagName("tr");l<=4?(e=function(e){let t=0;return e<=2?t=2:3!==e&&4!==e||(t=3),t}(l),t=function(e){let t=0;return 1===e||3===e?t=1:2!==e&&4!==e||(t=2),t}(l),o[e].cells[t].style.background="#F00"):5===l?(o[2].cells[1].style.background="#F00",o[2].cells[2].style.background="#F00"):6===l?(o[3].cells[1].style.background="#F00",o[3].cells[2].style.background="#F00"):7===l?(o[2].cells[1].style.background="#F00",o[3].cells[1].style.background="#F00"):8===l?(o[2].cells[2].style.background="#F00",o[3].cells[2].style.background="#F00"):(o[2].cells[1].style.background="#F00",o[2].cells[2].style.background="#F00",o[3].cells[1].style.background="#F00",o[3].cells[2].style.background="#F00")},o,function(){o+=1},function(){l=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(0,l)}]}t.default=class extends Z{constructor(e){super(),L(this,e,N,H,a,{})}}}]);