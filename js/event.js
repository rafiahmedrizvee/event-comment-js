function makeGreen() {
    document.body.style.backgroundColor = 'green'
    
}

function makeRed() {
    document.body.style.backgroundColor = 'red'
    
}





const yellowButton = document.getElementById('make-yellow')
yellowButton.onclick = makeYellow

function makeYellow(){
 document.body.style.backgroundColor = 'yellow'
 
}
//// make skyblue////
const skyButton = document.getElementById('make-skyBlue')
skyButton.onclick = function makeSkyblue(){


 document.body.style.backgroundColor = 'skyblue'
 
}


const greyButton = document.getElementById('make-Grey');
greyButton.onclick = function(){
    document.body.style.backgroundColor = 'grey'
}


const blueButton = document.getElementById('make-Blue');
blueButton.addEventListener('click',function(){
    document.body.style.backgroundColor = 'blue'
})

document.getElementById('make-black').addEventListener('click',function(){
    document.body.style.backgroundColor = 'black'
})

