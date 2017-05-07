'use strict';
// varriables
let play =false
let textAsArray=[];
let i=0;
let interval;
let MilisecPrWord = 1500

// Document references
const $readSpeedShow$ = $('#readSpeedShow')
const $wordContainer$ = $('#wordContainer')
let $wordsPrSec$ = $('#textSpeed')
let $textInput$ = $('#textInput')
let $wordStage$ =$('#wordStage')
	//Controller references 
	const $play$ = $('#play')
	const $pauseResume$= $('#pauseResume')
	const $restart$ =$('#restart')
	let $font$ = $('#textFont')


// Jquery converter!
const changeFont= function(){
	$wordContainer$.css('font-family', $font$.val())
}

const setReadSpeed =function(){
	play=false
	MilisecPrWord = (60000/$wordsPrSec$.val())
	$readSpeedShow$.text(`${$wordsPrSec$.val()} words Pr Sec`);
}


// getting texts and removing double spacings
const getText =function(){
	let text= $textInput$.val()
	if(text.length !== 0){
		text = text.replace( /\s\s +/g, ' ' )  // control for double spacing 
		textAsArray = text.split(' ')
		clearInterval(interval)
		starInterval()
	}else{
		alert('You need to add text to start')
	}
}
	//Changing read word
const wordSetIn = function(){
	if(i<textAsArray.length && play){
		$wordStage$.empty()
		$wordStage$.text(textAsArray[i]) 
		i++
		console.log(i)
	}
}

// Js native

const starInterval = function(){
	play=true
	interval = setInterval(wordSetIn, MilisecPrWord)
}

const stopInteval = function(){
	play= false
	clearInterval(interval)
}

const pause =function(){
	if(play === true){
		play=false
	}else{
		play=true
	}
}

const restart= function(){
	stopInteval(interval)
	i=0;
}
window.onload(setReadSpeed())
 