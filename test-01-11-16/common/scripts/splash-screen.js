/*
Unpublished work.
Copyright (c) 2014-2015 by Teradata Corporation. All rights reserved.
TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
*/

(function(B,D){B.Terradata=B.Terradata||{};var E=B.Terradata,A=B.Class;E.SplashScreen=A.extend({initialize:function(G){G=G||{};this.screen=$('<div class="splash-screen">');var F=$('<div class="content-container">').appendTo(this.screen);$('<div class="spinner-container">').appendTo(F);this.message=$('<div class="message">').appendTo(F);this.hidden=true},show:function(){$(document.body).append(this.screen);C();this.hidden=false},showLoadingData:function(){if(this.hidden){this.show()}this.message.text("Loading data, please wait...")},showRendering:function(){if(this.hidden){this.show()}this.message.text("Rendering, please wait...")},hide:function(){this.screen.remove();this.hidden=true}});var C=function(){var F={lines:13,length:20,width:12,radius:30,corners:1,rotate:0,direction:1,color:"#000",speed:1,trail:60,shadow:false,hwaccel:false,className:"spinner",zIndex:2000000000,top:"50%",left:"50%"};var G=$(".spinner-container")[0];new Spinner(F).spin(G)}})(window);
