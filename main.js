// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Select the error modal element (assumes it exists in your HTML)
  const modal = document.getElementById("modal");

  // Hide the modal initially
  modal.classList.add("hidden");

  // Select all heart elements (assuming they have the class "like-glyph")
  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // Toggle heart appearance on success
          if (heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            heart.innerText = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          // Display error modal on failure
          modal.innerText = error;
          modal.classList.remove("hidden");
          // Hide modal after 3 seconds
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
