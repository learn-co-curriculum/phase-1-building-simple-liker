# Stitching Together the Three Pillars

## Learning Goals

- Identify the three essential pillars of front-end web programming
- Cause a change to given code so that DOM updating effect is seen
- Cause a change to given code so that server-side behavior is stubbed in
- Cause a change to given code so that event listening has an effect

## Introduction

Remember when we started this exploration of the "Simple Liker" application?
You might not have been sure that you would make it to this point, but you
have. Right now you should have the information needed to create a basic web
application!

Your goal is to implement "Simple Liker," from scratch. As a reminder, the final product
should look something like this:

![Screenshot Final](https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-build-the-example/finished_product_ss.png)

Keep in mind, the goal here is not to implement a "pixel-perfect" copy doing HTML and CSS. The
focus is the JavaScript code. Make sure you write good HTML and CSS, but manage your time to put
the focus on JavaScript.

You might be tempted to look back at previous code, but don't. Use your
knowledge and documentation from the internet (if needed), to build the
application.

Here's the specification:

* Add the `.hidden` class to the error modal in the HTML so it
  does not appear when the page first loads
* When a user clicks on an empty heart ("Recognizing events")
  * Invoke `mimicServerCall` to simulate making a server request
    * `mimicServerCall` randomly fails to simulate faulty network conditions
    * When the server returns a failure status
      * Respond to the error using a `.catch(() => {})` block after your
        `.then(() => {})` block.
      * Display the error modal by removing the `.hidden` class
      * Display the server error message in the modal
      * Use `setTimeout` to hide the modal after 5 seconds (add the `.hidden` class)
    * When the server returns a success status
      * Change the heart to a full heart
      * Add the `.activated-heart` class to make the heart appear red
* When a user clicks on a full heart
  * Change the heart back to an empty heart
  * Remove the `.activated-heart` class
* Keep all your styling rules entirely in `style.css`. Do not manipulate any `.style` properties.

Only manipulate the DOM once the server requests respond. Do not make the
heart full until you're inside a successful `.then` block.

> Note: The tests will only check for the first part of the specification (adding the `hidden` class). You should verify the rest of the behavior yourself, by checking the page in the browser.

## Conclusion

That's it! Congratulations. You're now a real-deal front-end developer! You can use
HTML, CSS, and JavaScript to create living, breathing applications. Every web application 
front-end you see or have seen is built using these three pillars, which you're
now skilled with! Give yourself a well-deserved pat on the back!

[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
