(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{14:function(e,i,c){"use strict";c.r(i);var t=c(1),n=c.n(t),r=c(8),a=c.n(r),s=c(6),o=c(2),m=(c(7),c(0));var d=function(e){var i=Object(t.useState)(!1),c=Object(o.a)(i,2),n=c[0],r=c[1];return Object(t.useEffect)((function(){!0===e.isGameOver&&r(!1)}),[e.isGameOver]),Object(m.jsxs)("div",{className:"card-container",onClick:function(){e.randomize(),console.log(n),e.parentCallback(n),r(!0)},children:[Object(m.jsx)("img",{src:e.img,alt:e.description}),Object(m.jsx)("p",{className:"description",children:e.description})]})};var b=function(){return Object(m.jsx)("h1",{children:"Minecraft Memory Game"})};var p=function(){var e=Object(t.useState)([{img:"minecraft/Grass_Block.webp",description:"Grass"},{img:"minecraft/Carved_Pumpkin.webp",description:"Pumpkin"},{img:"minecraft/Furnace.webp",description:"Furnace"},{img:"minecraft/Oak_Planks.webp",description:"Oak Planks"},{img:"minecraft/Bookshelf.webp",description:"Bookshelf"},{img:"minecraft/Dispenser.webp",description:"Dispenser"},{img:"minecraft/Hay_Bale.webp",description:"Hay Bale"},{img:"minecraft/Ladder.webp",description:"Ladder"},{img:"minecraft/Melon.webp",description:"Melon"},{img:"minecraft/Oak_Log.webp",description:"Oak Log"},{img:"minecraft/Stone_Bricks.webp",description:"Stone Bricks"},{img:"minecraft/Chest.webp",description:"Chest"},{img:"minecraft/Birch_Log.webp",description:"Birch Log"},{img:"minecraft/Diamond_Ore.webp",description:"Diamond Ore"},{img:"minecraft/Cobblestone.webp",description:"Cobblestone"}]),i=Object(o.a)(e,2),c=i[0],n=i[1],r=Object(t.useState)(0),a=Object(o.a)(r,2),p=a[0],j=a[1],f=Object(t.useState)(0),l=Object(o.a)(f,2),O=l[0],u=l[1],g=Object(t.useState)(!1),h=Object(o.a)(g,2),k=h[0],v=h[1],w=function(e){for(var i,c=e.length;0!==c;){i=Math.floor(Math.random()*c),c--;var t=[e[i],e[c]];e[c]=t[0],e[i]=t[1]}return e},x=function(){var e=Object(s.a)(c);e=w(e),n(e)},B=function(e){!1===e?j(p+1):v(!0)};return Object(t.useEffect)((function(){j(0),v(!1)}),[k]),Object(t.useEffect)((function(){p>O&&u(p)}),[p,O]),Object(t.useEffect)((function(){var e=Object(s.a)(c);e=w(e),n(e)}),[]),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(b,{}),Object(m.jsxs)("h3",{children:["High Score: ",O]}),Object(m.jsxs)("h3",{children:["Score: ",p]}),Object(m.jsx)("p",{children:"Only click on each image once!"})]}),Object(m.jsx)("div",{className:"all-cards",children:c.map((function(e){return Object(m.jsx)(d,{img:e.img,description:e.description,randomize:x,parentCallback:B,isGameOver:k},e.description)}))})]})};a.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))},7:function(e,i,c){}},[[14,1,2]]]);
//# sourceMappingURL=main.ced0ff51.chunk.js.map