### Question: Given a JSON file, create a proper table in React with a search bar and two filter options: filter by age and filter by city. If the city is the same, then filtering by age should be present.

## Approach to Solve:

1. **Create Buttons and Input**:
    - Create two buttons to sort data by age and city.
    - Create an input field to search/filter data by city.

2. **Create State Variables**:
    - Use `useState` to manage search input and sorted data.

3. **Implement Search Functionality**:
    - Filter data based on city using the search input.

4. **Implement Sorting Functionality**:
    - Sort data by age in descending order.
    - Sort data by city in ascending order, and by age if the city is the same.

## Code Implementation:

```jsx
import React, { useState } from 'react';

// Sample data
const data = [
  { id: 1, name: 'John Doe', age: 25, city: 'New York', job_title: 'Engineer' },
  { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco', job_title: 'Designer' },
];

const App = () => {
  const [searchData, setSearchData] = useState("");
  const [sortedData, setSortedData] = useState(data);

  const search = (e) => {
    setSearchData(e.target.value);
  };

  const filterData = sortedData.filter((item) => {
    return item.city.toLowerCase().includes(searchData.toLowerCase());
  });

  // Sort data based on age in descending order
  const handleAgeSort = () => {
    const sorted = [...sortedData].sort((a, b) => b.age - a.age);
    setSortedData(sorted);
  };

  // Sort data based on city name in ascending order and by age if city is the same
  const handleCitySort = () => {
    const sorted = [...sortedData].sort((a, b) => {
      if (a.city === b.city) {
        return a.age - b.age;
      }
      return a.city.localeCompare(b.city);
    });
    setSortedData(sorted);
  };

  return (
    <div>
      <h1>Table</h1>
      <button onClick={handleCitySort}>SORT City</button>
      <button onClick={handleAgeSort}>SORT Age</button>
      <input type='text' onChange={search} placeholder="Search by city" />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.job_title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
```

