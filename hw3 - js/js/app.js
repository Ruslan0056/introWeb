function helloWorld() {
    var name = document.getElementById("name").value
    document.getElementById("result").innerText = `Привет, ${name}!`;
}


function send() {
    var name = document.getElementById("name").value
    var message = document.getElementById("message").value
    console.log(`${name}: "${message}"`);
}