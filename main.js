let playingNumbers = parseInt(prompt("Quanti numeri vuoi visualizzare?"));
let containerDom = document.getElementById("container");
let number; 

for (let number=1; number<=playingNumbers; number++) {

    if (number % 5 == 0 && number % 3 == 0) {
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

let count35 = containerDom.getElementsByClassName('box35').length;
let count3 = containerDom.getElementsByClassName('box3').length;
let count5 = containerDom.getElementsByClassName('box5').length;

document.getElementById("daje").innerHTML = `Ci sono ${count3} Fizz, ${count5} Buzz e ${count35} FizzBuzz!!`;


