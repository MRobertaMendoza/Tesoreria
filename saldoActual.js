
var vSalida = [];
var vSaldoctual = [];

function actualizar(){


/*Capturo el valor almacendo en el cuadro de texto de id=nombre*/
	var salida = document.getElementById("salidas").value;
	//var sal = parseInt(vMonto);
	var total =0;
	var result =0;

	/*Agrego nom a la última posición vacía del vector*/
	vSaldoctual.push(salida);


 
	
 /////////////////////////cargar vector en locla storage, el objeto vector
 /////se convierte en string 
    localStorage.setItem('vSaldoctual', JSON.stringify(vSaldoctual));

///////////////////////////////////////////////////////////////////////
for (i=0;i<=vSaldoctual.length-1;i++) {
		
	    
	
    //salida = parseInt(salida);
    //sal = parseInt(sal);
   //vSalida = parseInt(vSalida);
   //vMonto = parseInt(vMonto);

      //vMonto[i]=  mont;
   total = (parseInt(total) + parseInt(vMonto[i]));
    //vSalida[i] = (total);
   //salida = parseInt(salida);
   // vSalida [i]= total;
    total = (  parseInt(total) - parseInt(vSaldoctual[i]));
     
   
   	}


	


document.getElementById("ImprimirSaldoActual").innerHTML = "Su saldo actual es de  :" + total ;
}
