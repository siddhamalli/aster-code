/*
Unpublished work.
Copyright (c) 2014-2015 by Teradata Corporation. All rights reserved.
TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
*/

(function(B,C){B.Terradata=B.Terradata||{};var D=B.Terradata,A=B.Class;D.Slider=A.extend({initialize:function(I){this.$el=I.id?$(I.id):$("<div>");this.id=I.id;var K=I.log?Math.log(I.min):I.min,E=I.log?Math.log(I.max):I.max,L=I.log?(E-K)/100:I.step,H=_.debounce(I.onChange,100),G=I.range?I.range:false;var J={min:K,max:E,range:G,step:L,animate:true,disabled:K==E};if(typeof I.value!="undefined"){J.value=I.value;this._onChange=function(N,M){H(N,M)};J.slide=function(M,N){this._onChange(N.value)}.bind(this)}else{this.range=true;J.values=I.values?I.values:[K,E];this._onChange=function(M,N){if(M[0]>=M[1]){return false}else{K=I.log?Math.exp(M[0].toFixed(4)):M[0];E=I.log?Math.exp(M[1].toFixed(4)):M[1];H(K,E,N)}};J.slide=function(M,N){this._onChange(N.values)}.bind(this)}this.$el.slider(J);var F=this;this.values=function(P,O){var N=I.log?Math.log(P.toFixed(4)):P;var M=I.log?Math.log(O.toFixed(4)):O;F.$el.slider("values",[N,M]);H(P,O);return[P,O]}},value:function(G,F){var E=this.range?"values":"value";if(_.isFinite(G)||_.isArray(G)){this.$el.slider(E,G);if(F){this._onChange(G,F)}}else{return this.$el.slider(E)}},destroy:function(){this.$el.slider("destroy")}})})(window);
