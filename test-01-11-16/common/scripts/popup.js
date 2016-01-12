/*
Unpublished work.
Copyright (c) 2014-2015 by Teradata Corporation. All rights reserved.
TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
*/

(function(D,E){D.Terradata=D.Terradata||{};var F=D.Terradata,C=D.Class;F.Popup=C.extend({popupClass:"popup",initialize:function(){this.hideDelayTime=500;this.popupHoveredSelector="."+this.popupClass+":hover";this.container=$("<div>").addClass(this.popupClass+" theme").appendTo(document.body);this.value=$("<div>").addClass("value").appendTo(this.container);this.hideDelayId=null},show:function(I,H,G){A.call(this,true);if(G){this.container.css(G)}else{this.container.attr("style","")}this.container.show();this.pos(I);this.value.html(H)},hide:function(){A.call(this)},pos:function(G){G=B.call(this,G);this.container.offset({top:G.top,left:G.left})}});var B=function(H){var I=$(D),L=I.height(),J=I.width(),G=this.container.height(),K=this.container.width(),M=30;if(H.left+K+M>J){H.left-=(K+M)}if(H.top+G+M>L){H.top-=(G+M)}return H};var A=function(G){if(this.hideDelayId){clearTimeout(this.hideDelayId)}if(!this.hideDelayTime||G){this.container.hide();return }this.hideDelayId=_.delay((function(){this.hideDelayId=null;if(!$(this.popupHoveredSelector).length){this.container.hide();this.container.attr("style","")}else{A.call(this)}}).bind(this),this.hideDelayTime)}})(window);
