// let item = document.getElementById('four');
// console.log(item);

// item.innerHTML = "Quinoa";

// document.querySelector('#three').innerHTML = "One Line";

document.querySelector('#one').innerHTML = "1 + 1 =" + (1+1);

document.querySelector('#two').onclick = changeText;
function changeText(){
    document.querySelector('#three').innerHTML = "meow";
}
