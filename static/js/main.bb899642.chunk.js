(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{3:function(e,t,n){e.exports=n(8)},5:function(e,t,n){},8:function(e,t,n){"use strict";n.r(t);n(4),n(5);
var i=n(0),
s=n.n(i),
c=n(1),
r=n(2),
o="URL_ADRESS",
a="API_KEY",
u={domofon:"switch.relay01_l2",garage_led:"switch.garage_light"},
h=function e(t,n){Object(r.a)(this,e),this.service=t,this.entity=n};
function p(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise(function(s,c){var r=new XMLHttpRequest({mozSystem:!0});if(r.open(e,t,!0),Object.keys(i).forEach(function(e){r.setRequestHeader(e,i[e])}),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(r.status>=200&&r.status<300?s(JSON.parse(r.responseText)):c(new Error("Request failed with status: "+r.status)))},n){var o=JSON.stringify(n);r.send(o)}else r.send()})}function f(){return(f=Object(c.a)(s.a.mark(function e(t){var n,i,c,r,h,f;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.service,(i=t.entity)in u){e.next=5;break}return console.log("Unknown entity: ".concat(i)),e.abrupt("return");case 5:c=u[i],r="".concat(o,"/api/services/").concat(n),"POST",h={entity_id:c},f={Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},p("POST",r,h,f).then(function(e){}).catch(function(e){console.error("Error:",e.message)});case 11:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var y={
1:new h("switch/toggle","domofon"),2:new h("switch/toggle","garage_led")};
document.addEventListener("keydown",function(e){e.key in y&&function(e){f.apply(this,arguments)}(y[e.key])})}},[[3,1,2]]]);
//# sourceMappingURL=main.bb899642.chunk.js.map