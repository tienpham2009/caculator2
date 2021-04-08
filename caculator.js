function inPut(number) {
    document.getElementById('outPut').value += number;
}
function caculator() {
    let output = document.getElementById('outPut').value;
    result = eval(output);
    document.getElementById('outPut').value = result;
}
function Delete(){
    document.getElementById("outPut").value = '';
}


