// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorMessage = document.querySelector("#modal");
errorMessage.classList.add("hidden")

const hearts = document.querySelectorAll(".like-glyph")

hearts.forEach(function(heart) {
  heart.addEventListener('click', function() {
    mimicServerCall()
    .then(() => {
      if(this.innerHTML === FULL_HEART) {
        this.innerHTML = EMPTY_HEART;
        this.classList.remove("activated-heart")
      } else {
        this.innerHTML = FULL_HEART
        this.classList.add("activated-heart")
      }
    })
    .catch(err => handleError(err))
  })
})


function handleError(err) {
  errorMessage.classList.remove("hidden")
  errorMessage.append(err)
  setTimeout(() => errorMessage.classList.add("hidden"), 3000)
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
