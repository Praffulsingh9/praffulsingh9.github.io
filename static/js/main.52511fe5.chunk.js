(this.webpackJsonpyolobus_assignment=this.webpackJsonpyolobus_assignment||[]).push([[0],{45:function(e,t,n){},47:function(e,t,n){},78:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),l=(n(45),n(13)),s=n.n(l),i=n(36),u=n(9),j=n(6),b=(n.p,n(47),n(37)),d=n.n(b),O=n(16),p=n(15),f=n(2);function x(e){return Object(f.jsx)("input",{type:"text",placeholder:e.placeholder,value:e.value,onChange:function(t){return e.onChange(t)},style:{marginRight:5}})}var h=n(94),g=n(39),m=n(96),v=n(38),y=n.n(v),C=(n(78),n(95));function S(e){return Object(f.jsxs)(y.a,{closeTimeoutMS:500,isOpen:e.isOpen,children:[Object(f.jsx)("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"},children:Object(f.jsx)(m.a,{variant:"danger",onClick:function(){return e.toggle()},children:"Close"})}),Object(f.jsxs)(C.a,{children:[Object(f.jsxs)(C.a.Row,{children:[Object(f.jsxs)(C.a.Group,{as:g.a,controlId:"formGridPNR",children:[Object(f.jsx)(C.a.Label,{children:"PNR_NO"}),Object(f.jsx)(C.a.Control,{type:"text",value:e.selectedRow.PNR_No})]}),Object(f.jsxs)(C.a.Group,{as:g.a,controlId:"formGridName",children:[Object(f.jsx)(C.a.Label,{children:"Name"}),Object(f.jsx)(C.a.Control,{type:"text",value:e.selectedRow.Name})]})]}),Object(f.jsxs)(C.a.Row,{children:[Object(f.jsxs)(C.a.Group,{as:g.a,controlId:"formGridPNR",children:[Object(f.jsx)(C.a.Label,{children:"From"}),Object(f.jsx)(C.a.Control,{type:"text",value:e.selectedRow.From})]}),Object(f.jsxs)(C.a.Group,{as:g.a,controlId:"formGridName",children:[Object(f.jsx)(C.a.Label,{children:"To"}),Object(f.jsx)(C.a.Control,{type:"text",value:e.selectedRow.To})]})]}),Object(f.jsxs)(C.a.Row,{children:[Object(f.jsxs)(C.a.Group,{as:g.a,controlId:"formGridCity",children:[Object(f.jsx)(C.a.Label,{children:"Contact Number"}),Object(f.jsx)(C.a.Control,{type:"text",value:e.selectedRow.Contact_Number})]}),Object(f.jsxs)(C.a.Group,{as:g.a,controlId:"formGridCity",children:[Object(f.jsx)(C.a.Label,{children:"Date Of Journey"}),Object(f.jsx)(C.a.Control,{type:"text",value:e.selectedRow.Date_of_journey})]}),Object(f.jsxs)(C.a.Group,{as:g.a,controlId:"formGridZip",children:[Object(f.jsx)(C.a.Label,{children:"Total Amount"}),Object(f.jsx)(C.a.Control,{type:"text",value:e.selectedRow.Total_Amount})]})]})]})]})}var N={singleValue:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{color:"black"})},option:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{color:"black"})},input:function(e){return Object(j.a)(Object(j.a)({},e),{},{color:"black"})},valueContainer:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{color:"black"})},container:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{color:"black",width:200,margin:10})},placeholder:function(e){return Object(j.a)(Object(j.a)({},e),{},{color:"black"})}};var _=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!0),l=Object(u.a)(o,2),b=l[0],v=l[1],y=Object(a.useState)(""),C=Object(u.a)(y,2),_=C[0],P=C[1],R=Object(a.useState)(""),T=Object(u.a)(R,2),w=T[0],k=T[1],D=Object(a.useState)([]),G=Object(u.a)(D,2),H=G[0],I=G[1],L=Object(a.useState)(),F=Object(u.a)(L,2),B=F[0],z=F[1],A=Object(a.useState)(),E=Object(u.a)(A,2),J=E[0],M=E[1],V=Object(a.useState)(),W=Object(u.a)(V,2),Z=W[0],q=W[1],K=Object(a.useState)(""),Q=Object(u.a)(K,2),U=Q[0],X=Q[1],Y=Object(a.useState)(!1),$=Object(u.a)(Y,2),ee=$[0],te=$[1],ne=Object(a.useState)({}),ae=Object(u.a)(ne,2),ce=ae[0],re=ae[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://6033d1cc843b150017931a99.mockapi.io/records");case 2:t=e.sent,r(t.data),I(t.data),v(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var oe=c.a.useMemo((function(){return[{Header:"Name",accessor:"Name",sortType:"basic"},{Header:"Contact_Number",accessor:"Contact_Number",sortable:!1},{Header:"PNR_No",accessor:"PNR_No"},{Header:"From",accessor:"From"},{Header:"To",accessor:"To"},{Header:"Date_of_journey",accessor:"Date_of_journey",sortType:"basic",Cell:function(e){return Object(f.jsx)("p",{children:e.value.split("T")[0]})}},{Header:"Total_Amount",accessor:"Total_Amount"}]}),[]),le=function(e,t){"start"==t?M(e):q(e)},se=Object(p.useTable)({columns:oe,data:n,initialState:{pageIndex:0,pageSize:10}},p.useSortBy,p.usePagination),ie=se.getTableProps,ue=se.getTableBodyProps,je=se.headerGroups,be=se.prepareRow,de=se.page,Oe=se.canPreviousPage,pe=se.canNextPage,fe=(se.pageOptions,se.pageCount,se.gotoPage,se.nextPage),xe=se.previousPage,he=(se.setPageSize,se.state);return he.pageIndex,he.pageSize,Object(f.jsxs)(h.a,{children:[Object(f.jsx)(g.a,{lg:12,md:10,sm:10,children:Object(f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:10,minHeight:"100vh"},children:b?"Loading...":Object(f.jsxs)("div",{style:{width:"80%"},children:[Object(f.jsx)(x,{placeholder:"Search by PNR",value:_,onChange:function(e){return function(e){k(""),P(e.target.value);var t=H.filter((function(t){return t.PNR_No.toString().includes(e.target.value)}));r(t)}(e)}}),Object(f.jsx)(x,{placeholder:"Search by Contact",value:w,onChange:function(e){return function(e){P(""),k(e.target.value);var t=H.filter((function(t){return t.Contact_Number.toString().includes(e.target.value)}));r(t)}(e)}}),Object(f.jsx)("div",{style:{margin:10,display:"flex",flexDirection:"row"},children:Object(f.jsx)(O.a,{name:"singleSelect",value:B||null,onChange:function(e){return function(e){var t=H.filter((function(t){return t.Name.toString().includes(e.label)}));z(e),r(t)}(e)},options:H.map((function(e,t){return{label:e.Name,value:t+1}})),placeholder:"Select Name",styles:N})}),Object(f.jsxs)("div",{style:{margin:10,display:"flex",flexDirection:"row"},children:[Object(f.jsx)(O.a,{value:J||null,onChange:function(e){return le(e,"start")},options:H.map((function(e,t){return{label:e.Date_of_journey.split("T")[0],value:t+1}})),placeholder:"Select Start Date",styles:N}),Object(f.jsx)(O.a,{value:Z||null,onChange:function(e){return le(e,"end")},options:H.map((function(e,t){return{label:e.Date_of_journey.split("T")[0],value:t+1}})),placeholder:"Select End State",styles:N}),Object(f.jsx)(m.a,{variant:"success",size:"lg",onClick:function(){return function(){if(J&&Z){var e=H.filter((function(e){return e.Date_of_journey.toString().split("T")[0]>=J.label&&e.Date_of_journey.toString().split("T")[0]<=Z.label}));r(e)}else J||Z?Z?J||X("Select Start Date"):X("Select End Date"):X("Select Start and End Date")}()},children:"Apply"}),Object(f.jsx)(m.a,{variant:"danger",size:"lg",onClick:function(){return q(),M(),z(),void r(H)},children:"Reset"})]}),U.length>0&&U,Object(f.jsxs)("table",Object(j.a)(Object(j.a)({},ie()),{},{children:[Object(f.jsx)("thead",{children:je.map((function(e){return Object(f.jsx)("tr",Object(j.a)(Object(j.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(f.jsxs)("th",Object(j.a)(Object(j.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{style:{borderBottom:"solid 3px red",background:"aliceblue",color:"black",fontWeight:"bold"},children:[e.render("Header"),Object(f.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))}))}))}),Object(f.jsx)("tbody",Object(j.a)(Object(j.a)({},ue()),{},{children:de.map((function(e){return be(e),Object(f.jsx)("tr",Object(j.a)(Object(j.a)({},e.getRowProps()),{},{children:e.cells.map((function(t){return Object(f.jsx)("td",Object(j.a)(Object(j.a)({},t.getCellProps()),{},{children:"PNR_No"===t.column.Header?Object(f.jsx)("a",{style:{textDecoration:"underline",color:"blue"},onClick:function(){return function(e){re(e.values),te(!0)}(e)},children:t.render("Cell")}):"Date_of_journey"===t.column.Header?Object(f.jsx)("p",{children:t.render("Cell")}):t.render("Cell")}))}))}))}))}))]})),Object(f.jsxs)("div",{className:"pagination",children:[Object(f.jsx)("button",{onClick:function(){return xe()},disabled:!Oe,children:"Previous"})," ",Object(f.jsx)("button",{onClick:function(){return fe()},disabled:!pe,children:"Next"})," "]})]})})}),Object(f.jsx)(S,{isOpen:ee,selectedRow:ce,toggle:function(){te(!ee)}})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};n(92);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root")),P()}},[[93,1,2]]]);
//# sourceMappingURL=main.52511fe5.chunk.js.map