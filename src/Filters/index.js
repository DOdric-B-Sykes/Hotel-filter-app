import React from "react";
import Filter from "./Filter.js";
import { filterOptions } from "../data.js";

const FiltersList = (props) => {
  /* notice how we've moved our callback function 
  inside of the FiltersList function so that we can access props
  in our definition of the renderFilter callback function */
  const renderFilter = (filter) => {
    // Allows the renderFilter callback function to access the props data of the FiltersList function
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes to see how the .includes array method works
    const isChecked = props.selectedFilters.includes(filter.key); // The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    return (
      <Filter
        key={filter.key}
        filter={filter}
        isChecked={isChecked}
        toggleFilter={props.toggleFilter}
        // When you pass down the `toggleFilter` function via props to the `FilterList` component and subsequently to the `renderFilter` callback function, you are no longer directly accessing it from within the same class as the `App` object. Instead, you are using the data passed through props, which is why you reference it as `props.toggleFilter`. This allows you to access and use the `toggleFilter` function in components that are not directly connected to the `App` class, enabling you to maintain the functionality across different parts of your application.
      />
    );
  };
  const filterListElements = filterOptions.map(renderFilter);
  return (
    <div className="filters">
      <h5 className="filters__header">Filter By:</h5>
      <hr />
      <ul className="filters-list">{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;
