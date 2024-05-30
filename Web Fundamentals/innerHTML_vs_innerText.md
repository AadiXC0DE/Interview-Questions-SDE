### Difference between `innerText` and `innerHTML`

### Solution:

`innerText` and `innerHTML` are both properties in JavaScript used to manipulate and retrieve content from HTML elements. However, they handle text and HTML content differently.

```js
let x = document.getElementById('test');

x.innerText;

x.innerHTML;
```

- **`innerText`**:
  - Sets or returns the text content of the specified node and all its descendants.
  - Only retrieves or sets plain text.
  - Ignores HTML tags.
  - Updates dynamically with visible changes (e.g., CSS `display: none` elements are not included).

- **`innerHTML`**:
  - Sets or returns the HTML content of the specified node.
  - Can work with both plain text and HTML.
  - Inserts HTML elements and encodes special characters.
  - Allows the insertion of HTML tags.

### Example:

```html
<div id="test">
  <p>Hello <b>World</b>!</p>
</div>
<script>
  let x = document.getElementById('test');
  console.log(x.innerText);  // Output: Hello World!
  console.log(x.innerHTML);  // Output: <p>Hello <b>World</b>!</p>
</script>
```

## Extra Question: Difference between `textContent` and `innerHTML`

- **`textContent`**:
  - Sets or returns the text content of the specified node and all its descendants.
  - Does not parse HTML tags.
  - Efficient and fast for retrieving and setting plain text.
  - Includes all text, even if hidden by CSS.

### Example:

```html
<div id="test">
  <p>Hello <b>World</b>!</p>
</div>
<script>
  let x = document.getElementById('test');
  console.log(x.textContent);  // Output: Hello World!
  console.log(x.innerHTML);    // Output: <p>Hello <b>World</b>!</p>
</script>
```

## Difference between `innerHTML`, `innerText`, and `textContent`

- **`innerHTML`**:
  - Can set or get HTML and plain text.
  - Allows insertion of HTML elements and tags.
  - Useful for working with rich HTML content.
  - More complex and slower compared to `textContent`.

- **`innerText`**:
  - Sets or returns plain text.
  - Ignores HTML tags.
  - Updates dynamically with visible changes.
  - Slower than `textContent` due to layout reflows and rendering updates.

- **`textContent`**:
  - Sets or returns plain text.
  - Ignores HTML tags.
  - Includes hidden text.
  - Fast and efficient for plain text manipulation.

## When to Use Which

- **`innerHTML`**:
  - Use when you need to insert or retrieve HTML content.
  - Suitable for working with rich text and HTML elements.
  - Example: Adding new HTML elements or rendering HTML content from a server.

- **`innerText`**:
  - Use when you need plain text that reflects what's visually shown on the page.
  - Suitable for scenarios where text content is dynamically updated based on visibility.
  - Example: Displaying user-generated content where you want to ensure HTML tags are not included.

- **`textContent`**:
  - Use when you need plain text regardless of visibility or HTML tags.
  - Suitable for fast and efficient text content retrieval and manipulation.
  - Example: Getting or setting text content for processing or comparison without concern for HTML formatting.

