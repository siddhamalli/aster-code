var dataObjStr='"{\"series\":{\"Series 1\":{\"color\":\"#B00000\",\"name\":\"Start\",\"score\":430.0,\"children\":[{\"color\":\"#B00000\",\"name\":\"Upgrade\",\"score\":430.0,\"children\":[{\"color\":\"#FA8E34\",\"name\":\"SS\",\"score\":120.0,\"children\":[{\"color\":\"#FA8E34\",\"name\":\"SST\",\"score\":120.0,\"children\":[{\"color\":\"#FFE100\",\"name\":\"COM\",\"score\":20.0,\"children\":[],\"size\":3.1666666666666665,\"childNumber\":0,\"payload\":{}},{\"color\":\"#FFA600\",\"name\":\"MVM\",\"score\":50.0,\"children\":[],\"size\":3.6666666666666665,\"childNumber\":1,\"payload\":{}},{\"color\":\"#FFA600\",\"name\":\"IVR\",\"score\":50.0,\"children\":[],\"size\":3.6666666666666665,\"childNumber\":2,\"payload\":{}}],\"edgePayloads\":[{},{},{}],\"size\":4.833333333333333,\"childNumber\":0,\"payload\":{}}],\"edgePayloads\":[{}],\"size\":4.833333333333333,\"childNumber\":0,\"payload\":{}},{\"color\":\"#FFE100\",\"name\":\"NPT\",\"score\":30.0,\"children\":[],\"size\":3.3333333333333335,\"childNumber\":1,\"payload\":{}},{\"color\":\"#FFA600\",\"name\":\"HOTP\",\"score\":80.0,\"children\":[{\"color\":\"#FFA600\",\"name\":\"HT\",\"score\":80.0,\"children\":[{\"color\":\"#FFE100\",\"name\":\"ACCS\",\"score\":10.0,\"children\":[],\"size\":3.0,\"childNumber\":0,\"payload\":{}},{\"color\":\"#FFE100\",\"name\":\"STORE\",\"score\":30.0,\"children\":[],\"size\":3.3333333333333335,\"childNumber\":1,\"payload\":{}},{\"color\":\"#FFE100\",\"name\":\"CHAT\",\"score\":40.0,\"children\":[],\"size\":3.5,\"childNumber\":2,\"payload\":{}}],\"edgePayloads\":[{},{},{}],\"size\":4.166666666666667,\"childNumber\":0,\"payload\":{}}],\"edgePayloads\":[{}],\"size\":4.166666666666667,\"childNumber\":2,\"payload\":{}},{\"color\":\"#B00000\",\"name\":\"UHOTP\",\"score\":200.0,\"children\":[{\"color\":\"#B00000\",\"name\":\"SS\",\"score\":200.0,\"children\":[{\"color\":\"#FFA600\",\"name\":\"1.COM\",\"score\":50.0,\"children\":[],\"size\":3.6666666666666665,\"childNumber\":0,\"payload\":{}},{\"color\":\"#FFA600\",\"name\":\"1.IVR\",\"score\":70.0,\"children\":[],\"size\":4.0,\"childNumber\":1,\"payload\":{}},{\"color\":\"#FFA600\",\"name\":\"1.MVM\",\"score\":80.0,\"children\":[],\"size\":4.166666666666667,\"childNumber\":2,\"payload\":{}}],\"edgePayloads\":[{},{},{}],\"size\":6.166666666666666,\"childNumber\":0,\"payload\":{}}],\"edgePayloads\":[{}],\"size\":6.166666666666666,\"childNumber\":3,\"payload\":{}}],\"edgePayloads\":[{},{},{},{}],\"size\":10.0,\"childNumber\":0,\"payload\":{}}],\"size\":10.0}},\"family\":\"Network\",\"subfamily\":\"Unidirectional\",\"vizType\":\"tree\",\"title\":\"test\",\"directed\":true,\"renderable\":\"\"}"';try
{
	AsterVisData = $.parseJSON(dataObjStr);
}
catch(e)
{
      	AsterVisData = dataObjStr;
}
var seriesId;
var first = true;
if(AsterVisData.series){
	for ( var key in AsterVisData.series) {
		if(first){
		     seriesId = key;
		     first = false;
		}
	}
}

var AsterVisDataSeriesId = seriesId;