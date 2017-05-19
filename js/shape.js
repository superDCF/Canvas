let tri = document.getElementsByClassName('triangle')[0]
let rect = document.getElementsByClassName('rectangle')[0]
let circ = document.getElementsByClassName('circle')[0]
let sect = document.getElementsByClassName('sector')[0]
var x1,y1,x2,y2
//矩形
rect.addEventListener('click',function(){
    removeEvent()
    canvas.addEventListener('mouseenter',rectangle)
})
function rectangle(){  
    canvas.addEventListener('mousedown',function(e){
        x1 = e.pageX-10
        y1 = e.pageY-10
        // 未实现时时显示边框
    })
    canvas.addEventListener('mouseup',buildRect)
    console.log('画矩形')
}
function buildRect(e){
    x2 = e.pageX-10
    y2 = e.pageY-10
    ctx.strokeRect(x1,y1,x2-x1,y2-y1)
}

//三角形
tri.addEventListener('click',function(){
    removeEvent()
    canvas.addEventListener('mouseenter',triangle)
    console.log('要开始画三角形l')
})
function triangle(e){
    canvas.addEventListener('mousedown',function(e){
        x1 = e.pageX-10
        y1 = e.pageY-10
        // 未实现时时显示边框
        //console.log(x1,y1,'三角形')
    })
    canvas.addEventListener('mouseup',buildTri)
}
function buildTri(e){
    x2 = e.pageX-10
    y2 = e.pageY-10
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y1)
    ctx.lineTo(x2,y2)
    ctx.closePath()
    ctx.stroke()
    //console.log(x1,y1,x2,y2)
    console.log('画三角形')
}

//圆形
circ.addEventListener('click',function(){
    removeEvent()
    canvas.addEventListener('mouseenter',circle)
})
function circle(){
    canvas.addEventListener('mousedown',function(e){
        x1 = e.pageX-10
        y1 = e.pageY-10
        // 未实现时时显示边框
    })
    canvas.addEventListener('mouseup',buildCirc)
    console.log('画矩形')
}
function buildCirc(e){
    x2 = e.pageX-10
    y2 = e.pageY-10
    let radius =Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))
    ctx.beginPath()
    ctx.arc(x1,y1,radius,0,Math.PI*2,true)
    ctx.strokeStyle = '#000'
    ctx.stroke()
}