/*
Unpublished work.
Copyright (c) 2014-2015 by Teradata Corporation. All rights reserved.
TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
*/

(function(A,B){A.Class=function(){if(this.initialize!==B){this.initialize.apply(this,arguments)}};A.Class.extend=function(D){var F=this,C=function(){F.apply(this,arguments)},E;C.prototype=Object.create(F.prototype);for(E in D){if(F.prototype[E]&&typeof (F.prototype[E])==="function"&&typeof (D[E])==="function"){C.prototype[E]=(function(H,G){return function(){var I=this._super;this._super=G;try{return H.apply(this,arguments)}finally{if(I===B){delete this._super}else{this._super=I}}}})(D[E],F.prototype[E])}else{C.prototype[E]=D[E]}}C.extend=F.extend;return C}})(window);
