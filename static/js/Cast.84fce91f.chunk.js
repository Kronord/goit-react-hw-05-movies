"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[709],{6743:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(168),a=n(885),i=n(2791),c=n(6871),o=n(2925);var u,s,p,d,f=n(4908),l=n(2575),h=n(1242),m=h.ZP.ul(u||(u=(0,r.Z)(["\n  display: flex;\n  margin: 0 20px;\n  padding: 0;\n  flex-wrap: wrap;\n  list-style: none;\n"]))),v=h.ZP.li(s||(s=(0,r.Z)(["\n  width: 100px;\n  margin: 0 23px 10px 0;\n"]))),x=h.ZP.img(p||(p=(0,r.Z)(["\n  width: 100px;\n  height: 150px;\n"]))),k=n(184);function g(){var e=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),n=t[0],r=t[1],u=(0,c.UO)().movieId,s=(0,i.useState)("idle"),p=(0,a.Z)(s,2),d=p[0],f=p[1];return(0,i.useEffect)((function(){f("pending"),(0,o.zv)(u).then((function(e){r(e.cast),f("resolved")})).catch((function(e){return f("rejected")}))}),[u]),{data:n,status:d}}(),t=e.data,n=e.status,u=(0,f.css)(d||(d=(0,r.Z)(["\n    display: block;\n    margin: 200px auto;\n  "])));return"idle"===n?(0,k.jsx)("h1",{children:"Welcome"}):"pending"===n?(0,k.jsx)(l.PacmanLoader,{color:"#F5A623",css:u,size:"50px",speedMultiplier:"4"}):"resolved"===n?(0,k.jsx)(m,{children:t&&t.map((function(e){var t=e.profile_path,n=e.cast_id,r=e.name,a="https://image.tmdb.org/t/p/w500".concat(t);return null===t&&(a="https://pipesak.com/wp-content/uploads/2019/09/Mike-Place-Holder-PipeSak-About-Page.jpg"),(0,k.jsxs)(v,{children:[(0,k.jsx)(x,{src:a,alt:"profile"}),(0,k.jsx)("p",{children:r})]},n)}))}):"rejected"===n?(0,k.jsx)("h1",{children:"Sorry, we don`t have any information"}):void 0}},2925:function(e,t,n){n.d(t,{JS:function(){return s},XK:function(){return p},TP:function(){return d},zv:function(){return f},tx:function(){return l}});var r=n(5861),a=n(7757),i=n.n(a),c="f792bc0e541efe7531ca1576bffe5aa2";function o(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("Not found"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var s=function(){return o("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c))},p=function(e){return o("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(e))},d=function(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c))},f=function(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c))},l=function(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c))}}}]);
//# sourceMappingURL=Cast.84fce91f.chunk.js.map