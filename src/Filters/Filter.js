import React from "react";
import { hotels } from "../data.js";

const getMatchCount = (filterKey) =>
  hotels.filter((hotel) => hotel[filterKey]).length;

const Filter = (props) => {
  /* it is not enough to just call props.toggleFilter when the input 
  is clicked, we need to call props.toggleFilter with an argument 
  that indicates WHICH input has been clicked, so we create this
  onChange function here for each Filter component that is rendered */
  const onChange = () => props.toggleFilter(props.filter.key);
  // When you use `props.filter.key`, you are instructing the component to access the `filter` property from the props object passed to the component, and then access the `key` property within the `filter` object. This allows you to retrieve the value stored in the `key` property of the `filter` object that is passed as a prop to the component.
  // When you see `props.toggleFilter`, it means you are accessing the `toggleFilter` function that has been passed down to the component as a prop. This allows you to use that function to control the behavior of the component based on the data passed in through props.
  // Typically, the `onChange` function handles the event triggered when the user modifies/changes the input, and it allows you to update the state or perform certain actions based on the user's input in real-time.
  const matchCount = getMatchCount(props.filter.key);
  return (
    <li className="filter">
      <span>
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={onChange}
          className="filter__checkbox"
        />
        {props.filter.display}
      </span>
      <span className="filter__match-count">{matchCount}</span>
    </li>
  );
};

export default Filter;
