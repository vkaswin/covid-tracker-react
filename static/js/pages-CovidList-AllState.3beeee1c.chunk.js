"use strict";(self.webpackChunkcovid_tracker=self.webpackChunkcovid_tracker||[]).push([[239,506,721,781,604,3,936,141,68,467,144,331,220,545,622,383,471,967,369,841,991,33],{8235:function(t,e,n){n.r(e),n.d(e,{DateInput:function(){return i}});n(2791);var a=n(9192),o=n(184),i=function(t){var e=t.value,n=t.onChange;return(0,o.jsx)("input",{className:a.default.date_field,type:"date",value:e,max:(new Date).toISOString().split("T")[0],onChange:n})}},2881:function(t,e,n){n.r(e),n.d(e,{Loader:function(){return o}});n(2791),n(7205);var a=n(184),o=function(){return(0,a.jsx)("div",{className:"lds-dual-ring"})}},9026:function(t,e,n){n.r(e),n.d(e,{Radio:function(){return i}});n(2791);var a=n(4654),o=n(184),i=function(t){var e=t.id,n=t.label,i=t.name,l=t.checked,d=t.onChange,r=t.color,u=t.value,c=void 0===u?"":u,s=t.disabled,v=void 0!==s&&s;return(0,o.jsxs)("div",{className:a.default.custom_radio_wrapper,children:[(0,o.jsx)("div",{style:{"--radio-color":r},children:(0,o.jsx)("input",{className:a.default.custom_radio,type:"radio",id:e,name:i,value:c,checked:l,onChange:d,disabled:v})}),(0,o.jsx)("label",{htmlFor:e,children:n})]})}},2043:function(t,e,n){n.r(e),n.d(e,{SearchInput:function(){return i}});n(2791);var a=n(3339),o=n(184),i=function(t){var e=t.onChange,n=t.value,i=t.placeholder;return(0,o.jsxs)("div",{className:a.default.search_input,children:[(0,o.jsx)("input",{placeholder:i,defaultValue:n,onChange:e}),(0,o.jsx)("i",{className:"fas fa-search"})]})}},4471:function(t,e,n){n.r(e),n.d(e,{SortButton:function(){return u}});var a=n(8152),o=n(2791),i=n(9026),l=n(4717),d=n(5564),r=n(184),u=function(t){var e=t.onChange,n=t.value,u=t.showPercentageOption,c=void 0===u||u,s=(0,o.useState)(!1),v=(0,a.Z)(s,2),f=v[0],h=v[1],p=(0,o.useRef)();return(0,l.useOnClickOutSide)(p,(function(){return h(!1)})),(0,r.jsxs)("div",{className:d.default.sort_btn,ref:p,"aria-hidden":!!f,children:[(0,r.jsx)("button",{onClick:function(){return h(!0)},children:"Sort By"}),(0,r.jsxs)("div",{className:d.default.sort_dropdown,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)("label",{className:d.default.dropdown_title,children:"Confirmed Count"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Radio,{id:"confirmed-ascending",label:"Ascending",color:"#766ceb",name:"sort",value:"confirmed-0",checked:"confirmed-0"===n,onChange:e}),(0,r.jsx)(i.Radio,{id:"confirmed-decending",label:"Decending",color:"#766ceb",name:"sort",value:"confirmed-1",checked:"confirmed-1"===n,onChange:e})]})]}),c&&(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)("label",{className:d.default.dropdown_title,children:"Affected Percentage"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Radio,{id:"affected-ascending",label:"Ascending",color:"#766ceb",name:"sort",value:"affected-0",checked:"affected-0"===n,onChange:e}),(0,r.jsx)(i.Radio,{id:"affected decending",label:"Decending",color:"#766ceb",name:"sort",value:"affected-1",checked:"affected-1"===n,onChange:e})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)("label",{className:d.default.dropdown_title,children:"Vaccinated Percentage"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Radio,{id:"vaccinated-ascending",label:"Ascending",color:"#766ceb",name:"sort",value:"vaccinated-0",checked:"vaccinated-0"===n,onChange:e}),(0,r.jsx)(i.Radio,{id:"vaccinated-deceding",label:"Decending",color:"#766ceb",name:"sort",value:"vaccinated-1",checked:"vaccinated-1"===n,onChange:e})]})]})]})]})]})}},5402:function(t,e,n){n.r(e),n.d(e,{StatsCard:function(){return i}});n(2791);var a=n(8410),o=n(184),i=function(t){var e=t.title,n=t.count,i=n.confirmed,l=void 0===i?0:i,d=n.deceased,r=void 0===d?0:d,u=n.recovered,c=void 0===u?0:u;return(0,o.jsxs)("div",{className:a.default.stats_detail,children:[(0,o.jsx)("div",{children:(0,o.jsx)("b",{children:e})}),(0,o.jsxs)("div",{className:a.default.stats_count_wrapper,children:[(0,o.jsxs)("div",{className:a.default.stats_count,children:[(0,o.jsx)("span",{children:"Confirmed"}),(0,o.jsx)("span",{children:":"}),(0,o.jsx)("span",{children:null!==l&&void 0!==l?l:0})]}),(0,o.jsxs)("div",{className:a.default.stats_count,children:[(0,o.jsx)("span",{children:"Recovered"}),(0,o.jsx)("span",{children:":"}),(0,o.jsx)("span",{children:null!==c&&void 0!==c?c:0})]}),(0,o.jsxs)("div",{className:a.default.stats_count,children:[(0,o.jsx)("span",{children:"Deceased"}),(0,o.jsx)("span",{children:":"}),(0,o.jsx)("span",{children:null!==r&&void 0!==r?r:0})]})]})]})}},8352:function(t,e,n){n.r(e),n.d(e,{StateCard:function(){return c}});var a=n(8152),o=n(2791),i=n(6871),l=n(4717),d=n(1156),r=n(5402),u=n(184),c=function(t){var e,n,c,s,v,f,h=t.state,p=t.districts,_=t.districtOptions,m=t.stateTotal,j=t.stateDelta,g=t.stateDelta7,x=t.onChange,S=t.showDropDown,C=(0,l.useLocalStorage)(),b=C.getItem,w=C.setItem,k=(0,i.s0)(),N=(0,o.useRef)(),y=(0,o.useState)(0),L=(0,a.Z)(y,2),D=L[0],I=L[1],O=(0,o.useState)(""),A=(0,a.Z)(O,2),T=A[0],P=A[1];(0,o.useEffect)((function(){var t=b("dropdown");if(t){var e=t.find((function(t){return t.state===h}));e&&P(e.value)}}),[h]);var R=function(t){var e;null===(e=N.current)||void 0===e||e.children[t?D+1:D-1].scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),I(t?D+1:D-1)},Z=(0,o.useMemo)((function(){var t=b("dropdown");if(t)return!!t.find((function(t){return t.state===h}))}),[T]);return(0,u.jsxs)("div",{className:d.default.state_card,onClick:function(){return k("/covid/state/".concat(h))},children:[(0,u.jsxs)("div",{className:d.default.card_head,children:[(0,u.jsx)("b",{children:h}),_.length>0&&S&&(0,u.jsxs)("select",{value:T,onChange:function(t){var e=t.target.value,n=b("dropdown");if(n){if(n.find((function(t){return t.state===h}))){var a=n.findIndex((function(t){return t.state===h}));n[a].value=e}else n.push({state:h,value:e});w({key:"dropdown",value:n})}else{var o=[];o.push({state:h,value:e}),w({key:"dropdown",value:o})}P(e),b("sortList")&&x(!0)},onClick:function(t){return t.stopPropagation()},children:[(0,u.jsx)("option",{value:"",disabled:!0,children:"Select District"}),_.map((function(t,e){return(0,u.jsx)("option",{value:t,children:t},e)}))]})]}),(0,u.jsxs)("div",{className:d.default.stats_container,children:[(0,u.jsx)("div",{className:d.default.prev_arrow,onClick:function(t){t.stopPropagation(),R(!1)},"aria-hidden":0===D,children:(0,u.jsx)("i",{className:"fas fa-chevron-left"})}),(0,u.jsxs)("div",{ref:N,className:d.default.stats_wrapper,children:[(0,u.jsx)(r.StatsCard,{title:"Total",count:Z?null!==(e=null===(n=p[T])||void 0===n?void 0:n.total)&&void 0!==e?e:{}:m}),(0,u.jsx)(r.StatsCard,{title:"Delta",count:Z?null!==(c=null===(s=p[T])||void 0===s?void 0:s.delta)&&void 0!==c?c:{}:j}),(0,u.jsx)(r.StatsCard,{title:"Delta7",count:Z?null!==(v=null===(f=p[T])||void 0===f?void 0:f.delta7)&&void 0!==v?v:{}:g})]}),(0,u.jsx)("div",{className:d.default.next_arrow,onClick:function(t){t.stopPropagation(),R(!0)},"aria-hidden":2===D,children:(0,u.jsx)("i",{className:"fas fa-chevron-right"})})]})]})}},8300:function(t,e,n){n.r(e),n.d(e,{debounce:function(){return a},stateCode:function(){return o}});var a=function(t,e){var n;return function(){for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,o)}),e)}},o={AN:"Andaman and Nicobar Islands",AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CG:"Chandigarh",CH:"Chhattisgarh",DN:"Dadra and Nagar Haveli",DD:"Daman and Diu",DL:"Delhi",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JK:"Jammu and Kashmir",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",LA:"Ladakh",LD:"Lakshadweep",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PY:"Puducherry",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TS:"Telangana",TR:"Tripura",UP:"Uttar Pradesh",UK:"Uttarakhand",WB:"West Bengal"}},4717:function(t,e,n){n.r(e),n.d(e,{useLocalStorage:function(){return a.useLocalStorage},useOnClickOutSide:function(){return o.useOnClickOutSide}});var a=n(9843),o=n(6596)},6596:function(t,e,n){n.r(e),n.d(e,{useOnClickOutSide:function(){return o}});var a=n(2791),o=function(t,e){(0,a.useEffect)((function(){return document.addEventListener("touchstart",n),document.addEventListener("mousedown",n),function(){document.removeEventListener("touchstart",n),document.removeEventListener("mousedown",n)}}),[]);var n=function(n){var a=n.target;t.current&&!t.current.contains(a)&&e()}}},9843:function(t,e,n){n.r(e),n.d(e,{useLocalStorage:function(){return a}});var a=function(){return{getItem:function(t){return JSON.parse(localStorage.getItem(t))},setItem:function(t){var e=t.key,n=void 0===e?"":e,a=t.value,o=void 0===a?"":a;localStorage.setItem(n,JSON.stringify(o))},removeItem:function(t){localStorage.removeItem(t)},reset:function(){localStorage.clear()}}}},42:function(t,e,n){n.r(e);var a=n(5861),o=n(8152),i=n(7757),l=n.n(i),d=n(2791),r=n(8352),u=n(2043),c=n(4471),s=n(2881),v=n(8235),f=n(6871),h=n(8300),p=n(4717),_=n(2690),m=n(8267),j=n(184);e.default=function(){var t=(0,f.TH)().search,e=(0,p.useLocalStorage)(),n=e.getItem,i=e.setItem,g=(0,f.s0)(),x=(0,d.useState)([]),S=(0,o.Z)(x,2),C=S[0],b=S[1],w=(0,d.useState)(!0),k=(0,o.Z)(w,2),N=k[0],y=k[1],L=(0,d.useState)(),D=(0,o.Z)(L,2),I=D[0],O=D[1],A=(0,d.useState)(),T=(0,o.Z)(A,2),P=T[0],R=T[1],Z=(0,d.useState)(),B=(0,o.Z)(Z,2),E=B[0],M=B[1],G=(0,d.useState)(),H=(0,o.Z)(G,2),J=H[0],K=H[1],z=(0,d.useState)(""),U=(0,o.Z)(z,2),q=U[0],F=U[1],W=new URLSearchParams(t).get("q");(0,d.useEffect)((function(){Y()}),[]),(0,d.useEffect)((function(){O(null!==W&&void 0!==W?W:"")}),[t]);var Y=function(){var t=(0,a.Z)(l().mark((function t(){var e,a,i,d,r,u,c,s,v;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,_.getAllList)();case 3:return i=t.sent,d=i.data,t.next=7,(0,_.getListByDate)();case 7:r=t.sent,u=r.data,c=Object.entries(d).map((function(t){var e,n=(0,o.Z)(t,2),a=n[0],i=n[1];return{state:null!==(e=h.stateCode[a])&&void 0!==e?e:a,count:i}})).sort((function(t,e){return t.state.localeCompare(e.state)})),K(u),b(c),s=null!==(e=n("sortList"))&&void 0!==e?e:"",""!==(v=null!==(a=n("listDate"))&&void 0!==a?a:"")&&""===s&&V(v,!1,u),""!==s&&""===v&&Q(!1,s,c,v),""!==v&&""!==s&&V(v,!0,s,u),y(!1),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),console.log(t.t0);case 23:case"end":return t.stop()}}),t,null,[[0,20]])})));return function(){return t.apply(this,arguments)}}(),V=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:J,i=Object.entries(a).map((function(e){var n,a,i=(0,o.Z)(e,2),l=i[0],d=i[1].dates;return{state:null!==(n=h.stateCode[l])&&void 0!==n?n:l,count:null!==(a=d[t])&&void 0!==a?a:{}}}));e&&Q(!1,n,i,t),b(i),F(t)},Q=function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:q,l=null!==(t=n("dropdown"))&&void 0!==t?t:[],d=parseInt(String(a).split("-")[1]),r=String(a).split("-")[0],u=void 0;"confirmed"===r?u=o.sort((function(t,e){var n,a,o,r,u,c,s,v,f,p,_,m,j,g,x,S,C,b,w,k,N,y,L,D,I,O,A,T,P=l.find((function(e){return e.state===t.state&&!Object.keys(h.stateCode).includes(t.state)})),R=l.find((function(n){return n.state===e.state&&!Object.keys(h.stateCode).includes(t.state)}));return 0===d?("object"===typeof P&&""===i?null!==(n=null===(a=t.count)||void 0===a||null===(o=a.districts[null===P||void 0===P?void 0:P.value])||void 0===o||null===(r=o.total)||void 0===r?void 0:r.confirmed)&&void 0!==n?n:0:null!==(u=null===(c=t.count)||void 0===c||null===(s=c.total)||void 0===s?void 0:s.confirmed)&&void 0!==u?u:0)-("object"===typeof R&&""===i?null!==(v=null===(f=e.count)||void 0===f||null===(p=f.districts[null===R||void 0===R?void 0:R.value])||void 0===p||null===(_=p.total)||void 0===_?void 0:_.confirmed)&&void 0!==v?v:0:null!==(m=null===(j=e.count)||void 0===j||null===(g=j.total)||void 0===g?void 0:g.confirmed)&&void 0!==m?m:0):("object"===typeof R&&""===i?null!==(x=null===(S=e.count)||void 0===S||null===(C=S.districts[null===R||void 0===R?void 0:R.value])||void 0===C||null===(b=C.total)||void 0===b?void 0:b.confirmed)&&void 0!==x?x:0:null!==(w=null===(k=e.count)||void 0===k||null===(N=k.total)||void 0===N?void 0:N.confirmed)&&void 0!==w?w:0)-("object"===typeof P&&""===i?null!==(y=null===(L=t.count)||void 0===L||null===(D=L.districts[null===P||void 0===P?void 0:P.value])||void 0===D||null===(I=D.total)||void 0===I?void 0:I.confirmed)&&void 0!==y?y:0:null!==(O=null===(A=t.count)||void 0===A||null===(T=A.total)||void 0===T?void 0:T.confirmed)&&void 0!==O?O:0)})):"vaccinated"===r&&""===q?u=o.sort((function(t,e){var n,a,o,i,r,u,c,s,v,f,p,_,m,j,g,x,S,C,b,w,k,N,y,L,D,I,O,A,T,P,R,Z,B,E,M,G,H,J,K,z,U,q,F=l.find((function(e){return e.state===t.state&&!Object.keys(h.stateCode).includes(t.state)})),W=l.find((function(n){return n.state===e.state&&!Object.keys(h.stateCode).includes(t.state)})),Y=("object"===typeof F?((null!==(n=null===(a=t.count)||void 0===a||null===(o=a.districts[null===F||void 0===F?void 0:F.value])||void 0===o||null===(i=o.total)||void 0===i?void 0:i.vaccinated1)&&void 0!==n?n:0)+(null!==(r=null===(u=t.count)||void 0===u||null===(c=u.districts[null===F||void 0===F?void 0:F.value])||void 0===c||null===(s=c.total)||void 0===s?void 0:s.vaccinated2)&&void 0!==r?r:0))/2:((null!==(v=null===(f=t.count)||void 0===f||null===(p=f.total)||void 0===p?void 0:p.vaccinated1)&&void 0!==v?v:0)+(null!==(_=null===(m=t.count)||void 0===m||null===(j=m.total)||void 0===j?void 0:j.vaccinated2)&&void 0!==_?_:0))/2)/("object"===typeof F?null!==(g=null===(x=t.count)||void 0===x||null===(S=x.districts[F.value])||void 0===S||null===(C=S.meta)||void 0===C?void 0:C.population)&&void 0!==g?g:0:null!==(b=null===(w=t.count)||void 0===w||null===(k=w.meta)||void 0===k?void 0:k.population)&&void 0!==b?b:0)*100,V=("object"===typeof W?((null!==(N=null===(y=e.count)||void 0===y||null===(L=y.districts[null===W||void 0===W?void 0:W.value])||void 0===L||null===(D=L.total)||void 0===D?void 0:D.vaccinated1)&&void 0!==N?N:0)+(null!==(I=null===(O=e.count)||void 0===O||null===(A=O.districts[null===W||void 0===W?void 0:W.value])||void 0===A||null===(T=A.total)||void 0===T?void 0:T.vaccinated2)&&void 0!==I?I:0))/2:((null!==(P=null===(R=e.count)||void 0===R||null===(Z=R.total)||void 0===Z?void 0:Z.vaccinated1)&&void 0!==P?P:0)+(null!==(B=null===(E=e.count)||void 0===E||null===(M=E.total)||void 0===M?void 0:M.vaccinated2)&&void 0!==B?B:0))/2)/("object"===typeof W?null!==(G=null===(H=e.count)||void 0===H||null===(J=H.districts[W.value])||void 0===J||null===(K=J.meta)||void 0===K?void 0:K.population)&&void 0!==G?G:0:null!==(z=null===(U=e.count)||void 0===U||null===(q=U.meta)||void 0===q?void 0:q.population)&&void 0!==z?z:0)*100;return 0===d?Y-V:V-Y})):"affected"===r&&""===q&&(u=o.sort((function(t,e){var n,a,o,i,r,u,c,s,v,f,p,_,m,j,g,x,S,C,b,w,k,N,y,L,D,I,O,A,T=l.find((function(e){return e.state===t.state&&!Object.keys(h.stateCode).includes(t.state)})),P=l.find((function(n){return n.state===e.state&&!Object.keys(h.stateCode).includes(t.state)})),R=("object"===typeof T?null!==(n=null===(a=t.count)||void 0===a||null===(o=a.districts[null===T||void 0===T?void 0:T.value])||void 0===o||null===(i=o.total)||void 0===i?void 0:i.deceased)&&void 0!==n?n:0:null!==(r=null===(u=t.count)||void 0===u||null===(c=u.total)||void 0===c?void 0:c.deceased)&&void 0!==r?r:0)/("object"===typeof T?null!==(s=null===(v=t.count)||void 0===v||null===(f=v.districts[T.value])||void 0===f||null===(p=f.meta)||void 0===p?void 0:p.population)&&void 0!==s?s:0:null!==(_=null===(m=t.count)||void 0===m||null===(j=m.meta)||void 0===j?void 0:j.population)&&void 0!==_?_:0)*100,Z=("object"===typeof P?null!==(g=null===(x=e.count)||void 0===x||null===(S=x.districts[null===P||void 0===P?void 0:P.value])||void 0===S||null===(C=S.total)||void 0===C?void 0:C.deceased)&&void 0!==g?g:0:null!==(b=null===(w=e.count)||void 0===w||null===(k=w.total)||void 0===k?void 0:k.deceased)&&void 0!==b?b:0)/("object"===typeof P?null!==(N=null===(y=e.count)||void 0===y||null===(L=y.districts[P.value])||void 0===L||null===(D=L.meta)||void 0===D?void 0:D.population)&&void 0!==N?N:0:null!==(I=null===(O=e.count)||void 0===O||null===(A=O.meta)||void 0===A?void 0:A.population)&&void 0!==I?I:0)*100;return console.log(R,t.state,Z,e.state),0===d?R-Z:Z-R}))),b(u),R(a),e&&M(Math.random())},X=String(I).trim(),$=(0,d.useMemo)((function(){return 0===X.length?C:C.filter((function(t){var e=t.state;return String(e).toLowerCase().includes(String(X).toLowerCase())}))}),[I,C,P,E,q]);return null===C?(0,j.jsx)(s.Loader,{}):(0,j.jsxs)(d.Fragment,{children:[(0,j.jsxs)("div",{className:m.default.list_filter,children:[(0,j.jsxs)("div",{className:m.default.search_box,children:[(0,j.jsx)("span",{children:"States"}),(0,j.jsx)(u.SearchInput,{placeholder:"Search by state name",value:I,onChange:(0,h.debounce)((function(t){var e=t.target.value,n=String(e).trim();g(0===n.length?"/covid/list":"/covid/list?q=".concat(e))}),500)})]}),(0,j.jsx)(v.DateInput,{value:q,onChange:function(t){var e=t.target.value;i({key:"listDate",value:e}),V(e,""!==P,P)}}),(0,j.jsx)(c.SortButton,{onChange:function(t){var e=t.target.value;i({key:"sortList",value:e}),Q(!1,e)},value:P,showPercentageOption:""===q})]}),N?(0,j.jsx)(s.Loader,{}):$.length>0?(0,j.jsx)("div",{className:m.default.covid_list_container,children:$.map((function(t,e){var n=t.state,a=t.count,o=a.districts,i=a.delta,l=void 0===i?{}:i,d=a.delta7,u=void 0===d?{}:d,c=a.total,s=void 0===c?{}:c,v="object"===typeof o?Object.keys(o).map((function(t){return t})):[];return(0,j.jsx)(r.StateCard,{state:n,districts:null!==o&&void 0!==o?o:{},stateTotal:s,stateDelta7:u,stateDelta:l,districtOptions:v,showDropDown:!0,onChange:function(t){return Q(t,P)}},e)}))}):(0,j.jsx)("div",{className:"no-record",children:(0,j.jsx)("b",{children:"Result Not Found"})})]})}},2690:function(t,e,n){n.r(e),n.d(e,{getAllList:function(){return l},getListByDate:function(){return d}});var a=n(4569),o=n.n(a),i=n(8278),l=function(){return o()({method:"get",url:i.endpoints.GET_ALL_LIST})},d=function(){return o()({method:"get",url:i.endpoints.GET_LIST_BY_DATE})}},8278:function(t,e,n){n.r(e),n.d(e,{endpoints:function(){return o}});var a="https://data.covid19india.org/v4/min",o={GET_ALL_LIST:"".concat(a,"/data.min.json"),GET_LIST_BY_DATE:"".concat(a,"/timeseries.min.json")}},7205:function(t,e,n){n.r(e),e.default={}},9192:function(t,e,n){n.r(e),e.default={date_field:"DateInput_date_field__wpuv5"}},4654:function(t,e,n){n.r(e),e.default={custom_radio_wrapper:"Radio_custom_radio_wrapper__Gmn7m",custom_radio:"Radio_custom_radio__UpZNa"}},3339:function(t,e,n){n.r(e),e.default={search_input:"SearchInput_search_input__JIcts"}},5564:function(t,e,n){n.r(e),e.default={sort_btn:"SortButton_sort_btn__Pe-pM",sort_dropdown:"SortButton_sort_dropdown__qzYQ8",dropdown_title:"SortButton_dropdown_title__s2ald"}},1156:function(t,e,n){n.r(e),e.default={state_card:"StateCard_state_card__0ZzD-",card_head:"StateCard_card_head__AUl3G",stats_container:"StateCard_stats_container__M4ORF",prev_arrow:"StateCard_prev_arrow__tqonT",next_arrow:"StateCard_next_arrow__S6RIu",stats_wrapper:"StateCard_stats_wrapper__zrNJ7"}},8410:function(t,e,n){n.r(e),e.default={stats_detail:"StatsCard_stats_detail__v-0q0",stats_count_wrapper:"StatsCard_stats_count_wrapper__rD+z8",stats_count:"StatsCard_stats_count__WShfc"}},8267:function(t,e,n){n.r(e),e.default={covid_list_container:"AllState_covid_list_container__zPHj3",list_filter:"AllState_list_filter__lGdla",search_box:"AllState_search_box__qxEzW"}}}]);
//# sourceMappingURL=pages-CovidList-AllState.3beeee1c.chunk.js.map