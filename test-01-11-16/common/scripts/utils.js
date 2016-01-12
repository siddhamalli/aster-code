/*
Unpublished work.
Copyright (c) 2014-2015 by Teradata Corporation. All rights reserved.
TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
*/

(function(A){A.VisualizationUtils=A.VisualizationUtils||{};var B=A.VisualizationUtils;B.CrossFrameMessage={read:function(C){C=C.originalEvent||C;return(C.data!="undefined"&&typeof C.data==="string")?JSON.parse(C.data):C.data},write:function(C){var D=false;try{A.postMessage({toString:function(){D=true}},"*")}catch(E){}return D?JSON.stringify(C):C}}})(this);
