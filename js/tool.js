let earser = document.getElementsByClassName('earser')[0]
let paint = document.getElementsByClassName('paint')[0],
    empty = document.getElementsByClassName('empty')[0]
    classList.push(earser,paint)
let lastPoint = null  //记录上一个点的位置

function creation(){  //绘画函数
    lastPoint = null
    removeEvent()
    paint.classList.add('backgroundColor')

    canvas.addEventListener('mousedown',getLastPoint) //鼠标按下，得到上一个点并生成一个鼠标移动事件
    canvas.addEventListener('mousemove',getCurrentPoint) //鼠标移动，得到当前点，并且并且画线
    canvas.addEventListener('mouseup',function(){ //鼠标松开，移除画线功能
        canvas.removeEventListener('mousemove',getCurrentPoint)
    })
}
creation()
paint.addEventListener('click',creation) //点击绘画，接着画

canvas.addEventListener('mouseenter',function(){
    canvas.classList.add('crosshair')
})
canvas.addEventListener('mouseleave',function(){
    canvas.classList.remove('crosshair')
    canvas.removeEventListener('mousemove',getCurrentPoint)
})

function getLastPoint(e){
    let x = e.clientX-10,
        y = e.clientY-10
    lastPoint = {x,y}
    canvas.addEventListener('mousemove',getCurrentPoint)
    //console.log(e)
}
function getCurrentPoint(e){
    //console.log('得到当前位置在生效')
    let x = e.clientX-10,
        y = e.clientY-10
        if(!lastPoint){
            return
        }
    //console.log(lastPoint.x,lastPoint.y,x,y)
    drawLine(lastPoint.x,lastPoint.y,x,y)
    lastPoint = {x,y}
}
function drawLine(x1,y1,x2,y2){  //画线函数
    ctx.lineWidth = allLine  //改变线宽
    
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    //ctx.strokeStyle = 'red'
    ctx.strokeStyle = allColor
    ctx.stroke()
}

//橡皮擦
earser.addEventListener('click',fireEarser)//进入橡皮擦，增加一个橡皮擦事件

function fireEarser(){
    removeEvent()
    earser.classList.add('backgroundColor')

    canvas.addEventListener('mousedown',earserDown)
    canvas.addEventListener('mouseup',function(){
        canvas.removeEventListener('mousemove',earserF)
        canvas.removeEventListener('mousemove',clearPart)
    })
}

function earserDown(){
    canvas.addEventListener('mousemove',earserF)
}
function earserF(e){
    clearPart(e)
    moveClear()
}
function clearPart(e){  //橡皮擦
    let x = e.clientX-15,
        y = e.clientY-15
        ctx.clearRect(x,y,10,10)
    //console.log('橡皮擦在生效')
}
function moveClear(){
    canvas.addEventListener('mousemove',clearPart)
}

empty.addEventListener('click',function(){  //清空canvas内容
    let {w,h} = resizeCanvas()
    ctx.clearRect(0,0,w,h)
})

function removeEvent(){
    //取消橡皮擦事件
    canvas.removeEventListener('mousedown',earserDown)
    canvas.removeEventListener('mousemove',earserF)
    canvas.removeEventListener('mousemove',clearPart)
    //取消绘画事件
    canvas.removeEventListener('mousedown',getLastPoint)
    canvas.removeEventListener('mousemove',getCurrentPoint)
    //取消生成矩形事件
    if(typeof buildRect === 'undefined'){ 
        return
    }
    canvas.removeEventListener('mouseenter',rectangle)
    canvas.removeEventListener('mouseup',buildRect)
    //取消生成三角形事件
    canvas.removeEventListener('mouseenter',triangle)
    canvas.removeEventListener('mouseup',buildTri)
    //取消生成圆事件
    canvas.removeEventListener('mouseup',buildCirc)
    canvas.removeEventListener('mouseenter',circle)

    classList.forEach(function(ele){
        // console.log(typeof ele)
        ele.classList.remove('backgroundColor')
    })
}