"use strict";
// Adapted from CS290 Assignment 5 project file
// Date: November 2022
// Authors: Pam Van Londen, Melanie Archer, and Steven Bertolucci 

/* Asynchronously handle the event */
async function getData(e) {
  let API = "/zipcode";
  e.preventDefault();

    const result = await fetch(API)
    const data = await result.json()
    useData(data);
}

const useData = (data)=> {
  const person = data.postcode;
  const div = document.createElement("div");
  div.textContent = `${person}`;
  document.body.appendChild(div);
}

/* Add an event listener for the button */
document.addEventListener("DOMContentLoaded", () => {
  const directLink = document.getElementById("direct");
  directLink.addEventListener("click", getData);
});