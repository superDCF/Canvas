function exceptCreation(){
    canvas.removeEventListener('mousedown',earserDown)
    canvas.removeEventListener('mousemove',earserF)
    canvas.removeEventListener('mousemove',clearPart)

    canvas.removeEventListener('mouseup',buildRect)
}
function exceptEarser(){
    canvas.removeEventListener('mousedown',getLastPoint)
    canvas.removeEventListener('mousemove',getCurrentPoint)
    canvas.removeEventListener('mouseup',buildRect)
}
function buildRect(e){
    x2 = e.pageX-10
    y2 = e.pageY-10
    ctx.strokeRect(x1,y1,x2-x1,y2-y1)
}