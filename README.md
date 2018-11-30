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

Your goal is to implement "Simple Liker," from scratch.

You might be tempted to look back at previous code, but don't. Use your
knowledge and documentation from the internet (if needed), to build the
application.

Here's the specification:

* When a user clicks on an empty heart ("Recognizing events")
  * It invokes `mimicServerCall`, which works just like [`fetch()`][fetch].
    Pass it a `url` (`http://example.com`) and a `configurationObject` and set
    the `method` to be `POST`, just as you would with [`fetch()`][fetch].
    * When the server returns a success status
      * The heart changes to a full-heart icon (DOM Manipulating)
      * The heart changes its color to red (DOM Manipulating)
    * When the server returns a failure status
      * Use `document.write` to write `sadness` to the screen (DOM
        Manipulating)

To force `mimicServerCall` to fail, set `forceFail` in the
`configurationObject` to be `true`.

## Conclusion

That's it! Congratulations. You're now a real-deal web programmer. You can use
HTML, CSS, and JavaScript to create living, breathing applications. Every web
application you see or have seen is built on these three pillars, which you're
now skilled with! Give yourself a well-deserved pat on the back!

[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
