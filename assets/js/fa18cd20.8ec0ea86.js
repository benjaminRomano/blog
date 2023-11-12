"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[269],{5202:(e,t,l)=>{l.r(t),l.d(t,{default:()=>S});var a=l(7294),s=l(7950),r=l(1323);const i={filters:"filters_OhvN",filterButton:"filterButton_chCC",searchBar:"searchBar_mpnM",searchInput:"searchInput_t7FN",list:"list_cqBs",place:"place_hryi",tags:"tags_E6K8",details:"details_XSRw",title:"title_U0i2",titleText:"titleText_v2Vv",location:"location_Iv7s",tag:"tag_Y64T",placeImage:"placeImage_zOgK",favorites:"favorites_T_mk",favoritesSelected:"favoritesSelected__iFj",wantToGo:"wantToGo_WZIn",wantToGoSelected:"wantToGoSelected__xAi",pizza:"pizza_vWgK",pizzaSelected:"pizzaSelected_PkR5",counter:"counter_fjKD"};var n,c=l(4184),o=l.n(c);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},d.apply(this,arguments)}const u=e=>{let{title:t,titleId:l,...s}=e;return a.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512","aria-labelledby":l},s),t?a.createElement("title",{id:l},t):null,n||(n=a.createElement("path",{d:"M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4 44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"})))};var h;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},p.apply(this,arguments)}const g=e=>{let{title:t,titleId:l,...s}=e;return a.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512","aria-labelledby":l},s),t?a.createElement("title",{id:l},t):null,h||(h=a.createElement("path",{d:"m47.6 300.4 180.7 168.7c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l180.7-168.7c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141-45.6-7.6-92 7.3-124.6 39.9l-12 12-12-12c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"})))};var f;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},x.apply(this,arguments)}const j=e=>{let{title:t,titleId:l,...s}=e;return a.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512","aria-labelledby":l},s),t?a.createElement("title",{id:l},t):null,f||(f=a.createElement("path",{d:"M169.7.9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80h1.6c176.7 0 320 143.3 320 320v1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7.9zm230.1 409.3c.1-3.4.2-6.8.2-10.2 0-159.1-128.9-288-288-288-3.4 0-6.8.1-10.2.2L.5 491.9c-1.5 5.5.1 11.4 4.1 15.4s9.9 5.6 15.4 4.1l379.8-101.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1-64 0z"})))},v="want_to_go",m="favorites",w="#fb507c",_="#178038",y="#FF8300",b="Pizza";var C=l(5893);function z(e){let{places:t,onPlaceClick:l,searchFilter:a,setSearchFilter:s,setListFilter:r,listFilter:n}=e;return(0,C.jsxs)("div",{children:[(0,C.jsxs)("div",{className:i.filters,children:[(0,C.jsx)("div",{className:i.searchBar,children:(0,C.jsx)("input",{value:a,onChange:e=>s(e.target.value),className:i.searchInput,placeholder:"Filter Places"})}),(0,C.jsx)("button",{onClick:()=>r(n===m?null:m),className:o()(i.filterButton,i.favorites,{[i.favoritesSelected]:n===m}),children:"Favorites"}),(0,C.jsx)("button",{onClick:()=>r(n===v?null:v),className:o()(i.filterButton,i.wantToGo,{[i.wantToGoSelected]:n===v}),children:"Want To Go"}),(0,C.jsx)("button",{onClick:()=>r(n===b?null:b),className:o()(i.filterButton,i.pizza,{[i.pizzaSelected]:n===b}),children:"Pizza"})]}),(0,C.jsx)("p",{className:i.counter,children:t.length?`${t.length} ${1==t.length?"place":"places"} found`:"No Places Found"}),(0,C.jsx)("ul",{className:i.list,children:t.map((e=>(0,C.jsx)("li",{style:{cursor:"pointer"},onClick:()=>l(e),children:(0,C.jsx)(k,{place:e})},e.place_id)))})]})}function k(e){let{place:t}=e;return(0,C.jsxs)("div",{className:i.place,children:[(0,C.jsx)("img",{className:i.placeImage,width:90,height:90,src:t.photo_uri,alt:t.name}),(0,C.jsxs)("div",{className:i.details,children:[(0,C.jsxs)("div",{className:i.title,children:[(0,C.jsx)("a",{href:t.url,target:"_blank",className:i.titleText,children:t.name}),t.tags.includes(b)&&(0,C.jsx)(j,{style:{marginRight:"4px"},fill:y}),t.list===v&&(0,C.jsx)(u,{fill:_}),t.list===m&&(0,C.jsx)(g,{fill:w})]}),(0,C.jsxs)("p",{className:i.location,children:[" ",t.address]}),(0,C.jsx)("div",{className:i.tags,children:t.tags.map(((e,t)=>(0,C.jsx)("span",{className:i.tag,children:e},t)))})]})]})}var F=l(6486),N=l.n(F),O=l(1262),I=l(2263);function S(){const{data:e,error:t}=function(e,l){const s=(0,a.useRef)({}),r=(0,a.useRef)(!1),i={error:void 0,data:void 0},[n,c]=(0,a.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...i};case"fetched":return{...i,data:t.payload};case"error":return{...i,error:t.payload};default:return e}}),i);return(0,a.useEffect)((()=>{if(e)return r.current=!1,(async()=>{if(c({type:"loading"}),s.current[e])c({type:"fetched",payload:s.current[e]});else try{const t=await fetch(e,l);if(!t.ok)throw new Error(t.statusText);const a=await t.json();if(s.current[e]=a,r.current)return;c({type:"fetched",payload:a})}catch(t){if(r.current)return;c({type:"error",payload:t})}})(),()=>{r.current=!0}}),[e]),n}("assets/places.json"),[l,i]=(0,a.useState)(""),[n,c]=(0,a.useState)(null),[o,d]=(0,a.useState)(null),{siteConfig:u}=(0,I.Z)(),h=u.customFields.GOOGLE_MAPS_API_KEY,p=(0,a.useMemo)((()=>N().sortBy(e||[],(e=>e.name)).filter((e=>e.name.toLowerCase().includes(l.toLowerCase())||e.tags.flatMap((e=>e.toLowerCase().split(" "))).includes(l.toLowerCase()))).filter((e=>null===n||e.list===n||e.tags.includes(n)))),[l,e,n]);return t?(0,C.jsx)(s.Z,{title:"Places in LA",children:"Failed to load places..."}):e?(0,C.jsx)(s.Z,{noFooter:!0,title:"Places in LA",children:(0,C.jsx)("div",{className:"container",children:(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{className:"col col--4",style:{paddingRight:"0px"},children:(0,C.jsx)(z,{onPlaceClick:e=>d(e.place_id),places:p,searchFilter:l,setSearchFilter:i,listFilter:n,setListFilter:c})}),(0,C.jsx)("div",{className:"col col--8",style:{paddingRight:"0px"},children:(0,C.jsx)(r.un,{apiKey:h,children:(0,C.jsx)(r.D5,{mapId:"a4a5ec674643d4f0",clickableIcons:!1,onClick:()=>d(null),initialBounds:{south:33.925665920450015,west:-118.63052524497982,north:34.20665809502612,east:-117.94937290122982},gestureHandling:"greedy",disableDefaultUI:!0,children:p.map((e=>(0,C.jsx)(L,{isOpen:e.place_id==o,setMarkerPlaceId:d,place:e},e.place_id)))})})})]})})}):(0,C.jsx)(s.Z,{title:"Places In LA"})}const L=e=>{let{place:t,isOpen:l,setMarkerPlaceId:a}=e;const[s,i]=(0,r.Rt)();let n;return n="favorites"==t.list?(0,C.jsx)(R,{}):"want_to_go"==t.list?(0,C.jsx)(E,{}):t.tags.includes(b)?(0,C.jsx)(B,{}):(0,C.jsx)(P,{place:t}),(0,C.jsxs)(r._Q,{ref:s,onClick:()=>a(l?null:t.place_id),position:{lat:t.lat,lng:t.lng},children:[n,l&&(0,C.jsx)(r.nx,{anchor:i,maxWidth:500,onCloseClick:()=>a(null),children:(0,C.jsx)(k,{place:t})})]})},P=e=>{let{place:t}=e;return(0,C.jsx)(r.lO,{scale:.8,glyph:new URL(String(t.icon)),background:t.icon_background_color,borderColor:"transparent"})},B=()=>(0,C.jsx)(O.Z,{children:()=>(0,C.jsx)(r.lO,{scale:.8,glyph:new URL(`${window.location.origin}/img/pizza.svg`),glyphColor:"#FF8300",background:"#FFD514",borderColor:"#FF8300"})}),E=()=>(0,C.jsx)(O.Z,{children:()=>(0,C.jsx)(r.lO,{scale:.8,glyph:new URL(`${window.location.origin}/img/flag.svg`),glyphColor:"white",background:_,borderColor:"white"})}),R=()=>(0,C.jsx)(O.Z,{children:()=>(0,C.jsx)(r.lO,{scale:.8,glyph:new URL(`${window.location.origin}/img/heart.svg`),glyphColor:"white",background:w,borderColor:"#white"})})}}]);