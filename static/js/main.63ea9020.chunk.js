(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{85:function(e,t,n){e.exports=n(97)},90:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(9),c=n.n(r),i=(n(90),n(29)),o=n(33),u=n(16),m=n(133),d=n(147),s=n(149),f=n(148),E=n(153),h=n(41),p=n(143),v=n(71),y=n(22),b=n(134),g=function(e){var t=e.text,n=e.handleSelection,a=e.hasSelection,r=e.handleAdd;return l.a.createElement(x,{onSelection:n,onAdd:r,text:t,hasSelection:a})},x=function(e){var t=e.onSelection,n=e.hasSelection,a=e.text,r=e.onAdd;return l.a.createElement(v.a,{style:{padding:"1rem"}},l.a.createElement(m.a,{container:!0,direction:"column"},l.a.createElement(m.a,{item:!0,children:l.a.createElement(y.a,{onDoubleClick:t,onMouseUp:t},a)}),l.a.createElement(m.a,{item:!0,children:l.a.createElement(m.a,{container:!0,justify:"flex-end"},l.a.createElement(m.a,{item:!0,children:l.a.createElement(b.a,{variant:"outlined",onClick:r,disabled:n,children:"Adicionar Sele\xe7\xe3o"})}))})))},j=n(65),w=n.n(j),O=n(64),S=n.n(O),A=n(142),F=n(35),k=n(63),C=n.n(k),D=[{name:"Instala\xe7\xf5es",children:[{name:"Instala\xe7\xf5es do Quarto",children:["Ar condicionado","TV","Isolamento Ac\xfastico"]},{name:"Instala\xe7\xf5es do Banheiro",children:["Toalha","Chuveiro"]}]},{name:"Ponto de Interesse",children:[{name:"Cidade",children:[]},{name:"Endere\xe7o",children:["Rua"]}]}],U=n(155),I=n(151),L=n(137),V=n(154),T=n(150),W=n(141),G=n(156),N=function(e){var t=e.inputLabel,n=e.values,a=e.selected,r=e.onChange;return l.a.createElement(L.a,{style:{minWidth:"100%"}},l.a.createElement(V.a,null,t),l.a.createElement(T.a,{value:a,onChange:r},n.map((function(e){return l.a.createElement(W.a,{key:e,value:e},e)}))))},B=function(e){return l.a.createElement(L.a,{style:{minWidth:"100%"}},l.a.createElement(G.a,{label:"Digite Aqui",defaultValue:e.defaultValue}))},q=function(e){var t=e.onDelete,n=e.id,r=e.defaultValue,c=Object(a.useState)({first:null,second:null,third:null}),i=Object(u.a)(c,2),d=i[0],s=i[1],f=D.map((function(e){return e.name})),E=d.first?d.first.children.map((function(e){return e.name})):[],h=d.second?d.second.children:[],p=function(e){return function(t){var n;switch(e){case"first":n=D.find((function(e){return e.name===t.target.value}));break;case"second":n=d.first.children.find((function(e){return e.name===t.target.value}));break;case"third":n=t.target.value;break;default:throw Error("Invalid field parameter")}s(Object(o.a)({},d,Object(F.a)({},e,n)))}};return l.a.createElement(m.a,{container:!0,wrap:"nowrap",justify:"space-between",spacing:2},l.a.createElement(m.a,{item:!0,container:!0,wrap:"nowrap",justify:"space-around",spacing:2,style:{flex:"2"}},l.a.createElement(m.a,{item:!0,children:l.a.createElement(N,{onChange:p("first"),selected:d.first?d.first.name:"",values:f,inputLabel:"N\xedvel 1"}),style:{flex:"1"}}),l.a.createElement(m.a,{item:!0,children:l.a.createElement(N,{onChange:p("second"),selected:d.second?d.second.name:"",values:E,inputLabel:"N\xedvel 2"}),style:{flex:"1"}}),l.a.createElement(m.a,{item:!0,children:l.a.createElement(N,{onChange:p("third"),selected:d.third?d.third.name:"",values:h,inputLabel:"N\xedvel 3"}),style:{flex:"1"}})),l.a.createElement(m.a,{item:!0,container:!0,justify:"space-between",wrap:"nowrap",style:{flex:"1"}},l.a.createElement(m.a,{item:!0,children:l.a.createElement(B,{defaultValue:r}),style:{flex:"3"}}),l.a.createElement(m.a,{item:!0,container:!0,justify:"center",style:{flex:"1"}},l.a.createElement(m.a,{item:!0},l.a.createElement(U.a,{title:"Expl\xedcito"},l.a.createElement(I.a,{color:"primary",style:{flex:"1",marginLeft:"0px"}}))),l.a.createElement(m.a,{item:!0},l.a.createElement(U.a,{title:"Deletar"},l.a.createElement(b.a,{onClick:function(){return t(n)},children:l.a.createElement(C.a,null)}))))))},z=function(e){var t=e.handleAdd,n=e.handleDelete,a=e.annotations;return l.a.createElement(l.a.Fragment,null,l.a.createElement(J,{onAdd:t}),l.a.createElement(v.a,{style:{padding:"1rem"}},a.map((function(e){return l.a.createElement(q,{key:e.id,id:e.id,onDelete:n,defaultValue:e.text})}))))},J=function(e){var t=e.onAdd;return l.a.createElement(A.a,{position:"static",color:"default",style:{padding:"1rem"}},l.a.createElement(m.a,{container:!0,wrap:"nowrap",justify:"space-between"},l.a.createElement(m.a,{item:!0,children:l.a.createElement(b.a,{onClick:function(){return alert("Not implemented :'(")},size:"small",variant:"outlined",color:"primary"},l.a.createElement(S.a,null))}),l.a.createElement(m.a,{item:!0,children:l.a.createElement(b.a,{onClick:t,size:"small",variant:"outlined",color:"secondary"},l.a.createElement(w.a,null))})))},M=function(e){var t=e.annotation,n=e.text,r=e.handleAdd,c=e.handleDelete,i=Object(a.useState)(null),o=Object(u.a)(i,2),d=o[0],s=o[1],f=h.d(window.getSelection,(function(e){return e?e.anchorOffset-e.focusOffset===0?null:e:null}),h.c(h.b(0),h.a(null),s));return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{disableGutters:!0,maxWidth:"xl",style:{padding:"1rem",flex:"1"}},l.a.createElement(m.a,{container:!0,direction:"column",justify:"space-evenly",spacing:2},l.a.createElement(m.a,{item:!0,children:l.a.createElement(g,{text:n,hasSelection:!d,handleSelection:f,handleAdd:function(){return r(d)}}),style:{flexGrow:1}}),l.a.createElement(m.a,{item:!0,children:l.a.createElement(z,{annotations:t,handleDelete:c,handleAdd:r}),style:{flexGrow:1}}))))},R=n(66),P=n.n(R),Q=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{accept:"text/*",id:"upload-files",multiple:!0,type:"file",style:{display:"none"},onInput:e.handleUpload}),l.a.createElement("label",{htmlFor:"upload-files"},l.a.createElement(b.a,{variant:"contained",component:"span"},l.a.createElement(P.a,null))))},$=n(158),H=n(145),K=n(144),X=n(98),Y=n(146),Z=n(140),_=n(67),ee=n.n(_),te=n(70),ne=n.n(te),ae=n(68),le=n.n(ae),re=n(69),ce=n.n(re),ie=function(e){var t=e.handleSelect,n=e.files,r=e.currentFile,c=Object(a.useState)(!1),i=Object(u.a)(c,2),o=i[0],m=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{onClick:function(){return m(!0)},variant:"contained"},l.a.createElement(ee.a,null)),l.a.createElement(E.a,{onClose:function(){return m(!1)},open:o},l.a.createElement(K.a,null,"Textos:"),l.a.createElement(Z.a,null,n.map((function(e){return l.a.createElement(oe,{key:e.filename,handleSelect:function(e){m(!1),t(e)},filename:e.filename,touched:e.touched,currentFile:r})})))))},oe=function(e){var t=e.handleSelect,n=e.filename,a=e.touched,r=e.currentFile;return l.a.createElement(X.a,{autoFocus:!0,button:!0,onClick:function(){return t(n)}},l.a.createElement(H.a,null,l.a.createElement($.a,null,l.a.createElement(le.a,null))),l.a.createElement(Y.a,{primary:n}),r===n?l.a.createElement(ce.a,null):a?l.a.createElement(ne.a,{style:{color:"green",marginLeft:"16px"}}):l.a.createElement(l.a.Fragment,null))},ue=function(e){var t=e.handleFileSelect,n=e.handleUpload,a=e.files,r=e.currentFile;return l.a.createElement(A.a,{position:"static"},l.a.createElement(m.a,{container:!0,wrap:"nowrap",justify:"space-between",style:{padding:"0.5rem"}},l.a.createElement(m.a,{item:!0,children:l.a.createElement(y.a,{align:"center",variant:"h4",children:"FAMA"})}),l.a.createElement(m.a,{item:!0,container:!0,justify:"flex-end",spacing:1},l.a.createElement(m.a,{item:!0,children:l.a.createElement(ie,{currentFile:r,handleSelect:t,files:a})}),l.a.createElement(m.a,{item:!0,children:l.a.createElement(Q,{handleUpload:n})}),l.a.createElement(m.a,{item:!0,children:l.a.createElement(b.a,{variant:"contained"},"Ajuda")}),l.a.createElement(m.a,{item:!0,children:l.a.createElement(b.a,{variant:"contained",children:"LOGOUT"})}))))},me=function(e){var t=e.handleUpload;return l.a.createElement(E.a,{open:!0},l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(f.a,{title:"Envie arquivos para anotar",style:{margin:"32px 16px"}}),l.a.createElement(s.a,null,l.a.createElement(m.a,{container:!0,justify:"center"},l.a.createElement(m.a,{item:!0,children:l.a.createElement(Q,{handleUpload:t})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(96);c.a.render(l.a.createElement((function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),m=Object(u.a)(c,2),d=m[0],s=m[1],f=Object(a.useState)([]),E=Object(u.a)(f,2),h=E[0],p=E[1];Object(a.useEffect)((function(){if(null!==d&&null===d.text){!function(e){var t=new FileReader;t.onload=function(){r(n.map((function(e){return e.id===d.id?Object(o.a)({},e,{text:t.result}):e}))),s(Object(o.a)({},d,{text:t.result}))},t.readAsText(e)}(d.file)}}),[d]),Object(a.useEffect)((function(){null!==d&&s(Object(o.a)({},d,{annotation:h}))}),[h]);var v=function(e){var t=e.target.files;t=Array.from(t).map((function(e,t){return{id:t,file:e,touched:!1,text:null,annotation:[]}})).sort((function(e,t){return e.id<t.id?-1:1})),r(t),s(t[0])};return l.a.createElement(l.a.Fragment,null,l.a.createElement(ue,{handleUpload:v,handleFileSelect:function(e){r(n.map((function(e){return e.id===d.id?Object(o.a)({},e,{},d,{touched:!0}):e})).sort((function(e,t){return e.id<t.id?-1:1})));var t=n.find((function(t){return t.file.name===e}));s(t)},files:n.map((function(e){return{filename:e.file.name,touched:e.touched}})),currentFile:d?d.file.name:null}),null===d?l.a.createElement(me,{handleUpload:v}):l.a.createElement(M,{annotation:d.annotation,handleAdd:function(e){var t=e?String(e):"",n=[].concat(Object(i.a)(h),[{id:h.length+1,text:t,first:null,second:null,third:null}]);p(n)},handleDelete:function(e){var t=h.filter((function(t){return t.id!==e}));p(t)},text:d.text}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[85,1,2]]]);
//# sourceMappingURL=main.63ea9020.chunk.js.map