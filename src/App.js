import React, { Component } from "react";
import Hotels from "./Hotels";
import Filters from "./Filters";

class App extends Component {
  state = { selectedFilters: [] };
  toggleFilter = (clickedFilterKey) => {
    let newFilters;
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes to see how the .includes array method works
    const alreadySelected =
      this.state.selectedFilters.includes(clickedFilterKey); // The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    if (alreadySelected) {
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter to see how the .filter array method works
      newFilters = this.state.selectedFilters.filter(
        // The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
        (selectedFilter) => selectedFilter !== clickedFilterKey
      );
    } else {
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat to see how the .concat array method works
      newFilters = this.state.selectedFilters.concat(clickedFilterKey); // The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    }
    this.setState({ selectedFilters: newFilters });
  };
  render() {
    return (
      <div className="App">
        <Filters
          selectedFilters={this.state.selectedFilters}
          toggleFilter={this.toggleFilter}
        />
        <Hotels selectedFilters={this.state.selectedFilters} />
      </div>
    );
  }
}

export default App;
