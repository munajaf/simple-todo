(this["webpackJsonpsimple-todo"]=this["webpackJsonpsimple-todo"]||[]).push([[0],{22:function(e,n,r){e.exports=r(35)},34:function(e,n,r){},35:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(15),i=r(5),c=r.n(i),u=r(2),d=r(1),l=r(3),f=r(4);function m(){var e=Object(l.a)(["\n  color: #495057;\n  font-size: 1em;\n  padding: .375rem .75rem;\n  border: 1px solid #ced4da;\n  border-radius: .25rem;\n  margin: 10px\n"]);return m=function(){return e},e}function s(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return s=function(){return e},e}var p=f.a.form(s()),b=f.a.input(m());function g(){var e=Object(l.a)(["\n  text-align: center;\n  border: 1px solid transparent;\n  padding: .20rem .75rem;\n  ","\n  color: #fff;\n  background-color: ",";\n  border-color: ",";\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n"]);return g=function(){return e},e}var v=f.a.button(g(),(function(e){return e.remove&&"margin-left:10px; cursor: pointer;"}),(function(e){return e.remove?"red":"#007bff"}),(function(e){return e.remove?"red":"#007bff"})),E=function(e){var n=e.addTodo,r=e.todoRef;return a.a.createElement(p,{onSubmit:n},a.a.createElement(b,{ref:r}),a.a.createElement(v,{type:"submit",onClick:n},"Add"))},O=r(9),j=r(21),y=function(e,n){var r=n.source,t=n.destination,a=Array.from(e),o=a.splice(r.index,1),i=Object(j.a)(o,1)[0];return a.splice(t.in,0,i),a};function x(){var e=Object(l.a)(["\n  background: ",";\n  margin-left: 10px;\n  font-size: 1rem;\n  font-family: Arial;\n  border-radius: 3px;\n  padding:10px;\n  width: 100%;\n"]);return x=function(){return e},e}function D(){var e=Object(l.a)(["\n  display: flex;\n  margin: 10px;\n"]);return D=function(){return e},e}function h(){var e=Object(l.a)(["\n  ","\n"]);return h=function(){return e},e}var R=f.a.ul(h(),(function(e){var n=e.ready,r=e.isDraggingOver;return n&&"background: ".concat(r?"#3498db":"#333",";\n    padding: 10px;\n    border-radius: 10px;")})),T=f.a.li(D()),k=f.a.div(x(),(function(e){return e.isDragging?"#2ecc71":"white"})),w=function(e){var n=e.todo,r=e.removeTodo;return n.map((function(e,n){var t=e.value,o=e.id;return a.a.createElement(O.b,{draggableId:"".concat(o),index:n,key:o},(function(e,n){return a.a.createElement(T,Object.assign({key:o,ref:e.innerRef},e.draggableProps,e.dragHandleProps),a.a.createElement(v,{remove:!0,type:"submit",onClick:function(){return r(o)}},"X"),a.a.createElement(k,{isDragging:n.isDragging},t))}))}))},_=function(e){var n=e.todo,r=e.removeTodo,t=Object(u.d)();return a.a.createElement(O.a,{onDragEnd:function(e){e.destination&&e.destination.index!==e.source.index&&t(function(e,n){return function(r){r({type:"REORDER",payload:y(e,n)})}}(n,e))}},a.a.createElement(O.c,{droppableId:"list"},(function(e,t){var o=t.isDraggingOver;return a.a.createElement(R,{ready:n.length,isDraggingOver:o},a.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps),a.a.createElement(w,{todo:n,removeTodo:r}),e.placeholder))})))},A=function(){var e=Object(u.d)(),n=Object(u.e)((function(e){return e.newReducer}),u.c).todo,r=Object(t.useRef)({});return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{todoRef:r,addTodo:function(n){n.preventDefault();var t=Math.floor(999999*Math.random()),a=r.current.value;a.trim()&&(e(function(e,n){return{type:"ADD_NEW",payload:{id:e,value:n}}}(t,a)),r.current.value="")}}),a.a.createElement("br",null),a.a.createElement(_,{removeTodo:function(n){e({type:"DELETE",payload:n})},todo:n}))},S=(r(34),r(20)),I=r(12),M={todo:[]},N=function(e,n){return Object(I.a)({},e,{todo:[].concat(Object(S.a)(e.todo),[n])})},P=function(e,n){return Object(I.a)({},e,{todo:e.todo.filter((function(e){return e.id!==n}))})},z=Object(d.c)({newReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,n=arguments.length>1?arguments[1]:void 0,r=n.type,t=n.payload;switch(r){case"ADD_NEW":return N(e,t);case"DELETE":return P(e,t);case"REORDER":return{todo:t};default:return e}}}),C=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Object(d.d)())(Object(d.a)(o.a)),L=Object(d.e)(z,C);c.a.render(a.a.createElement(u.a,{store:L},a.a.createElement(a.a.StrictMode,null,a.a.createElement(A,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8ceedc8b.chunk.js.map