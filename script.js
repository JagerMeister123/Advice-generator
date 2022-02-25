let advice = "";
let number = 0;
function change () {
    
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        number = data.slip["id"];
        advice = data.slip["advice"];
        console.log(number,advice);
    });
    document.getElementsByClassName("advice")[0].innerHTML = advice;
    document.getElementsByClassName("number")[0].innerHTML = "Advice # " + number;
};
