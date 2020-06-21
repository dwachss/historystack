# historystack
Implement the javascript History interface for things other than browser history

For a command line interface (with up and down arrows for repeating commands) or an undo list, I want something that generalizes a stack, that works just like the javascript [History](https://developer.mozilla.org/en-US/docs/Web/API/History). Unfortunately, `let h = new History()` is illegal. So I made my own. Same interface; push and restore anything that represents your state. The `scrollRestoration` property is undefined, since that's only relevant for browser history.

## Files
[historystack.js](https://github.com/dwachss/historystack/blob/master/historystack.js): the code.
[historystack.test.hmtl](http://github.bililite.com/historystack/historystack.test.html): simple test suite.

## Usage
See the actual [History](https://developer.mozilla.org/en-US/docs/Web/API/History) documentation for the methods and properties.

``` Javascript
let h = new History (initialState);
h.pushState(newState);
let s = h.state; // the current state
s = h.back(); // the previous state
s = h.forward(); // return to the state of 2 lines ago.
```

The only difference is that the `back`, `forward`, `pushState` and `restoreState` return the current state.

There are two read-only Boolean properties that are useful and I don't know why they aren't included:
``` Javascript
h.atStart === true // when at the beginning of the history list, when h.back() leaves the state unchanged
h.atEnd === true // when at the end of the history list, when h.forward() leaves the state unchanged
```
