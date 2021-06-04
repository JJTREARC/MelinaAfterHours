var btn = document.querySelector('.menu')
btn.onmousemove = function(e) {
    var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
    var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
    btn.style.setProperty('--x', x + 'px')
    btn.style.setProperty('--y', y + 'px')
}

var txt = document.querySelector('.bigTxt')
txt.onmousemove = function(f) {
    var x = f.pageX + txt.offsetLeft + txt.offsetParent.offsetLeft - 25
    var y = f.pageY + btn.offsetTop + txt.offsetParent.offsetTop - 150
    txt.style.setProperty('--x2', x + 'px')
    txt.style.setProperty('--y2', y + 'px')
}