### Question: What are closures in JavaScript? Give an example.

## Solution:
A closure is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

In JavaScript, closures are created every time a function is created, allowing the function to access its outer scope.

- A closure gives you access to an outer function's scope from an inner function.


### Example 1:
```js
function school() {
    var name = "aadi"; // we can also use let or const
    function displayName() {
        console.log(name);
    }
    displayName();
}
school();  // Output: aadi
```

### Example 2:
```js
function foo(outer) {
    function inner(inner) {
        return outer + inner;
    }
    return inner;
}
let get_val = foo(5);
console.log(get_val(5)); // Output: 10
```

- The closure allows `inner` to access `outer` even after `foo` has finished executing.

### Use Cases:
1. **Maintaining State**:
   ```js
   function counter() {
       let count = 0;
       return function() {
           count++;
           return count;
       };
   }
   let increment = counter();
   console.log(increment()); // Output: 1
   console.log(increment()); // Output: 2
   ```

2. **Creating Private Variables**:
   ```js
   function secret() {
       let privateData = "secret";
       return function() {
           return privateData;
       };
   }
   let getSecret = secret();
   console.log(getSecret()); // Output: secret
   ```

3. **Callbacks and Asynchronous Code**:
   - Closures are often used in callbacks and asynchronous code to retain access to the outer function's scope.
   ```js
   function fetchData(url) {
       let cache = {};
       return function() {
           if (cache[url]) {
               console.log("Returning cached data");
               return cache[url];
           } else {
               // Simulating an API call
               setTimeout(() => {
                   cache[url] = "Fetched data";
                   console.log(cache[url]);
               }, 1000);
           }
       };
   }
   let getData = fetchData("http://example.com");
   getData(); // Output: Fetched data (after 1 second)
   ```

### More Examples:
more examples at [GeeksforGeeks](https://www.geeksforgeeks.org/closure-in-javascript/).

