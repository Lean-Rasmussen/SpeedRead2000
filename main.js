'use strict';

let readSpeedShow = document.getElementById('readSpeedShow')
let play =false
let textAsArray=[];
let i=0;
const wordContainer = document.getElementById('wordContainer')
let MilisecPrWord = 1500
let wordsPrSec = document.getElementById('textSpeed').value
let interval;
let font = document.getElementById('textFont').value

const setReadSpeed =function(){
	play=false
	wordsPrSec = document.getElementById('textSpeed').value
	MilisecPrWord = (60000/wordsPrSec)
	readSpeedShow.innerHTML = ` ${wordsPrSec} words Pr Sec`;
}

const changeFont= function(){
	font= document.getElementById('textFont').value
	wordContainer.style.fontFamily = font;
	console.log(font)
}

const getText =function(){
	let text= document.getElementById('textInput').value
	if(text.length !== 0){
		text = text.replace( /\s\s +/g, ' ' )  // control for double spacing 
		textAsArray = text.split(' ')
		clearInterval(interval)
		starInterval()
	}else{
		alert('You need to add text to start')
	}
}

const removeLastWord= function(){
	wordContainer.removeChild(wordContainer.lastChild)
}

const wordSetIn = function(){
	if(i<textAsArray.length && play){
		removeLastWord()
		changeReadWord(textAsArray[i]) 
		i++
		console.log(i)
	}
}

const starInterval = function(){
	play=true
	interval = setInterval(wordSetIn, MilisecPrWord)
}


const stopInteval = function(){
	play= false
	clearInterval(interval)
}


const changeReadWord= function(word){
	let h3Element=document.createElement('p')
	h3Element.innerHTML = word
	wordContainer.append(h3Element)
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
 