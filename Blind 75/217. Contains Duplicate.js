/* 
Given an integer array nums, 
return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109 
*/

//Solution: Time: O(n), Space: O(n)
// Restate: a function accepts unsorted integer array, return boolean value, true if it contains any duplicated elements, false if every value is unique

var containsDuplicate = function (nums) {
  // create an object
  // run through the nums array, store the element as the key, the frequency counts as the value in  the object
  // run through the object, return true if any property has value more than 2;

  const obj = {};

  nums.forEach((e) => {
    obj[e] = ++obj[e] || 1;
  });

  for (const key in obj) {
    if (obj[key] >= 2) return true;
  }

  return false;
};

// Other solution: hashset, sort and compare
