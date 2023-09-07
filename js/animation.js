// define DOM elements
const heroImage = document.querySelector("#hero__animation__img");
const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
const blContent = document.querySelector("#grid__bl__content");
const brContent = document.querySelector("#grid__br__content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");
const projectFour = document.querySelector(".p-4");
const projectFive = document.querySelector(".p-5");

// Define colors and positions
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0) ";
let tlHiden = "translateX(-100vw) translateY(-100vh) ";

let trActive = "translateX(-5vw) translateY(0) ";
let trHiden = "translateX(100vw) translateY(-100vh) ";

let blActive = "translateX(5vw) translateY(0) ";
let blHiden = "translateX(-100vw) translateY(-100vh) ";

let brActive = "translateX(5vw) translateY(0) ";
let brHiden = "translateX(-100vw) translateY(-100vh) ";


