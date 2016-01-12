/*
Unpublished work.
Copyright (c) 2014-2015 by Teradata Corporation. All rights reserved.
TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
*/

$(function(){window.nodeLabelOffset_1=-10;window.nodeLabelOffset_2=10;window.Terradata=window.Terradata||{};var M=window.Terradata,q=new M.LinkResolver(),n=new M.PayloadPopup({linkResolver:q}),p=new M.SplashScreen(),s=M.Slider,AB=M.SettingsService,Z,A=$(window).width()-50,D=$(window).height()-50,J={top:20,right:110,bottom:75,left:110},AJ=10,a=1,U=3,z=1,g=false,W=11,B=5,t=-10,r=10,m=A/12,AD=0,e,o,O="left-to-right";p.showLoadingData();function I(AN){var AM=AN+"=";var AL=document.cookie.split(";");for(var AO=0;AO<AL.length;AO++){var AP=AL[AO];while(AP.charAt(0)==" "){AP=AP.substring(1)}if(AP.indexOf(AM)!=-1){return AP.substring(AM.length,AP.length)}}return""}if(I("theme")==""){o="theme-light"}else{o=I("theme");$("#theme_selector").val(I("theme"))}var X=d3.layout.tree().size([D-(J.top+J.bottom),A-(J.right+J.left)]);var AA=d3.select("#chart").append("svg").attr("xmlns","http://www.w3.org/2000/svg").attr("version",1.2).style("fill","#fff").attr("width",A).attr("height",D).append("g").attr("transform","translate("+J.left+","+J.top+")");var AH=$("#chart svg");$(window).on("message",P);Z=new AB({graph:{refresh:function(){AI(e)}}});function P(AN){var AM=VisualizationUtils.CrossFrameMessage.read(AN),AO=AM.data,i=$(".chart-container"),AL;if(AM.type=="start"){AL=(AO.vizType=="tree_ltr"?"left-to-right":(AO.vizType=="tree_rtl"?"right-to-left":undefined));O=AL||O;if(AL){$("button.direction").hide()}if($.isEmptyObject(AO.series)){i.hide();$("#message-no-data").show();return }i.show();e=AO.series[AM.seriesId];e.x0=(D-(J.top+J.bottom))/2;e.y0=0;p.showRendering();_.defer(function(){AI(e);if(AM.presets){Z.load(AM.presets)}p.hide()})}}var E=4,l=Math.max(z-60,1),u=U+50,K=[],d=z;K.unshift(d);while(d>l){d=d-E;if(d<l){d=l}K.unshift(d)}d=z;while(d<U){d=d+E;if(d>U){d=U}K.push(d)}d=U;while(d<u){d=d+E;K.push(d)}function AI(i,AZ){var AQ=d3.event&&d3.event.altKey?5000:500;var AL=X.nodes(e).reverse();AL.forEach(function(Aa){Aa.y=Aa.depth*m});var AV=_.max(AL,function(Aa){return Aa.y}),AM=AV.y,AS=AF(AM,O);var AN=d3.svg.diagonal().projection(function(Aa){return[AS.y(Aa.y),AS.x(Aa.x)]});var AX=d3.select("svg").attr("width");if(AX<AM+J.left+J.right){d3.select("svg").attr("width",AM+J.left+J.right)}var AO=AA.selectAll("g.node").data(AL,function(Aa){return Aa.id||(Aa.id=++AD)});var AR=AO.enter().append("g").attr("class","node").attr("transform",function(){return"translate("+AS.y(i.y0)+","+AS.x(i.x0)+")"}).on("click",function(Ab){j(Ab);$("#layout_selector").val("custom").change();var Aa=T(e);v(Aa);AI(Ab)});AR.append("circle").attr("r",0.000001).on("mouseover",y).on("mousemove",c).on("mouseout",AE).style("fill",function(Aa){return Aa._children?"lightsteelblue":""});AR.append("text").attr("x",function(Aa){return Aa.children||Aa._children?t:r}).attr("dy",".35em").attr("text-anchor",function(Aa){return Aa.children||Aa._children?"end":"start"}).text(function(Aa){return Aa.name}).style("fill-opacity",0.000001).attr("wrapWidth",100).each(wordWrap);if(AZ){AO.attr("transform",function(Aa){return"translate("+i.y0+","+i.x0+")"})}var AT=AO.transition().duration(AQ).attr("transform",function(Aa){return"translate("+AS.y(Aa.y)+","+AS.x(Aa.x)+")"});AT.select("circle").attr("r",B*2).style("fill",function(Aa){return Aa._children?"lightsteelblue":""});AT.select("text").style("fill-opacity",1).attr("x",function(Aa){return Aa.children||Aa._children?t:r}).style("font-size",W+"px").text(function(Aa){return Aa.name}).each(wordWrap);var AW=AO.exit().transition().duration(AQ).attr("transform",function(Aa){return"translate("+AS.y(i.y)+","+AS.x(i.x)+")"}).remove();AW.select("circle").attr("r",0.000001);AW.select("text").style("fill-opacity",0.000001);var AU=AA.selectAll("path.link").data(X.links(AL),function(Aa){return Aa.target.id});function AP(Aa){return z+(Aa-a)*(U-z)/(AJ-a)}var AY=function(Aa){return"stroke-linecap:round; stroke: "+(Aa.target.color)+"; stroke-width: "+AP(Aa.target.score)+"px"};AU.enter().insert("path","g").on("mouseover",R).on("mousemove",c).on("mouseout",AE).attr("class","link").attr("style",AY).attr("d",function(Ab){var Aa={x:AS.x(i.x0),y:AS.y(i.y0)};return AN({source:Aa,target:Aa})}).transition().duration(AQ).attr("d",AN);AU.transition().attr("style",AY).duration(AQ).attr("d",AN);AU.exit().transition().duration(AQ).attr("d",function(Ab){var Aa={x:AS.x(i.x),y:AS.y(i.y)};return AN({source:Aa,target:Aa})}).each("end",_.once(k)).remove();AL.forEach(function(Aa){Aa.x0=Aa.x;Aa.y0=Aa.y});V(o)}function k(){var i=d3.select("svg").attr("width");if(i>A+J.left+J.right){d3.select("svg").attr("width",A+J.left+J.right)}}function AF(AM,i){var AL={"left-to-right":{x:function(AN){return AN},y:function(AN){return AN}},"right-to-left":{x:function(AN){return AN},y:function(AN){return AM-AN}}};return AL[i]}function y(AL){var i=q.resolve(AL.name);n.show(i,AL.payload)}function R(AN){var AL=$(document.createDocumentFragment()).append(q.resolve(AN.source.name)).append(" → ").append(q.resolve(AN.target.name)).append(": "+d3.round(AN.target.score,2)),i=_.indexOf(AN.source.children,AN.target),AM=AN.source.edgePayloads?AN.source.edgePayloads[i]:null;n.show(AL,AM)}function c(){n.adjustPosition()}function AE(){n.hide()}function T(AM){if(AM._children){return"collapsed"}var AL=function i(AQ){if(!AQ.children&&!AQ._children){return }var AN=!!AQ.children;var AP=_.map(AQ.children||AQ._children,function(AR){return i(AR)});var AO=_.reduce(AP,function(AR,AS){if(AS===undefined){return AR}else{if(AR===null||AS===null||AR^AS){return null}else{return AR}}},AN);return AO}(AM);if(AL===null){return null}else{return AL?"expanded":"collapsed"}}function F(i){i.children=i._children||i.children;delete i._children}function b(i){i._children=i.children||i._children;delete i.children}function j(AL,i){if(i==="expanded"||(!i&&AL._children)){F(AL)}else{if(i==="collapsed"||(!i&&AL.children)){b(AL)}}}function h(AL,i){_.each(AL.children||AL._children,function(AM){h(AM,i)});j(AL,i)}function S(AM,AL){var i=_.max(AM.children,function(AN){return AN.score});_.each(AM.children||AM._children,function(AN){if(i.score==AN.score){AN.max=true}S(AN,AL)});j(AM,AM.max?"expanded":"collapsed")}$(window).bind("resize",function(){var i=$(window).height()-50;var AM=$(window).width()-50;AH.attr("height",i).attr("width",AM);X.size([i-(J.top+J.bottom),AM-(J.right+J.left)]);var AL=f.hasClass("active");AI(e,AL)});$(".regularSelect2").select2({minimumResultsForSearch:-1});$("#theme_selector").change(function(){o=$(this).val();document.cookie="theme="+o+"; path=/";V(o)});var V=function(i){$(".theme").alterClass("theme-*",i)};Z.register({id:"theme"},function(){return $("#theme_selector").val()},function(AL,i){$("#theme_selector").val(i.value).change()});$("#layout_selector").change(function(){var i=$(this).val();switch(i){case"allpaths":v("expanded");h(e,"expanded");AI(e,true);break;case"collapsed":v("collapsed");h(e,"collapsed");AI(e,true);break;case"dominant":v("expanded");S(e,"expanded");j(e,"expanded");AI(e,true);break}});Z.register({id:"layout"},function(){return $("#layout_selector").val()},function(AL,i){$("#layout_selector").val(i.value).change()});var AG=$('.expand-collapse[data-type="expanded"]'),f=$('.expand-collapse[data-type="collapsed"]'),x=$(".expand-collapse"),Q=d3.selectAll(".expand-collapse");Q.on("click",function(){var i=$(this),AL=i.data("type");if(i.hasClass("active")){return }v(AL);h(e,AL);AI(e,AL==="expanded")});function v(i){x.removeClass("active");if(i==="expanded"){AG.addClass("active")}else{if(i==="collapsed"){f.addClass("active")}}}var G=$('.direction[data-type="left-to-right"]'),N=$('.direction[data-type="right-to-left"]'),AK=$(".direction");Z.register({id:"vizType"},function(){return O},function(AM,AL){var i=f.hasClass("active");O=AL.value;w(O);AI(e,i)});AK.click(function(){var AL=$(this),i=f.hasClass("active");O=AL.data("type");if(AL.hasClass("active")){return }w(O);v("expanded");h(e,"expanded");AI(e,i)});function w(i){AK.removeClass("active");if(i==="left-to-right"){G.addClass("active")}else{if(i==="right-to-left"){N.addClass("active")}}}function H(){t=B*(-2.5);r=B*(-2.5)}var AC=new s({id:"#slider_nodesize",min:2,max:15,value:B,step:1,animate:true,onChange:function(i){B=i;H(i);AI(e)}});Z.register(AC);var Y=new s({id:"#slider_nodespacing",min:m-m/2,max:m+m/2,value:m,step:10,animate:true,onChange:function(i){m=i;AI(e)}});Z.register(Y);var L=new s({id:"#slider_fontsize",min:8,max:30,value:W,step:1,animate:true,onChange:function(i){W=i;AI(e)}});Z.register(L);var C=new s({id:"#slider_widthMinMax",range:true,min:0,max:K.length-1,values:[K.indexOf(z),K.indexOf(U)],step:1,animate:true,onChange:function(AL,i){if(AL===i){return false}else{z=K[AL];U=K[i];AI(e)}}});Z.register(C);window.snapshot=function(){var i=document.getElementsByTagName("svg")[0];var AL=(new XMLSerializer).serializeToString(i);parent.getSnapshot(AL)}});
