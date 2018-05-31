function loadDoc() { 

	var xhttp = new XMLHttpRequest(); 

	xhttp.onreadystatechange = function() { 

	if (this.readyState == 4 && this.status == 200) {
    	var emp = JSON.parse(xhttp.responseText);
    
    	for(var i=0;i<emp.length;i++){
     	let testing =emp[i].name
      	document.getElementById("demo").innerHTML += testing;  

      }
	}

}; 

xhttp.open("GET", "test.json", true);  
xhttp.send();

}


loadDoc();

