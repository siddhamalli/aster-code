/*
Unpublished work.
Copyright (c) 2014-2015 by Teradata Corporation. All rights reserved.
TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
*/

(function(B,C){B.Terradata=B.Terradata||{};var D=B.Terradata,A=B.Class;D.SeriesSelector=A.extend({initialize:function(E){this._allLabel=E.allLabel;this._selector=$("#"+E.id);this._selectorContainer=$("."+E.id+"-container");this._selector.change(function(F){E.changeHandler(F.val)});this.update(E.data,E.allLabelKey)},update:function(G,H){var F=_.keys(G),E=_.map(F,function(I){return{id:I,label:I}});E.unshift({id:"Stacked",label:H?this._allLabel[H]:this._allLabel});this._selector.select2({dropdownAutoWidth:true,data:{results:E},formatResult:function(I){return I.label},formatSelection:function(I){return I.label},minimumResultsForSearch:-1})},select:function(E){this._selector.select2("val",E)},value:function(){return this._selector.select2("val")},hide:function(){this._selectorContainer.hide()}})})(window);
