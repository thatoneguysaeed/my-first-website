let clickCount = 0;

document.getElementById("apologyButton").addEventListener("click", function() {
    clickCount++;
    let apologyMessage = document.getElementById("apologyMessage");
    apologyMessage.style.display = "block";

    if (clickCount === 1) {
        apologyMessage.innerHTML = "ywr fuck everything i want to be with u forever i love so much plsss ywrr";
        apologyMessage.style.color = "black";
        document.body.style.backgroundColor = "pink";
    } else if (clickCount === 2) {
        apologyMessage.innerHTML = "ok im sorry i miss u af n i wna cry rn soo bad .";
        apologyMessage.style.color = "blue";
    } else if (clickCount === 3) {
        apologyMessage.innerHTML = "pls ywr baby ik u r sensitive i love u alotttt.";
        apologyMessage.style.color = "green";
    } else {
        apologyMessage.innerHTML = "humppp babe idk ywr i tought of making a website just for u";
        document.getElementById("apologyButton").style.display = "none";
    }
});