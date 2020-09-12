/*let levelLight = document.getElementById('level__light');
let levelMedium = document.getElementById('level__medium');
let levelHard = document.getElementById('level__hard');*/
let startButton = document.getElementById('firstpage__startbutton');
let tableLight = document.getElementById('tablelight');
let tableMedium = document.getElementById('tablemedium');
let tableHard = document.getElementById('tablehard');
let firstPage = document.getElementById('firstpage');
let levels = document.getElementsByName('level');
let body = document.getElementById('body');

startButton.addEventListener('click', event => {
	for (let i = 0; i < levels.length; i++) {
		if (levels[0].checked) {
			tableLight.classList.remove('section__levellight');
			tableLight.classList.add('table');
			firstPage.classList.add('section__disappear');

			let allBacksideImages  = ['./cardbug.png', './cardgameover.png', './cardgameover.png'];
			let backsideImgLight = document.querySelectorAll('.backside__light');

			function shuffleImages (arr) {
				let j, temp;
                    for (let i = arr.length - 1; i>0; i--) {
                    j = Math.floor(Math.random() * (i+1));
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    }
                    return arr;
			}
			let newArray = shuffleImages(allBacksideImages);

			backsideImgLight.forEach((elem, i) =>{
				backsideImgLight[i].src = newArray[i];
			})

			
		} 
		else if(levels[1].checked) {
			tableMedium.classList.remove('section__levelmedium');
			tableMedium.classList.add('table');
			firstPage.classList.add('section__disappear');

			let allBacksideImages  = ['./cardbug.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png'];
			let backsideImgMedium = document.querySelectorAll('.backside__medium');

			function shuffleImages (arr) {
				let j, temp;
                    for (let i = arr.length - 1; i>0; i--) {
                    j = Math.floor(Math.random() * (i+1));
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    }
                    return arr;
			}
			let newArray = shuffleImages(allBacksideImages);

			backsideImgMedium.forEach((elem, i) =>{
				backsideImgMedium[i].src = newArray[i];
			})
		} 
		else if (levels[2].checked){
			tableHard.classList.remove('section__levelhard');
			tableHard.classList.add('table');
			firstPage.classList.add('section__disappear');

			let allBacksideImages  = ['./cardbug.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png', './cardgameover.png'];
			let backsideImgHard = document.querySelectorAll('.backside__hard');

			function shuffleImages (arr) {
				let j, temp;
                    for (let i = arr.length - 1; i>0; i--) {
                    j = Math.floor(Math.random() * (i+1));
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    }
                    return arr;
			}
			let newArray = shuffleImages(allBacksideImages);

			backsideImgHard.forEach((elem, i) =>{
				backsideImgHard[i].src = newArray[i];
			})
		}


	}			
});


let card = document.querySelectorAll('.card');
			let frontCard = document.querySelectorAll('.frontcard');
			let backCard = document.querySelectorAll('.backcard');
			let a = false;

			card.forEach((index, n) => { 
			let cardFlip = card[n].addEventListener('click', event => {
                        card[n].classList.add('flip');
                        backCard[n].classList.remove('backcard');
                        frontCard[n].classList.add('backcard');
                        let a = true;
	                        if (a === true) {
	                        card[n].addEventListener('click', event => {
	                        	firstPage.classList.remove('section__disappear');
	                        	tableLight.classList.add('section__levellight');
	                        	tableLight.classList.remove('table');
	                        	tableMedium.classList.add('section__levelmedium');
	                        	tableMedium.classList.remove('table');
	                        	tableHard.classList.add('section__levelhard'); 
	                        	tableHard.classList.remove('table');
	                        	card[n].classList.remove('flip');
                        		backCard[n].classList.add('backcard');
                        		frontCard[n].classList.remove('backcard');
	                        	})
	                        } 
	                    });               
			});