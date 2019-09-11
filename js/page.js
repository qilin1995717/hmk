$(function(){
var url=window.location.search;
var str = url.substr(1);
   strs = str.split("&"); 
   var key=new Array(strs.length);
   var value=new Array(strs.length);
   for(i=0;i<strs.length;i++){
    key[i]=strs[i].split("=")[0]
    value[i]=unescape(strs[i].split("=")[1]); 
  } 
  var val =JSON.parse(value);
  console.log(val.id);
})

$("#go").click(function(){
	
	var getval =  {
	   "id":"1",
	}
	
	    window.location.href="index.html?valus="+JSON.stringify(getval);  
})
$("#next").click(function(){
 var getval =  {
   "name":"Bill Gates",
   "age":62,
   "cars": [
	  { "name":"Porsche",  "models":[ "911", "Taycan" ] },
	  { "name":"BMW", "models":[ "M5", "M3", "X5" ] },
	  { "name":"Volvo", "models":[ "XC60", "V60" ] }
   ]
}
	
	window.location.href="pay.html?valus="+ JSON.stringify(getval);
})
