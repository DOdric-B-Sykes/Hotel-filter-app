import React from "react";
import Hotel from "./Hotel.js";
import { hotels } from "../data.js";

const HotelsList = (props) => {
  const renderHotel = (hotel) => <Hotel key={hotel.id} hotel={hotel} />; // Moving the "renderHotel" callback function into the "HotelsList" function allows the renderHotel callback function to access the props data from the "HotelsList" function

  /* see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter to learn how the .filter array method works

  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every to learn how the .every array method works
  */
  const filterCallback = (hotel) => {
    const everyCallback = (filter) => hotel[filter];
    return props.selectedFilters.every(everyCallback); // The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
  };
  const filteredHotels = hotels.filter(filterCallback); // The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

  const hotelListElements = filteredHotels.map(renderHotel);
  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;
