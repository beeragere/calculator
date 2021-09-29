//for displaying the solved equation and also for showing the user input;
var display = document.querySelector(".display"); 
//for getting numbers 0 -> 9 
var num = document.querySelectorAll(".num");
//for getting symbols such as /,x,-,+
var symbols = document.querySelectorAll(".symbol");


/*format() function takes the equation of type a(b)-c(d)
and converts it into a*(b)-c*(d) which is necessary for
eval() function;
*/
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


/*
there are two even handlers num and symbols;
num is triggered when any of the numbers are pressed;
sumbols is triggered when any of the symbols are pressed;
*/


//add event handler for each element in num 
//i,e for numbers 0->9
num.forEach((item)=>{
	item.addEventListener('click', (e)=>{
		//get the number that is pressed
		let keyPress = e.target.textContent;   

		/*if display has only '0' or display has "error" 
		then clear the display and insert the number that is pressed;
		*/
		if((display.innerHTML.length < 2 && Number(display.innerHTML) == 0) || display.innerHTML.includes("error") ){
			display.innerHTML = keyPress;
		}

		//else append the value to the display string
		else{
			display.innerHTML += keyPress;
		}
	})
})


//for symbol event handling
//add event handler for each of the symbols C, CC, =, -, + .... etc.
symbols.forEach((items) => {
	items.addEventListener('click', (e)=>{
		let keyPress = e.target.textContent; //for storing button value;
		let displayText = display.innerHTML; //for display text;

		//if clear(C) was pressed
		if(keyPress == 'C'){
			Length = displayText.length;
			//if textlength is greater than 1 then pop the last character;
			if(Length > 1){
				displayText = displayText.substr(0, Length-1);
				display.innerHTML = displayText;
			}

			//if textlength is less than two just put '0';
			if(Length < 2){
				display.innerHTML = '0';
			}
		}

		//if allclear(CC) was pressed clear the whole display;
		else if(keyPress == "CC"){
			display.innerHTML = '0';
		}

		//if equal was pressed
		else if(keyPress == '='){
			let innerText = display.innerHTML; //for display text;
			let equation;			//for storing the final equation;
			let countStar;  //for counting char 'x' in innerText

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
			/*change part of equaiton of type 9(9) to 9*(9) 
			which is necessary for eval() function;*/
			innerText = format(innerText);

			/*exception handling for NaN, 
			Infinity, and SyntaxError
			*/
			try{
				if(display.innerHTML == "math error"){
					throw "error";
				}
				equation = eval(innerText);
				if(isNaN(equation) || !isFinite(equation)){
					throw "error";
				}
				display.innerHTML = Number(equation).toFixed(4);
			}
			catch(err){
				console.log(err)
				//there was no other way!! chorry!!!!!!
				if(typeof(err) == "object"){
					display.innerHTML = "syntax error";
				}

				else{
					display.innerHTML = "math error";
				}
			}
		}

		else{
			//else just input whatever was pressed;
			//if text contains "error" clear and insert;
			if(display.innerHTML.includes("error")){
				display.innerHTML = keyPress;
			}
			//else just append the value;
			else{
				display.innerHTML += keyPress;
			}
		}
	})
})


console.log(Number("10000.0").toFixed(4))