/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arrLen = nums.length;
    let mass = [];
    for (let i=0; i <= arrLen; i++) {
      const number = nums[i];
      for (let q=0; q <= arrLen; q++) {
        const num = nums[q];
        if (i === q) continue;
        if ((number + num) === target && mass.length < 2) {
          mass.push(i);
          mass.push(q);
        }
      }
    }
    return  mass;
};


const numbers = [2,7,11,15];
const target = 9;
// const numbers = [3,3];
// const target = 6;
console.log(twoSum(numbers, target));
