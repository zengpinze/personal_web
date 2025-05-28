document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("greetButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function() {
        message.textContent = "我現在想不到要打什麼所以先這樣";
        message.style.fontSize = "16px";  // 讓字變小
        message.style.color = "#888";  // 讓字變淺
        message.style.opacity = "0.8";  // 讓字稍微透明
    });
});
