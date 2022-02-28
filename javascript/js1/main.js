
function doStuff() {
    alert("Doing Stuff!");
}

function addNums() {
    var a,b,c;

    a = Number(document.getElementById("nbr1").value);
    b = Number(document.getElementById("nbr2").value);
    c = a+b;
    document.getElementById("result").innerHTML = c;
}

function subNums() {
    var a,b,c;

    a = Number(document.getElementById("nbr1").value);
    b = Number(document.getElementById("nbr2").value);
    c = a-b;
    document.getElementById("result").innerHTML = c;

}

function divNums() {
    var a,b,c;

    a = Number(document.getElementById("nbr1").value);
    b = Number(document.getElementById("nbr2").value);
    c = a/b;
    document.getElementById("result").innerHTML = c;

}

function mulNums() {
    var a,b,c;

    a = Number(document.getElementById("nbr1").value);
    b = Number(document.getElementById("nbr2").value);
    c = a*b;
    document.getElementById("result").innerHTML = c;

}
