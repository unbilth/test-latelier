"use strict";
/**
 * Get player's data from a json file (fake db)
 * @param {Array} arr - An array containing the 
 * size of the players.
 */
const median = arr => {
  if(!Array.isArray(arr)){
    throw 'arr is not an array!'
  }

  const mid = Math.floor(arr.length / 2),
  nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

module.exports = {
  median
};