let red = document.getElementsByClassName('red')[0],
    orange = document.getElementsByClassName('orange')[0],
    yellow = document.getElementsByClassName('yellow')[0],
    green = document.getElementsByClassName('green')[0],
    blue = document.getElementsByClassName('blue')[0],
    pink = document.getElementsByClassName('pink')[0],
    black = document.getElementsByClassName('black')[0]
    gray = document.getElementsByClassName('gray')[0]

    var colorList = [red,orange,yellow,green,blue,pink,black,gray]
//ctx.strokeStyle = 'red'
    black.classList.add('backgroundColor')

red.addEventListener('click',function(){
    removeColor()
    red.classList.add('backgroundColor')
    allColor = 'red'
})
orange.addEventListener('click',function(){
    removeColor()
    orange.classList.add('backgroundColor')
    allColor = 'orange'
})
yellow.addEventListener('click',function(){
    removeColor()
    yellow.classList.add('backgroundColor')
    allColor = 'yellow'
})
green.addEventListener('click',function(){
    removeColor()
    green.classList.add('backgroundColor')
    allColor = 'green'
})
blue.addEventListener('click',function(){
    removeColor()
    blue.classList.add('backgroundColor')
    allColor = 'blue'
})
pink.addEventListener('click',function(){
    removeColor()
    pink.classList.add('backgroundColor')
    allColor = 'pink'
})
black.addEventListener('click',function(){
    removeColor()
    black.classList.add('backgroundColor')
    allColor = 'black'
})
gray.addEventListener('click',function(){
    removeColor()
    gray.classList.add('backgroundColor')
    allColor = 'gray'
})
function removeColor(){
    colorList.forEach(function(ele){
        ele.classList.remove('backgroundColor')
    })
}