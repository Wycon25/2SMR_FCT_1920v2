function comprobacionNumero (e){
	var numero = e.key.replace(/[^\d0-9]/g, '');

	if (numero == '')
		return false;
}