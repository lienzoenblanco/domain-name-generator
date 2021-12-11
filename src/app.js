/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "his", "my"];
let adj = ["great", "big", "green", "awesome"];
let noun = ["jogger", "racoon", "cow", "duck"];
let exten = [".com", ".es", ".org", ".net"];

window.onload = function() {
  //write your code here
  //document.querySelector("#domain").innerHTML = generateDomain();
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < exten.length; l++) {
          document.querySelector("#domain").innerHTML =
            document.querySelector("#domain").innerHTML +
            pronoun[i].concat(adj[j], noun[k], exten[l], "</br>");
          //   document.write(
          //     pronoun[i].concat(adj[j], noun[k], exten[l]) + "</br>"
          //  );
        }
      }
    }
  }
};
