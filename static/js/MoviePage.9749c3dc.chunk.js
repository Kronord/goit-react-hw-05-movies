"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[789],{122:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r=t(168),o=t(885),i=t(2925),a=t(2791),c=t(6871);var u,s,p,d,l,f,h,x=t(4908),m=t(2575),v=t(1242),b=t(501),g=v.ZP.li(u||(u=(0,r.Z)(["\n  margin-bottom: 10px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  &:hover {\n    color: orange;\n  }\n"]))),y=v.ZP.ul(s||(s=(0,r.Z)(["\n  list-style: none;\n"]))),k=(0,v.ZP)(b.rU)(p||(p=(0,r.Z)(["\n  text-decoration: none;\n  color: #000;\n  font-size: 18px;\n\n  &:hover {\n    color: orange;\n  }\n"]))),Z=v.ZP.input(d||(d=(0,r.Z)(["\n  display: inline-block;\n  margin: 0 10px 0 20px;\n  width: 200px;\n  font: inherit;\n  border: 2px solid;\n  border-radius: 5px;\n  border-color: orange;\n  font-size: 20px;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),j=v.ZP.button(l||(l=(0,r.Z)(["\n  width: 70px;\n  height: 29px;\n  color: #fff;\n  border: 2px solid;\n  border-radius: 5px;\n  border-color: #ff8c00;\n  background-color: #ffa50088;\n  cursor: pointer;\n"]))),w=v.ZP.form(f||(f=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n"]))),P=t(184);function S(){var n=(0,a.useState)(""),e=(0,o.Z)(n,2),t=e[0],u=e[1],s=(0,b.lr)(),p=(0,o.Z)(s,2),d=p[0],l=p[1],f=function(n){var e=(0,a.useState)(),t=(0,o.Z)(e,2),r=t[0],u=t[1],s=(0,a.useState)("idle"),p=(0,o.Z)(s,2),d=p[0],l=p[1],f=(0,c.TH)();return(0,a.useEffect)((function(){""!==f.search&&(l("pending"),(0,i.XK)(n.get("query")).then((function(n){u(n.results),l("resolved")})).catch((function(n){return l("rejected")})))}),[f.search,n]),{data:r,status:d,location:f}}(d),v=f.data,S=f.status,_=f.location,z=(0,x.css)(h||(h=(0,r.Z)(["\n    display: block;\n    margin: 200px auto;\n  "]))),C=function(n){return u(n.target.value)},q=function(n){n.preventDefault(),l({query:"".concat(t)})};return"idle"===S?(0,P.jsxs)(w,{onSubmit:q,children:[(0,P.jsx)(Z,{type:"text",value:t,onChange:C}),(0,P.jsx)(j,{type:"submit",children:"Search"})]}):"pending"===S?(0,P.jsx)(m.PacmanLoader,{color:"#F5A623",css:z,size:"50px",speedMultiplier:"4"}):"resolved"===S?(0,P.jsxs)("div",{children:[(0,P.jsxs)(w,{onSubmit:q,children:[(0,P.jsx)(Z,{type:"text",value:t,onChange:C}),(0,P.jsx)(j,{type:"submit",children:"Search"})]}),(0,P.jsx)(y,{children:v.map((function(n){var e=n.id,t=n.name,r=n.title;return(0,P.jsx)(g,{children:(0,P.jsx)(k,{to:{pathname:"".concat(e)},state:{from:_},children:null!==t&&void 0!==t?t:r})},e)}))})]}):"rejected"===S?(0,P.jsx)("h1",{children:"Sorry, we don`t found this movie"}):void 0}},2925:function(n,e,t){t.d(e,{JS:function(){return s},XK:function(){return p},TP:function(){return d},zv:function(){return l},tx:function(){return f}});var r=t(5861),o=t(7757),i=t.n(o),a="f792bc0e541efe7531ca1576bffe5aa2";function c(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:n.t0=n.sent,n.next=10;break;case 9:n.t0=Promise.reject(new Error("Not found"));case 10:return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var s=function(){return c("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(a))},p=function(n){return c("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(n))},d=function(n){return c("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(a))},l=function(n){return c("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(a))},f=function(n){return c("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(a))}}}]);
//# sourceMappingURL=MoviePage.9749c3dc.chunk.js.map