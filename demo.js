// JavaScript code goes here!



// Your code goes above this line!

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    console.log("The fake server at mimicServer called saw a request!");
    setTimeout(function() {
      if (config.forceFailure) reject("Failure was forced");
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
