(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{3:function(e,t,n){e.exports=n(8)},5:function(e,t,n){},8:function(e,t,n){"use strict";n.r(t);n(4),n(5);
var i=n(0),
s=n.n(i),
c=n(1),
r=n(2),
o="HA_URL",
a="HA_TOKEN",
u={
s1:"light.esp03_l2",
s2:"light.esp03_l1",
s3:"light.esp03_l4",
s4:"light.esp03_l5",
s5:"light.esp03_l6",
s6:"light.esp03_l3",
s7:"light.0xa4c138d14a551b60",
s8:"light.0xa4c1382d75e3b75f",
s9:"light.0xa4c13891a1d78abc",
s0:"switch.esp02_relay_4"
},
h=function e(t,n){Object(r.a)(this,e),this.service=t,this.entity=n};
function p(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise(function(s,c){var r=new XMLHttpRequest({mozSystem:!0});if(r.open(e,t,!0),Object.keys(i).forEach(function(e){r.setRequestHeader(e,i[e])}),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(r.status>=200&&r.status<300?s(JSON.parse(r.responseText)):c(new Error("Request failed with status: "+r.status)))},n){var o=JSON.stringify(n);r.send(o)}else r.send()})}function f(){return(f=Object(c.a)(s.a.mark(function e(t){var n,i,c,r,h,f;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.service,(i=t.entity)in u){e.next=5;break}return console.log("Unknown entity: ".concat(i)),e.abrupt("return");case 5:c=u[i],r="".concat(o,"/api/services/").concat(n),"POST",h={entity_id:c},f={Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},p("POST",r,h,f).then(function(e){}).catch(function(e){console.error("Error:",e.message)});case 11:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var y={
1:new h("light/toggle","s1"),
2:new h("light/toggle","s2"),
3:new h("light/toggle","s3"),
4:new h("light/toggle","s4"),
5:new h("light/toggle","s5"),
6:new h("light/toggle","s6"),
7:new h("light/toggle","s7"),
8:new h("light/toggle","s8"),
9:new h("light/toggle","s9"),
0:new h("switch/toggle","s0")
};
document.addEventListener("keydown",function(e){e.key in y&&function(e){f.apply(this,arguments)}(y[e.key])})}},[[3,1,2]]]);
//# sourceMappingURL=main.bb899642.chunk.js.map
