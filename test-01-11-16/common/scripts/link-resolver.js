/*
Unpublished work.
Copyright (c) 2014-2015 by Teradata Corporation. All rights reserved.
TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
*/

(function(B,C){B.Terradata=B.Terradata||{};var D=B.Terradata,A=B.Class;D.LinkResolver=A.extend({isLink:function(E){return _.isString(E)&&(E.indexOf("http://")!==-1||E.indexOf("https://")!==-1)},resolve:function(E){if(this.isLink(E)){return $("<a>").attr("href",E).attr("target","_blank").text(E)}else{return E}},})})(window);
