"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[709],{9512:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,i,a,c,o=t(168),u=t(885),p=t(2925),s=t(2791),d=t(6871),l=t(4908),f=t(2575),h=t(1242),m=h.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  margin: 0 20px;\n  padding: 0;\n  flex-wrap: wrap;\n  list-style: none;\n"]))),v=h.ZP.li(i||(i=(0,o.Z)(["\n  width: 100px;\n  margin: 0 23px 10px 0;\n"]))),x=h.ZP.img(a||(a=(0,o.Z)(["\n  width: 100px;\n  height: 150px;\n"]))),k=t(184);function g(){var e=(0,s.useState)(null),n=(0,u.Z)(e,2),t=n[0],r=n[1],i=(0,d.UO)().movieId,a=(0,s.useState)("idle"),h=(0,u.Z)(a,2),g=h[0],b=h[1],w=(0,l.css)(c||(c=(0,o.Z)(["\n    display: block;\n    margin: 200px auto;\n  "])));return(0,s.useEffect)((function(){b("pending"),(0,p.zv)(i).then((function(e){r(e.cast),b("resolved")})).catch((function(e){return b("rejected")}))}),[i]),"idle"===g?(0,k.jsx)("h1",{children:"Welcome"}):"pending"===g?(0,k.jsx)(f.PacmanLoader,{color:"#F5A623",css:w,size:"50px",speedMultiplier:"4"}):"resolved"===g?(0,k.jsx)(m,{children:t&&t.map((function(e){var n=e.profile_path,t=e.cast_id,r=e.name,i="https://image.tmdb.org/t/p/w500".concat(n);return null===n&&(i="https://pipesak.com/wp-content/uploads/2019/09/Mike-Place-Holder-PipeSak-About-Page.jpg"),(0,k.jsxs)(v,{children:[(0,k.jsx)(x,{src:i,alt:"profile"}),(0,k.jsx)("p",{children:r})]},t)}))}):"rejected"===g?(0,k.jsx)("h1",{children:"Sorry, we don`t have any information"}):void 0}},2925:function(e,n,t){t.d(n,{JS:function(){return p},XK:function(){return s},TP:function(){return d},zv:function(){return l},tx:function(){return f}});var r=t(5861),i=t(7757),a=t.n(i),c="f792bc0e541efe7531ca1576bffe5aa2";function o(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("Not found"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(){return o("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c))},s=function(e){return o("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(e))},d=function(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c))},l=function(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c))},f=function(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c))}}}]);
//# sourceMappingURL=Cast.ac42e77a.chunk.js.map