const formatPrice = (price:number) => {
	const newNumber = '$ ' + price.toFixed(2);
	return newNumber;
}

const boolSwitch = (statement:boolean) => statement === true ? false : true;


export {
	formatPrice,
	boolSwitch
}