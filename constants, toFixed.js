
// var amount = 99.99;
// var total = amount + (amount * TAX_RATE);
// console.log(total.toFixed(2));


//phonespendingspree

const TAX_RATE = 0.08;
const PHONE_PRICE = 228.50
const ACC_PRICE = 9.99
const SPENDING_THRESHOLD = 250.00




function phoneSpendingSpree() {
	var bankBalance = prompt('What is your bank balance?');
	var phones = 0;
	var accessories = 0;
	var total = 0;
	while (total < bankBalance) {
		//buy phones and accessories
			var amountSpent = 0;
			phones++;
			amountSpent = PHONE_PRICE;
			if (amountSpent < SPENDING_THRESHOLD) {
			accessories++;
			amountSpent += ACC_PRICE;
			total += amountSpent;
			}
		}
		var tax = findTax(total);
		total += tax;
		
		if (total <= bankBalance) {
			total = toPrice(total);
			alert('You bought ' + phones + ' phones and ' + accessories + ' accessories for a total price of ' + total);
		} else {
			total = toPrice(total);
			alert("You don't have enough money to buy " + phones + ' phones and ' + accessories + ' accessories for a total price of ' + total);
		}	
		
	}
	
	function findTax (amt) {
		return (amt * TAX_RATE);
	}
	function toPrice (amt) {
		return ('$' + amt.toFixed(2));
	}

	phoneSpendingSpree();