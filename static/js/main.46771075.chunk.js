(this["webpackJsonpfun-kommerce-murzi"]=this["webpackJsonpfun-kommerce-murzi"]||[]).push([[0],{162:function(e,t,c){},164:function(e,t,c){},173:function(e,t,c){},174:function(e,t,c){},175:function(e,t,c){},176:function(e,t,c){},177:function(e,t,c){},178:function(e,t,c){},179:function(e,t,c){},180:function(e,t,c){},181:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(67),s=c.n(r),i=(c(162),c(2)),j=c(4),l=c(11),d=c(12),o=(c(163),c(164),c(45)),b=c(14),u=c(3),O=Object(a.createContext)([]),h=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(b.a)(c,2),r=n[0],s=n[1];return Object(u.jsx)(O.Provider,{value:{items:r,addItem:function(e,t){var c;c=e.id,r.find((function(e){return e.id===c}))?s(r.map((function(c){return c.id===e.id&&(c.qty+=t),c}))):s([].concat(Object(o.a)(r),[{id:e.id,name:e.title,price:e.price,qty:t,image:e.img}]))},removeItem:function(e){s(r.filter((function(t){return t.id!==e})))},clearItems:function(){s([])},totalProductos:function(){return r.reduce((function(e,t){return e+t.qty*t.price}),0)},scrollTop:function(){window.scroll(0,0)}},children:t})},m=c(22),x=c(18),p=c(197),f=c(195),v=c(145),C=c(1),N=c.n(C),g=c(6),k=c(16),I=c(37),y=c(198),w=c(194),S=c(193),D=c(21),B=c(142),U=Object(B.a)({apiKey:"AIzaSyC0lXCO22GAa0lOXaM7sCzidoe8I1-J4hY",authDomain:"funko-mmerce.firebaseapp.com",projectId:"funko-mmerce",storageBucket:"funko-mmerce.appspot.com",messagingSenderId:"379678573496",appId:"1:379678573496:web:b8f3895f0a50cb88d0854d"}),E=Object(D.d)(U),q={name:"",lastName:"",email:"",adress:"",adressNumber:""},T=function(){var e=Object(a.useContext)(O),t=e.totalProductos,c=e.items,n=Object(a.useState)(q),r=Object(b.a)(n,2),s=r[0],i=r[1],j=Object(a.useState)(""),l=Object(b.a)(j,2),d=l[0],o=l[1],h=Object(a.useState)(!0),m=Object(b.a)(h,2),x=m[0],f=m[1],v=Object(a.useState)(!1),C=Object(b.a)(v,2),B=C[0],U=C[1],T=function(e){var t=e.target,c=t.name,a=t.value;i(Object(I.a)(Object(I.a)({},s),{},Object(k.a)({},c,a)))},F=function(){var e=Object(g.a)(N.a.mark((function e(a){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),a.preventDefault(),n=t(),e.next=5,Object(D.a)(Object(D.b)(E,"ordenesDeCompra"),{datos:s,precioTotal:n,items:c});case 5:r=e.sent,o(r),f(!1),i(q),U(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsx)(y.a,{inverted:!0,children:Object(u.jsxs)(w.a,{inverted:!0,onSubmit:F,children:[Object(u.jsxs)(w.a.Group,{children:[Object(u.jsx)(w.a.Input,{fluid:!0,label:"Nombre",placeholder:"Ingres\xe1 tu nombre",width:9,name:"name",value:s.name,onChange:T}),Object(u.jsx)(w.a.Input,{fluid:!0,label:"Apellido",placeholder:"Ingres\xe1 tu apellido",width:9,name:"lastName",value:s.lastName,onChange:T})]}),Object(u.jsx)(w.a.Group,{children:Object(u.jsx)(w.a.Input,{fluid:!0,label:"Email",placeholder:"Ingres\xe1 tu email",width:16,name:"email",value:s.email,onChange:T})}),Object(u.jsxs)(w.a.Group,{children:[Object(u.jsx)(w.a.Input,{fluid:!0,label:"Direcci\xf3n",placeholder:"Ingres\xe1 la calle del envio",width:11,name:"adress",value:s.adress,onChange:T}),Object(u.jsx)(w.a.Input,{fluid:!0,label:"Altura",placeholder:"Altura",width:5,name:"adressNumber",value:s.adressNumber,onChange:T})]}),Object(u.jsx)(w.a.Checkbox,{label:"Estoy de acuerdo con los t\xe9rminos y condiciones"}),x?Object(u.jsx)(p.a,{type:"submit",children:"Finalizar compra"}):Object(u.jsx)(S.a,{inverted:!0,children:"Loading"}),B?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Su ID de transacci\xf3n es:"}),Object(u.jsx)("h2",{children:d.id}),Object(u.jsx)("h3",{children:"Por favor, guarde este c\xf3digo para realizar el seguimiento de su compra"})]}):null]})})})},F=(c(173),function(){var e=Object(a.useContext)(O),t=e.items,c=e.removeItem,n=e.clearItems,r=e.totalProductos;return console.log(t),Object(u.jsx)("div",{children:0===t.length?Object(u.jsxs)("div",{className:"empyCartContainer",children:[Object(u.jsx)("h2",{className:"cartVacioTitle",children:"Tu carrito esta vacio."}),Object(u.jsx)(m.b,{to:"/",children:Object(u.jsx)(p.a,{className:"goHomeBtn",children:"Quiero comprar algo"})})]}):Object(u.jsx)("div",{className:"CardContainer",children:Object(u.jsxs)("div",{className:"CardUserCart",children:[Object(u.jsxs)("div",{className:"carrito",children:[Object(u.jsx)("h1",{className:"cartTitle",children:"Tus productos"}),t.map((function(e){return Object(u.jsx)("div",{className:"CardUser2",children:Object(u.jsxs)(f.a,{style:{height:550},className:"imageCard",children:[Object(u.jsx)(v.a,{src:e.image,wrapped:!0,ui:!1,style:{height:290}}),Object(u.jsxs)(f.a.Content,{children:[Object(u.jsx)(f.a.Header,{className:"priceContainer",children:Object(u.jsx)("span",{className:"price",children:e.name})}),Object(u.jsxs)(f.a.Header,{children:["U$D ",e.price]}),Object(u.jsxs)(f.a.Description,{children:["Cantidad: ",e.qty]}),Object(u.jsx)("h4",{onClick:function(){return c(e.id)},className:"removeBtn",children:Object(u.jsx)("a",{children:"Borrar producto"})}),Object(u.jsxs)("h4",{className:"subtotal",children:["Subtotal: U$D ",e.price*e.qty]})]})]})},e.id)})),Object(u.jsxs)("div",{className:"twoBtn",children:[Object(u.jsx)(m.b,{to:"/cart",children:Object(u.jsx)(p.a,{negative:!0,onClick:function(){return n()},children:"Vaciar carrito"})}),Object(u.jsx)(m.b,{to:"/",children:Object(u.jsx)(p.a,{positive:!0,children:"Continuar comprando"})})]})]}),Object(u.jsxs)("div",{className:"total",children:[Object(u.jsxs)("h4",{className:"totalPrice",children:["Total ",Object(u.jsxs)("span",{children:["U$D ",parseFloat(r()).toFixed(2)]})]}),Object(u.jsx)(T,{})]})]})})})}),z=c(93),A=(c(174),function(e){var t=e.data;return Object(u.jsxs)(f.a,{style:{height:450},className:"imageCard",children:[Object(u.jsx)(v.a,{className:"imageContainer",src:t.img,wrapped:!0,ui:!1,style:{height:290}}),Object(u.jsxs)(f.a.Content,{children:[Object(u.jsx)(f.a.Header,{className:"priceContainer",children:Object(u.jsx)("span",{className:"price",children:t.title})}),Object(u.jsxs)(f.a.Header,{children:["U$D ",t.price]}),Object(u.jsx)(f.a.Description,{children:t.quote})]})]})}),H=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(O).addItem;return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(N.a.mark((function e(){var t,c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(D.e)(Object(D.b)(E,"funko"),Object(D.f)("universe","==","DC")),e.next=3,Object(D.c)(t);case 3:c=e.sent,a=[],c.forEach((function(e){a.push(Object(I.a)({},e.data()))})),n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsx)("div",{className:"CardContainer",children:Object(u.jsx)("div",{className:"CardUser",children:c.map((function(e){return Object(u.jsxs)("div",{className:"CardUser2",children:[Object(u.jsx)(m.b,{to:"/detail/".concat(e.id),children:Object(u.jsx)(A,{data:e})}),Object(u.jsxs)(p.a,{animated:"vertical",className:"shopBtn",children:[Object(u.jsx)(p.a.Content,{hidden:!0,className:"btnCart",onClick:function(){return r(e,1)},children:"Shop"}),Object(u.jsx)(p.a.Content,{visible:!0,className:"carritoBtn",children:Object(u.jsx)(z.a,{name:"shop"})})]})]},e.id)}))})})},M=(c(175),function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(O),s=r.addItem,i=r.scrollTop;return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(N.a.mark((function e(){var t,c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(D.e)(Object(D.b)(E,"funko")),e.next=3,Object(D.c)(t);case 3:c=e.sent,a=[],c.forEach((function(e){a.push(Object(I.a)({},e.data()))})),n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsx)("div",{className:"CardContainer",children:Object(u.jsx)("div",{className:"CardUser",children:c.map((function(e){return Object(u.jsxs)("div",{className:"CardUser2",children:[Object(u.jsx)(m.b,{to:"/detail/".concat(e.id),onClick:i,children:Object(u.jsx)(A,{data:e})}),Object(u.jsxs)(p.a,{animated:"vertical",className:"shopBtn",onClick:function(){return s(e,1)},children:[Object(u.jsx)(p.a.Content,{hidden:!0,className:"btnCart",onClick:function(){return s(e,1)},children:"Shop"}),Object(u.jsx)(p.a.Content,{visible:!0,className:"carritoBtn",children:Object(u.jsx)(z.a,{name:"shop"})})]})]},e.id)}))})})}),P=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(M,{})})},$=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(O).addItem;return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(N.a.mark((function e(){var t,c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(D.e)(Object(D.b)(E,"funko"),Object(D.f)("universe","==","Marvel")),e.next=3,Object(D.c)(t);case 3:c=e.sent,a=[],c.forEach((function(e){a.push(Object(I.a)({},e.data()))})),n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsx)("div",{className:"CardContainer",children:Object(u.jsx)("div",{className:"CardUser",children:c.map((function(e){return Object(u.jsxs)("div",{className:"CardUser2",children:[Object(u.jsx)(m.b,{to:"/detail/".concat(e.id),children:Object(u.jsx)(A,{data:e})}),Object(u.jsxs)(p.a,{animated:"vertical",className:"shopBtn",children:[Object(u.jsx)(p.a.Content,{hidden:!0,className:"btnCart",onClick:function(){return r(e,1)},children:"Shop"}),Object(u.jsx)(p.a.Content,{visible:!0,className:"carritoBtn",children:Object(u.jsx)(z.a,{name:"shop"})})]})]},e.id)}))})})},G=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(O).addItem;return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(N.a.mark((function e(){var t,c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(D.e)(Object(D.b)(E,"funko"),Object(D.f)("universe","==","Dragon Ball")),e.next=3,Object(D.c)(t);case 3:c=e.sent,a=[],c.forEach((function(e){a.push(Object(I.a)({},e.data()))})),n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsx)("div",{className:"CardContainer",children:Object(u.jsx)("div",{className:"CardUser",children:c.map((function(e){return Object(u.jsxs)("div",{className:"CardUser2",children:[Object(u.jsx)(m.b,{to:"/detail/".concat(e.id),children:Object(u.jsx)(A,{data:e})}),Object(u.jsxs)(p.a,{animated:"vertical",className:"shopBtn",children:[Object(u.jsx)(p.a.Content,{hidden:!0,className:"btnCart",onClick:function(){return r(e,1)},children:"Shop"}),Object(u.jsx)(p.a.Content,{visible:!0,className:"carritoBtn",children:Object(u.jsx)(z.a,{name:"shop"})})]})]},e.id)}))})})},J=(c(176),c.p+"static/media/goku-blanco-cart.03bcde87.png"),K=(c(177),function(){var e=Object(a.useContext)(O).items,t=0;return e.map((function(e){return t+=e.qty})),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("a",{href:".",children:Object(u.jsx)("img",{src:J,alt:"",className:"gokuCart"})})]})}),R=c.p+"static/media/Marvel-logo.1153660c.png",V=c.p+"static/media/DC.1cac6c05.png",X=c.p+"static/media/dragon.60b8dcb0.png",L=function(){return Object(u.jsxs)("div",{className:"containerNav",children:[Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(m.c,{to:"/",children:Object(u.jsx)(z.a,{name:"home",size:"huge",className:"home"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(m.c,{to:"/marvel",children:Object(u.jsx)("img",{src:R,alt:"",className:"marvel"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(m.c,{to:"/dc",children:Object(u.jsx)("img",{src:V,alt:"",className:"dc"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(m.c,{to:"/dragonball",children:Object(u.jsx)("img",{src:X,alt:"",className:"dragon"})})})]}),Object(u.jsx)("div",{className:"cartWidget",children:Object(u.jsx)(m.c,{to:"/cart",children:Object(u.jsx)(K,{})})})]})},Q=(c(178),function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m.b,{to:"/",className:"Header",children:Object(u.jsx)("h1",{className:"titleHeader",children:"FUNKO-MMERCE"})}),Object(u.jsx)(L,{})]})}),W=(c(179),c(180),function(e){var t=e.item,c=e.stock,n=(e.initial,e.addItem),r=Object(a.useState)(1),s=Object(b.a)(r,2),i=s[0],j=s[1];return Object(u.jsx)("div",{className:"counterSection",children:Object(u.jsxs)("div",{className:"counterBtn",children:[Object(u.jsxs)("div",{className:"counterJoystick",children:[Object(u.jsx)(p.a,{negative:!0,className:"btn",onClick:function(){i>1&&j(i-1)},children:"-"}),Object(u.jsxs)("p",{className:"counter",children:[" ",i," "]}),Object(u.jsx)(p.a,{positive:!0,className:"btn",onClick:function(){i<c&&j(i+1)},children:"+"})]}),Object(u.jsx)(m.b,{to:"/cart",children:Object(u.jsx)(p.a,{inverted:!0,color:"green",onClick:function(){return n(t,i)},children:"Agregar al carrito"})})]})})}),Y=function(){var e=Object(x.g)().id,t=Object(a.useState)([]),c=Object(b.a)(t,2),n=c[0],r=c[1],s=Object(a.useContext)(O).addItem;return Object(a.useEffect)((function(){var t=function(){var t=Object(g.a)(N.a.mark((function t(){var c,a,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(D.e)(Object(D.b)(E,"funko"),Object(D.f)("id","==","".concat(e))),t.next=3,Object(D.c)(c);case 3:a=t.sent,n=[],a.forEach((function(e){n.push(Object(I.a)({},e.data()))})),r(n[0]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(u.jsxs)("div",{className:"detail",children:[Object(u.jsx)("h1",{className:"detailTitle",children:"Detalle de producto"}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"imageContainerDetail",children:Object(u.jsx)("img",{src:n.img,alt:"imagen de producto"})}),Object(u.jsxs)("div",{className:"detailRight",children:[Object(u.jsx)("h1",{className:"title",children:n.title}),Object(u.jsx)("h2",{className:"quote",children:n.quote}),Object(u.jsxs)("h3",{className:"price",children:["U$D ",n.price]})]}),Object(u.jsxs)("div",{className:"stockContainer",children:[Object(u.jsx)(W,{item:n,stock:n.stock,initial:1,addItem:s}),Object(u.jsxs)("h4",{className:"stock",children:["Stock disponible: ",n.stock]})]})]},n.id)]})},Z=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(m.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(Q,{}),Object(u.jsxs)(x.c,{children:[Object(u.jsx)(x.a,{path:"/",element:Object(u.jsx)(P,{})}),Object(u.jsx)(x.a,{path:"/marvel",element:Object(u.jsx)($,{})}),Object(u.jsx)(x.a,{path:"/dc",element:Object(u.jsx)(H,{})}),Object(u.jsx)(x.a,{path:"/dragonball",element:Object(u.jsx)(G,{})}),Object(u.jsx)(x.a,{path:"/detail/:id",element:Object(u.jsx)(Y,{})}),Object(u.jsx)(x.a,{path:"/cart",element:Object(u.jsx)(F,{})})]})]})})})},_=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h,{children:Object(u.jsx)(Z,{})})})}}]),c}(a.Component),ee=_;s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(ee,{})}),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.46771075.chunk.js.map