import React, { useState } from 'react';

const MyComponent = () => {
  const list = [
    "Banana",
    "Bananaza",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  
  const [filteredResults, setFilteredResults] = useState(list);
console.log("filteredResults",filteredResults);
console.log("setfilter", setFilteredResults );
  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase(); // Get the lowercase value of the input
    const filtered = list.filter(item => item.toLowerCase().includes(inputValue)); // Filter items based on whether they include the input value
    setFilteredResults(filtered);
    console.log("filtered",filtered);
    console.log("inputValue",inputValue);
  };

  return (
    <div>
      Search: <input name="query" type="text"  onChange={handleInputChange} />
      <ul>
        {filteredResults.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
//1. list.filter():

// The filter() method is an array method in JavaScript that creates a new array with all elements that pass the test implemented by the provided function.
// In this case, list is an array containing the original list of items, and filter() is being called on this array.

//2. Arrow Function:

// item => item.toLowerCase().includes(inputValue) is an arrow function passed as an argument to filter().
// It's a concise way to define a function that takes one argument (item) and returns a boolean value indicating whether the item should be included in the filtered array.
// item.toLowerCase() converts the current item to lowercase. This ensures that the comparison between the item and the search input (inputValue) is case-insensitive.

//3. item.toLowerCase().includes(inputValue):

// item.toLowerCase() converts the current item to lowercase, making the comparison case-insensitive.
// includes(inputValue) checks if the lowercase version of the item includes the lowercase version of the inputValue.
// If the item contains the inputValue, includes() returns true, and the item is included in the filtered array; otherwise, it returns false, and the item is excluded.

//4. setFilteredResults(filtered):

// Once the filtering is done, the resulting array (filtered) is stored in the filteredResults state using the setFilteredResults function.
// This updates the component's state with the filtered list of items, causing a re-render of the component with the updated data.
