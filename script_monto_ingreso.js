
var vMonto = [];
var vSalida = [];

function mainMonto(){


/*Capturo el valor almacendo en el cuadro de texto de id=nombre*/
	var mont = document.getElementById("monto").value;
	var total =0;

	/*Agrego nom a la última posición vacía del vector*/
	vMonto.push(mont);
	


 
	
 /////////////////////////cargar vector en locla storage, el objeto vector
 /////se convierte en string 
    localStorage.setItem('vMonto', JSON.stringify(vMonto));



////////////////////////////////salida por consola /////////////////////////////////////////
 
 console.log("Monto agregado -> "+mont);

	/* Imprimimos por consola la cantidad de elementos del vector*/
	console.log("Cantidad de elementos -> "+vMonto.length);

	console.log("----Imprimo todos los elementos por consola ----");
	for(var i = 0 ; i<vMonto.length ; i ++){

 
		console.log(vMonto[i]);
		
	}
	console.log("-------------------------------------------------");
///////////////////////////////////////////////////////////////////////////



var outputList = "";


	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vMonto.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vMonto[i]+"</li>";
		
	 //vMonto[i]=mont;
         //suma = suma + vMonto[i];
     }


	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";

	///////////////////////////////////////////////////////////////////////////////



for (i=0;i<=vMonto.length-1;i++) {
		
	
         // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    //total = (total == null || total == undefined || total == "") ? 0 : total;
	

	//mont = parseInt(mont);
    /* Esta es la suma. */
    mont = parseInt(mont);
      //vMonto[i]=  mont;
    total = (parseInt(total) + parseInt(vMonto[i]));
    
}
  
document.getElementById("ImprimirMonto").innerHTML = "monto  :"+ total ;

}




function mostrar(){

 let vMonto = JSON.parse(localStorage.getItem("vMonto"));

  //localStorage.getItem('vFecha', JSON.stringify(vFecha));
 
 var mont = document.getElementById("monto").value;

	/*Agrego nom a la última posición vacía del vector*/
	vMonto.push(mont);





  /*----------Salida por consola---------------------*/
	console.log("monto agregado -> "+mont);

	/* Imprimimos por consola la cantidad de elementos del vector*/
	console.log("Cantidad de elementos -> "+vMonto.length);

	console.log("----Imprimo todos los elementos por consola ----");
	for(var i = 0 ; i<vMonto.length ; i ++){

		console.log(vMonto[i]);
	}
	console.log("-------------------------------------------------");

	/*----------Salida por el front --------------------*/
	var outputList = "";

	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vMonto.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vMonto[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";

	document.getElementById("ImprimirMonto").innerHTML = "monto  :"+outputList;


  


}



