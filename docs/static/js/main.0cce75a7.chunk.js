(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{30:function(e,a,t){e.exports=t(62)},35:function(e,a,t){},36:function(e,a,t){},56:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(25),l=t.n(r),o=(t(35),t(36),t(37),t(10)),u=t(5),c=t(8);var s=function(){var e,a="Ipsum fugiat deserunt reprehenderit eiusmod pariatur culpa adipisicing tempor. Elit id aute cillum aliquip irure esse minim in sint reprehenderit laboris. Laboris ad cillum sit aliquip veniam ipsum culpa mollit et magna ut.\n\nCupidatat quis veniam sint adipisicing laborum commodo laborum aliqua enim amet. Consectetur consequat laborum ea commodo. Laboris fugiat non excepteur magna dolore.\n\nExcepteur Lorem exercitation deserunt eu proident ipsum sit in amet. Ut sunt sunt eu do nostrud adipisicing. Nisi sint do id commodo sint deserunt Lorem dolor ipsum enim nulla qui aliqua.\n\nPariatur dolor commodo sit cupidatat. Labore officia consectetur dolor sint voluptate deserunt qui aliqua ea. Cillum id sit reprehenderit eiusmod eiusmod Lorem id ullamco. Occaecat reprehenderit in consequat est. Irure Lorem nostrud nulla eu eu incididunt adipisicing incididunt incididunt proident est ea. Esse aute enim sit magna dolore deserunt. In id tempor exercitation sint laboris minim voluptate ea.\n\nEa voluptate sint proident irure consectetur ullamco elit proident duis occaecat ipsum. Dolore duis adipisicing dolore cillum ad ad officia ea cupidatat id laboris et. Reprehenderit cillum nisi aliquip laborum est cupidatat do et ex irure Lorem ipsum ullamco deserunt.\n\nSit veniam in occaecat do reprehenderit fugiat qui. Culpa occaecat culpa culpa tempor aute ex culpa tempor in cillum exercitation ex sint. In sint veniam officia pariatur cillum nulla ullamco.\n\nCillum enim commodo tempor est cillum nulla. Laborum magna ea exercitation pariatur irure sit ut ipsum deserunt qui culpa amet irure. Culpa commodo exercitation voluptate cupidatat non id occaecat eu incididunt occaecat culpa.\n\nMollit non elit pariatur non aliquip ipsum ut ut nisi qui mollit sunt enim. Sint voluptate irure in deserunt adipisicing fugiat. Tempor commodo ex aliquip consequat ex velit ad. Consectetur exercitation esse mollit esse consequat ex anim commodo ipsum non ipsum.\n\nAmet commodo qui nulla voluptate adipisicing ad commodo cupidatat nulla quis dolore Lorem. Commodo nisi laborum culpa pariatur labore sit minim cillum est dolor quis eu officia. Cillum reprehenderit dolor in ad cupidatat enim exercitation consectetur laboris nulla ipsum id. Excepteur elit nostrud fugiat non. Cillum laborum enim culpa aliqua pariatur ipsum. Occaecat anim est commodo velit. Proident et voluptate eu eu ex reprehenderit qui velit.\n\nEu ex occaecat anim esse. Laboris esse enim veniam ullamco ut elit fugiat est irure irure officia. Ullamco cillum duis commodo ullamco aliqua deserunt do duis Lorem mollit do ut. Occaecat ullamco qui officia mollit. In mollit et dolor quis nisi. Dolor minim elit enim culpa consequat eiusmod eu enim labore labore consectetur sit enim.",t=Object(n.useState)({__html:a}),r=Object(c.a)(t,2),l=r[0],o=r[1];return i.a.createElement("div",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",placeholder:"Search",id:"paperInputs1",onChange:function(t){clearTimeout(e);var n=t.target.value;e=setTimeout((function(){var e="",t=0;if(""!==n)for(var i=a.indexOf(n);-1!==i;)e+=a.substring(t,i),e+="<strong>"+a.substring(i,i+n.length)+"</strong>",t=i+n.length,i=a.indexOf(n,i+1);e+=a.substring(t,a.length),o({__html:e})}),500)}})),i.a.createElement("p",{dangerouslySetInnerHTML:l}))};var m=function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"ToDo List"),i.a.createElement("p",null,"Prima applicazione di prova creata da ",i.a.createElement("a",{href:"https://studiocamito.it"},"Simone Camito")))},d=t(12),p=t.n(d),f=t(26),v=t(27),b=t.n(v);t(56);function E(){var e=Object(n.useState)({forward:!0,value:0}),a=Object(c.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){var e=setInterval((function(){t.forward?100===t.value?r((function(e){return{forward:!1,value:100}})):r((function(e){return{forward:!0,value:e.value+1}})):0===t.value?r((function(e){return{forward:!0,value:0}})):r((function(e){return{forward:!1,value:e.value-1}}))}),150);return function(){clearInterval(e)}})),i.a.createElement("div",{className:"progress"},i.a.createElement("div",{className:"bar striped secondary w-".concat(t.value)}))}function h(){var e=Object(n.useState)({user:{},loading:!0}),a=Object(c.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("https://api.github.com/users/malpenzibo");case 2:a=e.sent,t=a.data,r(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),t.loading?i.a.createElement(E,null):i.a.createElement("div",{className:"user-content"},i.a.createElement("img",{src:t.avatar_url,alt:"avatar",className:"float-left"}),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("h4",{className:"card-title"},t.login)),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",null,i.a.createElement("span",null,"Name:"),i.a.createElement("span",null,t.name)),i.a.createElement("div",null,i.a.createElement("span",null,"WebSite:"),i.a.createElement("span",null,i.a.createElement("a",{href:t.blog},t.blog))),i.a.createElement("div",null,i.a.createElement("span",null,"Followers:"),i.a.createElement("span",null,t.followers)))))}var g=Object(u.e)((function(e){var a=[{path:"/",display:"Search",component:s},{path:"/user",display:"User",component:h},{path:"/about",display:"About",component:m}],t=Object(n.createRef)(),r=a.map((function(e){return i.a.createElement("li",{key:e.path},i.a.createElement(o.b,{exact:!0,to:e.path},e.display))})),l=a.map((function(e){return i.a.createElement(u.a,{key:e.path,exact:!0,path:e.path,component:e.component})}));return Object(n.useEffect)((function(){var a=e.history.listen((function(e,a){t.current.checked=!1}));return function(){a()}})),i.a.createElement("div",null,i.a.createElement("nav",{className:"fixed split-nav"},i.a.createElement("div",{className:"nav-brand"},i.a.createElement("h3",null,"React Test")),i.a.createElement("div",{className:"collapsible"},i.a.createElement("input",{id:"collapsible1",type:"checkbox",name:"collapsible",ref:t}),i.a.createElement("button",null,i.a.createElement("label",{htmlFor:"collapsible1"},i.a.createElement("div",{className:"bar1"}),i.a.createElement("div",{className:"bar2"}),i.a.createElement("div",{className:"bar3"}))),i.a.createElement("div",{className:"collapsible-body"},i.a.createElement("ul",{className:"inline"},r)))),i.a.createElement("div",{className:"content"},l))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(o.a,{basename:"/reactTest",hashType:"noslash"},i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.0cce75a7.chunk.js.map