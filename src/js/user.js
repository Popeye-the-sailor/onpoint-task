'use strict'

var sliderControls = document.querySelector('.slider-controls');

var slide1 = document.getElementById('slide1'),
		slide2 = document.getElementById('slide2'),
		slide3 = document.getElementById('slide3'),
		offsetTop = [slide1.offsetTop,slide2.offsetTop,slide3.offsetTop],
		moveContainer = document.getElementById('move-container'),
		scrollBottom = document.getElementById('scroll-bottom'),
		slideContainer = document.getElementById('slidecontainer');
			
/*
for (let i=0; i<sliderControls.children.length; i++) {
	sliderControls.children[i].addEventListener('click', function(e){
	e.preventDefault;
	for(let a=0; a<sliderControls.children.length; a++){
			this.parentNode.children[a].classList.remove('active');
	}
	this.classList.add('active');
	moveContainer.style.transform = 'translateY('+ -offsetTop[i] + 'px)';
})
}
*/
sliderControls.children[0].addEventListener('click', function(e){
	for(let a=0; a<sliderControls.children.length; a++){
			this.parentNode.children[a].classList.remove('active');
	}
	moveContainer.style.transform = 'translateY('+ -offsetTop[0] + 'px)';
	this.classList.add('active');
	scrollBottom.style.display = 'block';
	slideContainer.style.display = 'none';
})
sliderControls.children[1].addEventListener('click', function(e){
	for(let a=0; a<sliderControls.children.length; a++){
			this.parentNode.children[a].classList.remove('active');
	}
	moveContainer.style.transform = 'translateY('+ -offsetTop[1] + 'px)';
	this.classList.add('active');
	scrollBottom.style.display = 'none';
	slideContainer.style.display = 'none';
})
sliderControls.children[2].addEventListener('click', function(e){
	for(let a=0; a<sliderControls.children.length; a++){
			this.parentNode.children[a].classList.remove('active');
	}
	moveContainer.style.transform = 'translateY('+ -offsetTop[2] + 'px)';
	this.classList.add('active');
	scrollBottom.style.display = 'none';
	slideContainer.style.display = 'block';
})

userRange.addEventListener('input', onRangeChange);

function onRangeChange(e) {
	var slide3 = document.getElementById('slide3'),
			slide4 = document.getElementById('slide4'),
			slide5 = document.getElementById('slide5'),
			slideWindow = document.getElementById('slider-container'),
			top = slide3.offsetTop,
			value = e.target.value;
	
	if(this.value >= 0 && this.value < 25) {
		slideWindow.style.transform = 'translateX(' + 0 + 'px)';
	} else 
	if(this.value >= 25 && this.value < 75) {
		slideWindow.style.transform = 'translateX(' + -slide4.offsetLeft + 'px)';
	} else
	if(this.value >= 75 && this.value <= 100) {
		slideWindow.style.transform = 'translateX(' + -slide5.offsetLeft + 'px)';
	}
}