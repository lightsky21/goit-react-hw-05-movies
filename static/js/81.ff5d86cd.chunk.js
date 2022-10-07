"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[81],{81:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r,c,a,s,i,o=t(885),u=t(731),l=t(739),p=t(791),d=t(168),h=t(444),f=(0,h.ZP)(u.OL)(r||(r=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),x=t(184),v=function(e){var n=e.to,t=e.children;return(0,x.jsx)(f,{to:n,children:t})},g=t(243),m=h.ZP.div(c||(c=(0,d.Z)(["\n  display: flex;\n  padding: 20px;\n  margin-bottom: 20px;\n"]))),j=h.ZP.h1(a||(a=(0,d.Z)(["\n  font-size: 25px;\n"]))),b=h.ZP.img(s||(s=(0,d.Z)(["\n  display: block;\n"]))),Z=(0,h.ZP)(u.OL)(i||(i=(0,d.Z)([""]))),w=function(){var e,n,t=(0,l.UO)().id,r=(0,l.TH)(),c=(0,p.useState)(null),a=(0,o.Z)(c,2),s=a[0],i=a[1],d=null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,p.useEffect)((function(){(0,g.Mc)(t).then(i)}),[t]),(0,x.jsxs)("main",{children:[(0,x.jsx)(v,{to:d,children:"Back to products"}),s&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(b,{src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path),alt:s.title}),(0,x.jsxs)("div",{children:[(0,x.jsx)(j,{children:"".concat(s.title," (").concat(s.release_date.slice(0,4),")")}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)("h3",{children:"User score: ".concat(10*s.vote_average.toFixed(2),"%")})}),(0,x.jsxs)("li",{children:[(0,x.jsx)("h3",{children:"About:"}),(0,x.jsx)("p",{children:s.overview})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("h3",{children:"Genres:"}),(0,x.jsx)("p",{children:s.genres.map((function(e){return e.name})).join(", ")})]})]})]})]}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(Z,{to:"reviews",children:"Reviews"})})]}),(0,x.jsx)(p.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading subpage..."}),children:(0,x.jsx)(l.j3,{})})]})]})}},243:function(e,n,t){t.d(n,{Hx:function(){return v},Mc:function(){return d},Tg:function(){return o},on:function(){return l},uV:function(){return f}});var r=t(861),c=t(757),a=t.n(c),s=t(44),i="9ef3e3eeb008aebbe13a5411b7b0eb81";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("trending/movie/day?api_key=".concat(i));case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(n){var t,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:i,query:n,page:1}),e.prev=1,e.next=4,s.Z.get("search/movie?".concat(t));case 4:return r=e.sent,c=r.data,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"?api_key=").concat(i));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"/credits?api_key=").concat(i));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=81.ff5d86cd.chunk.js.map