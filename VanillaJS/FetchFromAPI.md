### Question: Fetch data from an API in vanilla JavaScript.

## Solution:

### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch Data</title>
</head>
<body>
  <h1>Fetch Data from API</h1>
  <button id="fetch-button">Fetch Data</button>
  <div id="data-container"></div>
  <script src="index.js"></script>
</body>
</html>
```

### JavaScript (`index.js`):
```javascript
document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetch-button");
  const dataContainer = document.getElementById("data-container");

  function fetchData() {
    dataContainer.innerHTML = "Loading...";

    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        dataContainer.innerHTML = "";

        data.forEach((item) => {
          const div = document.createElement("div");
          div.className = "data-item";
          div.textContent = item.name; // Assuming each item has a 'name' property
          dataContainer.appendChild(div);
        });
      })
      .catch((error) => {
        dataContainer.innerHTML = "Failed to fetch data";
        console.error(error);
      });
  }

  fetchButton.addEventListener("click", fetchData);
});
```

### Explanation:

- **HTML**:
  - A simple structure with a button to trigger the data fetch and a container to display the fetched data.

- **JavaScript**:
  - **Event Listener**: Waits for the DOM to load before adding event listeners.
  - **fetchData Function**:
    - Sets the container to "Loading..." while fetching data.
    - Uses the `fetch` API to get data from a specified URL.
    - Converts the response to JSON.
    - Clears the loading message and appends each item to the container.
    - Handles errors by displaying an error message and logging the error.

