!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=o(n(2));(()=>{const t=document.createElement("template");t.innerHTML="\n    <div id='sac-app-redesign_container'></div>\n    ";class e extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._shadowRoot.appendChild(t.content.cloneNode(!0)),this.initComponents()}initComponents(){new r.default({target:this._shadowRoot.getElementById("sac-app-redesign_container")})}}customElements.define("sac-app-redesign",e)})()},,function(t,e,n){"use strict";function o(){}n.r(e);function r(t){return t()}function u(){return Object.create(null)}function a(t){t.forEach(r)}function c(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function l(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}let y;function $(t){y=t}const b=[],v=[],x=[],w=[],S=Promise.resolve();let C=!1;function E(){C||(C=!0,S.then(j))}function M(t){x.push(t)}const O=new Set;function j(){do{for(;b.length;){const t=b.shift();$(t),k(t.$$)}for(;v.length;)v.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];O.has(e)||(O.add(e),e())}x.length=0}while(b.length);for(;w.length;)w.pop()();C=!1,O.clear()}function k(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const P=new Set;function T(t,e){t&&t.i&&(P.delete(t),t.i(e))}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let L;function H(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e,n,i,l,s,d=[-1]){const f=y;$(t);const p=e.props||{},m=t.$$={fragment:null,ctx:null,props:s,update:o,not_equal:l,bound:u(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:u(),dirty:d};let h=!1;var _;m.ctx=n?n(t,p,(e,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&l(m.ctx[e],m.ctx[e]=r)&&(m.bound[e]&&m.bound[e](r),h&&function(t,e){-1===t.$$.dirty[0]&&(b.push(t),E(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],m.update(),h=!0,a(m.before_update),m.fragment=!!i&&i(m.ctx),e.target&&(e.hydrate?m.fragment&&m.fragment.l((_=e.target,Array.from(_.childNodes))):m.fragment&&m.fragment.c(),e.intro&&T(t.$$.fragment),function(t,e,n){const{fragment:o,on_mount:u,on_destroy:i,after_update:l}=t.$$;o&&o.m(e,n),M(()=>{const e=u.map(r).filter(c);i?i.push(...e):a(e),t.$$.on_mount=[]}),l.forEach(M)}(t,e.target,e.anchor),j()),$(f)}"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){H(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class A{$destroy(){H(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function B(t){let e,n,r,u,a,c,i,y,$,b,v,x,w,S,C=1===t[0]?"time":"times";return{c(){e=f("h2"),e.textContent="Platzhalter gegen automatische Dropdowns!",n=m(),r=f("select"),u=f("option"),u.textContent="Z. 1 / Sp. 1",a=f("option"),a.textContent="Z. 1 / Sp. 2",c=f("option"),c.textContent="Z. 2 / Sp. 1",i=f("option"),i.textContent="Z. 2 / Sp. 2",y=m(),$=f("button"),b=p("Hervorheben "),v=p(t[0]),x=m(),w=p(C),u.__value="1",u.value=u.__value,a.__value="2",a.value=a.__value,c.__value="3",c.value=c.__value,i.__value="4",i.value=i.__value,_(r,"id","tableSelector")},m(o,d){s(o,e,d),s(o,n,d),s(o,r,d),l(r,u),l(r,a),l(r,c),l(r,i),s(o,y,d),s(o,$,d),l($,b),l($,v),l($,x),l($,w),S=h($,"click",t[1])},p(t,[e]){1&e&&g(v,t[0]),1&e&&C!==(C=1===t[0]?"time":"times")&&g(w,C)},i:o,o:o,d(t){t&&d(e),t&&d(n),t&&d(r),t&&d(y),t&&d($),S()}}}function Z(t,e,n){let o=0;let r=1;return[o,function(){r=document.getElementsById("selector").value,document.getElementsByTagName("tr")[2].cells[r].style.background="#F00"}]}e.default=class extends A{constructor(t){super(),N(this,t,Z,B,i,{})}}}]);