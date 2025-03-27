
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("greetButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function() {
        message.textContent = "我還沒想到我要打什麼所以先這樣";
    });
});
