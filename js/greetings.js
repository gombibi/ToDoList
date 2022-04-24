// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){

//     h1.classList.toggle("clicked");

//     // //아래 5문장은 위의 1문장으로 대체됨
//     // const clickedClass = "clicked";

//     // if(h1.classList.contains(clickedClass)){
//     //     h1.classList.remove(clickedClass);
//     // }else{
//     //     h1.classList.add(clickedClass);
//     // }
// }
// // function handleMouseEnter(){
// //     h1.innerHTML = "Mouse is here!";
// // }
// // function handleMouseLeave(){
// //     h1.innerHTML = "Mouse is gone!";
// // }

// // function handleWindowResize(){
// //     document.body.style.backgroundColor="tomato";
// // }

// // function handleWindowCopy(){
// //     alert("copier");
// // }

// // function handleWindowOffline(){
// //     alert("SOS NO WIFI");
// // }

// // function handleWindowOnline(){
// //     alert("ALL GOOD");
// // }

// h1.addEventListener("click", handleTitleClick);
// // 위와 동일 ==> title.onclick = handleTitleClick;
// // h1.addEventListener("mouseenter", handleMouseEnter);
// // h1.addEventListener("mouseleave", handleMouseLeave);

// // window.addEventListener("resize", handleWindowResize);
// // window.addEventListener("copy", handleWindowCopy);
// // window.addEventListener("offline", handleWindowOffline);
// // window.addEventListener("online", handleWindowOnline);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username =  loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello♥ ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}