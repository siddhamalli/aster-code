/*
Unpublished work.
Copyright (c) 2014-2015 by Teradata Corporation. All rights reserved.
TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
*/

(function(){window.Terradata=window.Terradata||{};var C=window.Terradata,A=C.Popup;C.PayloadPopup=A.extend({initialize:function(D){this._super(D);this.linkResolver=D.linkResolver;this._pos={};var E=_.bind(function(F){this._pos.top=document.body.scrollTop+F.clientY+11;this._pos.left=document.body.scrollLeft+F.clientX},this);$(document).mousemove(E)},show:function(G,F,E){var D=B.call(this,G,F);this._super(this._pos,D,E)},adjustPosition:function(){this.pos(this._pos)}});var B=function(F,G){var D=document.createDocumentFragment();if(F){$("<div>").html(F).appendTo(D)}if(!_.isEmpty(G)){var E=$("<div>").appendTo(D);_.each(G,function(I,H){$("<div>").text(H+": ").append(this.linkResolver.resolve(I[0])).appendTo(E)},this)}return D}})();
