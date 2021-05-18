function numPrimo(input) {
    if(input === 1)
        return -1;

    let numerosPrimos = [];
    
    for (let i= 1; i <= input; i++) {
		if (esprimo(i)) 
            numerosPrimos.push(i);
	}
    return numerosPrimos;
}

function esprimo(num){
    if (num == 0 || num == 1 || num == 4) return false;
	for (let x = 2; x < num / 2; x++) {
		if (num % x == 0) return false;
	}
	return true;
}

module.exports = numPrimo;
