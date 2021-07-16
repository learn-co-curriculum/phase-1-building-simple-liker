// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('click', function(e){
  if(e.target.textContent === FULL_HEART){
    e.target.textContent = EMPTY_HEART;
    e.target.classList.remove('activated-heart');
  }
  else if(e.target.textContent === EMPTY_HEART){
    mimicServerCall()
    .then(function(ret){
      e.target.textContent = FULL_HEART;
      e.target.classList.add('activated-heart');
    })
    .catch(function(error){
      document.getElementById('modal').classList.remove('hidden');
      document.getElementById('modal-message').textContent = error;
      setTimeout(() => document.getElementById('modal').classList.add('hidden'), 3000);
    })
  }
})



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
