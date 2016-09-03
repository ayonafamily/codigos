var cartas =["c","t","d","p"];
function lista(){
		for(i=0;i<cartas.length;i++){
			console.log(cartas[i]);
			for(j=1;j<=12;j++){
				console.log(j+cartas[i]);
			}
		}
	}