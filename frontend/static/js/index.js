
window.addEventListener("DOMContentLoaded", setEvents);

function setEvents() {
  let targetButton = document.querySelector("#test");
  targetButton.addEventListener("click", buttonTapped );

  // attach event functions to elements

}

function buttonTapped(){
  console.log("button tapped")
}