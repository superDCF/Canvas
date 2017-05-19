let canvas = document.getElementById('draw')
let ctx = canvas.getContext('2d')

resizeCanvas() //初始化canvas的大小
window.addEventListener("resize", resizeCanvas)
function resizeCanvas() {
    w = canvas.width = window.innerWidth*9/10-20
    h = canvas.height = window.innerHeight-20
    return {w,h}
}