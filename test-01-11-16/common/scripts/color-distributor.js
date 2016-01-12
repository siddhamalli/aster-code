/*
Unpublished work.
Copyright (c) 2014-2015 by Teradata Corporation. All rights reserved.
TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
*/

(function(B,C){B.Terradata=B.Terradata||{};var D=B.Terradata,A=B.Class;D.ColorDistributor=A.extend({getColorScale:function(E){if(E.length<=10){return d3.scale.category10()}else{if(E.length<=20){return d3.scale.category20()}else{return d3.scale.ordinal().domain(E).range(["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6","#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"])}}},distributeColorShades:function(H,I,F,K){var J=d3.lab(F),M=!K?J.brighter(1.5):J.darker(1.5),N=!K?J.darker(1.5):J.brighter(1.5),G=d3.min(H,function(O){return O[I]}),L=d3.max(H,function(O){return O[I]}),E=d3.scale.linear().domain([G*0.9,L*1.1]).range([M,N]).interpolate(d3.interpolateLab);_.each(H,function(O){O.color=E(O[I])})}})})(window);
