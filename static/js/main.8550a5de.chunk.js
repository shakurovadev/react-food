(this["webpackJsonpfood-project"]=this["webpackJsonpfood-project"]||[]).push([[0],{16:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(11),s=c.n(r),a=c(4),i=(c(16),c(2)),j=c(0);function o(){return Object(j.jsx)("footer",{className:"page-footer green lighten-4",children:Object(j.jsx)("div",{className:"footer-copyright",children:Object(j.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(j.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/shakurovadev/react-food",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})}function l(){return Object(j.jsx)("nav",{className:"green darken-1",children:Object(j.jsxs)("div",{className:"nav-wrapper",children:[Object(j.jsx)(a.b,{to:"/",className:"brand-logo",children:"React Shop"}),Object(j.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/contacts",children:"Contacts"})})]})]})})}var b=c(3),u=c(6),d=c.n(u),h=c(9),O="https://www.themealdb.com/api/json/v1/".concat("1","/"),x=function(){var e=Object(h.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function p(){return Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"indeterminate"})})}var g=c(8);function v(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:c,alt:t})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title",children:t}),Object(j.jsxs)("p",{children:[n.slice(0,60),"..."]})]}),Object(j.jsx)("div",{className:"card-action",children:Object(j.jsx)(a.b,{to:"/category/".concat(t),className:"btn",children:"Watch category"})})]})}function N(e){var t=e.catalog;return Object(j.jsx)("div",{className:"list",children:t.map((function(e){return Object(j.jsx)(v,Object(g.a)({},e),e.idCategory)}))})}function y(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),s=Object(b.a)(r,2),a=s[0],i=s[1],o=function(){c(a)};return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsx)("input",{type:"search",id:"search-field",placeholder:"Search",onKeyDown:function(e){"Enter"===e.key&&o()},onChange:function(e){return i(e.target.value)},value:a}),Object(j.jsx)("button",{className:"btn",style:{position:"absolute",top:0,right:0},onClick:o,children:"Search"})]})})}function w(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(b.a)(s,2),o=a[0],l=a[1],u=Object(i.e)(),d=u.pathname,h=u.search,O=Object(i.f)();return Object(n.useEffect)((function(){m().then((function(e){r(e.categories),l(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLocaleLowerCase())})):e.categories)}))}),[h]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O(d+"?search=".concat(e))}}),c.length?Object(j.jsx)(N,{catalog:o}):Object(j.jsx)(p,{})]})}function C(){return Object(j.jsx)("h1",{children:"Hello, from About page"})}function k(){return Object(j.jsx)("h1",{children:"Hello, from Contact page"})}function M(e){var t=e.strMeal,c=e.strMealThumb,n=e.idMeal;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:c,alt:t})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("span",{className:"card-title",children:t})}),Object(j.jsx)("div",{className:"card-action",children:Object(j.jsx)(a.b,{to:"/meal/".concat(n),className:"btn",children:"Watch recipe"})})]})}function S(e){var t=e.meals;return Object(j.jsx)("div",{className:"list",children:t.map((function(e){return Object(j.jsx)(M,Object(g.a)({},e),e.idMeal)}))})}function F(){var e=Object(i.g)().name,t=Object(n.useState)([]),c=Object(b.a)(t,2),r=c[0],s=c[1],a=Object(i.f)();return Object(n.useEffect)((function(){f(e).then((function(e){s(e.meals)}))}),[e]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"btn",onClick:function(){return a(-1)},children:"Go back"}),r.length?Object(j.jsx)(S,{meals:r}):Object(j.jsx)(p,{})," "]})}function A(){var e=Object(i.g)().id,t=Object(n.useState)({}),c=Object(b.a)(t,2),r=c[0],s=c[1],a=Object(i.f)();return Object(n.useEffect)((function(){x(e).then((function(e){s(e.meals[0])}))}),[e]),Object(j.jsxs)(j.Fragment,{children:[r.idMeal?Object(j.jsxs)("div",{className:"recipe",children:[Object(j.jsx)("img",{src:r.strMealThumb,alt:r.strMeal}),Object(j.jsx)("h1",{children:r.strMeal}),Object(j.jsxs)("h5",{children:["Category: ",r.strCategory]}),r.strArea?Object(j.jsxs)("h5",{children:["Area: ",r.strArea]}):null,Object(j.jsx)("p",{children:r.strInstructions}),Object(j.jsxs)("table",{className:"striped",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Ingredient"}),Object(j.jsx)("th",{children:"Measure"})]})}),Object(j.jsx)("tbody",{children:Object.keys(r).map((function(e){return e.includes("Ingredient")&&r[e]?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:r[e]}),Object(j.jsx)("td",{children:r["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),r.strYoutube?Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recipe"}),Object(j.jsx)("iframe",{title:e,src:"https://www.youtube.com/embed/".concat(r.strYoutube.slice(-11)),allowFullScreen:!0})]}):null]}):Object(j.jsx)(p,{}),Object(j.jsx)("button",{className:"btn",onClick:function(){return a(-1)},children:"Go back"})]})}function E(){return Object(j.jsx)("h1",{children:"Page not found"})}var L=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{className:"container content",children:Object(j.jsxs)(i.c,{basename:"/react-food",children:[Object(j.jsx)(i.a,{path:"/",element:Object(j.jsx)(w,{})}),Object(j.jsx)(i.a,{path:"about",element:Object(j.jsx)(C,{})}),Object(j.jsx)(i.a,{path:"contacts",element:Object(j.jsx)(k,{})}),Object(j.jsx)(i.a,{path:"category/:name",element:Object(j.jsx)(F,{})}),Object(j.jsx)(i.a,{path:"meal/:id",element:Object(j.jsx)(A,{})}),Object(j.jsx)(i.a,{path:"*",element:Object(j.jsx)(E,{})})]})}),Object(j.jsx)(o,{})]})};s.a.render(Object(j.jsx)(a.a,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8550a5de.chunk.js.map