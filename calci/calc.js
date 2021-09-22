var display = document.querySelector(".display");

var num = document.querySelectorAll(".num");
var symbols = document.querySelectorAll(".symbol");

num.forEach((item)=>{
	item.addEventListener('click', (e)=>{
		display.innerHTML += e.target.textContent;
	})
})

symbols.forEach((items) => {
	items.addEventListener('click', (e)=>{
		let innerText = e.target.textContent;
		if(innerText == 'C'){
			let displayText = display.innerHTML;	
			Length = displayText.length;
			if(Length > 1){
				console.log(Length);
				displayText = displayText.substr(0, Length-1);
				display.innerHTML = displayText;
				console.log(displayText);
			}

			if(displayText[0] != 0){
				display.innerHTML = 0;
			}
		}

		else{
			display.innerHTML = innerText;
		}
	})
})


