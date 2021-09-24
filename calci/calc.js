var display = document.querySelector(".display");
var num = document.querySelectorAll(".num");
var symbols = document.querySelectorAll(".symbol");
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
			let textLength = innerText.length;
			if((isNaN(innerText[0])) || (isNaN(innerText[textLength-1]))){
				console.error("not a number");
			} 
			else{
				console.log("innerHtml is ", display.innerHTML);
			}
		}

		else{
			display.innerHTML += keyPress;
		}
	})
})


