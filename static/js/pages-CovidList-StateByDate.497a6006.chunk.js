"use strict";(self.webpackChunkcovid_tracker=self.webpackChunkcovid_tracker||[]).push([[237,506,721,781,604,858,977,3,936,467,144,383,471,967,369,122],{8235:function(e,n,t){t.r(n),t.d(n,{DateInput:function(){return o}});t(2791);var a=t(9192),i=t(184),o=function(e){var n=e.value,t=e.onChange;return(0,i.jsx)("input",{className:a.default.date_field,type:"date",value:n,max:(new Date).toISOString().split("T")[0],onChange:t})}},2881:function(e,n,t){t.r(n),t.d(n,{Loader:function(){return i}});t(2791),t(7205);var a=t(184),i=function(){return(0,a.jsx)("div",{className:"lds-dual-ring"})}},2548:function(e,n,t){t.r(n),t.d(n,{Pagination:function(){return r}});var a=t(8152),i=t(2791),o=t(15),d=t(184),r=function(e){var n=e.activePage,t=e.totalPages,r=e.onPageChange,l=(0,i.useState)([]),c=(0,a.Z)(l,2),u=c[0],s=c[1];(0,i.useEffect)((function(){n<4||n>t-3?s([1,2,3,4,"...",t-3,t-2,t-1,t]):n>2&&t>7&&s([1,2,"...",parseInt(n)-1,parseInt(n),parseInt(n)+1,"...",t-1,t])}),[n,t]);return(0,d.jsxs)("div",{className:o.default.pagination_container,children:[(0,d.jsxs)("button",{className:o.default.pagination_prev,onClick:function(){parseInt(n)>1&&r(parseInt(n)-1)},disabled:1===parseInt(n),children:[(0,d.jsx)("i",{className:"fas fa-chevron-left"}),(0,d.jsx)("label",{children:"Prev"})]}),u.map((function(e,t){return(0,d.jsx)("button",{className:o.default.page_btn,"aria-current":parseInt(n)===e,onClick:function(){return t=e,void(parseInt(n)!==t&&"number"===typeof t&&r(t));var t},children:e},t)})),(0,d.jsxs)("button",{className:o.default.pagination_next,onClick:function(){parseInt(n)<t&&r(parseInt(n)+1)},disabled:parseInt(n)===t,children:[(0,d.jsx)("label",{children:"Next"}),(0,d.jsx)("i",{className:"fas fa-chevron-right"})]})]})}},9026:function(e,n,t){t.r(n),t.d(n,{Radio:function(){return o}});t(2791);var a=t(4654),i=t(184),o=function(e){var n=e.id,t=e.label,o=e.name,d=e.checked,r=e.onChange,l=e.color,c=e.value,u=void 0===c?"":c,s=e.disabled,v=void 0!==s&&s;return(0,i.jsxs)("div",{className:a.default.custom_radio_wrapper,children:[(0,i.jsx)("div",{style:{"--radio-color":l},children:(0,i.jsx)("input",{className:a.default.custom_radio,type:"radio",id:n,name:o,value:u,checked:d,onChange:r,disabled:v})}),(0,i.jsx)("label",{htmlFor:n,children:t})]})}},4471:function(e,n,t){t.r(n),t.d(n,{SortButton:function(){return c}});var a=t(8152),i=t(2791),o=t(9026),d=t(4717),r=t(5564),l=t(184),c=function(e){var n=e.onChange,t=e.value,c=e.showPercentageOption,u=void 0===c||c,s=(0,i.useState)(!1),v=(0,a.Z)(s,2),f=v[0],h=v[1],m=(0,i.useRef)();return(0,d.useOnClickOutSide)(m,(function(){return h(!1)})),(0,l.jsxs)("div",{className:r.default.sort_btn,ref:m,"aria-hidden":!!f,children:[(0,l.jsx)("button",{onClick:function(){return h(!0)},children:"Sort By"}),(0,l.jsxs)("div",{className:r.default.sort_dropdown,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)("label",{className:r.default.dropdown_title,children:"Confirmed Count"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Radio,{id:"confirmed-ascending",label:"Ascending",color:"#766ceb",name:"sort",value:"confirmed-0",checked:"confirmed-0"===t,onChange:n}),(0,l.jsx)(o.Radio,{id:"confirmed-decending",label:"Decending",color:"#766ceb",name:"sort",value:"confirmed-1",checked:"confirmed-1"===t,onChange:n})]})]}),u&&(0,l.jsxs)(i.Fragment,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)("label",{className:r.default.dropdown_title,children:"Affected Percentage"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Radio,{id:"affected-ascending",label:"Ascending",color:"#766ceb",name:"sort",value:"affected-0",checked:"affected-0"===t,onChange:n}),(0,l.jsx)(o.Radio,{id:"affected decending",label:"Decending",color:"#766ceb",name:"sort",value:"affected-1",checked:"affected-1"===t,onChange:n})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)("label",{className:r.default.dropdown_title,children:"Vaccinated Percentage"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Radio,{id:"vaccinated-ascending",label:"Ascending",color:"#766ceb",name:"sort",value:"vaccinated-0",checked:"vaccinated-0"===t,onChange:n}),(0,l.jsx)(o.Radio,{id:"vaccinated-deceding",label:"Decending",color:"#766ceb",name:"sort",value:"vaccinated-1",checked:"vaccinated-1"===t,onChange:n})]})]})]})]})]})}},8300:function(e,n,t){t.r(n),t.d(n,{debounce:function(){return a},stateCode:function(){return i}});var a=function(e,n){var t;return function(){for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];t&&clearTimeout(t),t=setTimeout((function(){e.apply(void 0,i)}),n)}},i={AN:"Andaman and Nicobar Islands",AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CG:"Chandigarh",CH:"Chhattisgarh",DN:"Dadra and Nagar Haveli",DD:"Daman and Diu",DL:"Delhi",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JK:"Jammu and Kashmir",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",LA:"Ladakh",LD:"Lakshadweep",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PY:"Puducherry",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TS:"Telangana",TR:"Tripura",UP:"Uttar Pradesh",UK:"Uttarakhand",WB:"West Bengal"}},4717:function(e,n,t){t.r(n),t.d(n,{useLocalStorage:function(){return a.useLocalStorage},useOnClickOutSide:function(){return i.useOnClickOutSide}});var a=t(9843),i=t(6596)},6596:function(e,n,t){t.r(n),t.d(n,{useOnClickOutSide:function(){return i}});var a=t(2791),i=function(e,n){(0,a.useEffect)((function(){return document.addEventListener("touchstart",t),document.addEventListener("mousedown",t),function(){document.removeEventListener("touchstart",t),document.removeEventListener("mousedown",t)}}),[]);var t=function(t){var a=t.target;e.current&&!e.current.contains(a)&&n()}}},9843:function(e,n,t){t.r(n),t.d(n,{useLocalStorage:function(){return a}});var a=function(){return{getItem:function(e){return JSON.parse(localStorage.getItem(e))},setItem:function(e){var n=e.key,t=void 0===n?"":n,a=e.value,i=void 0===a?"":a;localStorage.setItem(t,JSON.stringify(i))},removeItem:function(e){localStorage.removeItem(e)},reset:function(){localStorage.clear()}}}},177:function(e,n,t){t.r(n);var a=t(5861),i=t(8152),o=t(7757),d=t.n(o),r=t(2791),l=t(6871),c=t(4717),u=t(2881),s=t(2548),v=t(4471),f=t(4569),h=t.n(f),m=t(8300),p=t(5987),g=t(8235),_=t(184);n.default=function(){var e=(0,l.UO)().state,n=(0,l.TH)(),t=n.search,o=n.pathname,f=(0,l.s0)(),x=(0,c.useLocalStorage)(),j=x.getItem,b=x.setItem,S=(x.removeItem,(0,r.useState)("")),C=(0,i.Z)(S,2),k=C[0],N=C[1],P=(0,r.useState)([]),w=(0,i.Z)(P,2),I=w[0],D=w[1],y=(0,r.useState)(!0),R=(0,i.Z)(y,2),L=R[0],O=R[1],Z=(0,r.useState)(1),A=(0,i.Z)(Z,2),B=A[0],M=A[1],T=(0,r.useState)(),H=(0,i.Z)(T,2),K=H[0],G=H[1],J=(0,r.useState)(),E=(0,i.Z)(J,2),U=E[0],F=E[1],z=new URLSearchParams(t).get("page");(0,r.useEffect)((function(){var e=j("date");W(),N(null!==e&&void 0!==e?e:"")}),[]);var W=function(){var n=(0,a.Z)(d().mark((function n(){var t,a,o,r,l,c,u,s,v,f,p,g,_,x;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h()({method:"get",url:"https://data.covid19india.org/v4/min/timeseries.min.json"});case 3:return a=n.sent,o=a.data,n.next=7,h()({method:"get",url:"https://data.covid19india.org/v4/min/data.min.json"});case 7:r=n.sent,l=r.data,c=Object.entries(l).find((function(n){var t,a=(0,i.Z)(n,1)[0];return(null!==(t=m.stateCode[a])&&void 0!==t?t:a)===e})),u=(0,i.Z)(c,2),s=u[1].meta.population,v=void 0===s?0:s,f=Object.entries(o).find((function(n){var t,a=(0,i.Z)(n,1)[0];return(null!==(t=m.stateCode[a])&&void 0!==t?t:a)===e})),p=(0,i.Z)(f,2),g=p[1],_=Object.entries(g.dates).map((function(e){var n=(0,i.Z)(e,2);return{date:n[0],count:n[1]}})),D(_),F(null!==v&&void 0!==v?v:0),M(Math.ceil(_.length/10)),""!==(x=null!==(t=j("sortTable"))&&void 0!==t?t:"")&&Q(x,_),O(!1),n.next=23;break;case 20:n.prev=20,n.t0=n.catch(0),console.log(n.t0.response);case 23:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(){return n.apply(this,arguments)}}(),Q=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,t=parseInt(String(e).split("-")[1]),a=String(e).split("-")[0],i=void 0;"confirmed"===a?i=n.sort((function(e,n){var a,i,o,d,r,l,c,u,s,v,f,h;return 0===t?(null!==(a=null===(i=e.count)||void 0===i||null===(o=i.total)||void 0===o?void 0:o.confirmed)&&void 0!==a?a:0)-(null!==(d=null===(r=n.count)||void 0===r||null===(l=r.total)||void 0===l?void 0:l.confirmed)&&void 0!==d?d:0):(null!==(c=null===(u=n.count)||void 0===u||null===(s=u.total)||void 0===s?void 0:s.confirmed)&&void 0!==c?c:0)-(null!==(v=null===(f=e.count)||void 0===f||null===(h=f.total)||void 0===h?void 0:h.confirmed)&&void 0!==v?v:0)})):"vaccinated"===a?i=n.sort((function(e,n){var a,i,o,d,r,l,c,u,s,v,f,h,m=((null!==(a=null===(i=e.count)||void 0===i||null===(o=i.total)||void 0===o?void 0:o.vaccinated1)&&void 0!==a?a:0)+(null!==(d=null===(r=e.count)||void 0===r||null===(l=r.total)||void 0===l?void 0:l.vaccinated2)&&void 0!==d?d:0))/2/U*100,p=((null!==(c=null===(u=n.count)||void 0===u||null===(s=u.total)||void 0===s?void 0:s.vaccinated1)&&void 0!==c?c:0)+(null!==(v=null===(f=n.count)||void 0===f||null===(h=f.total)||void 0===h?void 0:h.vaccinated2)&&void 0!==v?v:0))/2/U*100;return 0===t?m-p:p-m})):"affected"===a&&(i=n.sort((function(e,n){var a,i,o,d,r,l,c=(null!==(a=null===(i=e.count)||void 0===i||null===(o=i.total)||void 0===o?void 0:o.deceased)&&void 0!==a?a:0)/U*100,u=(null!==(d=null===(r=n.count)||void 0===r||null===(l=r.total)||void 0===l?void 0:l.deceased)&&void 0!==d?d:0)/U*100;return 0===t?c-u:u-c}))),D(i),G(e)},Y=(0,r.useMemo)((function(){return""===k?I.slice(10*((null!==z&&void 0!==z?z:1)-1),10*(null!==z&&void 0!==z?z:1)):I.filter((function(e){return e.date===k}))}),[k,I,z,K]);return(0,_.jsxs)(r.Fragment,{children:[(0,_.jsxs)("div",{className:p.default.detial_filter,children:[(0,_.jsx)("h1",{children:e}),(0,_.jsx)(g.DateInput,{value:k,onChange:function(e){var n=e.target.value;b({key:"date",value:n}),N(n),z&&f("".concat(o))}}),""===k&&(0,_.jsx)(v.SortButton,{onChange:function(e){var n=e.target.value;b({key:"sortTable",value:n}),Q(n)},value:K})]}),L?(0,_.jsx)(u.Loader,{}):(0,_.jsx)("div",{className:p.default.table_wrapper,children:(0,_.jsxs)("table",{className:p.default.date_table,children:[(0,_.jsx)("thead",{children:(0,_.jsx)("tr",{children:["S.No","Date","Confirmed","Recovered","Deceased","Delta","Delta7"].map((function(e,n){return(0,_.jsx)("th",{children:e},n)}))})}),(0,_.jsx)("tbody",{children:Y.length>0?Y.map((function(e,n){var t,a,i,o,d,r,l=e.date,c=e.count,u=c.delta,s=void 0===u?{}:u,v=c.delta7,f=void 0===v?{}:v,h=c.total,m=void 0===h?{}:h,p=m.confirmed,g=void 0===p?0:p,x=m.deceased,j=void 0===x?0:x,b=m.recovered,S=void 0===b?0:b;return(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:10*((null!==z&&void 0!==z?z:1)-1)+(n+1)}),(0,_.jsx)("td",{children:l}),(0,_.jsx)("td",{children:g}),(0,_.jsx)("td",{children:S}),(0,_.jsx)("td",{children:j}),(0,_.jsxs)("td",{children:[(0,_.jsxs)("span",{children:["Confirmed - ",null!==(t=null===s||void 0===s?void 0:s.confirmed)&&void 0!==t?t:0]}),(0,_.jsxs)("span",{children:["Recovered - ",null!==(a=null===s||void 0===s?void 0:s.recovered)&&void 0!==a?a:0]}),(0,_.jsxs)("span",{children:["Deceased - ",null!==(i=null===s||void 0===s?void 0:s.deceased)&&void 0!==i?i:0]})]}),(0,_.jsxs)("td",{children:[(0,_.jsxs)("span",{children:["Confirmed - ",null!==(o=null===f||void 0===f?void 0:f.confirmed)&&void 0!==o?o:0]}),(0,_.jsxs)("span",{children:["Recovered - ",null!==(d=null===f||void 0===f?void 0:f.recovered)&&void 0!==d?d:0]}),(0,_.jsxs)("span",{children:["Deceased - ",null!==(r=null===f||void 0===f?void 0:f.deceased)&&void 0!==r?r:0]})]})]},n)})):(0,_.jsx)("tr",{children:(0,_.jsx)("td",{colSpan:"7",children:"Results Not Found"})})})]})}),B>1&&""===k&&(0,_.jsx)("div",{className:p.default.pagination_box,children:(0,_.jsx)(s.Pagination,{activePage:null!==z&&void 0!==z?z:1,totalPages:B,onPageChange:function(e){f("".concat(o,"?page=").concat(e))}})})]})}},7205:function(e,n,t){t.r(n),n.default={}},9192:function(e,n,t){t.r(n),n.default={date_field:"DateInput_date_field__wpuv5"}},15:function(e,n,t){t.r(n),n.default={pagination_container:"Pagination_pagination_container__59-zd",page_btn:"Pagination_page_btn__b+vWM",pagination_next:"Pagination_pagination_next__HgofK",pagination_prev:"Pagination_pagination_prev__LeGkt"}},4654:function(e,n,t){t.r(n),n.default={custom_radio_wrapper:"Radio_custom_radio_wrapper__Gmn7m",custom_radio:"Radio_custom_radio__UpZNa"}},5564:function(e,n,t){t.r(n),n.default={sort_btn:"SortButton_sort_btn__Pe-pM",sort_dropdown:"SortButton_sort_dropdown__qzYQ8",dropdown_title:"SortButton_dropdown_title__s2ald"}},5987:function(e,n,t){t.r(n),n.default={table_wrapper:"StateByDate_table_wrapper__MfAcG",date_table:"StateByDate_date_table__TQHow",pagination_box:"StateByDate_pagination_box__sIZyj",detial_filter:"StateByDate_detial_filter__tZ5C8"}}}]);
//# sourceMappingURL=pages-CovidList-StateByDate.497a6006.chunk.js.map