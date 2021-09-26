var display = document.querySelector(".display");
var num = document.querySelectorAll(".num");
var symbols = document.querySelectorAll(".symbol");


//this function takes the equation of type a(b)-c(d)
//and converts it into a*(b)-c*(d) which is necessary for
//eval() function;
function format(equation){
	for(let i=0; i<equation.length; i++){
		if(equation[i] == '('){
			if(!isNaN(equation[i-1]) || equation[i-1] == ')'){
				equation = equation.substring(0, i) + '*' + equation.substring(i, equation.length);
				console.log(equation);
				i = 0;
			}
		}
	}

	return equation;
}

num.forEach((item)=>{
	item.addEventListener('click', (e)=>{
		let keyPress = e.target.textContent;

		if(Number(display.innerHTML) == 0){
			display.innerHTML = keyPress;
		}

		else{
			display.innerHTML += keyPress;
		}
	})
})

symbols.forEach((items) => {
	items.addEventListener('click', (e)=>{
		let keyPress = e.target.textContent;
		let displayText = display.innerHTML;	
		if(keyPress == 'C'){
			Length = displayText.length;
			if(Length > 1){
				displayText = displayText.substr(0, Length-1);
				display.innerHTML = displayText;
			}

			if(Length < 2){
				display.innerHTML = '0';
			}
		}

		else if(keyPress == "CC"){
			display.innerHTML = '0';
		}

		else if(keyPress == '='){
			let innerText = display.innerHTML;
			let equation;
			let countStar;
			// equation = findBracketsAndSolve(innerText);

			//replace all the 'x' with '*' in innerText before using eval();
			countStar = 0;
			for(let i in innerText){
				if(innerText[i] == 'x'){
					countStar++;
				}
			}
			for(let j=0; j<countStar; j++){
				innerText = innerText.replace("x", "*");
			}
			////////////////////////////////////////////////
			innerText = format(innerText);
			console.log(innerText);
			equation = eval(innerText);
			display.innerHTML = equation;
		}

		else{
			display.innerHTML += keyPress;
		}
	})
})


