document.addEventListener("readystatechange", (e) => {
    initApp();
}, false);

const initApp = () => {
    // id selection
console.log(document.getElementById('para1'));

// classes
console.log(document.getElementsByClassName('para'));

// selecting using query selector

console.log(document.querySelector('#para1'));
console.log(document.querySelector(".para"));
console.log(document.querySelectorAll(".para"));

// changing the style
const para1 = document.querySelector('#para1');
para1.style.color = "red";

// event listeners
const alertmsg = function (event) {
    console.log(event.target);
    alert('you clicked para1')
}

document.querySelector('#para1').addEventListener("click", alertmsg, false);
// this removes the eventlistener so click wont work
document.querySelector('#para1').removeEventListener("click", alertmsg, false);

// eventlistener with anonymous function, cannot remove
document.querySelector('.para2').addEventListener("click", () => {
    alert('clicked para2')
}, false);

// event that catches when the full resources gets loaded
document.addEventListener("readystatechange", () => {
    console.log('Page resources are loaded');
    // or for applications we call initApp();
    // to start the application
}, false);
}

// about the third parameter of the addeventlistener
// its called useCapture. 
// bubbling : for nested elements, when inner element is clicked
// all events gets triggered in some order by usecapture
// usecapture : false : in to out
// usecapture : true: out to in

document.querySelector('#div1').addEventListener("click", (e) => {
    alert('clicked div1')
}, false);
document.querySelector('#div2').addEventListener("click", () => {
    alert('clicked div2')
}, false);
document.querySelector('#div3').addEventListener("click", (e) => {
    alert('clicked div3');
    e.stopPropagation(); // events stops at here in to out
}, false);

// parentElement, children, firstChild, lastChild

