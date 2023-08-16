console.log("M");


// Event Listener
// element.addEventListener("click", funtion);

const buttonTwo=document.querySelector('.btn-2');
function alertBtn()
{
     alert('JavaScript BTN-2');
};

buttonTwo.addEventListener("click", alertBtn);


// Mouseover
const newBackgroundColor=document.querySelector('.box-3');
function changeBgColor()
{
     newBackgroundColor.style.backgroundColor='blue';
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);