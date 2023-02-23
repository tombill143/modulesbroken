"use strict";

import { capitalize, makeSpaces } from "./stringscript.js";

//window.addEventListener("DOMContentLoaded", start);

start();

function start() {
  console.log("Start!");
  sayHello("Timothy");
}

function sayHello(name) {
  const greeting = makeSpaces(`Yo ${capitalize(name)}`);
  document.querySelector("#output").textContent = greeting;
  console.log("greeting", greeting);
}
