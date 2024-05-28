function clr() {
    document.getElementById("screen").value = ''
    
}

function display(x) {
    document.getElementById("screen").value += x
    
}

function sol() {
    let equation = document.getElementById("screen").value
    let ans= eval(equation)
    document.getElementById("screen").value = ans

}