(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{30:function(e,t,i){e.exports=i(62)},35:function(e,t,i){},36:function(e,t,i){},55:function(e,t,i){},62:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),u=i(25),r=i.n(u),l=(i(35),i(36),i(61),i(11)),o=i(6);var c=function(){return n.a.createElement("div",null,n.a.createElement("wired-search-input",null),n.a.createElement("p",null,"Ex nulla consequat est eu aute minim est. Aute excepteur id labore sunt. Irure est cupidatat excepteur id excepteur. Fugiat anim reprehenderit adipisicing adipisicing. Duis nisi duis exercitation do exercitation deserunt amet. Aliquip commodo velit deserunt minim. Consectetur aute velit fugiat eu esse esse ut cupidatat anim proident. Do aliquip elit irure cupidatat labore sunt cupidatat quis duis est enim. Officia consequat elit ad duis ut irure ea nulla mollit. Esse qui duis cillum exercitation dolore eu cupidatat sunt aliquip reprehenderit incididunt aliquip. Mollit excepteur non laboris nulla consequat labore irure id irure ullamco aute nulla excepteur. Cupidatat Lorem tempor aliquip sit id fugiat pariatur ea nisi. Velit non ut non velit cupidatat exercitation magna fugiat laboris irure. Est duis est ex sit consectetur. Quis duis excepteur enim exercitation aliquip consequat mollit ullamco. Reprehenderit occaecat proident ut ut nostrud est mollit. Lorem et nostrud deserunt excepteur dolor elit. Do elit magna officia est esse nulla ullamco elit fugiat. Consequat aute excepteur dolore magna sint est consectetur pariatur reprehenderit do occaecat velit exercitation excepteur. Magna Lorem laboris in proident. Et nulla fugiat et nostrud laborum reprehenderit minim officia ex pariatur do deserunt. Est culpa sint excepteur aliqua irure. Sint nisi labore laborum id incididunt eiusmod do. Ut culpa excepteur commodo culpa. Pariatur do ullamco voluptate occaecat pariatur laborum sint reprehenderit veniam non ex nisi incididunt quis. Laboris tempor ipsum aliquip amet eiusmod adipisicing. Exercitation commodo sint eu non ullamco ex enim magna enim reprehenderit in ex. Dolor qui excepteur in ex officia minim nostrud est. Sint id fugiat ipsum ad consequat laborum minim consequat proident veniam exercitation nisi laboris laboris. Mollit consequat et do in in id veniam aliquip ut magna anim qui. Non amet exercitation nulla aliquip aliquip sunt duis commodo in et incididunt ad tempor nisi. Voluptate consequat Lorem mollit ex adipisicing ex laboris sunt incididunt occaecat irure amet esse occaecat. Nisi aliquip ullamco esse elit. Laboris dolore do ad nulla exercitation ex. Duis occaecat et elit consectetur culpa. Quis exercitation veniam aliquip ad dolore amet eiusmod. Ad Lorem nisi minim occaecat. Cillum aliqua dolor officia ex eu adipisicing minim culpa. Velit deserunt deserunt id ad excepteur commodo sit sint excepteur. Officia laborum ipsum sint tempor enim amet ex nostrud eiusmod culpa. Ad ut enim incididunt veniam. Voluptate do dolore ad mollit do cupidatat in excepteur ad fugiat elit. Nulla dolore minim incididunt laborum ullamco sunt cupidatat amet quis est duis eiusmod. Enim veniam culpa dolor sunt exercitation. Lorem dolore ipsum ipsum enim cupidatat dolore dolore ad dolore aliqua eiusmod cillum magna. Sint consectetur non aliquip velit ullamco mollit ad est consequat voluptate eu non aliquip. Reprehenderit commodo veniam enim mollit nisi dolore veniam sit aliqua in aute exercitation ad. Nulla deserunt nulla aute nulla eu id dolore. Qui aliqua ea magna ipsum amet ad et tempor laborum nisi. Adipisicing nulla est minim dolor aliqua ullamco adipisicing nostrud veniam labore enim veniam ullamco consequat. Laboris pariatur quis exercitation deserunt duis. Nostrud non do culpa consequat pariatur aliquip consectetur ut eu do aliqua ea ea eiusmod."))};var s=function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"ToDo List"),n.a.createElement("p",null,"Prima applicazione di prova creata da ",n.a.createElement("wired-link",{href:"https://studiocamito.it"},"Simone Camito")))},m=i(8),d=i.n(m),p=i(10),f=i(29),E=i(26),v=i.n(E);i(55);function x(e){var t=n.a.createRef(),i=Object(a.useState)({user:{},loading:!0}),u=Object(f.a)(i,2),r=u[0],l=u[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var t,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("https://api.github.com/users/malpenzibo");case 2:t=e.sent,i=t.data,l(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){null!=t.current&&t.current.requestUpdate()})),r.loading?n.a.createElement("wired-spinner",{spinning:!0}):n.a.createElement("wired-card",null,n.a.createElement("div",{className:"userCard"},n.a.createElement("wired-image",{elevation:"4",src:r.avatar_url}),n.a.createElement("div",null,n.a.createElement("h3",null,r.login),n.a.createElement("div",null,n.a.createElement("span",null,"Name:"),n.a.createElement("span",null,r.name)),n.a.createElement("div",null,n.a.createElement("span",null,"WebSite:"),n.a.createElement("span",null,n.a.createElement("wired-link",{ref:t,href:r.blog},r.blog))),n.a.createElement("div",null,n.a.createElement("span",null,"Followers:"),n.a.createElement("span",null,r.followers)))))}var q=function(){var e=[{path:"/",display:"Search",component:c},{path:"/user",display:"User",component:x},{path:"/about",display:"About",component:s}],t=e.map((function(e){return n.a.createElement("li",{key:e.path},n.a.createElement(l.b,{exact:!0,to:e.path},n.a.createElement("wired-link",{href:"/"},e.display)))})),i=e.map((function(e){return n.a.createElement(o.a,{key:e.path,exact:!0,path:e.path,component:e.component})}));return n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"React Test"),n.a.createElement("wired-divider",null)),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",null,t)),n.a.createElement("div",{className:"content"},i)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(l.a,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.3af4ded8.chunk.js.map