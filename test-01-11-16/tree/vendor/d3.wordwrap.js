// WORD WRAP
function wordWrap(d, i){
var words = d.name.split(/([-: ])/);
var line = new Array();
var length = 0;
var text = "";
var width = d3.select(this).attr("wrapWidth");
var height = 10;
var word;
var firstLine = true;
if (!width)
   width = 140;
do {
   word = words.shift();
   line.push(word);
   if (words.length)
     this.firstChild.data = line.join(' ') + " " + words[0]; 
   else
     this.firstChild.data = line.join(' ');
   length = this.getBBox().width;
   if (length < width && words.length) {
	 ;
   }
   else {
     text = line.join(' ');
     this.firstChild.data = text;
     if (this.getBBox().width > width) { 
	   text = d3.select(this).select(function() {return this.lastChild;}).text();	   
       text = text + "...";
       d3.select(this).select(function() {return this.lastChild;}).text(text);
       d3.select(this).classed("wordwrapped", true); 
       break;
    }
    else
      ;

  if (text != '') {
     var dy,x;
     if(firstLine) {
	    dy=d.dy;
		x=d.x;
		firstLine=false
	 } else {
	    dy="0.9em";
		x=0;
	 }

    d3.select(this).append("svg:tspan")
    .attr("x", function(d) { return d.children || d._children ? nodeLabelOffset_1 : nodeLabelOffset_2; })
    //.attr("dx", ".35em")
	.attr("dy", dy)
    .text(text);
  }
  else
     ;

  if(this.getBBox().height > height && words.length) {
     text = d3.select(this).select(function() {return this.lastChild;}).text();
     text = text + "...";
     d3.select(this).select(function() {return this.lastChild;}).text(text);
     d3.select(this).classed("wordwrapped", true);

     break;
  }
  else
     ;

  line = new Array();
    }
  } while (words.length);
  this.firstChild.data = '';
} 