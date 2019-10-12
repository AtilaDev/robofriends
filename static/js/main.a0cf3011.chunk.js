(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(9),c=n.n(a),i=n(10),s=n(17),l=n(18),u=n(8),h=(n(29),n(2)),d=n(3),f=n(5),p=n(4),b=n(6),g=function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,r)))},m=function(e){var t=e.robots;console.log("CardList");var n=t.map((function(e){return o.a.createElement(g,{key:e.id,id:e.id,name:e.name,email:e.email})}));return o.a.createElement("div",null,n)},v=function(e){e.searchfield;var t=e.searchChange;return console.log("SearchBox"),o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{type:"search",placeholder:"search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},E=function(e){var t=e.children;return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},t)},O=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).state={hasError:!1},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),t}(r.Component),y=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).updateCount=function(){n.setState((function(e){return{count:e.count+1}}))},n.state={count:0},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),o.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(r.Component),j=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("Header"),o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(y,{color:"red"}))}}]),t}(r.Component),w=(n(30),function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?o.a.createElement("h1",null,"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement(j,null),o.a.createElement(v,{searchChange:n}),o.a.createElement(E,null,o.a.createElement(O,null,o.a.createElement(m,{robots:c}))))}}]),t}(o.a.Component)),C=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(w),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=n(19);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T={searchField:""},N={isPending:!1,robots:[],error:" "},U=(n(31),Object(s.createLogger)(),Object(u.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return _({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return _({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return _({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return _({},e,{error:t.payload,isPending:!1});default:return e}}})),D=Object(u.d)(U,Object(u.a)(l.a));c.a.render(o.a.createElement(i.a,{store:D},o.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");S?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.a0cf3011.chunk.js.map