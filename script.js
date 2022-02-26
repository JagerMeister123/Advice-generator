let advice = "";
let number = 0;


function change () {
    let random = Math.floor(Math.random()*226);
    //There were 225 advices at the time of writing this code
    fetch(`https://api.adviceslip.com/advice/${random}`)
    .then(res => res.json())
    .then(data => {
        document.getElementsByClassName("advice")[0].innerHTML = data.slip["advice"];
        document.getElementsByClassName("number")[0].innerHTML = "Advice # " + data.slip["id"];
    });}