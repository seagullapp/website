(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{5418:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,554,23)),Promise.resolve().then(r.bind(r,9520))},9520:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var l=r(5155),n=r(8009),a=r(6979),c=r.n(a),i=r(2115);function o(e){let{user:t}=e,r=t.tags.filter(e=>(null==e?void 0:e.type)==="label"),a=t.tags.filter(e=>(null==e?void 0:e.type)==="service"),o=t.tags.filter(e=>(null==e?void 0:e.type)==="skill");return(0,l.jsxs)("div",{className:"".concat(c().sidebar," widget"),children:[(0,l.jsx)("h3",{className:"grey subtitle",children:"Filter By Tags"}),r.length&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:"subtitle mb-1",children:"Labels"}),(0,l.jsx)("div",{className:"flex gap-2 flex-wrap",children:r.map((e,t)=>{let[r,a]=(0,i.useState)(!0);return(0,l.jsx)("div",{onClick:()=>a(!r),children:(0,l.jsxs)(n.A,{className:"cursor-pointer ".concat(r?"":"grey"),children:[" ",e.value," "]})},t)})})]}),a.length&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:"subtitle mb-1 mt-4",children:"Services"}),(0,l.jsx)("div",{className:"flex gap-2 flex-wrap",children:a.map((e,t)=>{let[r,a]=(0,i.useState)(!0);return(0,l.jsx)("div",{onClick:()=>a(!r),children:(0,l.jsxs)(n.A,{className:"cursor-pointer ".concat(r?"":"grey"),children:[" ",e.value," "]})},t)})})]}),o.length&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:"subtitle mb-1 mt-4",children:"Skills"}),(0,l.jsx)("div",{className:"flex gap-2 flex-wrap",children:o.map((e,t)=>{let[r,a]=(0,i.useState)(!0);return(0,l.jsx)("div",{onClick:()=>a(!r),children:(0,l.jsxs)(n.A,{className:"cursor-pointer ".concat(r?"":"grey"),children:[" ",e.value," "]})},t)})})]})]})}},8009:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var l=r(5155);r(7366);var n=r(1536);function a(e){var t,r,a,c,i,o;let{data:s,children:u,className:d}=e,v="\n    ".concat(null==s?void 0:null===(t=s.value)||void 0===t?void 0:t.trim()," \n    ").concat(null==s?void 0:null===(r=s.value)||void 0===r?void 0:r.trim().toLowerCase()," \n    ").concat(null==s?void 0:null===(a=s.value)||void 0===a?void 0:a.replaceAll("-"," ").trim().toLowerCase(),"\n    ").concat(null==s?void 0:null===(c=s.value)||void 0===c?void 0:c.replaceAll("_"," ").trim().toLowerCase(),"\n    ").concat(null==s?void 0:null===(i=s.value)||void 0===i?void 0:i.replaceAll("-","").trim().toLowerCase(),"\n    ").concat(null==s?void 0:null===(o=s.value)||void 0===o?void 0:o.replaceAll("_"," ").trim().toLowerCase(),"\n    ").concat("".concat(u).trim()," \n    ").concat("".concat(u).trim().toLowerCase()," \n    ").concat("".concat(u).replaceAll("-"," ").trim().toLowerCase(),"\n    ").concat("".concat(u).replaceAll("."," ").trim().toLowerCase(),"\n    ").concat("".concat(u).replaceAll("_"," ").trim().toLowerCase(),"\n    ").concat("".concat(u).replaceAll("-","").trim().toLowerCase(),"\n    ").concat("".concat(u).replaceAll("_"," ").trim().toLowerCase(),"\n    ").trim().replaceAll(","," ");return(0,l.jsxs)("div",{className:"Tag ".concat(d," ").concat(v," relative"),children:[u,(0,l.jsxs)("div",{className:"manage-buttons flex flex-col gap-[1px]",children:[(null==d?void 0:d.includes("deletable"))&&(0,l.jsxs)("div",{className:"delete-button",children:[" ",(0,l.jsx)(n.RCe,{})," "]}),(null==d?void 0:d.includes("editable"))&&(0,l.jsxs)("div",{className:"edit-button",children:[" ",(0,l.jsx)(n.F7,{})," "]})]})]})}},7366:()=>{},6979:e=>{e.exports={sidebar:"Sidebar_sidebar__DKJll"}},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var l=r(2115),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=l.createContext&&l.createContext(n),c=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,l)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var l,n;l=t,n=r[t],(l=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(l))in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>l.createElement(d,i({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,r)=>l.createElement(t.tag,s({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:n,size:a,title:o}=e,u=function(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;r[l]=e[l]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,c),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),l.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),e.children)};return void 0!==a?l.createElement(a.Consumer,null,e=>t(e)):t(n)}}},e=>{var t=t=>e(e.s=t);e.O(0,[215,711,173,441,517,358],()=>t(5418)),_N_E=e.O()}]);