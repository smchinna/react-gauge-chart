(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(26)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),c=(a(23),a(9)),l=a(10),s=a(13),u=a(11),d=a(12),h=a(28),g=a(29),p=a(30),m=(a(24),a(7)),f=a(3),v=(a(25),-Math.PI/2),w=Math.PI/2,E=["marginInPercent","arcPadding","percent","nrOfLevels"],C=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).initChart=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e?a.renderChart(t):(a.svg=a.container.append("svg"),a.g=a.svg.append("g"),a.doughnut=a.g.append("g").attr("class","doughnut"),a.pie.value(function(e){return e.value}).startAngle(v).endAngle(w).sort(null),a.needle=a.g.append("g").attr("class","needle"),window.addEventListener("resize",function(){a.renderChart(!0)}),a.renderChart(t))},a.renderChart=function(e){a.updateDimensions(),a.svg.attr("width",a.width+a.margin.left+a.margin.right).attr("height",a.height+a.margin.top+a.margin.bottom),a.g.attr("transform","translate("+a.margin.left+", "+a.margin.top+")"),a.calculateRadius(),a.doughnut.attr("transform","translate("+a.outerRadius+", "+a.outerRadius+")"),a.arc.outerRadius(a.outerRadius).innerRadius(a.outerRadius*(1-a.props.arcWidth)).cornerRadius(a.props.cornerRadius).padAngle(a.props.arcPadding),a.doughnut.selectAll(".arc").remove(),a.needle.selectAll("*").remove(),a.g.selectAll(".text-group").remove(),a.doughnut.selectAll(".arc").data(a.pie(a.arcData)).enter().append("g").attr("class","arc").append("path").attr("d",a.arc).style("fill",function(e){return e.data.color}),a.drawNeedle(e),a.needle.attr("transform","translate("+a.outerRadius+", "+a.outerRadius+")")},a.updateDimensions=function(){var e=a.props.marginInPercent,t=a.container.node().getBoundingClientRect(),n=t.width,r=t.height;a.margin.left=n*e,a.margin.right=n*e,a.width=n-a.margin.left-a.margin.right,a.margin.top=r*e,a.margin.bottom=r*e,a.height=a.width/2-a.margin.top-a.margin.bottom},a.calculateRadius=function(){a.width<2*a.height?a.outerRadius=(a.width-a.margin.left-a.margin.right)/2:a.outerRadius=a.height-a.margin.top-a.margin.bottom,a.centerGraph()},a.centerGraph=function(){a.margin.left=a.width/2-a.outerRadius+a.margin.right,a.g.attr("transform","translate("+a.margin.left+", "+a.margin.top+")")},a.drawNeedle=function(e){var t=a.props,n=t.percent,r=t.needleColor,o=t.needleBaseColor,i=t.hideText,c=t.animate,l=Object(m.a)(Object(m.a)(a)),s=l.container,u=l.calculateRotation,d=a.width/500*15,h=[0,-d/2],g=a.calculateRotation(0);a.needle.append("path").attr("d",g).attr("fill",r),a.needle.append("circle").attr("cx",h[0]).attr("cy",h[1]).attr("r",d).attr("fill",o),i||a.addText(n),!e&&c?a.needle.transition().delay(500).ease(f.b).duration(3e3).tween("progress",function(){return function(e){var t=e*n;return s.select(".needle path").attr("d",u(t))}}):s.select(".needle path").attr("d",u(n))},a.calculateRotation=function(e){var t=.55*a.outerRadius,n=a.width/500*15,r=a.percentToRad(e),o=[0,-n/2],i=[o[0]-t*Math.cos(r),o[1]-t*Math.sin(r)],c=[o[0]-n*Math.cos(r-Math.PI/2),o[1]-n*Math.sin(r-Math.PI/2)],l=[o[0]-n*Math.cos(r+Math.PI/2),o[1]-n*Math.sin(r+Math.PI/2)];return"M ".concat(c[0]," ").concat(c[1]," L ").concat(i[0]," ").concat(i[1]," L ").concat(l[0]," ").concat(l[1])},a.percentToRad=function(e){return e*Math.PI},a.getColors=function(){for(var e=a.props.colors,t=f.e().domain([1,a.nbArcsToDisplay]).range([e[0],e[e.length-1]]).interpolate(f.c),n=[],r=1;r<=a.nbArcsToDisplay;r++)n.push(t(r));return n},a.addText=function(e){a.g.append("g").attr("class","text-group").attr("transform","translate(".concat(a.outerRadius,", ").concat(a.outerRadius/2+20,")")).append("text").text("".concat(a.floatingNumber(e),"%")).style("font-size",function(){return"".concat(a.width/10,"px")}).style("fill",a.props.textColor).attr("class","percent-text")},a.floatingNumber=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round(100*e*Math.pow(10,t))/Math.pow(10,t)};var n=a.props,r=n.nrOfLevels,o=n.colors;a.svg={},a.g={},a.width={},a.height={},a.doughnut={},a.needle={},a.data={},a.outerRadius={},a.margin={},a.arc=f.a(),a.pie=f.d(),a.nbArcsToDisplay=e.arcsLength?e.arcsLength.length:r,a.nbArcsToDisplay===o.length?a.colorArray=o:a.colorArray=a.getColors(),a.arcData=[];for(var i=0;i<a.nbArcsToDisplay;i++){var l={value:e.arcsLength&&e.arcsLength.length>i?e.arcsLength[i]:1,color:a.colorArray[i]};a.arcData.push(l)}return a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.id&&(this.container=f.f("#".concat(this.props.id)),this.initChart())}},{key:"componentDidUpdate",value:function(e){var t=this,a=!E.some(function(a){return e[a]!==t.props[a]});this.initChart(!0,a)}},{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,style:{width:"100%"}})}}]),t}(r.a.Component),R=C;C.defaultProps={marginInPercent:.05,cornerRadius:6,nrOfLevels:3,percent:.4,arcPadding:.05,arcWidth:.2,colors:["#00FF00","#FF0000"],textColor:"#fff",needleColor:"#464A4F",needleBaseColor:"#464A4F",hideText:!1,animate:!0};var b=R,x=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(p.a,{xs:12,lg:{offset:2,span:8}},r.a.createElement("h1",null,"React Gauge Chart Demo"))),r.a.createElement(g.a,null,r.a.createElement(p.a,{xs:12,lg:6},r.a.createElement("h6",null,"GaugeChart with default props"),r.a.createElement(b,{id:"gauge-chart1"})),r.a.createElement(p.a,{xs:12,lg:6},r.a.createElement("h6",null,"GaugeChart with 20 levels"),r.a.createElement(b,{id:"gauge-chart2",nrOfLevels:20,percent:.86,needleColor:"#345243"}))),r.a.createElement(g.a,null,r.a.createElement(p.a,{xs:12,lg:6},r.a.createElement("h6",null,"GaugeChart with custom colors"),r.a.createElement(b,{id:"gauge-chart3",nrOfLevels:30,colors:["#FF5F6D","#FFC371"],arcWidth:.3,percent:.37})),r.a.createElement(p.a,{xs:12,lg:6},r.a.createElement("h6",null,"GaugeChart with larger padding between elements"),r.a.createElement(b,{id:"gauge-chart4",nrOfLevels:10,arcPadding:.1,cornerRadius:3,percent:.6}))),r.a.createElement(g.a,null,r.a.createElement(p.a,{xs:12,lg:6},r.a.createElement("h6",null,"GaugeChart with custom arcs width"),r.a.createElement(b,{id:"gauge-chart5",nrOfLevels:420,arcsLength:[.3,.5,.2],colors:["#5BE12C","#F5CD19","#EA4228"],percent:.37,arcPadding:.02})),r.a.createElement(p.a,{xs:12,lg:6},r.a.createElement("h6",null,"GaugeChart without animation"),r.a.createElement(b,{id:"gauge-chart6",animate:!1,nrOfLevels:15,percent:.56,needleColor:"#345243"})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.2e70a6fe.chunk.js.map