let canvas = document.getElementById('draw')
let ctx = canvas.getContext('2d')
let modul = document.getElementById('modul')
var allLine = allLine || 1  //如果用let必须在声明时就定义
var allColor = allColor || 'black'
var classList = []
resizeCanvas() //初始化canvas的大小
window.addEventListener("resize", resizeCanvas)
function resizeCanvas() {
    w = canvas.width = window.innerWidth*9/10-32
    h = canvas.height = window.innerHeight-20
    return {w,h}
}
window.addEventListener("beforeunload", function (e) {
    
    // modul.style.display = 'block'
    e.returnValue =  '您可能有数据没有保存'; 

})