let containerDom = document.getElementById("container");
let number; 

for (let number=0; number<=100; number++) {
    console.log(number);
    containerDom.innerHTML = containerDom.innerHTML + "<div class='box'>" + number + "</div>"; 
}