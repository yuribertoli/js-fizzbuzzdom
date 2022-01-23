let playingNumbers = parseInt(prompt("Quanti numeri vuoi visualizzare?"));
let containerDom = document.getElementById("container");
let number; 

for (let number=1; number<=playingNumbers; number++) {
    if (number % 18 == 0 && number % 7 == 0) {
        containerDom.innerHTML = containerDom.innerHTML + "<div class='box boxaaa'>" + "aaaaa" + "</div>";
    }
    else if (number % 10 == 0 && number % 4 == 0) {
        containerDom.innerHTML = containerDom.innerHTML + "<div class='box boxboh'>" + "bohhh" + "</div>";
    }
    else if (number % 5 == 0 && number % 3 == 0) {
        containerDom.innerHTML = containerDom.innerHTML + "<div class='box box35'>" + "fizzbuzz" + "</div>";
    }
    else if (number % 3 == 0) {
        containerDom.innerHTML = containerDom.innerHTML + "<div class='box box3'>" + "fizz" + "</div>";
    }
    else if (number % 5 == 0) {
        containerDom.innerHTML = containerDom.innerHTML + "<div class='box box5'>" + "buzz" + "</div>"; 
    }
    else {
        containerDom.innerHTML = containerDom.innerHTML + "<div class='box'>" + number + "</div>";
    }
}



