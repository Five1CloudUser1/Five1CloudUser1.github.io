!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(2));(()=>{const e=document.createElement("template");e.innerHTML="\n    <div id='sac-app-redesign_container'></div>\n    ";class t extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._shadowRoot.appendChild(e.content.cloneNode(!0)),this.initComponents()}initComponents(){new l.default({target:this._shadowRoot.getElementById("sac-app-redesign_container")})}}customElements.define("sac-app-redesign",t)})()},,function(e,t,n){"use strict";function o(){}n.r(t);function l(e){return e()}function r(){return Object.create(null)}function a(e){e.forEach(l)}function u(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}new Set;function i(e,t){e.appendChild(t)}function s(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function h(){return p(" ")}function m(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t){(null!=t||e.value)&&(e.value=t)}function g(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}function y(e,t){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t)return void(o.selected=!0)}}function b(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}let C;function $(e){C=e}const x=[],F=[],w=[],k=[],E=Promise.resolve();let S=!1;function M(){S||(S=!0,E.then(P))}function O(e){w.push(e)}const j=new Set;function P(){do{for(;x.length;){const e=x.shift();$(e),T(e.$$)}for(;F.length;)F.pop()();for(let e=0;e<w.length;e+=1){const t=w[e];j.has(t)||(j.add(t),t())}w.length=0}while(x.length);for(;k.length;)k.pop()();S=!1,j.clear()}function T(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const B=new Set;function D(e,t){e&&e.i&&(B.delete(e),e.i(t))}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let L;function A(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function H(e,t,n,c,i,s,d=[-1]){const f=C;$(e);const p=t.props||{},h=e.$$={fragment:null,ctx:null,props:s,update:o,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:d};let m=!1;var v;h.ctx=n?n(e,p,(t,n,...o)=>{const l=o.length?o[0]:n;return h.ctx&&i(h.ctx[t],h.ctx[t]=l)&&(h.bound[t]&&h.bound[t](l),m&&function(e,t){-1===e.$$.dirty[0]&&(x.push(e),M(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n}):[],h.update(),m=!0,a(h.before_update),h.fragment=!!c&&c(h.ctx),t.target&&(t.hydrate?h.fragment&&h.fragment.l((v=t.target,Array.from(v.childNodes))):h.fragment&&h.fragment.c(),t.intro&&D(e.$$.fragment),function(e,t,n){const{fragment:o,on_mount:r,on_destroy:c,after_update:i}=e.$$;o&&o.m(t,n),O(()=>{const t=r.map(l).filter(u);c?c.push(...t):a(t),e.$$.on_mount=[]}),i.forEach(O)}(e,t.target,t.anchor),P()),$(f)}"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){A(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class N{$destroy(){A(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function q(e,t,n){const o=e.slice();return o[10]=t[n],o}function R(e){let t,n,l,r=e[10].name+"";return{c(){t=f("option"),n=p(r),t.__value=l=e[10].value,t.value=t.__value,g(t,"background",e[10].value),g(t,"color",e[10].dropColor)},m(e,o){s(e,t,o),i(t,n)},p:o,d(e){e&&d(t)}}}function I(e){let t,n,l,r,u,c,g,b,C,$,x,F,w,k,E,S,M,j,P,T,B,D,L,A,H,N,I,z,G,J,K=e[3],Q=[];for(let t=0;t<K.length;t+=1)Q[t]=R(q(e,K,t));return{c(){t=f("h2"),t.textContent="Platzhalter",n=h(),l=f("select"),r=f("option"),r.textContent="row 1 / col. 1",u=f("option"),u.textContent="row 1 / col. 2",c=f("option"),c.textContent="row 2 / col. 1",g=f("option"),g.textContent="row 2 / col. 2",b=f("option"),b.textContent="upper row",C=f("option"),C.textContent="lower row",$=f("option"),$.textContent="left column",x=f("option"),x.textContent="right column",F=f("option"),F.textContent="complete chart",w=h(),k=f("select");for(let e=0;e<Q.length;e+=1)Q[e].c();E=h(),S=f("div"),M=f("p"),M.textContent="Modify color of",j=h(),P=f("label"),T=f("input"),D=p("\n\tbackground"),L=h(),A=f("label"),H=f("input"),I=p("\n\ttext"),z=h(),G=f("button"),G.textContent="Highlight",r.__value="1",r.value=r.__value,u.__value="2",u.value=u.__value,c.__value="3",c.value=c.__value,g.__value="4",g.value=g.__value,b.__value="5",b.value=b.__value,C.__value="6",C.value=C.__value,$.__value="7",$.value=$.__value,x.__value="8",x.value=x.__value,F.__value="9",F.value=F.__value,void 0===e[1]&&O(()=>e[6].call(l)),void 0===e[0]&&O(()=>e[7].call(k)),v(T,"type","radio"),v(T,"name","scopeSelect"),T.value=B=0,T.checked="checked",v(H,"type","radio"),v(H,"name","scopeSelect"),H.value=N=1},m(o,a){s(o,t,a),s(o,n,a),s(o,l,a),i(l,r),i(l,u),i(l,c),i(l,g),i(l,b),i(l,C),i(l,$),i(l,x),i(l,F),y(l,e[1]),s(o,w,a),s(o,k,a);for(let e=0;e<Q.length;e+=1)Q[e].m(k,null);y(k,e[0]),s(o,E,a),s(o,S,a),i(S,M),i(S,j),i(S,P),i(P,T),_(T,e[2]),i(P,D),i(S,L),i(S,A),i(A,H),_(H,e[2]),i(A,I),s(o,z,a),s(o,G,a),J=[m(l,"change",e[6]),m(k,"change",e[7]),m(T,"change",e[8]),m(H,"change",e[9]),m(G,"click",e[4])]},p(e,[t]){if(2&t&&y(l,e[1]),8&t){let n;for(K=e[3],n=0;n<K.length;n+=1){const o=q(e,K,n);Q[n]?Q[n].p(o,t):(Q[n]=R(o),Q[n].c(),Q[n].m(k,null))}for(;n<Q.length;n+=1)Q[n].d(1);Q.length=K.length}1&t&&y(k,e[0]),4&t&&_(T,e[2]),4&t&&_(H,e[2])},i:o,o:o,d(e){e&&d(t),e&&d(n),e&&d(l),e&&d(w),e&&d(k),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(Q,e),e&&d(E),e&&d(S),e&&d(z),e&&d(G),a(J)}}}function z(e,t,n){let o="FFF",l=[{value:"#FFF",name:"white",dropColor:"#000"},{value:"#D3D3D3",name:"light grey",dropColor:"#000"},{value:"#808080",name:"grey",dropColor:"#000"},{value:"#303030",name:"dark grey",dropColor:"#FFF"},{value:"#000",name:"black",dropColor:"#FFF"},{value:"#FF0",name:"yellow",dropColor:"#000"},{value:"#F0E68C",name:"khaki",dropColor:"#000"},{value:"#BDB76B",name:"dark khaki",dropColor:"#000"},{value:"#FFA500",name:"orange",dropColor:"#000"},{value:"#FF4500",name:"orange red",dropColor:"#000"},{value:"#F00",name:"red",dropColor:"#000"},{value:"#B22222",name:"fire brick",dropColor:"#FFF"},{value:"#F08080",name:"light coral",dropColor:"#000"},{value:"#9400D3",name:"dark violet",dropColor:"#000"},{value:"#00F",name:"blue",dropColor:"#FFF"},{value:"#1E90FF",name:"dodger blue",dropColor:"#000"},{value:"#00FF7F",name:"spring green",dropColor:"#000"},{value:"#32CD32",name:"lime green",dropColor:"#000"},{value:"#008000",name:"green",dropColor:"#000"}],r="1",a=1;function u(e){0==a?e.style.background=o:e.style.color=o}return[o,r,a,l,function(){let e=0,t=0;n(1,r=parseInt(r));const o=document.getElementsByTagName("tr");r<=4?(e=function(e){let t=0;return e<=2?t=2:3!==e&&4!==e||(t=3),t}(r),t=function(e){let t=0;return 1===e||3===e?t=1:2!==e&&4!==e||(t=2),t}(r),u(o[e].cells[t])):5===r?(u(o[2].cells[1]),u(o[2].cells[2])):6===r?(u(o[3].cells[1]),u(o[3].cells[2])):7===r?(u(o[2].cells[1]),u(o[3].cells[1])):8===r?(u(o[2].cells[2]),u(o[3].cells[2])):(u(o[2].cells[1]),u(o[2].cells[2]),u(o[3].cells[1]),u(o[3].cells[2]))},u,function(){r=b(this),n(1,r)},function(){o=b(this),n(0,o),n(3,l)},function(){a=this.value,n(2,a)},function(){a=this.value,n(2,a)}]}t.default=class extends N{constructor(e){super(),H(this,e,z,I,c,{})}}}]);