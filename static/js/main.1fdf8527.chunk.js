(this["webpackJsonpcomunication-components-react"]=this["webpackJsonpcomunication-components-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),o=(n(14),n(15),n(16),n(1)),s=n(2),i=n(4),u=n(3),m=n(8),d=n.n(m),b=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark"},c.a.createElement("span",{className:"navbar-brand"},c.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),"Comunicaci\xf3n entre componentes"))}}]),n}(a.Component),p=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e="jumbotron jumbotron-fluid ".concat(this.props.bg&&"bg-".concat(this.props.bg)," ").concat(this.props.bg&&"text-".concat(this.props.color));return c.a.createElement("div",{className:e},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},this.props.title),c.a.createElement("p",{className:"lead"},this.props.content)))}}]),n}(a.Component),h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={message:"****"},e.dispatchAlert=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Alert from child";alert(n),e.setState({message:n})},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-secondary",onClick:this.dispatchAlert},"Hijo (",this.state.message,")"))}}]),n}(a.Component),v=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e.child=c.a.createRef(),e.handleClick=function(){console.log(e.child),e.child.current.dispatchAlert(null,"Hola desde el padre")},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Hijo componente"),c.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Usaremos el bot\xf3n como componente hijo"),c.a.createElement("p",{className:"card-text"}),c.a.createElement("div",{className:"d-flex justify-content-end"},c.a.createElement("button",{className:"btn btn-primary mr-2",onClick:this.handleClick},"Padre"),c.a.createElement(h,{ref:this.child}))))}}]),n}(a.Component),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.num;return c.a.createElement("div",{className:"card bg-primary text-white p-5"},c.a.createElement("h5",null,"Componente A"),c.a.createElement("button",{className:"btn btn-light",onClick:this.props.onAdd},"( ",e," )"))}}]),n}(a.Component),E=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.num;return c.a.createElement("div",{className:"card bg-success text-white p-5"},c.a.createElement("h5",null,"Componente B"),c.a.createElement("button",{className:"btn btn-light",onClick:this.props.onAdd},"( ",e," )"))}}]),n}(a.Component),j=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={countA:0,countB:0},e.handleAddA=function(){e.setState((function(e){return{countA:e.countA+1}}))},e.handleAddB=function(){e.setState((function(e){return{countB:e.countB+2}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.countA,n=e.countB;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Componentes hermanos"),c.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Comunicaci\xf3n entre componentes hermanos (Parent components)"),c.a.createElement("p",{className:"card-text"}),c.a.createElement("div",{className:"d-flex justify-content-around"},c.a.createElement(f,{num:t,onAdd:this.handleAddB}),c.a.createElement(E,{num:n,onAdd:this.handleAddA}))))}}]),n}(a.Component),y=n(5),O=n.n(y),g=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"card m-2 p-3 text-center"},c.a.createElement("p",null,"Hijo"),c.a.createElement(N,null))}}]),n}(a.Component),N=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"card m-2 p-3 text-center"},c.a.createElement("p",null,"Nieto"),c.a.createElement(k,null))}}]),n}(a.Component),k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={message:"initial message"},e.handleClick=function(){O.a.publish("greeting","Hola desde el bisnieto")},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.subscribe("object-send",(function(t,n){e.setState({message:n.title})}))}},{key:"componentWillUnmount",value:function(){O.a.unsubscribe("object-send")}},{key:"render",value:function(){return c.a.createElement("div",{className:"card m-2 p-3 text-center"},c.a.createElement("p",null,"Bisnieto"),c.a.createElement("span",{className:"text-muted"},this.state.message),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("button",{className:"btn btn-info",onClick:this.handleClick},"Clic bisnieto")))}}]),n}(a.Component),C=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e.handleClick=function(){O.a.publish("object-send",{title:"Mensaje desde el padre"})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){O.a.subscribe("greeting",(function(e,t){alert("Padre: "+t)}))}},{key:"componentWillUnmount",value:function(){O.a.unsubscribe("greeting")}},{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Patr\xf3n Observador"),c.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Veremos como usar Observer Pattern"),c.a.createElement("p",{className:"card-text"},"Hay tres formas comunes o usadas que son: PubSubJS, EventEmitter o MicroEvent.js. Usaremos ",c.a.createElement("b",null,"PubSubJS")),c.a.createElement("p",{className:"mt-3 text-center"},"Padre"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("button",{className:"btn btn-info",onClick:this.handleClick},"Clic padre")),c.a.createElement(g,null)))}}]),n}(a.Component);var A=function(){return c.a.createElement("div",null,c.a.createElement(b,null),c.a.createElement(p,{title:"Comunicaci\xf3n entre componentes",content:"Se revisar\xe1 la comunicaci\xf3n entre los componentes sin usar las props",bg:"primary",color:"white"}),c.a.createElement("div",{className:"container-fluid"},c.a.createElement(v,null),c.a.createElement(j,null),c.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.1fdf8527.chunk.js.map