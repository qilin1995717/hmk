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