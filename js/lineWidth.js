let thin = document.getElementsByClassName('thin')[0]
let middleThin = document.getElementsByClassName('middleThin')[0]
let middleWide = document.getElementsByClassName('middleWide')[0]
let wide = document.getElementsByClassName('wide')[0]

var lineList = [thin,middleThin,middleWide,wide]
//classList = classList.concat(lineList)
middleThin.classList.add('backgroundColor')
//ctx.lineWidth = allLine
thin.addEventListener('click',function(){
    allLine = 0.5
    removeLine()
    thin.classList.add('backgroundColor')
})
middleThin.addEventListener('click',function(){
    allLine = 1
    removeLine()
    middleThin.classList.add('backgroundColor')
})
middleWide.addEventListener('click',function(){
    allLine = 2
    removeLine()
    middleWide.classList.add('backgroundColor')
})
wide.addEventListener('click',function(){
    allLine = 3
    removeLine()
    wide.classList.add('backgroundColor')
})
function removeLine(){
    lineList.forEach(function(ele){
        ele.classList.remove('backgroundColor')
    })
}