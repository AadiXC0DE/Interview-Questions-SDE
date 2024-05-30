### Question: Explain Event Loop, Call Stack, and Microtask Queue in JavaScript

## Solution:

### Event Loop
The event loop is a mechanism in JavaScript that handles asynchronous operations. It allows JavaScript to perform non-blocking operations by offloading tasks to the browser or Node.js, and then calling a callback when the operation is complete.

### Call Stack
The call stack is a data structure that keeps track of function calls. When a function is called, it's added to the stack. When the function returns, it's removed from the stack.

### Microtask Queue
The microtask queue is a queue that holds tasks that are to be executed immediately after the currently executing script and before any task in the macrotask queue (event loop).

### How They Work Together

1. **Call Stack**: Handles the execution of functions.
2. **Microtask Queue**: Executes promises and mutation observer callbacks.
3. **Event Loop**: Continuously checks the call stack and the microtask queue to determine what code to execute next.

### Example

```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise callback');
  });

console.log('End');
```

### Explanation

1. **Start**: `console.log('Start')` is added to the call stack and executed immediately.
2. **setTimeout**: The callback is registered to execute after 0 milliseconds and placed in the macrotask queue.
3. **Promise**: The `.then` callback is placed in the microtask queue.
4. **End**: `console.log('End')` is added to the call stack and executed immediately.

The event loop now takes over:

- **Call Stack**: Empty after executing `console.log('End')`.
- **Microtask Queue**: Executes the promise callback (`console.log('Promise callback')`).
- **Macrotask Queue**: Executes the `setTimeout` callback (`console.log('Timeout callback')`).

### Expected Output

```
Start
End
Promise callback
Timeout callback
```

### Key Points for Interview

1. **Event Loop**:
   - Handles asynchronous operations.
   - Continuously checks the call stack and microtask queue.
   - Ensures non-blocking behavior.

2. **Call Stack**:
   - Manages function execution.
   - Follows Last In, First Out (LIFO) principle.

3. **Microtask Queue**:
   - Executes after the current script and before the event loop.
   - Typically includes promises and mutation observer callbacks.

### Summary

- **Call Stack**: Executes functions in order.
- **Microtask Queue**: Handles promises and other microtasks.
- **Event Loop**: Coordinates execution between the call stack and the microtask queue.

