var x
x = 1
loop()

function loop() {
    document.getElementById("test").innerHTML = "Number: " + x
    x = x + 1
    setTimeout(loop, 1)
}